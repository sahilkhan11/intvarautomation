const fs = require('fs');

async function testSubmit() {
  const problem = "Testing from script";
  const phoneNumber = "1234567890";
  
  try {
    const web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
      },
      body: JSON.stringify({
        access_key: "87c298fd-71c0-44df-a656-a8bee5ecfc91",
        subject: "New Automation Estimate Request",
        problem,
        phoneNumber
      })
    });
    
    const web3formsText = await web3formsRes.text();
    console.log("Web3Forms Raw Response:", web3formsText);
  } catch (err) {
    console.error("Error:", err);
  }
}

testSubmit();
