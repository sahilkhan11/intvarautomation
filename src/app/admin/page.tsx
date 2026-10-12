"use client";

import { useState, useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

type Lead = {
  id: string;
  form_type: string;
  businessName: string | null;
  phoneNumber: string | null;
  email: string | null;
  problemOrMessage: string | null;
  interestedSolution: string | null;
  timestamp: string;
};

type PortfolioProject = {
  id: number;
  project_id: string;
  name: string;
  description: string | null;
  image: string | null;
  categories: string[] | null;
  industry: string | null;
  link: string | null;
  is_superstar: boolean;
  created_at: string;
};

type NewsItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  published_at: string;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<"leads" | "portfolio" | "blog">("leads");

  // Leads State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(true);
  const [editingLeadId, setEditingLeadId] = useState<string | null>(null);
  const [editLeadForm, setEditLeadForm] = useState({ businessName: "", phoneNumber: "" });
  const [isAddingLead, setIsAddingLead] = useState(false);
  const [addLeadForm, setAddLeadForm] = useState({ businessName: "", phoneNumber: "" });

  // Portfolio State
  const [portfolio, setPortfolio] = useState<PortfolioProject[]>([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);
  const [editingPortfolioId, setEditingPortfolioId] = useState<number | null>(null);
  const [editPortfolioForm, setEditPortfolioForm] = useState<Partial<Omit<PortfolioProject, 'categories'>> & { categories?: string }>({});
  const [isAddingPortfolio, setIsAddingPortfolio] = useState(false);
  const [addPortfolioForm, setAddPortfolioForm] = useState({
    name: "",
    description: "",
    image: "",
    industry: "",
    link: "",
    categories: "", // comma separated string for input
  });

  // Blog State
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [editingNewsId, setEditingNewsId] = useState<number | null>(null);
  const [editNewsForm, setEditNewsForm] = useState<Partial<NewsItem>>({});
  const [isAddingNews, setIsAddingNews] = useState(false);
  const [addNewsForm, setAddNewsForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image_url: "",
    meta_title: "",
    meta_description: ""
  });

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
    setLoadingLeads(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/leads.php`);
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch (error) {
      console.error("Failed to fetch leads", error);
    }
    setLoadingLeads(false);
  };

  const fetchPortfolio = async () => {
    setLoadingPortfolio(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/portfolio.php`);
      if (res.ok) {
        const data = await res.json();
        setPortfolio(data.projects || []);
      }
    } catch (error) {
      console.error("Failed to fetch portfolio", error);
    }
    setLoadingPortfolio(false);
  };

  const fetchNews = async () => {
    setLoadingNews(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/blog.php`);
      if (res.ok) {
        const data = await res.json();
        setNews(data.news || []);
      }
    } catch (error) {
      console.error("Failed to fetch blog posts", error);
    }
    setLoadingNews(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === "leads") fetchLeads();
      if (activeTab === "portfolio") fetchPortfolio();
      if (activeTab === "blog") fetchNews();
    }
  }, [isAuthenticated, activeTab]);

  // --- LEADS HANDLERS ---
  const handleEditLeadClick = (lead: Lead) => {
    setEditingLeadId(lead.id);
    setEditLeadForm({ businessName: lead.businessName || "", phoneNumber: lead.phoneNumber || "" });
  };

  const handleSaveLeadClick = async (id: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/leads.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...editLeadForm }),
      });
      if (res.ok) {
        setEditingLeadId(null);
        fetchLeads();
      }
    } catch (error) {
      console.error("Failed to save lead", error);
    }
  };

  const handleDeleteLeadClick = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/leads.php?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchLeads();
      }
    } catch (error) {
      console.error("Failed to delete lead", error);
    }
  };

  const handleSaveNewLeadClick = async () => {
    if (!addLeadForm.businessName || !addLeadForm.phoneNumber) {
      alert("Please fill in both fields");
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/leads.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addLeadForm),
      });
      if (res.ok) {
        setIsAddingLead(false);
        setAddLeadForm({ businessName: "", phoneNumber: "" });
        fetchLeads();
      }
    } catch (error) {
      console.error("Failed to add lead", error);
    }
  };

  // --- PORTFOLIO HANDLERS ---
  const handleEditPortfolioClick = (project: PortfolioProject) => {
    setEditingPortfolioId(project.id);
    setEditPortfolioForm({ 
      name: project.name, 
      description: project.description || "",
      image: project.image || "",
      industry: project.industry || "",
      link: project.link || "",
      categories: project.categories ? project.categories.join(", ") : ""
    });
  };

  const handleSavePortfolioClick = async (id: number) => {
    try {
      const formattedData = {
        ...editPortfolioForm,
        categories: typeof editPortfolioForm.categories === 'string' 
          ? (editPortfolioForm.categories as string).split(',').map(c => c.trim()).filter(Boolean)
          : editPortfolioForm.categories
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/portfolio.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...formattedData }),
      });
      if (res.ok) {
        setEditingPortfolioId(null);
        fetchPortfolio();
      }
    } catch (error) {
      console.error("Failed to save project", error);
    }
  };

  const handleToggleSuperstar = async (project: PortfolioProject) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/portfolio.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: project.id, is_superstar: !project.is_superstar }),
      });
      if (res.ok) {
        fetchPortfolio();
      }
    } catch (error) {
      console.error("Failed to toggle superstar", error);
    }
  };

  const handleDeletePortfolioClick = async (id: number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/portfolio.php?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchPortfolio();
      }
    } catch (error) {
      console.error("Failed to delete project", error);
    }
  };

  const handleSaveNewPortfolioClick = async () => {
    if (!addPortfolioForm.name) {
      alert("Name is required");
      return;
    }
    try {
      const formattedData = {
        ...addPortfolioForm,
        categories: addPortfolioForm.categories.split(',').map(c => c.trim()).filter(Boolean)
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/portfolio.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });
      if (res.ok) {
        setIsAddingPortfolio(false);
        setAddPortfolioForm({ name: "", description: "", image: "", industry: "", link: "", categories: "" });
        fetchPortfolio();
      }
    } catch (error) {
      console.error("Failed to add project", error);
    }
  };

  // --- NEWS HANDLERS ---
  const handleEditNewsClick = (item: NewsItem) => {
    setEditingNewsId(item.id);
    setEditNewsForm({ 
      title: item.title, 
      slug: item.slug,
      excerpt: item.excerpt || "",
      content: item.content || "",
      image_url: item.image_url || "",
      meta_title: item.meta_title || "",
      meta_description: item.meta_description || ""
    });
  };

  const handleSaveNewsClick = async (id: number) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/blog.php?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editNewsForm),
      });
      if (res.ok) {
        setEditingNewsId(null);
        fetchNews();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to update news");
      }
    } catch (error) {
      console.error("Failed to save news", error);
    }
  };

  const handleDeleteNewsClick = async (id: number) => {
    if (!confirm("Are you sure you want to delete this news article?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/blog.php?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchNews();
      }
    } catch (error) {
      console.error("Failed to delete news", error);
    }
  };

  const handleSaveNewNewsClick = async () => {
    if (!addNewsForm.title || !addNewsForm.slug) {
      alert("Title and Slug are required");
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/blog.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addNewsForm),
      });
      if (res.ok) {
        setIsAddingNews(false);
        setAddNewsForm({ title: "", slug: "", excerpt: "", content: "", image_url: "", meta_title: "", meta_description: "" });
        fetchNews();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to create news");
      }
    } catch (error) {
      console.error("Failed to add news", error);
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
        title="Dashboard"
      />

      <Section variant="light" className="py-16 md:py-24 flex-1">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
          <div className="flex justify-between items-end border-b border-foreground/10 pb-4 overflow-x-auto">
            <div className="flex gap-8">
              <button 
                onClick={() => setActiveTab("leads")}
                className={`text-xl font-bold font-heading uppercase tracking-tight transition-opacity whitespace-nowrap ${activeTab === 'leads' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                Recent Leads
              </button>
              <button 
                onClick={() => setActiveTab("portfolio")}
                className={`text-xl font-bold font-heading uppercase tracking-tight transition-opacity whitespace-nowrap ${activeTab === 'portfolio' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                Portfolio Projects
              </button>
              <button 
                onClick={() => setActiveTab("blog")}
                className={`text-xl font-bold font-heading uppercase tracking-tight transition-opacity whitespace-nowrap ${activeTab === 'blog' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                Blog Posts
              </button>
            </div>
            <button onClick={handleLogout} className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 pl-8">
              Logout
            </button>
          </div>

          {activeTab === "leads" && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-end gap-4">
                <button 
                  onClick={() => setIsAddingLead(!isAddingLead)} 
                  className="text-sm font-bold uppercase tracking-widest bg-black text-white px-4 py-2 rounded hover:opacity-80 transition-opacity"
                >
                  {isAddingLead ? "Cancel" : "Add Lead"}
                </button>
                <button 
                  onClick={fetchLeads} 
                  className="text-sm font-bold uppercase tracking-widest border border-black/20 px-4 py-2 rounded hover:bg-black/5 transition-colors"
                >
                  Refresh
                </button>
              </div>

              <div className="w-full overflow-x-auto rounded-2xl border border-foreground/10 bg-white shadow-sm">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-foreground/10 bg-black/5">
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Date</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Type</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Business / Name</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Contact</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Message / Problem</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add Lead Row */}
                    {isAddingLead && (
                      <tr className="border-b border-foreground/10 bg-blue-50/50">
                        <td className="p-4 text-sm whitespace-nowrap opacity-70">Now</td>
                        <td className="p-4 text-sm font-medium">Admin Added</td>
                        <td className="p-4 text-sm font-medium">
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white"
                            placeholder="Business Name"
                            value={addLeadForm.businessName}
                            onChange={(e) => setAddLeadForm({...addLeadForm, businessName: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-sm">
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white"
                            placeholder="Phone Number"
                            value={addLeadForm.phoneNumber}
                            onChange={(e) => setAddLeadForm({...addLeadForm, phoneNumber: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-sm">-</td>
                        <td className="p-4 text-right flex justify-end gap-3">
                          <button onClick={() => setIsAddingLead(false)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                          <button onClick={handleSaveNewLeadClick} className="text-xs uppercase tracking-widest font-bold text-blue-600 hover:text-blue-800">Save</button>
                        </td>
                      </tr>
                    )}
                    
                    {loadingLeads && !isAddingLead && leads.length === 0 ? (
                      <tr><td colSpan={6} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">Loading leads...</td></tr>
                    ) : !loadingLeads && leads.length === 0 && !isAddingLead ? (
                      <tr><td colSpan={6} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">No leads found.</td></tr>
                    ) : (
                      leads.map((lead) => (
                        <tr key={lead.id} className="border-b border-foreground/10 hover:bg-black/[0.02] transition-colors">
                          <td className="p-4 text-sm whitespace-nowrap opacity-70">
                            {new Date(lead.timestamp).toLocaleDateString()} {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </td>
                          <td className="p-4 text-sm font-medium capitalize opacity-80">{lead.form_type}</td>
                          <td className="p-4 text-sm font-medium">
                            {editingLeadId === lead.id ? (
                              <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white" value={editLeadForm.businessName || ''} onChange={(e) => setEditLeadForm({...editLeadForm, businessName: e.target.value})} />
                            ) : lead.businessName || "-"}
                          </td>
                          <td className="p-4 text-sm">
                            {editingLeadId === lead.id ? (
                              <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white" value={editLeadForm.phoneNumber || ''} onChange={(e) => setEditLeadForm({...editLeadForm, phoneNumber: e.target.value})} />
                            ) : (
                              <div className="flex flex-col gap-1">
                                {lead.phoneNumber && <span>{lead.phoneNumber}</span>}
                                {lead.email && <span className="opacity-70 text-xs">{lead.email}</span>}
                                {!lead.phoneNumber && !lead.email && "-"}
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-sm max-w-xs truncate" title={lead.problemOrMessage || ''}>
                            {lead.problemOrMessage ? <span className="line-clamp-2">{lead.problemOrMessage}</span> : "-"}
                          </td>
                          <td className="p-4 text-right flex justify-end gap-3">
                            {editingLeadId === lead.id ? (
                              <>
                                <button onClick={() => setEditingLeadId(null)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                                <button onClick={() => handleSaveLeadClick(lead.id)} className="text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-800">Save</button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => handleEditLeadClick(lead)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Edit</button>
                                <button onClick={() => handleDeleteLeadClick(lead.id)} className="text-xs uppercase tracking-widest font-bold text-red-500 hover:text-red-700">Delete</button>
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
          )}

          {activeTab === "portfolio" && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-end gap-4">
                <button 
                  onClick={() => setIsAddingPortfolio(!isAddingPortfolio)} 
                  className="text-sm font-bold uppercase tracking-widest bg-black text-white px-4 py-2 rounded hover:opacity-80 transition-opacity"
                >
                  {isAddingPortfolio ? "Cancel" : "Add Project"}
                </button>
                <button 
                  onClick={fetchPortfolio} 
                  className="text-sm font-bold uppercase tracking-widest border border-black/20 px-4 py-2 rounded hover:bg-black/5 transition-colors"
                >
                  Refresh
                </button>
              </div>

              <div className="w-full overflow-x-auto rounded-2xl border border-foreground/10 bg-white shadow-sm">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="border-b border-foreground/10 bg-black/5">
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">★</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Name</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Description</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Details</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add Portfolio Row */}
                    {isAddingPortfolio && (
                      <tr className="border-b border-foreground/10 bg-blue-50/50 items-start">
                        <td className="p-4">-</td>
                        <td className="p-4 text-sm font-medium">
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white mb-2"
                            placeholder="Project Name"
                            value={addPortfolioForm.name}
                            onChange={(e) => setAddPortfolioForm({...addPortfolioForm, name: e.target.value})}
                          />
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs"
                            placeholder="Link (https://...)"
                            value={addPortfolioForm.link}
                            onChange={(e) => setAddPortfolioForm({...addPortfolioForm, link: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-sm">
                          <textarea 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white h-16 resize-none"
                            placeholder="Description"
                            value={addPortfolioForm.description}
                            onChange={(e) => setAddPortfolioForm({...addPortfolioForm, description: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-sm flex flex-col gap-2">
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs"
                            placeholder="Industry"
                            value={addPortfolioForm.industry}
                            onChange={(e) => setAddPortfolioForm({...addPortfolioForm, industry: e.target.value})}
                          />
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs"
                            placeholder="Categories (comma separated)"
                            value={addPortfolioForm.categories}
                            onChange={(e) => setAddPortfolioForm({...addPortfolioForm, categories: e.target.value})}
                          />
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs"
                            placeholder="Image URL (/portfolio/...)"
                            value={addPortfolioForm.image}
                            onChange={(e) => setAddPortfolioForm({...addPortfolioForm, image: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-3 h-full items-center">
                            <button onClick={() => setIsAddingPortfolio(false)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                            <button onClick={handleSaveNewPortfolioClick} className="text-xs uppercase tracking-widest font-bold text-blue-600 hover:text-blue-800">Save</button>
                          </div>
                        </td>
                      </tr>
                    )}
                    
                    {loadingPortfolio && !isAddingPortfolio && portfolio.length === 0 ? (
                      <tr><td colSpan={5} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">Loading portfolio...</td></tr>
                    ) : !loadingPortfolio && portfolio.length === 0 && !isAddingPortfolio ? (
                      <tr><td colSpan={5} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">No projects found.</td></tr>
                    ) : (
                      portfolio.map((project) => (
                        <tr key={project.id} className="border-b border-foreground/10 hover:bg-black/[0.02] transition-colors">
                          <td className="p-4 text-xl">
                            <button 
                              onClick={() => handleToggleSuperstar(project)}
                              className={`transition-colors ${project.is_superstar ? 'text-yellow-500 hover:text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}`}
                              title={project.is_superstar ? "Remove from superstar" : "Mark as superstar"}
                            >
                              ★
                            </button>
                          </td>
                          <td className="p-4 text-sm font-medium">
                            {editingPortfolioId === project.id ? (
                              <div className="flex flex-col gap-2">
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white" placeholder="Name" value={editPortfolioForm.name || ''} onChange={(e) => setEditPortfolioForm({...editPortfolioForm, name: e.target.value})} />
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="Link" value={editPortfolioForm.link || ''} onChange={(e) => setEditPortfolioForm({...editPortfolioForm, link: e.target.value})} />
                              </div>
                            ) : (
                              <div className="flex flex-col">
                                <span>{project.name}</span>
                                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline">{project.link}</a>}
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-sm">
                            {editingPortfolioId === project.id ? (
                              <textarea className="border border-foreground/20 rounded px-2 py-1 w-full bg-white h-16 resize-none" placeholder="Description" value={editPortfolioForm.description || ''} onChange={(e) => setEditPortfolioForm({...editPortfolioForm, description: e.target.value})} />
                            ) : (
                              <p className="line-clamp-2 max-w-sm">{project.description}</p>
                            )}
                          </td>
                          <td className="p-4 text-sm">
                            {editingPortfolioId === project.id ? (
                              <div className="flex flex-col gap-1">
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="Industry" value={editPortfolioForm.industry || ''} onChange={(e) => setEditPortfolioForm({...editPortfolioForm, industry: e.target.value})} />
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="Categories (comma separated)" value={editPortfolioForm.categories || ''} onChange={(e) => setEditPortfolioForm({...editPortfolioForm, categories: e.target.value})} />
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="Image URL" value={editPortfolioForm.image || ''} onChange={(e) => setEditPortfolioForm({...editPortfolioForm, image: e.target.value})} />
                              </div>
                            ) : (
                              <div className="flex flex-col gap-1">
                                <div className="flex flex-wrap gap-1">
                                  <span className="bg-black/5 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">{project.industry}</span>
                                  {project.categories?.map((cat, i) => (
                                    <span key={i} className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">{cat}</span>
                                  ))}
                                </div>
                                <span className="text-xs opacity-50 truncate max-w-[200px]">{project.image}</span>
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end gap-3">
                              {editingPortfolioId === project.id ? (
                                <>
                                  <button onClick={() => setEditingPortfolioId(null)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                                  <button onClick={() => handleSavePortfolioClick(project.id)} className="text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-800">Save</button>
                                </>
                              ) : (
                                <>
                                  <button onClick={() => handleEditPortfolioClick(project)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Edit</button>
                                  <button onClick={() => handleDeletePortfolioClick(project.id)} className="text-xs uppercase tracking-widest font-bold text-red-500 hover:text-red-700">Delete</button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "blog" && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-end gap-4">
                <button 
                  onClick={() => setIsAddingNews(!isAddingNews)} 
                  className="text-sm font-bold uppercase tracking-widest bg-black text-white px-4 py-2 rounded hover:opacity-80 transition-opacity"
                >
                  {isAddingNews ? "Cancel" : "Add News"}
                </button>
                <button 
                  onClick={fetchNews} 
                  className="text-sm font-bold uppercase tracking-widest border border-black/20 px-4 py-2 rounded hover:bg-black/5 transition-colors"
                >
                  Refresh
                </button>
              </div>

              <div className="w-full overflow-x-auto rounded-2xl border border-foreground/10 bg-white shadow-sm">
                <table className="w-full text-left border-collapse min-w-[1200px]">
                  <thead>
                    <tr className="border-b border-foreground/10 bg-black/5">
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Date</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Title / Slug</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Content</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">SEO & Image</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add News Row */}
                    {isAddingNews && (
                      <tr className="border-b border-foreground/10 bg-blue-50/50 items-start">
                        <td className="p-4">-</td>
                        <td className="p-4 text-sm font-medium">
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white mb-2"
                            placeholder="News Title"
                            value={addNewsForm.title}
                            onChange={(e) => setAddNewsForm({...addNewsForm, title: e.target.value})}
                          />
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs"
                            placeholder="URL Slug (e.g. daily-update-1)"
                            value={addNewsForm.slug}
                            onChange={(e) => setAddNewsForm({...addNewsForm, slug: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-sm flex flex-col gap-2">
                          <textarea 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white h-16 resize-none text-xs"
                            placeholder="Short Excerpt"
                            value={addNewsForm.excerpt}
                            onChange={(e) => setAddNewsForm({...addNewsForm, excerpt: e.target.value})}
                          />
                          <textarea 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white h-32 resize-none text-xs"
                            placeholder="Full Content (Supports HTML/Plain Text)"
                            value={addNewsForm.content}
                            onChange={(e) => setAddNewsForm({...addNewsForm, content: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-sm">
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs mb-2"
                            placeholder="Image URL"
                            value={addNewsForm.image_url}
                            onChange={(e) => setAddNewsForm({...addNewsForm, image_url: e.target.value})}
                          />
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs mb-2"
                            placeholder="SEO Meta Title"
                            value={addNewsForm.meta_title}
                            onChange={(e) => setAddNewsForm({...addNewsForm, meta_title: e.target.value})}
                          />
                          <input 
                            className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs"
                            placeholder="SEO Meta Description"
                            value={addNewsForm.meta_description}
                            onChange={(e) => setAddNewsForm({...addNewsForm, meta_description: e.target.value})}
                          />
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-3 h-full items-center">
                            <button onClick={() => setIsAddingNews(false)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                            <button onClick={handleSaveNewNewsClick} className="text-xs uppercase tracking-widest font-bold text-blue-600 hover:text-blue-800">Save</button>
                          </div>
                        </td>
                      </tr>
                    )}
                    
                    {loadingNews && !isAddingNews && news.length === 0 ? (
                      <tr><td colSpan={5} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">Loading news...</td></tr>
                    ) : !loadingNews && news.length === 0 && !isAddingNews ? (
                      <tr><td colSpan={5} className="p-12 text-center text-sm font-medium uppercase tracking-widest opacity-50">No news articles found.</td></tr>
                    ) : (
                      news.map((item) => (
                        <tr key={item.id} className="border-b border-foreground/10 hover:bg-black/[0.02] transition-colors">
                          <td className="p-4 text-sm whitespace-nowrap opacity-70">
                            {new Date(item.published_at).toLocaleDateString()}
                          </td>
                          <td className="p-4 text-sm font-medium">
                            {editingNewsId === item.id ? (
                              <div className="flex flex-col gap-2">
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white" placeholder="Title" value={editNewsForm.title || ''} onChange={(e) => setEditNewsForm({...editNewsForm, title: e.target.value})} />
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="Slug" value={editNewsForm.slug || ''} onChange={(e) => setEditNewsForm({...editNewsForm, slug: e.target.value})} />
                              </div>
                            ) : (
                              <div className="flex flex-col">
                                <span>{item.title}</span>
                                <span className="text-xs opacity-50">/{item.slug}</span>
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-sm">
                            {editingNewsId === item.id ? (
                              <div className="flex flex-col gap-2">
                                <textarea className="border border-foreground/20 rounded px-2 py-1 w-full bg-white h-16 resize-none text-xs" placeholder="Excerpt" value={editNewsForm.excerpt || ''} onChange={(e) => setEditNewsForm({...editNewsForm, excerpt: e.target.value})} />
                                <textarea className="border border-foreground/20 rounded px-2 py-1 w-full bg-white h-32 resize-none text-xs" placeholder="Content" value={editNewsForm.content || ''} onChange={(e) => setEditNewsForm({...editNewsForm, content: e.target.value})} />
                              </div>
                            ) : (
                              <div className="flex flex-col">
                                <p className="line-clamp-2 max-w-sm mb-1">{item.excerpt}</p>
                                <p className="text-xs opacity-50 line-clamp-1 max-w-sm">{item.content}</p>
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-sm">
                            {editingNewsId === item.id ? (
                              <div className="flex flex-col gap-1">
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="Image URL" value={editNewsForm.image_url || ''} onChange={(e) => setEditNewsForm({...editNewsForm, image_url: e.target.value})} />
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="SEO Meta Title" value={editNewsForm.meta_title || ''} onChange={(e) => setEditNewsForm({...editNewsForm, meta_title: e.target.value})} />
                                <input className="border border-foreground/20 rounded px-2 py-1 w-full bg-white text-xs" placeholder="SEO Meta Description" value={editNewsForm.meta_description || ''} onChange={(e) => setEditNewsForm({...editNewsForm, meta_description: e.target.value})} />
                              </div>
                            ) : (
                              <div className="flex flex-col gap-1">
                                {item.image_url && <span className="text-xs opacity-70 truncate max-w-[200px]">Img: {item.image_url}</span>}
                                {item.meta_title && <span className="text-[10px] bg-gray-100 px-1 rounded truncate max-w-[200px]">SEO: {item.meta_title}</span>}
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end gap-3">
                              {editingNewsId === item.id ? (
                                <>
                                  <button onClick={() => setEditingNewsId(null)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Cancel</button>
                                  <button onClick={() => handleSaveNewsClick(item.id)} className="text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-800">Save</button>
                                </>
                              ) : (
                                <>
                                  <button onClick={() => handleEditNewsClick(item)} className="text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100">Edit</button>
                                  <button onClick={() => handleDeleteNewsClick(item.id)} className="text-xs uppercase tracking-widest font-bold text-red-500 hover:text-red-700">Delete</button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </Section>
    </main>
  );
}
