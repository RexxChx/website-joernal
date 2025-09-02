/**
function getCurrentDayWIB() {
  const now = new Date();
  const wibTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[wibTime.getDay()];
}

async function loadSchedule() {
  const day = getCurrentDayWIB();
  document.getElementById("DaySchedule").textContent = `Jadwal Hari ${day}`;

  try {
    const [mapelRes, piketRes] = await Promise.all([
      fetch("mapel.json"),
      fetch("piket.json")
    ]);
    const mapelData = await mapelRes.json();
    const piketData = await piketRes.json();

    const mapelToday = mapelData[day] || {};
    let mapelHTML = "";
    for (const [mapel, waktu] of Object.entries(mapelToday)) {
      mapelHTML += `<p>${mapel} <span>${waktu}</span></p>`;
    }
    document.getElementById("mapel").innerHTML = mapelHTML || "<p>Tidak ada mapel</p>";

    const piketToday = piketData[day] || [];
    let piketHTML = "";
    piketToday.forEach(nama => {
      if (nama) piketHTML += `<p>${nama}</p>`;
    });
    document.getElementById("piketSchedule").innerHTML = piketHTML || "<p>Tidak ada piket</p>";

  } catch (err) {
    console.error("Gagal memuat jadwal:", err);
    document.getElementById("mapel").innerHTML = "<p>Gagal memuat mapel</p>";
    document.getElementById("piketSchedule").innerHTML = "<p>Gagal memuat piket</p>";
  }
}

loadSchedule();
*/

document.addEventListener('DOMContentLoaded', function() {
            const structureBtn = document.getElementById('StructureBtn');
            const scheduleBtn = document.getElementById('scheduleBtn');
            const structureSection = document.getElementById('structure');
            const scheduleSection = document.getElementById('schedule');
            function showStructure() {
                structureSection.classList.remove('hidden');
                scheduleSection.classList.add('hidden');
                structureBtn.classList.add('active');
                scheduleBtn.classList.remove('active');
            }
            function showSchedule() {
                structureSection.classList.add('hidden');
                scheduleSection.classList.remove('hidden');
                scheduleBtn.classList.add('active');
                structureBtn.classList.remove('active');
            }
            structureBtn.addEventListener('click', showStructure);
            scheduleBtn.addEventListener('click', showSchedule);
            showStructure();
            const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            const today = new Date();
            const dayName = days[today.getDay()];
            document.getElementById('DaySchedule').textContent = `📅 Jadwal Pembelajaran ${dayName}`;
            const techIcons = document.querySelectorAll('.tech-icon');
            techIcons.forEach((icon, index) => {
                icon.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.05) rotate(5deg)';
                });          
                icon.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                });
            });
        });