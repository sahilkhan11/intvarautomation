"use client";

import { useState, useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

type Lead = {
  id: string;
  businessName: string;
  phoneNumber: string;
  timestamp: string;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ businessName: "", phoneNumber: "" });
  
  const [isAdding, setIsAdding] = useState(false);
  const [addForm, setAddForm] = useState({ businessName: "", phoneNumber: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = sessionStorage.getItem("adminAuth");
      if (auth === "true") {
        setIsAuthenticated(true);
      }
      setAuthChecking(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "intvar123") {
      sessionStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch (error) {
      console.error("Failed to fetch leads", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  // Edit Handlers
  const handleEditClick = (lead: Lead) => {
    setEditingId(lead.id);
    setEditForm({ businessName: lead.businessName, phoneNumber: lead.phoneNumber });
  };

  const handleSaveClick = async (id: string) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...editForm }),
      });
      if (res.ok) {
        setEditingId(null);
        fetchLeads(); // Refresh list
      }
    } catch (error) {
      console.error("Failed to save lead", error);
    }
  };

  // Delete Handler
  const handleDeleteClick = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`/api/leads?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchLeads(); // Refresh list
      }
    } catch (error) {
      console.error("Failed to delete lead", error);
    }
  };

  // Add Handler
  const handleSaveNewClick = async () => {
    if (!addForm.businessName || !addForm.phoneNumber) {
      alert("Please fill in both fields");
      return;
    }
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addForm),
      });
      if (res.ok) {
        setIsAdding(false);
        setAddForm({ businessName: "", phoneNumber: "" });
        fetchLeads();
      }
    } catch (error) {
      console.error("Failed to add lead", error);
    }
  };

  if (authChecking) return null;

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen flex-col bg-background items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl border border-foreground/10 bg-background/50 backdrop-blur-sm flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-heading font-bold uppercase tracking-tight">Admin Login</h1>
            <p className="text-sm opacity-60 uppercase tracking-widest font-medium">Enter credentials to continue</p>
          </div>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-60">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-foreground transition-colors font-medium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-60">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-foreground transition-colors font-medium"
              />
            </div>
            
            {loginError && <p className="text-red-500 text-sm font-medium">{loginError}</p>}
            
            <button type="submit" className="mt-4 rounded-full px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all">
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <PageHero 
        variant="dark"
        eyebrow="ADMIN PORTAL"
        title="Lead Management"
      />

      <Section variant="light" className="py-16 md:py-24 flex-1">
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-8">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold font-heading uppercase tracking-tight">Recent Leads</h2>
              <button onClick={handleLogout} className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 text-left">
                Logout
              </button>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsAdding(!isAdding)} 
                className="text-sm font-bold uppercase tracking-widest bg-black text-white px-4 py-2 rounded hover:opacity-80 transition-opacity"
              >
                {isAdding ? "Cancel" : "Add Lead"}
              </button>
              <button 
                onClick={fetchLeads} 
                className="text-sm font-bold uppercase tracking-widest border border-black/20 px-4 py-2 rounded hover:bg-black/5 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-foreground/10 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-foreground/10 bg-black/5">
                  <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Date</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Business Name</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Phone Number</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isAdding && (
                  <tr className="border-b border-foreground/10 bg-blue-50/50">
                    <td className="p-4 text-sm whitespace-nowrap opacity-70">
                      Now
                    </td>
                    <td className="p-4 text-sm font-medium">
                      <input 
                        className="border border-foreground/20 rounded px-2 py-1 w-full bg-white"
                        placeholder="Business Name"
                        value={addForm.businessName}
                        onChange={(e) => setAddForm({...addForm, businessName: e.target.value})}
                      />
                    </td>
                    <td className="p-4 text-sm">
                      <input 
                        className="border border-foreground/20 rounded px-2 py-1 w-full bg-white"
                        placeholder="Phone Number"
                        value={addForm.phoneNumber}
                        onChange={(e) => setAddForm({...addForm, phoneNumber: e.target.value})}
                      />
                    </td>
                    <td className="p-4 text-right flex justify-end gap-3">
                      <button onClick={() => setIsAdding(false)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                      <button onClick={handleSaveNewClick} className="text-xs uppercase tracking-widest font-bold text-blue-600 hover:text-blue-800">Save</button>
                    </td>
                  </tr>
                )}
                
                {loading && !isAdding && leads.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">
                      Loading leads...
                    </td>
                  </tr>
                ) : !loading && leads.length === 0 && !isAdding ? (
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-foreground/10 hover:bg-black/[0.02] transition-colors">
                      <td className="p-4 text-sm whitespace-nowrap opacity-70">
                        {new Date(lead.timestamp).toLocaleDateString()} {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      
                      <td className="p-4 text-sm font-medium">
                        {editingId === lead.id ? (
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white"
                            value={editForm.businessName}
                            onChange={(e) => setEditForm({...editForm, businessName: e.target.value})}
                          />
                        ) : (
                          lead.businessName
                        )}
                      </td>

                      <td className="p-4 text-sm">
                        {editingId === lead.id ? (
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white"
                            value={editForm.phoneNumber}
                            onChange={(e) => setEditForm({...editForm, phoneNumber: e.target.value})}
                          />
                        ) : (
                          lead.phoneNumber
                        )}
                      </td>

                      <td className="p-4 text-right flex justify-end gap-3">
                        {editingId === lead.id ? (
                          <>
                            <button onClick={() => setEditingId(null)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                            <button onClick={() => handleSaveClick(lead.id)} className="text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-800">Save</button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => handleEditClick(lead)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Edit</button>
                            <button onClick={() => handleDeleteClick(lead.id)} className="text-xs uppercase tracking-widest font-bold text-red-500 hover:text-red-700">Delete</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </main>
  );
}
