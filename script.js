const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxuYqPyThM-PefRsxm-FEzba6lD6oA0ua5AY_QrX0kn78YpmrEA5jS01RCDxnlbBaT/exec";

const INDIA_LOCATIONS = {
  "Andaman and Nicobar Islands": [
    "Port Blair",
    "Diglipur",
    "Mayabunder",
    "Rangat",
    "Havelock Island",
    "Neil Island",
  ],
  "Andhra Pradesh": [
    "Amaravati",
    "Anantapur",
    "Chittoor",
    "Eluru",
    "Guntur",
    "Kadapa",
    "Kakinada",
    "Kurnool",
    "Nellore",
    "Ongole",
    "Rajahmundry",
    "Srikakulam",
    "Tirupati",
    "Vijayawada",
    "Visakhapatnam",
    "Vizianagaram",
  ],
  "Arunachal Pradesh": [
    "Itanagar",
    "Naharlagun",
    "Pasighat",
    "Tawang",
    "Ziro",
    "Bomdila",
    "Along",
    "Tezu",
  ],
  Assam: [
    "Guwahati",
    "Dibrugarh",
    "Silchar",
    "Jorhat",
    "Tezpur",
    "Nagaon",
    "Tinsukia",
    "Bongaigaon",
    "Dhubri",
    "Diphu",
    "Goalpara",
    "Sivasagar",
  ],
  Bihar: [
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Purnia",
    "Ara",
    "Begusarai",
    "Katihar",
    "Munger",
    "Saharsa",
    "Samastipur",
  ],
  Chandigarh: ["Chandigarh"],
  Chhattisgarh: [
    "Raipur",
    "Bhilai",
    "Bilaspur",
    "Korba",
    "Durg",
    "Rajnandgaon",
    "Jagdalpur",
    "Raigarh",
    "Ambikapur",
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Daman",
    "Diu",
    "Silvassa",
    "Amli",
    "Naroli",
  ],
  Delhi: [
    "New Delhi",
    "Central Delhi",
    "East Delhi",
    "North Delhi",
    "South Delhi",
    "West Delhi",
    "Dwarka",
    "Rohini",
  ],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim"],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Gandhinagar",
    "Anand",
    "Bharuch",
    "Mehsana",
    "Navsari",
    "Porbandar",
    "Surendranagar",
  ],
  Haryana: [
    "Chandigarh",
    "Faridabad",
    "Gurugram",
    "Panipat",
    "Ambala",
    "Yamunanagar",
    "Rohtak",
    "Hisar",
    "Karnal",
    "Sonipat",
    "Panchkula",
    "Kurukshetra",
  ],
  "Himachal Pradesh": [
    "Shimla",
    "Dharamshala",
    "Mandi",
    "Solan",
    "Kullu",
    "Chamba",
    "Hamirpur",
    "Una",
    "Bilaspur",
    "Nahan",
  ],
  "Jammu and Kashmir": [
    "Srinagar",
    "Jammu",
    "Anantnag",
    "Baramulla",
    "Udhampur",
    "Kathua",
    "Pulwama",
    "Rajouri",
    "Kupwara",
  ],
  Jharkhand: [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Deoghar",
    "Hazaribagh",
    "Giridih",
    "Ramgarh",
    "Medininagar",
  ],
  Karnataka: [
    "Bengaluru",
    "Mysuru",
    "Mangaluru",
    "Hubballi",
    "Dharwad",
    "Belagavi",
    "Ballari",
    "Davangere",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Kalaburagi",
    "Vijayapura",
  ],
  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Thrissur",
    "Kollam",
    "Alappuzha",
    "Kannur",
    "Kottayam",
    "Palakkad",
    "Malappuram",
    "Pathanamthitta",
  ],
  Ladakh: ["Leh", "Kargil", "Nubra", "Diskit", "Drass"],
  Lakshadweep: ["Kavaratti", "Agatti", "Amini", "Andrott", "Minicoy"],
  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Jabalpur",
    "Gwalior",
    "Ujjain",
    "Sagar",
    "Rewa",
    "Satna",
    "Ratlam",
    "Dewas",
    "Chhindwara",
    "Khandwa",
  ],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Thane",
    "Aurangabad",
    "Solapur",
    "Amravati",
    "Kolhapur",
    "Navi Mumbai",
    "Sangli",
    "Jalgaon",
    "Akola",
    "Latur",
  ],
  Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Kakching", "Ukhrul"],
  Meghalaya: ["Shillong", "Tura", "Jowai", "Nongstoin", "Baghmara", "Williamnagar"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib", "Lawngtlai"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto"],
  Odisha: [
    "Bhubaneswar",
    "Cuttack",
    "Rourkela",
    "Berhampur",
    "Sambalpur",
    "Puri",
    "Balasore",
    "Bhadrak",
    "Baripada",
    "Jharsuguda",
    "Jeypore",
  ],
  Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  Punjab: [
    "Chandigarh",
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Mohali",
    "Hoshiarpur",
    "Pathankot",
    "Moga",
    "Firozpur",
  ],
  Rajasthan: [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Ajmer",
    "Bikaner",
    "Alwar",
    "Bharatpur",
    "Bhilwara",
    "Sikar",
    "Pali",
    "Tonk",
  ],
  Sikkim: ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo", "Singtam"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Tirunelveli",
    "Tiruppur",
    "Vellore",
    "Erode",
    "Thoothukudi",
    "Thanjavur",
    "Dindigul",
  ],
  Telangana: [
    "Hyderabad",
    "Warangal",
    "Nizamabad",
    "Karimnagar",
    "Khammam",
    "Ramagundam",
    "Mahbubnagar",
    "Nalgonda",
    "Adilabad",
    "Suryapet",
  ],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Ambassa", "Belonia"],
  "Uttar Pradesh": [
    "Lucknow",
    "Kanpur",
    "Varanasi",
    "Agra",
    "Prayagraj",
    "Meerut",
    "Ghaziabad",
    "Noida",
    "Bareilly",
    "Aligarh",
    "Moradabad",
    "Saharanpur",
    "Gorakhpur",
    "Ayodhya",
    "Jhansi",
  ],
  Uttarakhand: [
    "Dehradun",
    "Haridwar",
    "Rishikesh",
    "Haldwani",
    "Roorkee",
    "Nainital",
    "Rudrapur",
    "Kashipur",
    "Pithoragarh",
  ],
  "West Bengal": [
    "Kolkata",
    "Howrah",
    "Durgapur",
    "Asansol",
    "Siliguri",
    "Bardhaman",
    "Malda",
    "Kharagpur",
    "Haldia",
    "Krishnanagar",
    "Jalpaiguri",
    "Darjeeling",
  ],
};

