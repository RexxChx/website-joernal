const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/info", (req, res) => {
  try {
    const cpus = os.cpus();
    const systemInfo = {
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
      arch: os.arch(),
      uptime: os.uptime(),
      cpu: cpus?.[0]?.model || "Unknown",
      cores: cpus ? cpus.length : 0,
      memory: {
        total: os.totalmem(),
        free: os.freemem(),
      },
      loadavg: os.loadavg(),
      network: os.networkInterfaces(),
    };

    res.json(systemInfo);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil informasi sistem" });
  }
});
app.use((req, res) => {
  const notFoundPage = path.join(__dirname, "public", "404.html");

  if (fs.existsSync(notFoundPage)) {
    res.status(404).sendFile(notFoundPage);
  } else {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
  }
});
app.listen(PORT, () => {
  console.log(`🚀 Joernal server running at http://localhost:${PORT} sir nova haidar ramadhan!!`);
});