const form = document.querySelector("#registration-form");
const submitButton = document.querySelector("#submit-button");
const message = document.querySelector("#form-message");
const courseSelect = document.querySelector("#course");
const stateSelect = document.querySelector("#state");
const citySelect = document.querySelector("#city");

function setMessage(text, type = "") {
  message.textContent = text;
  message.className = `form-message ${type}`.trim();
}

function addOption(select, value, label = value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  select.append(option);
}

function fillStates() {
  Object.keys(INDIA_LOCATIONS)
    .sort()
    .forEach((state) => addOption(stateSelect, state));
}

function fillCities(state) {
  citySelect.innerHTML = "";

  if (!state || !INDIA_LOCATIONS[state]) {
    addOption(citySelect, "", "Select state first");
    citySelect.disabled = true;
    return;
  }

  addOption(citySelect, "", "Select city");
  INDIA_LOCATIONS[state].forEach((city) => addOption(citySelect, city));
  addOption(citySelect, "Other", "Other");
  citySelect.disabled = false;
}

function normalizeIndianWhatsApp(value) {
  const digits = value.replace(/\D/g, "");
  const tenDigitNumber = digits.length === 12 && digits.startsWith("91")
    ? digits.slice(2)
    : digits;

  if (!/^[6-9]\d{9}$/.test(tenDigitNumber)) {
    return "";
  }

  return `+91${tenDigitNumber}`;
}

function validateForm(data) {
  if (!data.course) {
    return "Please select a course.";
  }

  if (isWebsiteOnlyCourse(data.course)) {
    return "This course is available on the website only. Please use the Visit Website button.";
  }

  if (!data.gmail.toLowerCase().endsWith("@gmail.com")) {
    return "Please enter a valid Gmail address.";
  }

  if (!data.whatsapp) {
    return "Please enter a valid 10 digit Indian WhatsApp number.";
  }

  if (!INDIA_LOCATIONS[data.state]) {
    return "Please select a valid state.";
  }

  if (!INDIA_LOCATIONS[data.state].includes(data.city) && data.city !== "Other") {
    return "Please select a valid city.";
  }

  if (!data.qualification) {
    return "Please select your qualification.";
  }

  return "";
}

function isWebsiteOnlyCourse(course) {
  const selectedOption = courseSelect.selectedOptions[0];
  return selectedOption?.dataset.websiteOnly === "true" || [
    "Advanced Excel",
    "Power BI",
    "SAP FICO",
    "SAP 4 HANA",
    "Microsoft Peachtree",
  ].includes(course);
}

function updateCourseAvailability() {
  const course = courseSelect.value;

  if (!course) {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Registration";
    setMessage("");
    return;
  }

  if (isWebsiteOnlyCourse(course)) {
    submitButton.disabled = true;
    submitButton.textContent = "Visit Website Course";
    setMessage("This course is available on the website only. Use the Visit Website button above.", "error");
    return;
  }

  submitButton.disabled = false;
  submitButton.textContent = "Submit Registration";
  setMessage("");
}

stateSelect.addEventListener("change", () => {
  fillCities(stateSelect.value);
});

courseSelect.addEventListener("change", updateCourseAvailability);

fillStates();
fillCities("");
updateCourseAvailability();

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {
    course: formData.get("course").trim(),
    name: formData.get("name").trim(),
    gmail: formData.get("gmail").trim(),
    whatsapp: normalizeIndianWhatsApp(formData.get("whatsapp").trim()),
    state: formData.get("state").trim(),
    city: formData.get("city").trim(),
    qualification: formData.get("qualification").trim(),
  };

  const validationError = validateForm(data);
  if (validationError) {
    setMessage(validationError, "error");
    return;
  }

  if (GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
    setMessage("Add your Google Apps Script URL in script.js first.", "error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  setMessage("Please wait, submitting your registration.");

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    form.reset();
    fillCities("");
    updateCourseAvailability();
    setMessage("Registration successful. We will contact you soon.", "success");
  } catch (error) {
    setMessage("Something went wrong. Please try again.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Registration";
  }
});
