const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 3000;


const coordinates={
    India: {
        latitude: 20.5937,
        longitude: 78.9629,
        subDistricts: {
          AndhraPradesh: {
            latitude: 15.9129,
            longitude: 79.74,
            subDistricts: {
              Anantapur: { latitude: 14.6812, longitude: 77.5995 },
              Chittoor: { latitude: 13.2282, longitude: 79.1005 },
              East_Godavari: { latitude: 17.003, longitude: 81.7715 },
              Guntur: { latitude: 16.3067, longitude: 80.4365 },
              Krishna: { latitude: 16.5067, longitude: 80.6167 },
              Kurnool: { latitude: 15.828, longitude: 78.0469 },
              Nellore: { latitude: 14.4414, longitude: 79.9862 },
              Prakasam: { latitude: 15.4437, longitude: 80.05 },
              Srikakulam: { latitude: 18.3028, longitude: 83.9015 },
              Visakhapatnam: { latitude: 17.6869, longitude: 83.2185 },
              Vizianagaram: { latitude: 18.1204, longitude: 83.396 },
              West_Godavari: { latitude: 16.4228, longitude: 81.7273 },
              Kadapa: { latitude: 14.47, longitude: 78.8233 },
            },
          },
          ArunachalPradesh: {
            latitude: 27.0844,
            longitude: 93.6053,
            subDistricts: {
              Tawang: { latitude: 27.5517, longitude: 91.9866 },
              West_Kameng: { latitude: 26.9265, longitude: 92.3889 },
              East_Kameng: { latitude: 26.69, longitude: 92.29 },
              Papum_Pare: { latitude: 26.6912, longitude: 93.4517 },
              Lohit: { latitude: 27.6765, longitude: 95.2485 },
              Namsai: { latitude: 27.0542, longitude: 96.2737 },
              Changlang: { latitude: 27.1155, longitude: 95.5578 },
              Tirap: { latitude: 27.0639, longitude: 95.4144 },
              Longding: { latitude: 27.3308, longitude: 95.4385 },
              Upper_Subansiri: { latitude: 27.251, longitude: 94.085 },
              Lower_Subansiri: { latitude: 27.2329, longitude: 93.786 },
              Kurung_Kumey: { latitude: 27.3765, longitude: 93.8301 },
              Kra_Daadi: { latitude: 27.1131, longitude: 93.7178 },
              Kamle: { latitude: 27.3347, longitude: 93.6244 },
              Itanagar: { latitude: 27.0804, longitude: 93.6053 },
              East_Siang: { latitude: 28.0534, longitude: 95.1445 },
              West_Siang: { latitude: 28.0954, longitude: 94.8755 },
              Siang: { latitude: 28.0575, longitude: 95.0169 },
              Lower_Dibang_Valley: { latitude: 27.4911, longitude: 95.5939 },
              Upper_Dibang_Valley: { latitude: 28.0582, longitude: 95.0385 },
              Anjaw: { latitude: 27.8537, longitude: 95.7283 },
            },
          },
          Assam: {
            latitude: 26.2006,
            longitude: 92.9376,
            subDistricts: {
              Barpeta: { latitude: 26.2255, longitude: 91.0005 },
              Bongaigaon: { latitude: 26.49, longitude: 90.55 },
              Cachar: { latitude: 24.8121, longitude: 92.8032 },
              Chirang: { latitude: 26.0167, longitude: 90.95 },
              Darrang: { latitude: 26.3667, longitude: 92.0 },
              Dhemaji: { latitude: 27.4236, longitude: 94.1105 },
              Dhubri: { latitude: 26.0, longitude: 89.95 },
              Dibrugarh: { latitude: 27.473, longitude: 94.9056 },
              Goalpara: { latitude: 26.1833, longitude: 90.6167 },
              Golaghat: { latitude: 26.5, longitude: 93.95 },
              Hailakandi: { latitude: 24.6769, longitude: 92.6178 },
              Jorhat: { latitude: 26.7491, longitude: 94.215 },
              Kamrup: { latitude: 26.0, longitude: 91.5 },
              Kamrup_Metropolitan: { latitude: 26.114, longitude: 91.689 },
              Karbi_Anglong: { latitude: 25.8362, longitude: 93.552 },
              Karimganj: { latitude: 24.8701, longitude: 92.413 },
              Kokrajhar: { latitude: 26.4167, longitude: 90.27 },
              Lakhimpur: { latitude: 27.085, longitude: 94.0516 },
              Majuli: { latitude: 26.854, longitude: 93.7554 },
              Morigaon: { latitude: 26.027, longitude: 92.4814 },
              Nagaon: { latitude: 26.3485, longitude: 92.6445 },
              Nalbari: { latitude: 26.1764, longitude: 91.4887 },
              Sivasagar: { latitude: 26.9833, longitude: 94.61 },
              Sonitpur: { latitude: 26.65, longitude: 92.5667 },
              South_Salmara_Mankachar: { latitude: 26.115, longitude: 89.8906 },
              Tinsukia: { latitude: 27.49, longitude: 95.36 },
              Udalguri: { latitude: 26.5167, longitude: 92.12 },
              West_Karbi_Anglong: { latitude: 25.8362, longitude: 93.552 },
              Baksa: { latitude: 26.33, longitude: 91.7 },
              Dima_Hasao: { latitude: 25.481, longitude: 93.036 },
            },
          },
          Bihar: {
            latitude: 25.0961,
            longitude: 85.3131,
            subDistricts: {
              Patna: { latitude: 25.5941, longitude: 85.1376 },
              Gaya: { latitude: 24.7797, longitude: 85.0203 },
              Bhagalpur: { latitude: 25.2678, longitude: 87.0435 },
              Muzaffarpur: { latitude: 26.1233, longitude: 85.3906 },
              Darbhanga: { latitude: 26.0096, longitude: 85.8862 },
              Bhojpur: { latitude: 25.4253, longitude: 84.9992 },
              Siwan: { latitude: 26.2167, longitude: 84.3667 },
              Saran: { latitude: 25.7903, longitude: 84.8253 },
              Vaishali: { latitude: 25.9883, longitude: 85.1283 },
              Samastipur: { latitude: 25.8333, longitude: 85.6667 },
              Begusarai: { latitude: 25.43, longitude: 86.13 },
              Khagaria: { latitude: 25.5, longitude: 86.75 },
              Munger: { latitude: 25.3811, longitude: 86.4653 },
              Lakhisarai: { latitude: 25.2667, longitude: 86.0333 },
              Sheikhpura: { latitude: 25.15, longitude: 85.85 },
              Nalanda: { latitude: 25.14, longitude: 85.45 },
              Patliputra: { latitude: 25.622, longitude: 85.141 },
              Jehanabad: { latitude: 25.0667, longitude: 84.8667 },
              Kaimur: { latitude: 25.0, longitude: 84.5 },
              Madhepura: { latitude: 25.9, longitude: 86.8 },
              Madhubani: { latitude: 26.4, longitude: 86.0 },
              Supaul: { latitude: 25.95, longitude: 86.6 },
              Saharsa: { latitude: 25.9, longitude: 86.6 },
              Purnea: { latitude: 25.7667, longitude: 87.4833 },
              Araria: { latitude: 25.1333, longitude: 87.5333 },
              Kishanganj: { latitude: 26.1, longitude: 87.9667 },
              Katihar: { latitude: 25.5, longitude: 87.7 },
              WestChamparan: { latitude: 27.0, longitude: 84.0 },
              EastChamparan: { latitude: 26.8, longitude: 84.8 },
              Rohtas: { latitude: 24.85, longitude: 84.25 },
              Sheohar: { latitude: 26.5, longitude: 85.3 },
              Sitamarhi: { latitude: 26.6, longitude: 85.4 },
            },
          },
          Chhattisgarh: {
            latitude: 21.2787,
            longitude: 81.8661,
            subDistricts: {
              Raipur: { latitude: 21.2514, longitude: 81.6296 },
              Bilaspur: { latitude: 22.0781, longitude: 82.1468 },
              Durg: { latitude: 21.1917, longitude: 81.283 },
              Korba: { latitude: 22.3527, longitude: 82.6655 },
              Rajnandgaon: { latitude: 21.0787, longitude: 81.038 },
              Janjgir_Champa: { latitude: 22.1572, longitude: 82.7749 },
              Bastar: { latitude: 19.3397, longitude: 81.9295 },
              Kanker: { latitude: 20.3333, longitude: 81.6333 },
              Surguja: { latitude: 23.053, longitude: 83.2529 },
              Jashpur: { latitude: 22.9939, longitude: 83.2923 },
              Mahasamund: { latitude: 21.0707, longitude: 82.0091 },
              Mungeli: { latitude: 22.302, longitude: 81.458 },
              Narayanpur: { latitude: 20.9683, longitude: 81.4443 },
              Balod: { latitude: 21.3233, longitude: 81.3144 },
              Baloda_Bazar: { latitude: 21.6784, longitude: 82.1294 },
              Koriya: { latitude: 23.0807, longitude: 82.5817 },
              Sukma: { latitude: 18.3743, longitude: 81.6685 },
              Kondagaon: { latitude: 20.4024, longitude: 81.6995 },
              Dantewada: { latitude: 18.9872, longitude: 81.5905 },
              Bijapur: { latitude: 18.8013, longitude: 80.7586 },
              Surajpur: { latitude: 23.1244, longitude: 82.5786 },
              Kabirdham: { latitude: 22.0484, longitude: 81.441 },
              Balrampur: { latitude: 22.7871, longitude: 82.362 },
              Gariaband: { latitude: 20.9333, longitude: 81.9667 },
              Raigarh: { latitude: 22.1532, longitude: 83.4028 },
              Bemetara: { latitude: 21.5342, longitude: 81.4846 },
              Dhamtari: { latitude: 20.6896, longitude: 81.538 },
            },
          },
          Goa: {
            latitude: 15.2993,
            longitude: 74.124,
            subDistricts: {
              North_Goa: { latitude: 15.5297, longitude: 73.8563 },
              South_Goa: { latitude: 15.2993, longitude: 74.124 },
            },
          },
          Gujarat: {
            latitude: 22.2587,
            longitude: 71.1924,
            subDistricts: {
              Ahmedabad: { latitude: 23.0225, longitude: 72.5714 },
              Amreli: { latitude: 21.7625, longitude: 71.2122 },
              Anand: { latitude: 22.57, longitude: 72.9707 },
              Aravalli: { latitude: 23.1194, longitude: 73.6971 },
              Banaskantha: { latitude: 24.3025, longitude: 72.5934 },
              Bharuch: { latitude: 21.7137, longitude: 73.0018 },
              Bhavnagar: { latitude: 21.7625, longitude: 72.1545 },
              Chhota_Udepur: { latitude: 22.6763, longitude: 73.7496 },
              Dahod: { latitude: 22.5915, longitude: 74.0187 },
              Dang: { latitude: 20.6471, longitude: 73.3772 },
              Gandhinagar: { latitude: 23.2156, longitude: 72.6369 },
              Gir_Somnath: { latitude: 21.4412, longitude: 70.8742 },
              Jamnagar: { latitude: 22.4707, longitude: 70.0577 },
              Junagadh: { latitude: 21.5211, longitude: 70.4641 },
              Kachchh: { latitude: 23.1588, longitude: 69.6985 },
              Kheda: { latitude: 22.933, longitude: 72.6183 },
              Mahisagar: { latitude: 22.9042, longitude: 73.4293 },
              Mehsana: { latitude: 23.671, longitude: 72.3825 },
              Morbi: { latitude: 22.7869, longitude: 70.8622 },
              Narmada: { latitude: 21.9977, longitude: 73.4719 },
              Navsari: { latitude: 20.9572, longitude: 72.9237 },
              Panchmahal: { latitude: 22.6704, longitude: 73.602 },
              Patan: { latitude: 23.7912, longitude: 72.136 },
              Porbandar: { latitude: 21.641, longitude: 69.6035 },
              Rajkot: { latitude: 22.3039, longitude: 70.8022 },
              Surat: { latitude: 21.1702, longitude: 72.8311 },
              Sabarkantha: { latitude: 23.3878, longitude: 72.8831 },
              Vadodara: { latitude: 22.3072, longitude: 73.1812 },
              Valsad: { latitude: 20.6257, longitude: 72.9334 },
            },
          },
          Haryana: {
            latitude: 29.0588,
            longitude: 76.0856,
            subDistricts: {
              Gurugram: { latitude: 28.4595, longitude: 77.0296 },
              Faridabad: { latitude: 28.4089, longitude: 77.3178 },
              Hisar: { latitude: 29.1496, longitude: 75.721 },
              Rohtak: { latitude: 28.895, longitude: 76.613 },
              Karnal: { latitude: 29.6903, longitude: 76.9937 },
              Ambala: { latitude: 30.3782, longitude: 76.7809 },
              Panchkula: { latitude: 30.6954, longitude: 76.858 },
              Sirsa: { latitude: 29.5309, longitude: 75.0301 },
              Bhiwani: { latitude: 28.7836, longitude: 75.5336 },
              Kurukshetra: { latitude: 29.9453, longitude: 76.8369 },
              Sonipat: { latitude: 28.991, longitude: 77.0101 },
              Yamunanagar: { latitude: 30.1134, longitude: 77.2764 },
              Fatehabad: { latitude: 29.491, longitude: 75.4533 },
              Jhajjar: { latitude: 28.6023, longitude: 76.6437 },
              Palwal: { latitude: 28.1291, longitude: 77.3239 },
              Kaithal: { latitude: 29.8353, longitude: 76.3897 },
              Mahendragarh: { latitude: 28.2044, longitude: 76.085 },
              Rewari: { latitude: 28.1881, longitude: 76.6163 },
              Narnaul: { latitude: 28.0705, longitude: 76.1323 },
              Charkhi_Dadri: { latitude: 28.5939, longitude: 76.275 },
            },
          },
          HimachalPradesh: {
            latitude: 31.1048,
            longitude: 77.1734,
            subDistricts: {
              Shimla: { latitude: 31.1048, longitude: 77.1734 },
              Kangra: { latitude: 32.065, longitude: 76.76 },
              Solan: { latitude: 30.9095, longitude: 77.1314 },
              Mandi: { latitude: 32.0007, longitude: 76.9291 },
              Kullu: { latitude: 32.0197, longitude: 77.1202 },
              Hamirpur: { latitude: 32.0591, longitude: 76.5698 },
              Una: { latitude: 32.0742, longitude: 76.2975 },
              Bilaspur: { latitude: 31.3713, longitude: 76.7715 },
              Chamba: { latitude: 32.5525, longitude: 76.1316 },
              Sirmaur: { latitude: 30.6895, longitude: 77.4039 },
              Kinnaur: { latitude: 31.8202, longitude: 78.4101 },
              LahulSpiti: { latitude: 32.6906, longitude: 77.7677 },
            },
          },
          Jharkhand: {
            latitude: 23.61,
            longitude: 85.2799,
            subDistricts: {
              Ranchi: { latitude: 23.3441, longitude: 85.3096 },
              Jamshedpur: { latitude: 22.8046, longitude: 86.2029 },
              Dhanbad: { latitude: 23.7997, longitude: 86.4347 },
              Bokaro: { latitude: 23.6548, longitude: 86.151 },
              Hazaribagh: { latitude: 23.9965, longitude: 85.3616 },
              Deoghar: { latitude: 24.4841, longitude: 86.7114 },
              Dumka: { latitude: 24.2525, longitude: 87.265 },
              Giridih: { latitude: 24.1879, longitude: 86.3071 },
              Koderma: { latitude: 24.4426, longitude: 85.506 },
              EastSinghbhum: { latitude: 22.53, longitude: 86.1833 },
              WestSinghbhum: { latitude: 22.262, longitude: 85.2985 },
              Palamu: { latitude: 24.2283, longitude: 84.0589 },
              Chatra: { latitude: 24.2799, longitude: 84.7575 },
              Latehar: { latitude: 23.64, longitude: 84.2833 },
              Sahibganj: { latitude: 25.2291, longitude: 87.6317 },
              Pakur: { latitude: 24.6501, longitude: 87.8927 },
              Godda: { latitude: 24.8473, longitude: 87.2983 },
            },
          },
          Karnataka: {
            latitude: 15.3173,
            longitude: 75.7139,
            subDistricts: {
              Bengaluru: { latitude: 12.9716, longitude: 77.5946 },
              Mysuru: { latitude: 12.2958, longitude: 76.6394 },
              Hubli: { latitude: 15.3647, longitude: 75.13 },
              Mangaluru: { latitude: 12.9141, longitude: 74.856 },
              Belagavi: { latitude: 15.8497, longitude: 74.4977 },
              Davangere: { latitude: 14.4672, longitude: 75.9255 },
              Ballari: { latitude: 15.1398, longitude: 76.9218 },
              Tumakuru: { latitude: 13.3417, longitude: 77.1015 },
              Chitradurga: { latitude: 14.2344, longitude: 76.9782 },
              Raichur: { latitude: 16.2026, longitude: 77.3465 },
              Bijapur: { latitude: 16.8281, longitude: 75.7153 },
              Hassan: { latitude: 13.0, longitude: 75.0 },
              Bidar: { latitude: 17.9186, longitude: 77.5272 },
              Haveri: { latitude: 14.8085, longitude: 75.4039 },
              Karwar: { latitude: 14.7991, longitude: 74.1232 },
              Kolar: { latitude: 13.1349, longitude: 79.9869 },
              Chikkaballapura: { latitude: 13.4167, longitude: 77.7294 },
              Kalaburagi: { latitude: 17.1514, longitude: 76.8391 },
              DakshinaKannada: { latitude: 12.9151, longitude: 74.8564 },
              Kodagu: { latitude: 12.3327, longitude: 75.5883 },
              Udupi: { latitude: 13.3405, longitude: 74.742 },
              Chikkamagaluru: { latitude: 13.3166, longitude: 75.7779 },
              Shivamogga: { latitude: 14.0157, longitude: 75.5636 },
              Koppal: { latitude: 15.3751, longitude: 76.2442 },
              Gadag: { latitude: 15.4396, longitude: 75.6274 },
              Bagalkot: { latitude: 16.1848, longitude: 75.8839 },
              Chamarajanagar: { latitude: 12.1595, longitude: 76.9605 },
            },
          },
          Kerala: {
            latitude: 10.8505,
            longitude: 76.2711,
            subDistricts: {
              Thiruvananthapuram: { latitude: 8.5241, longitude: 76.9366 },
              Kochi: { latitude: 9.9312, longitude: 76.2673 },
              Kozhikode: { latitude: 11.2588, longitude: 75.7804 },
              Malappuram: { latitude: 11.0663, longitude: 76.0728 },
              Thrissur: { latitude: 10.527, longitude: 76.2144 },
              Palakkad: { latitude: 10.7864, longitude: 76.6547 },
              Kollam: { latitude: 8.8932, longitude: 76.6141 },
              Kottayam: { latitude: 9.5915, longitude: 76.5228 },
              Alappuzha: { latitude: 9.5, longitude: 76.34 },
              Pathanamthitta: { latitude: 9.2685, longitude: 76.791 },
              Idukki: { latitude: 9.898, longitude: 77.1101 },
              Wayanad: { latitude: 11.6828, longitude: 76.1318 },
              Kasaragod: { latitude: 12.4923, longitude: 75.0 },
              Kannur: { latitude: 11.8745, longitude: 75.3704 },
              Ernakulam: { latitude: 9.9815, longitude: 76.3016 },
            },
          },
          MadhyaPradesh: {
            latitude: 23.4732,
            longitude: 77.947,
            subDistricts: {
              Bhopal: { latitude: 23.2599, longitude: 77.4126 },
              Indore: { latitude: 22.7196, longitude: 75.8577 },
              Gwalior: { latitude: 26.2183, longitude: 78.1828 },
              Jabalpur: { latitude: 23.1815, longitude: 79.9558 },
              Ujjain: { latitude: 23.1765, longitude: 75.7798 },
              Sagar: { latitude: 23.8355, longitude: 78.7338 },
              Rewa: { latitude: 24.5352, longitude: 81.2984 },
              Satna: { latitude: 24.587, longitude: 80.8323 },
              Khandwa: { latitude: 21.8681, longitude: 76.0339 },
              Ratlam: { latitude: 23.3247, longitude: 75.07 },
              Khargone: { latitude: 21.528, longitude: 75.6012 },
              Betul: { latitude: 21.9202, longitude: 77.0319 },
              Chhindwara: { latitude: 22.0819, longitude: 78.9375 },
              Shivpuri: { latitude: 25.4375, longitude: 77.6677 },
              Dhar: { latitude: 22.6063, longitude: 75.2629 },
              Kashi: { latitude: 23.7402, longitude: 78.8701 },
              Seoni: { latitude: 22.0803, longitude: 79.7346 },
              Hoshangabad: { latitude: 22.7485, longitude: 77.7206 },
              Morena: { latitude: 26.4643, longitude: 77.7162 },
              Vidisha: { latitude: 23.527, longitude: 77.738 },
              Shajapur: { latitude: 23.4381, longitude: 75.989 },
            },
          },
          Maharashtra: {
            latitude: 19.7515,
            longitude: 75.7139,
            subDistricts: {
              Mumbai: { latitude: 19.076, longitude: 72.8777 },
              Pune: { latitude: 18.5204, longitude: 73.8567 },
              Nagpur: { latitude: 21.1466, longitude: 79.0882 },
              Nashik: { latitude: 19.9975, longitude: 73.7898 },
              Thane: { latitude: 19.2183, longitude: 72.9788 },
              Aurangabad: { latitude: 19.8762, longitude: 75.3433 },
              Solapur: { latitude: 17.6599, longitude: 75.9064 },
              Jalna: { latitude: 19.8419, longitude: 75.8815 },
              Kolhapur: { latitude: 16.7069, longitude: 74.243 },
              Sangli: { latitude: 16.8605, longitude: 74.5654 },
              Satara: { latitude: 17.6907, longitude: 73.9368 },
              Nanded: { latitude: 19.1503, longitude: 77.2896 },
              Chandrapur: { latitude: 19.9475, longitude: 79.2974 },
              Akola: { latitude: 20.7054, longitude: 77.0209 },
              Amravati: { latitude: 20.934, longitude: 77.7792 },
              Buldhana: { latitude: 20.5302, longitude: 76.1814 },
              Beed: { latitude: 19.8796, longitude: 75.5595 },
              Osmanabad: { latitude: 18.2062, longitude: 76.0065 },
              Ratnagiri: { latitude: 16.9931, longitude: 73.298 },
              Sindhudurg: { latitude: 16.283, longitude: 73.6791 },
              Latur: { latitude: 18.4045, longitude: 76.0488 },
              Wardha: { latitude: 20.7529, longitude: 78.6012 },
              Yavatmal: { latitude: 20.393, longitude: 78.0539 },
              Hingoli: { latitude: 19.7302, longitude: 77.2881 },
              Nandurbar: { latitude: 21.2885, longitude: 74.249 },
              Palghar: { latitude: 19.7184, longitude: 72.7525 },
            },
          },
          Manipur: {
            latitude: 24.6637,
            longitude: 93.9063,
            subDistricts: {
              Imphal: { latitude: 24.8175, longitude: 93.9368 },
              Thoubal: { latitude: 24.7152, longitude: 93.9833 },
              Bishnupur: { latitude: 24.5319, longitude: 93.6531 },
              Kakching: { latitude: 24.659, longitude: 93.7057 },
              Churachandpur: { latitude: 24.3339, longitude: 93.6185 },
              Senapati: { latitude: 25.0325, longitude: 94.0924 },
              Tamenglong: { latitude: 25.1305, longitude: 94.3778 },
              Ukhrul: { latitude: 25.1482, longitude: 94.4291 },
              Jiribam: { latitude: 24.7245, longitude: 93.0737 },
              Tengnoupal: { latitude: 24.5319, longitude: 94.0395 },
            },
          },
          Meghalaya: {
            latitude: 25.467,
            longitude: 91.3662,
            subDistricts: {
              Shillong: { latitude: 25.5788, longitude: 91.8933 },
              Tura: { latitude: 25.5017, longitude: 90.2171 },
              Jowai: { latitude: 25.5322, longitude: 92.1166 },
              Nongpoh: { latitude: 25.6431, longitude: 91.5027 },
              Williamnagar: { latitude: 25.575, longitude: 90.2799 },
              Baghmara: { latitude: 25.5191, longitude: 90.2672 },
            },
          },
          Mizoram: {
            latitude: 23.1645,
            longitude: 92.9376,
            subDistricts: {
              Aizawl: { latitude: 23.7365, longitude: 92.7176 },
              Lunglei: { latitude: 23.1257, longitude: 92.727 },
              Champhai: { latitude: 23.1563, longitude: 93.1689 },
              Serchhip: { latitude: 23.1411, longitude: 92.8665 },
              Mamit: { latitude: 23.1501, longitude: 92.9975 },
              Kolasib: { latitude: 24.137, longitude: 92.8033 },
              Lawngtlai: { latitude: 22.7789, longitude: 92.5965 },
            },
          },
          Nagaland: {
            latitude: 26.1584,
            longitude: 94.5624,
            subDistricts: {
              Kohima: { latitude: 25.6722, longitude: 94.1192 },
              Dimapur: { latitude: 25.9021, longitude: 93.7198 },
              Mokokchung: { latitude: 26.3192, longitude: 94.5323 },
              Wokha: { latitude: 26.1106, longitude: 94.1155 },
              Mon: { latitude: 26.9736, longitude: 94.5389 },
              Zunheboto: { latitude: 26.0173, longitude: 94.3182 },
            },
          },
          Odisha: {
            latitude: 20.9517,
            longitude: 85.0985,
            subDistricts: {
              Bhubaneswar: { latitude: 20.2961, longitude: 85.8189 },
              Cuttack: { latitude: 20.4625, longitude: 85.8828 },
              Rourkela: { latitude: 22.2587, longitude: 84.823 },
              Berhampur: { latitude: 19.3127, longitude: 84.7963 },
              Sambalpur: { latitude: 21.4681, longitude: 83.9773 },
              Puri: { latitude: 19.8196, longitude: 85.8197 },
              Balasore: { latitude: 21.4937, longitude: 86.93 },
              Rayagada: { latitude: 19.2902, longitude: 83.3965 },
              Koraput: { latitude: 18.7931, longitude: 82.7139 },
              Kalahandi: { latitude: 19.9312, longitude: 83.1685 },
              Ganjam: { latitude: 19.3181, longitude: 84.7817 },
              Jagatsinghpur: { latitude: 20.2143, longitude: 86.1805 },
              Khurda: { latitude: 20.2567, longitude: 85.638 },
            },
          },
          Rajasthan: {
            latitude: 27.0238,
            longitude: 74.2179,
            subDistricts: {
              Jaipur: { latitude: 26.9124, longitude: 75.7873 },
              Jodhpur: { latitude: 26.295, longitude: 73.0169 },
              Udaipur: { latitude: 24.5854, longitude: 73.7125 },
              Kota: { latitude: 25.1821, longitude: 75.863 },
              Ajmer: { latitude: 26.4499, longitude: 74.6399 },
              Bikaner: { latitude: 28.0229, longitude: 73.3114 },
              Alwar: { latitude: 27.5572, longitude: 76.6131 },
              Sikar: { latitude: 27.6097, longitude: 75.1391 },
              Barmer: { latitude: 25.7419, longitude: 71.3924 },
              Churu: { latitude: 28.303, longitude: 74.9594 },
              Bhilwara: { latitude: 25.4348, longitude: 74.6261 },
              Bundi: { latitude: 25.4486, longitude: 75.6152 },
              Pali: { latitude: 25.7742, longitude: 73.3244 },
              Dholpur: { latitude: 26.6897, longitude: 77.999 },
              SawaiMadhopur: { latitude: 26.0236, longitude: 76.3584 },
              Chittorgarh: { latitude: 24.8797, longitude: 74.6246 },
              Jhunjhunu: { latitude: 28.1102, longitude: 75.3928 },
              Nagaur: { latitude: 27.218, longitude: 73.7114 },
              Rajsamand: { latitude: 25.0353, longitude: 73.8287 },
              Tonk: { latitude: 26.2029, longitude: 75.8694 },
              Sirohi: { latitude: 24.8835, longitude: 72.8414 },
              Jalore: { latitude: 25.1371, longitude: 72.6312 },
              Karauli: { latitude: 26.4729, longitude: 77.0231 },
              Dungarpur: { latitude: 23.8461, longitude: 73.7223 },
              Sriganganagar: { latitude: 29.9104, longitude: 73.8804 },
              Hanumangarh: { latitude: 29.991, longitude: 74.2895 },
              Baran: { latitude: 25.0597, longitude: 76.5229 },
              Jaisalmer: { latitude: 26.9157, longitude: 70.9202 },
            },
          },
          Punjab: {
            latitude: 31.1471,
            longitude: 75.3412,
            subDistricts: {
              Amritsar: { latitude: 31.634, longitude: 74.8723 },
              Ludhiana: { latitude: 30.9009, longitude: 75.8573 },
              Jalandhar: { latitude: 31.326, longitude: 75.5762 },
              Patiala: { latitude: 30.3253, longitude: 76.3852 },
              Bathinda: { latitude: 30.2102, longitude: 74.9483 },
              Mohali: { latitude: 30.6584, longitude: 76.7178 },
              Moga: { latitude: 30.8194, longitude: 75.1742 },
              Firozpur: { latitude: 30.9367, longitude: 74.6171 },
              Hoshiarpur: { latitude: 31.525, longitude: 75.889 },
              Faridkot: { latitude: 30.6727, longitude: 74.7741 },
              Ropar: { latitude: 31.0169, longitude: 76.536 },
              Sangrur: { latitude: 30.2394, longitude: 75.8564 },
              FatehgarhSahib: { latitude: 30.47, longitude: 76.694 },
              TaranTaran: { latitude: 31.4189, longitude: 74.9743 },
              Barnala: { latitude: 29.984, longitude: 75.5885 },
              Kapurthala: { latitude: 31.3772, longitude: 75.3894 },
              SriMuktsarSahib: { latitude: 30.4755, longitude: 74.7551 },
              Pathankot: { latitude: 32.2531, longitude: 75.6453 },
              Gurdaspur: { latitude: 32.0657, longitude: 75.3959 },
              Rupnagar: { latitude: 31.0169, longitude: 76.536 },
              Fazilka: { latitude: 30.5175, longitude: 74.2767 },
            },
          },
          Sikkim: {
            latitude: 27.533,
            longitude: 88.5122,
            subDistricts: {
              Gangtok: { latitude: 27.33, longitude: 88.6149 },
              EastSikkim: { latitude: 27.33, longitude: 88.6149 },
              WestSikkim: { latitude: 27.321, longitude: 88.6199 },
              NorthSikkim: { latitude: 28.12, longitude: 88.6197 },
              SouthSikkim: { latitude: 27.22, longitude: 88.6162 },
              Namchi: { latitude: 27.12, longitude: 88.6113 },
              Mangan: { latitude: 27.4569, longitude: 88.5979 },
              Pelling: { latitude: 27.2897, longitude: 88.4266 },
            },
          },
          TamilNadu: {
            latitude: 11.1276,
            longitude: 78.6569,
            subDistricts: {
              Chennai: { latitude: 13.0827, longitude: 80.2707 },
              Coimbatore: { latitude: 11.0168, longitude: 76.9558 },
              Madurai: { latitude: 9.925, longitude: 78.1193 },
              Tiruchirappalli: { latitude: 10.7905, longitude: 78.7047 },
              Salem: { latitude: 11.6643, longitude: 78.146 },
              Erode: { latitude: 11.3401, longitude: 77.7165 },
              Vellore: { latitude: 12.9165, longitude: 79.1323 },
              Thanjavur: { latitude: 10.7865, longitude: 79.1373 },
              Theni: { latitude: 10.0, longitude: 77.5 },
              Tirunelveli: { latitude: 8.73, longitude: 77.71 },
              Kanchipuram: { latitude: 12.8333, longitude: 79.7 },
              Villupuram: { latitude: 11.9333, longitude: 79.3667 },
              Karur: { latitude: 10.96, longitude: 78.07 },
              Cuddalore: { latitude: 11.75, longitude: 79.75 },
              Dindigul: { latitude: 10.3646, longitude: 77.9802 },
              Nagercoil: { latitude: 8.179, longitude: 77.4341 },
              Pudukottai: { latitude: 10.3833, longitude: 79.15 },
              Ariyalur: { latitude: 11.1235, longitude: 79.0182 },
              Perambalur: { latitude: 11.4578, longitude: 79.0935 },
              Tiruvarur: { latitude: 10.9333, longitude: 79.37 },
              Namakkal: { latitude: 11.2887, longitude: 78.1693 },
              Kallakurichi: { latitude: 11.9201, longitude: 79.2166 },
            },
          },
          Telangana: {
            latitude: 17.1232,
            longitude: 79.2085,
            subDistricts: {
              Hyderabad: { latitude: 17.3854, longitude: 78.4867 },
              Khammam: { latitude: 17.2477, longitude: 80.1507 },
              Karimnagar: { latitude: 18.4397, longitude: 79.1285 },
              Nalgonda: { latitude: 17.05, longitude: 79.2833 },
              Warangal: { latitude: 17.9784, longitude: 79.5941 },
              Mahabubnagar: { latitude: 16.7485, longitude: 77.9857 },
              Nizamabad: { latitude: 18.6736, longitude: 78.1061 },
              Medak: { latitude: 17.9984, longitude: 78.2685 },
              Adilabad: { latitude: 19.6641, longitude: 78.534 },
              Rangareddy: { latitude: 17.3659, longitude: 77.7627 },
              JayashankarBhupalapally: { latitude: 17.7495, longitude: 80.0735 },
              Siddipet: { latitude: 17.3577, longitude: 78.5895 },
              Suryapet: { latitude: 17.5504, longitude: 79.0612 },
              Jagtial: { latitude: 18.7954, longitude: 78.8928 },
              Mancherial: { latitude: 19.8416, longitude: 79.4377 },
              Peddapalli: { latitude: 18.6654, longitude: 79.5169 },
              Medchal_alkajgiri: { latitude: 17.4671, longitude: 78.3654 },
            },
          },
          Tripura: {
            latitude: 23.8315,
            longitude: 91.2868,
            subDistricts: {
              Agartala: { latitude: 23.8315, longitude: 91.2868 },
              WestTripura: { latitude: 23.7435, longitude: 91.2055 },
              SouthTripura: { latitude: 23.3371, longitude: 91.3414 },
              Unakoti: { latitude: 24.3935, longitude: 92.3527 },
              Dhalai: { latitude: 23.9686, longitude: 91.3706 },
              Khowai: { latitude: 23.2991, longitude: 91.6699 },
              NorthTripura: { latitude: 24.0911, longitude: 92.0414 },
              Sipahijala: { latitude: 23.6362, longitude: 91.2254 },
              Gomati: { latitude: 23.3951, longitude: 91.4822 },
              Jirania: { latitude: 23.8831, longitude: 91.3651 },
              Amarpur: { latitude: 23.2973, longitude: 91.6882 },
              Bishalgarh: { latitude: 23.2712, longitude: 91.1795 },
            },
          },
          UttarPradesh: {
            latitude: 26.8467,
            longitude: 80.9462,
            subDistricts: {
              Lucknow: { latitude: 26.8467, longitude: 80.9462 },
              Kanpur: { latitude: 26.4499, longitude: 80.3319 },
              Varanasi: { latitude: 25.3176, longitude: 82.9739 },
              Agra: { latitude: 27.1767, longitude: 78.0081 },
              Allahabad: { latitude: 25.4358, longitude: 81.8463 },
              Ghaziabad: { latitude: 28.6692, longitude: 77.4538 },
              Noida: { latitude: 28.5355, longitude: 77.391 },
              Meerut: { latitude: 28.9845, longitude: 77.705 },
              Mathura: { latitude: 27.4924, longitude: 77.6747 },
              Aligarh: { latitude: 27.8974, longitude: 78.088 },
              Bareilly: { latitude: 28.346, longitude: 79.8305 },
              Moradabad: { latitude: 28.8382, longitude: 78.7762 },
              Muzaffarnagar: { latitude: 29.467, longitude: 77.7037 },
              Rampur: { latitude: 28.8073, longitude: 79.0247 },
              Saharanpur: { latitude: 29.9716, longitude: 77.549 },
              Jhansi: { latitude: 25.4484, longitude: 78.568 },
              Etawah: { latitude: 26.7786, longitude: 79.0209 },
              Unnao: { latitude: 26.5505, longitude: 80.5236 },
              Jaunpur: { latitude: 25.6875, longitude: 82.6835 },
              Sitapur: { latitude: 27.5513, longitude: 80.7123 },
              Bijnor: { latitude: 29.3778, longitude: 78.1342 },
              Shahjahanpur: { latitude: 27.8865, longitude: 79.9072 },
              Farrukhabad: { latitude: 27.3917, longitude: 79.582 },
              AmbedkarNagar: { latitude: 26.4558, longitude: 82.4806 },
              Maharajganj: { latitude: 27.3565, longitude: 83.5672 },
              Gonda: { latitude: 27.1228, longitude: 81.9687 },
              Basti: { latitude: 26.8774, longitude: 82.7835 },
              Siddharthnagar: { latitude: 27.2856, longitude: 82.7126 },
              Ballia: { latitude: 25.7467, longitude: 84.1353 },
              Deoria: { latitude: 26.496, longitude: 83.7823 },
              Firozabad: { latitude: 27.1548, longitude: 78.3966 },
              Chitrakoot: { latitude: 25.1997, longitude: 80.8497 },
              RaeBareli: { latitude: 26.2275, longitude: 81.2389 },
              Kannauj: { latitude: 27.0558, longitude: 79.9169 },
              Etah: { latitude: 27.5901, longitude: 78.6667 },
              Hardoi: { latitude: 27.4136, longitude: 80.1295 },
              Azamgarh: { latitude: 26.0604, longitude: 83.1823 },
              SantKabirNagar: { latitude: 26.7471, longitude: 83.094 },
              Kushinagar: { latitude: 26.7487, longitude: 83.8426 },
              Barabanki: { latitude: 26.8794, longitude: 81.2502 },
              Sultanpur: { latitude: 26.2558, longitude: 82.0737 },
              Bahraich: { latitude: 27.5546, longitude: 81.6552 },
              Shravasti: { latitude: 27.5074, longitude: 81.5678 },
              Hapur: { latitude: 28.7249, longitude: 77.7802 },
              Mahoba: { latitude: 25.289, longitude: 79.8961 },
              Lalitpur: { latitude: 24.6895, longitude: 78.4149 },
            },
          },
          Uttarakhand: {
            latitude: 30.0668,
            longitude: 79.0193,
            subDistricts: {
              Dehradun: { latitude: 30.3165, longitude: 78.0322 },
              Nainital: { latitude: 29.3801, longitude: 79.4623 },
              Haridwar: { latitude: 29.9457, longitude: 78.1642 },
              UdhamSinghNagar: { latitude: 28.9941, longitude: 79.4796 },
              PauriGarhwal: { latitude: 30.0667, longitude: 78.7136 },
              Almora: { latitude: 29.5983, longitude: 79.6252 },
              TehriGarhwal: { latitude: 30.3207, longitude: 78.4352 },
              Champawat: { latitude: 29.1053, longitude: 80.0739 },
              Bageshwar: { latitude: 29.4744, longitude: 79.728 },
              Rudraprayag: { latitude: 30.3414, longitude: 78.9982 },
              Uttarkashi: { latitude: 30.7289, longitude: 78.4421 },
              Garhwal: { latitude: 30.1167, longitude: 78.4167 },
              Bhimtal: { latitude: 29.3656, longitude: 79.6264 },
              Rishikesh: { latitude: 30.0869, longitude: 78.2686 },
              Lansdowne: { latitude: 29.7549, longitude: 78.5745 },
              Khatima: { latitude: 28.9726, longitude: 79.924 },
              Vikasnagar: { latitude: 30.3583, longitude: 77.952 },
              Kotdwar: { latitude: 29.7636, longitude: 78.3144 },
              Chamba: { latitude: 30.0985, longitude: 78.5014 },
              Haldwani: { latitude: 29.2187, longitude: 79.514 },
              Dhanaulti: { latitude: 30.4878, longitude: 78.3575 },
              Bhelurpura: { latitude: 29.8574, longitude: 79.0763 },
              Harshil: { latitude: 30.9497, longitude: 78.6357 },
            },
          },
          WestBengal: {
            latitude: 22.9868,
            longitude: 87.855,
            subDistricts: {
              Kolkata: { latitude: 22.5726, longitude: 88.3639 },
              Howrah: { latitude: 22.5897, longitude: 88.2636 },
              Darjeeling: { latitude: 27.0357, longitude: 88.2632 },
              Murshidabad: { latitude: 24.1667, longitude: 88.2782 },
              Maldah: { latitude: 25.0231, longitude: 88.1387 },
              Purulia: { latitude: 23.3603, longitude: 86.6855 },
              Bankura: { latitude: 23.2371, longitude: 87.0672 },
              Bardhaman: { latitude: 23.2547, longitude: 87.8597 },
              Hooghly: { latitude: 22.9022, longitude: 88.3879 },
              Nadia: { latitude: 23.8257, longitude: 88.5697 },
              Birbhum: { latitude: 23.9736, longitude: 87.6953 },
              North24Parganas: { latitude: 22.766, longitude: 88.6984 },
              South24Parganas: { latitude: 22.2587, longitude: 88.4051 },
              PurbaMedinipur: { latitude: 22.0737, longitude: 88.4682 },
              PaschimMedinipur: { latitude: 22.3999, longitude: 87.9758 },
              CoochBehar: { latitude: 26.1306, longitude: 89.4442 },
              Alipurduar: { latitude: 26.4839, longitude: 89.5333 },
              Jhargram: { latitude: 22.4933, longitude: 87.6607 },
              DakshinDinajpur: { latitude: 25.6096, longitude: 88.7621 },
              UttarDinajpur: { latitude: 25.7167, longitude: 88.1417 },
              Kalimpong: { latitude: 27.0667, longitude: 88.467 },
              Jalpaiguri: { latitude: 26.5257, longitude: 88.7328 },
            },
          },
          AndamanandNicobarIslands: {
            latitude: 11.7401,
            longitude: 92.6586,
            subDistricts: {
              Nicobar: { latitude: 7.501, longitude: 93.6965 },
              SouthAndaman: { latitude: 10.6803, longitude: 92.6181 },
              NorthAndMiddleAndaman: { latitude: 14.0692, longitude: 92.9315 },
            },
          },
          Chandigarh: {
            latitude: 30.7333,
            longitude: 76.7794,
            subDistricts: {
              Chandigarh: { latitude: 30.7333, longitude: 76.7794 },
            },
          },
          DadraandNagarHaveliandDamandDiu: {
            latitude: 20.1807,
            longitude: 73.0169,
            subDistricts: {
              Daman: { latitude: 20.3974, longitude: 72.8325 },
              Dadra: { latitude: 20.2703, longitude: 73.013 },
              NagarHaveli: { latitude: 20.1807, longitude: 73.0169 },
            },
          },
          Lakshadweep: {
            latitude: 10.5667,
            longitude: 72.6417,
            subDistricts: {
              Lakshadweep: { latitude: 10.5667, longitude: 72.6417 },
            },
          },
          Delhi: {
            latitude: 28.6139,
            longitude: 77.209,
            subDistricts: {
              CentralDelhi: { latitude: 28.6139, longitude: 77.209 },
              EastDelhi: { latitude: 28.6448, longitude: 77.3123 },
              NewDelhi: { latitude: 28.6139, longitude: 77.209 },
              NorthDelhi: { latitude: 28.7041, longitude: 77.1025 },
              NorthEastDelhi: { latitude: 28.6747, longitude: 77.2492 },
              NorthWestDelhi: { latitude: 28.7221, longitude: 77.1026 },
              Shahdara: { latitude: 28.6809, longitude: 77.259 },
              SouthDelhi: { latitude: 28.5274, longitude: 77.2699 },
              SouthWestDelhi: { latitude: 28.5346, longitude: 77.0931 },
              WestDelhi: { latitude: 28.6354, longitude: 77.0581 },
            },
          },
          Puducherry: {
            latitude: 11.9416,
            longitude: 79.8083,
            subDistricts: {
              Puducherry: { latitude: 11.9416, longitude: 79.8083 },
              Karaikal: { latitude: 10.926, longitude: 79.8386 },
              Mahe: { latitude: 11.8026, longitude: 75.5205 },
              Yanam: { latitude: 16.7833, longitude: 82.2167 },
            },
          },
          Ladakh: {
            latitude: 34.1526,
            longitude: 77.5772,
            subDistricts: {
              Leh: { latitude: 34.1526, longitude: 77.5772 },
              Kargil: { latitude: 34.5535, longitude: 76.874 },
            },
          },
          DamanandDiu: {
            latitude: 20.3974,
            longitude: 72.8325,
            subDistricts: {
              Daman: { latitude: 20.3974, longitude: 72.8325 },
              Diu: { latitude: 20.7117, longitude: 70.9689 },
            },
          },
        },
      },

      United_States: {
        latitude: 37.0902,
        longitude: -95.7129,
        subDistricts: {
          Alabama: {
            latitude: 32.3182,
            longitude: -86.9023,
            subDistricts: {
              Montgomery: { latitude: 32.3792, longitude: -86.3077 },
              Birmingham: { latitude: 33.5207, longitude: -86.8025 },
            },
          },
          Alaska: {
            latitude: 64.2008,
            longitude: -149.4937,
            subDistricts: {
              Juneau: { latitude: 58.3019, longitude: -134.4197 },
              Anchorage: { latitude: 61.2181, longitude: -149.9003 },
            },
          },
          Arizona: {
            latitude: 33.7298,
            longitude: -111.4312,
            subDistricts: {
              Phoenix: { latitude: 33.4484, longitude: -112.074 },
              Tucson: { latitude: 32.2226, longitude: -110.9747 },
            },
          },
          Kentucky: {
            latitude: 37.6681,
            longitude: -84.6701,
            subDistricts: {
              Frankfort: { latitude: 38.2009, longitude: -84.8733 },
              Louisville: { latitude: 38.2527, longitude: -85.7585 },
            },
          },
          Louisiana: {
            latitude: 31.1695,
            longitude: -91.8678,
            subDistricts: {
              BatonRouge: { latitude: 30.4515, longitude: -91.1871 },
              NewOrleans: { latitude: 29.9511, longitude: -90.0715 },
            },
          },
          Maine: {
            latitude: 44.6939,
            longitude: -69.3819,
            subDistricts: {
              Augusta: { latitude: 44.3106, longitude: -69.7795 },
              Portland: { latitude: 43.6591, longitude: -70.2568 },
            },
          },
          Maryland: {
            latitude: 39.0639,
            longitude: -76.8021,
            subDistricts: {
              Annapolis: { latitude: 38.9784, longitude: -76.4922 },
              Baltimore: { latitude: 39.2904, longitude: -76.6122 },
            },
          },
          Massachusetts: {
            latitude: 42.2304,
            longitude: -71.5301,
            subDistricts: {
              Boston: { latitude: 42.3601, longitude: -71.0589 },
              Worcester: { latitude: 42.2626, longitude: -71.8023 },
            },
          },
          Michigan: {
            latitude: 44.3148,
            longitude: -85.6024,
            subDistricts: {
              Lansing: { latitude: 42.7325, longitude: -84.5555 },
              Detroit: { latitude: 42.3314, longitude: -83.0458 },
            },
          },
          Minnesota: {
            latitude: 46.7296,
            longitude: -94.6859,
            subDistricts: {
              SaintPaul: { latitude: 44.9537, longitude: -93.09 },
              Minneapolis: { latitude: 44.9778, longitude: -93.265 },
            },
          },
          Mississippi: {
            latitude: 32.3547,
            longitude: -89.3985,
            subDistricts: {
              Jackson: { latitude: 32.2988, longitude: -90.1848 },
              Gulfport: { latitude: 30.3674, longitude: -89.0928 },
            },
          },
          Missouri: {
            latitude: 38.4561,
            longitude: -92.2884,
            subDistricts: {
              JeffersonCity: { latitude: 38.5767, longitude: -92.1735 },
              KansasCity: { latitude: 39.0997, longitude: -94.5786 },
            },
          },
          Montana: {
            latitude: 46.8797,
            longitude: -110.3626,
            subDistricts: {
              Helena: { latitude: 46.5891, longitude: -112.0391 },
              Billings: { latitude: 45.7833, longitude: -108.5007 },
            },
          },
          Nebraska: {
            latitude: 41.4925,
            longitude: -99.9018,
            subDistricts: {
              Lincoln: { latitude: 40.8136, longitude: -96.7026 },
              Omaha: { latitude: 41.2565, longitude: -95.9345 },
            },
          },
          Nevada: {
            latitude: 38.8026,
            longitude: -116.4194,
            subDistricts: {
              CarsonCity: { latitude: 39.1638, longitude: -119.7674 },
              LasVegas: { latitude: 36.1699, longitude: -115.1398 },
            },
          },
          NewHampshire: {
            latitude: 43.1939,
            longitude: -71.5724,
            subDistricts: {
              Concord: { latitude: 43.2081, longitude: -71.5376 },
              Manchester: { latitude: 42.9956, longitude: -71.4548 },
            },
          },
          NewJersey: {
            latitude: 40.0583,
            longitude: -74.4057,
            subDistricts: {
              Trenton: { latitude: 40.2206, longitude: -74.7597 },
              Newark: { latitude: 40.7357, longitude: -74.1724 },
            },
          },
          NewMexico: {
            latitude: 34.5199,
            longitude: -105.8701,
            subDistricts: {
              SantaFe: { latitude: 35.687, longitude: -105.9378 },
              Albuquerque: { latitude: 35.0844, longitude: -106.6504 },
            },
          },
          NewYork: {
            latitude: 43.2994,
            longitude: -74.2179,
            subDistricts: {
              Albany: { latitude: 42.6526, longitude: -73.7562 },
              NewYorkCity: { latitude: 40.7128, longitude: -74.006 },
              Buffalo: { latitude: 42.8864, longitude: -78.8784 },
            },
          },
          NorthCarolina: {
            latitude: 35.7596,
            longitude: -79.0193,
            subDistricts: {
              Raleigh: { latitude: 35.7796, longitude: -78.6382 },
              Charlotte: { latitude: 35.2271, longitude: -80.8431 },
            },
          },
          NorthDakota: {
            latitude: 47.5515,
            longitude: -101.002,
            subDistricts: {
              Bismarck: { latitude: 46.8083, longitude: -100.7837 },
              Fargo: { latitude: 46.8772, longitude: -96.7898 },
            },
          },
          Ohio: {
            latitude: 40.4173,
            longitude: -82.9071,
            subDistricts: {
              Columbus: { latitude: 39.9612, longitude: -82.9988 },
              Cleveland: { latitude: 41.4993, longitude: -81.6944 },
            },
          },
          Oklahoma: {
            latitude: 35.0078,
            longitude: -97.0929,
            subDistricts: {
              OklahomaCity: { latitude: 35.4676, longitude: -97.5164 },
              Tulsa: { latitude: 36.154, longitude: -95.9928 },
            },
          },
          Oregon: {
            latitude: 44.572,
            longitude: -122.0709,
            subDistricts: {
              Salem: { latitude: 44.9429, longitude: -123.0351 },
              Portland: { latitude: 45.5155, longitude: -122.6789 },
            },
          },
          Pennsylvania: {
            latitude: 40.5908,
            longitude: -77.2098,
            subDistricts: {
              Harrisburg: { latitude: 40.2732, longitude: -76.8867 },
              Philadelphia: { latitude: 39.9526, longitude: -75.1652 },
            },
          },
          RhodeIsland: {
            latitude: 41.6809,
            longitude: -71.5118,
            subDistricts: {
              Providence: { latitude: 41.824, longitude: -71.4128 },
              Newport: { latitude: 41.4901, longitude: -71.3128 },
            },
          },
          SouthCarolina: {
            latitude: 33.8361,
            longitude: -81.1637,
            subDistricts: {
              Columbia: { latitude: 34.0007, longitude: -81.0348 },
              Charleston: { latitude: 32.7765, longitude: -79.9311 },
            },
          },
          SouthDakota: {
            latitude: 43.9695,
            longitude: -99.9018,
            subDistricts: {
              Pierre: { latitude: 44.3683, longitude: -100.3509 },
              SiouxFalls: { latitude: 43.5446, longitude: -96.7311 },
            },
          },
          Tennessee: {
            latitude: 35.7478,
            longitude: -86.6923,
            subDistricts: {
              Nashville: { latitude: 36.1627, longitude: -86.7816 },
              Memphis: { latitude: 35.1495, longitude: -90.049 },
            },
          },
          Texas: {
            latitude: 31.9686,
            longitude: -99.9018,
            subDistricts: {
              Austin: { latitude: 30.2672, longitude: -97.7431 },
              Houston: { latitude: 29.7604, longitude: -95.3698 },
              Dallas: { latitude: 32.7767, longitude: -96.797 },
            },
          },
          Utah: {
            latitude: 39.321,
            longitude: -111.0937,
            subDistricts: {
              SaltLakeCity: { latitude: 40.7608, longitude: -111.891 },
              WestValleyCity: { latitude: 40.6916, longitude: -112.0011 },
            },
          },
          Vermont: {
            latitude: 44.5588,
            longitude: -72.5778,
            subDistricts: {
              Montpelier: { latitude: 44.2601, longitude: -72.5754 },
              Burlington: { latitude: 44.4759, longitude: -73.2121 },
            },
          },
          Virginia: {
            latitude: 37.4316,
            longitude: -78.6569,
            subDistricts: {
              Richmond: { latitude: 37.5407, longitude: -77.436 },
              VirginiaBeach: { latitude: 36.8529, longitude: -75.978 },
            },
          },
          Washington: {
            latitude: 47.7511,
            longitude: -120.7401,
            subDistricts: {
              Olympia: { latitude: 47.0379, longitude: -122.9007 },
              Seattle: { latitude: 47.6062, longitude: -122.3321 },
            },
          },
          WestVirginia: {
            latitude: 38.5976,
            longitude: -80.4549,
            subDistricts: {
              Charleston: { latitude: 38.3498, longitude: -81.6326 },
              Huntington: { latitude: 38.4192, longitude: -82.4452 },
            },
          },
          Wisconsin: {
            latitude: 44.2849,
            longitude: -89.6385,
            subDistricts: {
              Madison: { latitude: 43.0731, longitude: -89.4012 },
              Milwaukee: { latitude: 43.0389, longitude: -87.9065 },
            },
          },
          Wyoming: {
            latitude: 42.7475,
            longitude: -107.2085,
            subDistricts: {
              Cheyenne: { latitude: 41.14, longitude: -104.8202 },
              Casper: { latitude: 42.8666, longitude: -106.3131 },
            },
          },
        },
      },
      France: {
        latitude: 46.2276,
        longitude: 2.2137,
        subDistricts: {
          AuvergneRhoneAlpes: {
            latitude: 45.4471,
            longitude: 4.3853,
            subDistricts: {
              Lyon: { latitude: 45.7578, longitude: 4.832 },
              Grenoble: { latitude: 45.1885, longitude: 5.7245 },
              ClermontFerrand: { latitude: 45.7772, longitude: 3.087 },
            },
          },
          BourgogneFrancheComte: {
            latitude: 47.2805,
            longitude: 4.9994,
            subDistricts: {
              Dijon: { latitude: 47.322, longitude: 5.0415 },
              Besancon: { latitude: 47.2378, longitude: 6.0241 },
            },
          },
          Brittany: {
            latitude: 48.202,
            longitude: -2.9326,
            subDistricts: {
              Rennes: { latitude: 48.1173, longitude: -1.6778 },
              Brest: { latitude: 48.3904, longitude: -4.4861 },
            },
          },
          CentreValDeLoire: {
            latitude: 47.7515,
            longitude: 1.6756,
            subDistricts: {
              Orleans: { latitude: 47.9029, longitude: 1.9039 },
              Tours: { latitude: 47.3941, longitude: 0.6848 },
            },
          },
          GrandEst: {
            latitude: 48.6998,
            longitude: 6.1878,
            subDistricts: {
              Strasbourg: { latitude: 48.5734, longitude: 7.7521 },
              Reims: { latitude: 49.2583, longitude: 4.0317 },
              Metz: { latitude: 49.1193, longitude: 6.1757 },
            },
          },
          HautsDeFrance: {
            latitude: 50.4801,
            longitude: 2.7937,
            subDistricts: {
              Lille: { latitude: 50.6292, longitude: 3.0573 },
              Amiens: { latitude: 49.8941, longitude: 2.2957 },
            },
          },
          IleDeFrance: {
            latitude: 48.8566,
            longitude: 2.3522,
            subDistricts: {
              Paris: { latitude: 48.8566, longitude: 2.3522 },
              Versailles: { latitude: 48.8048, longitude: 2.1203 },
            },
          },
          Normandy: {
            latitude: 49.1829,
            longitude: 0.3707,
            subDistricts: {
              Rouen: { latitude: 49.4431, longitude: 1.0993 },
              Caen: { latitude: 49.1829, longitude: -0.3707 },
            },
          },
          NouvelleAquitaine: {
            latitude: 45.7089,
            longitude: -0.3628,
            subDistricts: {
              Bordeaux: { latitude: 44.8378, longitude: -0.5792 },
              Limoges: { latitude: 45.8315, longitude: 1.2578 },
            },
          },
          Occitanie: {
            latitude: 43.8927,
            longitude: 3.2828,
            subDistricts: {
              Toulouse: { latitude: 43.6047, longitude: 1.4442 },
              Montpellier: { latitude: 43.6108, longitude: 3.8767 },
            },
          },
          PaysDeLaLoire: {
            latitude: 47.4784,
            longitude: -0.5632,
            subDistricts: {
              Nantes: { latitude: 47.2184, longitude: -1.5536 },
              Angers: { latitude: 47.4784, longitude: -0.5632 },
            },
          },
          ProvenceAlpesCoteDAzur: {
            latitude: 43.9351,
            longitude: 6.0679,
            subDistricts: {
              Marseille: { latitude: 43.2965, longitude: 5.3698 },
              Nice: { latitude: 43.7102, longitude: 7.262 },
            },
          },
          Corsica: {
            latitude: 42.0396,
            longitude: 9.0129,
            subDistricts: {
              Ajaccio: { latitude: 41.9192, longitude: 8.7386 },
              Bastia: { latitude: 42.6976, longitude: 9.4508 },
            },
          },
          // Adding the overseas regions (DOM-TOM)
          Guadeloupe: {
            latitude: 16.265,
            longitude: -61.551,
            subDistricts: {
              BasseTerre: { latitude: 16.0341, longitude: -61.7074 },
              Pointe_A_Pitre: { latitude: 16.241, longitude: -61.534 },
            },
          },
          Martinique: {
            latitude: 14.6415,
            longitude: -61.0242,
            subDistricts: {
              FortDeFrance: { latitude: 14.6104, longitude: -61.0588 },
              LeTrinite: { latitude: 14.7376, longitude: -60.9658 },
            },
          },
          Guyane: {
            latitude: 3.9339,
            longitude: -53.1258,
            subDistricts: {
              Cayenne: { latitude: 4.9227, longitude: -52.3269 },
              Kourou: { latitude: 5.1598, longitude: -52.6498 },
            },
          },
          Reunion: {
            latitude: -21.1151,
            longitude: 55.5364,
            subDistricts: {
              SaintDenis: { latitude: -20.8789, longitude: 55.4481 },
              SaintPierre: { latitude: -21.3393, longitude: 55.4781 },
            },
          },
          Mayotte: {
            latitude: -12.8275,
            longitude: 45.1662,
            subDistricts: {
              Mamoudzou: { latitude: -12.7823, longitude: 45.2279 },
              Dzaoudzi: { latitude: -12.7834, longitude: 45.2749 },
            },
          },
        },
      },
      Germany: {
        latitude: 51.1657,
        longitude: 10.4515,
        subDistricts: {
          BadenWurttemberg: {
            latitude: 48.6616,
            longitude: 9.3501,
            subDistricts: {
              Stuttgart: { latitude: 48.7758, longitude: 9.1829 },
              Karlsruhe: { latitude: 49.0069, longitude: 8.4037 },
              Mannheim: { latitude: 49.4875, longitude: 8.466 },
              Freiburg: { latitude: 47.999, longitude: 7.8421 },
            },
          },
          Bavaria: {
            latitude: 48.7904,
            longitude: 11.4979,
            subDistricts: {
              Munich: { latitude: 48.1351, longitude: 11.582 },
              Nuremberg: { latitude: 49.4521, longitude: 11.0767 },
              Augsburg: { latitude: 48.3705, longitude: 10.8978 },
              Regensburg: { latitude: 49.0134, longitude: 12.1016 },
            },
          },
          Berlin: {
            latitude: 52.52,
            longitude: 13.405,
            subDistricts: {
              Mitte: { latitude: 52.5244, longitude: 13.4105 },
              Charlottenburg: { latitude: 52.5157, longitude: 13.3054 },
              Kreuzberg: { latitude: 52.4977, longitude: 13.4174 },
              Spandau: { latitude: 52.5344, longitude: 13.2 },
            },
          },
          Brandenburg: {
            latitude: 52.4125,
            longitude: 12.5316,
            subDistricts: {
              Potsdam: { latitude: 52.3906, longitude: 13.0645 },
              Cottbus: { latitude: 51.7567, longitude: 14.334 },
              Frankfurt_Oder: { latitude: 52.3412, longitude: 14.55 },
            },
          },
          Bremen: {
            latitude: 53.0793,
            longitude: 8.8017,
            subDistricts: {
              Bremen_City: { latitude: 53.0793, longitude: 8.8017 },
              Bremerhaven: { latitude: 53.5395, longitude: 8.5809 },
            },
          },
          Hamburg: {
            latitude: 53.5511,
            longitude: 9.9937,
            subDistricts: {
              Hamburg_Mitte: { latitude: 53.551, longitude: 10.0045 },
              Altona: { latitude: 53.551, longitude: 9.937 },
              Bergedorf: { latitude: 53.4869, longitude: 10.2279 },
            },
          },
          Hesse: {
            latitude: 50.6521,
            longitude: 9.1624,
            subDistricts: {
              Frankfurt: { latitude: 50.1109, longitude: 8.6821 },
              Wiesbaden: { latitude: 50.0782, longitude: 8.2398 },
              Kassel: { latitude: 51.3127, longitude: 9.4797 },
            },
          },
          MecklenburgVorpommern: {
            latitude: 53.6127,
            longitude: 12.4297,
            subDistricts: {
              Schwerin: { latitude: 53.6355, longitude: 11.4012 },
              Rostock: { latitude: 54.0924, longitude: 12.0991 },
              Stralsund: { latitude: 54.315, longitude: 13.0916 },
            },
          },
          LowerSaxony: {
            latitude: 52.6367,
            longitude: 9.8451,
            subDistricts: {
              Hannover: { latitude: 52.3759, longitude: 9.732 },
              Braunschweig: { latitude: 52.2689, longitude: 10.5267 },
              Oldenburg: { latitude: 53.1434, longitude: 8.2146 },
            },
          },
          NorthRhineWestphalia: {
            latitude: 51.4332,
            longitude: 7.6616,
            subDistricts: {
              Dusseldorf: { latitude: 51.2277, longitude: 6.7735 },
              Cologne: { latitude: 50.9375, longitude: 6.9603 },
              Dortmund: { latitude: 51.5136, longitude: 7.4653 },
              Essen: { latitude: 51.4556, longitude: 7.0116 },
            },
          },
          RhinelandPalatinate: {
            latitude: 49.9129,
            longitude: 7.4497,
            subDistricts: {
              Mainz: { latitude: 49.9929, longitude: 8.2473 },
              Ludwigshafen: { latitude: 49.4741, longitude: 8.4349 },
              Koblenz: { latitude: 50.3569, longitude: 7.594 },
            },
          },
          Saarland: {
            latitude: 49.3964,
            longitude: 7.023,
            subDistricts: {
              Saarbrucken: { latitude: 49.2371, longitude: 6.9959 },
              Neunkirchen: { latitude: 49.35, longitude: 7.1833 },
            },
          },
          Saxony: {
            latitude: 51.1045,
            longitude: 13.2017,
            subDistricts: {
              Dresden: { latitude: 51.0504, longitude: 13.7373 },
              Leipzig: { latitude: 51.3397, longitude: 12.3731 },
              Chemnitz: { latitude: 50.8278, longitude: 12.9242 },
            },
          },
          SaxonyAnhalt: {
            latitude: 51.9503,
            longitude: 11.6923,
            subDistricts: {
              Magdeburg: { latitude: 52.1205, longitude: 11.6276 },
              Halle: { latitude: 51.4969, longitude: 11.9688 },
              Dessau: { latitude: 51.8364, longitude: 12.2469 },
            },
          },
          SchleswigHolstein: {
            latitude: 54.2194,
            longitude: 9.6961,
            subDistricts: {
              Kiel: { latitude: 54.3233, longitude: 10.1228 },
              Lubeck: { latitude: 53.8654, longitude: 10.6866 },
              Flensburg: { latitude: 54.7837, longitude: 9.436 },
            },
          },
          Thuringia: {
            latitude: 50.8614,
            longitude: 11.0522,
            subDistricts: {
              Erfurt: { latitude: 50.9848, longitude: 11.0299 },
              Jena: { latitude: 50.9272, longitude: 11.5892 },
              Gera: { latitude: 50.8806, longitude: 12.0826 },
            },
          },
        },
      },
      Italy: {
        latitude: 41.8719,
        longitude: 12.5674,
        subDistricts: {
          Abruzzo: {
            latitude: 42.3504,
            longitude: 13.3995,
            subDistricts: {
              LAquila: { latitude: 42.3498, longitude: 13.3995 },
              Pescara: { latitude: 42.4617, longitude: 14.216 },
              Chieti: { latitude: 42.3512, longitude: 14.167 },
            },
          },
          Basilicata: {
            latitude: 40.6333,
            longitude: 15.8,
            subDistricts: {
              Potenza: { latitude: 40.6404, longitude: 15.8056 },
              Matera: { latitude: 40.6667, longitude: 16.6 },
            },
          },
          Calabria: {
            latitude: 38.9,
            longitude: 16.3,
            subDistricts: {
              Catanzaro: { latitude: 38.9097, longitude: 16.5877 },
              ReggioCalabria: { latitude: 38.1147, longitude: 15.649 },
              Cosenza: { latitude: 39.2974, longitude: 16.2539 },
            },
          },
          Campania: {
            latitude: 40.8333,
            longitude: 14.25,
            subDistricts: {
              Naples: { latitude: 40.8518, longitude: 14.2681 },
              Salerno: { latitude: 40.6824, longitude: 14.768 },
              Caserta: { latitude: 41.0733, longitude: 14.3267 },
            },
          },
          EmiliaRomagna: {
            latitude: 44.5,
            longitude: 11.0,
            subDistricts: {
              Bologna: { latitude: 44.4949, longitude: 11.3426 },
              Modena: { latitude: 44.6471, longitude: 10.9252 },
              Parma: { latitude: 44.8015, longitude: 10.3279 },
            },
          },
          FriuliVeneziaGiulia: {
            latitude: 46.0667,
            longitude: 13.2333,
            subDistricts: {
              Trieste: { latitude: 45.6495, longitude: 13.7768 },
              Udine: { latitude: 46.0711, longitude: 13.2346 },
              Pordenone: { latitude: 45.9563, longitude: 12.6574 },
            },
          },
          Lazio: {
            latitude: 41.9,
            longitude: 12.7,
            subDistricts: {
              Rome: { latitude: 41.9028, longitude: 12.4964 },
              Latina: { latitude: 41.4675, longitude: 12.9039 },
              Viterbo: { latitude: 42.4207, longitude: 12.1056 },
            },
          },
          Liguria: {
            latitude: 44.4167,
            longitude: 8.95,
            subDistricts: {
              Genoa: { latitude: 44.4056, longitude: 8.9463 },
              LaSpezia: { latitude: 44.1024, longitude: 9.8244 },
              Savona: { latitude: 44.3073, longitude: 8.4815 },
            },
          },
          Lombardy: {
            latitude: 45.4667,
            longitude: 9.19,
            subDistricts: {
              Milan: { latitude: 45.4642, longitude: 9.19 },
              Bergamo: { latitude: 45.6983, longitude: 9.6773 },
              Brescia: { latitude: 45.5416, longitude: 10.2118 },
            },
          },
          Marche: {
            latitude: 43.6167,
            longitude: 13.5167,
            subDistricts: {
              Ancona: { latitude: 43.6158, longitude: 13.5189 },
              Pesaro: { latitude: 43.9098, longitude: 12.9131 },
              Macerata: { latitude: 43.2988, longitude: 13.4534 },
            },
          },
          Molise: {
            latitude: 41.6833,
            longitude: 14.75,
            subDistricts: {
              Campobasso: { latitude: 41.5603, longitude: 14.6626 },
              Isernia: { latitude: 41.5936, longitude: 14.2333 },
            },
          },
          Piedmont: {
            latitude: 45.0667,
            longitude: 7.7,
            subDistricts: {
              Turin: { latitude: 45.0703, longitude: 7.6869 },
              Novara: { latitude: 45.4467, longitude: 8.6214 },
              Alessandria: { latitude: 44.9127, longitude: 8.6152 },
            },
          },
          Puglia: {
            latitude: 41.0,
            longitude: 16.5,
            subDistricts: {
              Bari: { latitude: 41.1171, longitude: 16.8719 },
              Taranto: { latitude: 40.4647, longitude: 17.2469 },
              Lecce: { latitude: 40.3516, longitude: 18.1718 },
            },
          },
          Sardinia: {
            latitude: 40.0,
            longitude: 9.0,
            subDistricts: {
              Cagliari: { latitude: 39.2238, longitude: 9.1217 },
              Sassari: { latitude: 40.7259, longitude: 8.5556 },
              Nuoro: { latitude: 40.3214, longitude: 9.3289 },
            },
          },
          Sicily: {
            latitude: 37.5,
            longitude: 14.0,
            subDistricts: {
              Palermo: { latitude: 38.1157, longitude: 13.3615 },
              Catania: { latitude: 37.5079, longitude: 15.083 },
              Messina: { latitude: 38.1938, longitude: 15.554 },
            },
          },
          Tuscany: {
            latitude: 43.7711,
            longitude: 11.2486,
            subDistricts: {
              Florence: { latitude: 43.7696, longitude: 11.2558 },
              Pisa: { latitude: 43.7228, longitude: 10.4017 },
              Siena: { latitude: 43.3188, longitude: 11.3308 },
            },
          },
          TrentinoAltoAdige: {
            latitude: 46.0667,
            longitude: 11.1167,
            subDistricts: {
              Trento: { latitude: 46.0748, longitude: 11.1217 },
              Bolzano: { latitude: 46.4983, longitude: 11.3548 },
            },
          },
          Umbria: {
            latitude: 43.1,
            longitude: 12.39,
            subDistricts: {
              Perugia: { latitude: 43.1107, longitude: 12.3908 },
              Terni: { latitude: 42.5675, longitude: 12.6461 },
            },
          },
          ValleDAosta: {
            latitude: 45.7367,
            longitude: 7.32,
            subDistricts: {
              Aosta: { latitude: 45.7371, longitude: 7.3199 },
            },
          },
          Veneto: {
            latitude: 45.4375,
            longitude: 12.3358,
            subDistricts: {
              Venice: { latitude: 45.4408, longitude: 12.3155 },
              Verona: { latitude: 45.4384, longitude: 10.9917 },
              Padua: { latitude: 45.4064, longitude: 11.8768 },
            },
          },
        },
      },
      Spain: {
        latitude: 40.4637,
        longitude: -3.7492,
        subDistricts: {
          Andalusia: {
            latitude: 37.5442,
            longitude: -4.7277,
            subDistricts: {
              Seville: { latitude: 37.3891, longitude: -5.9845 },
              Malaga: { latitude: 36.7213, longitude: -4.4213 },
              Granada: { latitude: 37.1773, longitude: -3.5986 },
              Cordoba: { latitude: 37.8882, longitude: -4.7794 },
              Cadiz: { latitude: 36.527, longitude: -6.2885 },
              Almeria: { latitude: 36.8381, longitude: -2.4597 },
              Jaen: { latitude: 37.7796, longitude: -3.7849 },
              Huelva: { latitude: 37.2571, longitude: -6.9495 },
            },
          },
          Aragon: {
            latitude: 41.5976,
            longitude: -0.9057,
            subDistricts: {
              Zaragoza: { latitude: 41.6488, longitude: -0.8891 },
              Huesca: { latitude: 42.1362, longitude: -0.4087 },
              Teruel: { latitude: 40.3456, longitude: -1.1065 },
            },
          },
          Asturias: {
            latitude: 43.3614,
            longitude: -5.8593,
            subDistricts: {
              Oviedo: { latitude: 43.3603, longitude: -5.8448 },
              Gijon: { latitude: 43.5322, longitude: -5.6611 },
              Aviles: { latitude: 43.5547, longitude: -5.9248 },
            },
          },
          BalearicIslands: {
            latitude: 39.6104,
            longitude: 2.9527,
            subDistricts: {
              PalmaDeMallorca: { latitude: 39.5696, longitude: 2.6502 },
              Ibiza: { latitude: 38.9067, longitude: 1.4206 },
              Menorca: { latitude: 39.9495, longitude: 4.1004 },
            },
          },
          BasqueCountry: {
            latitude: 42.9896,
            longitude: -2.6189,
            subDistricts: {
              Bilbao: { latitude: 43.263, longitude: -2.935 },
              SanSebastian: { latitude: 43.3183, longitude: -1.9812 },
              Vitoria: { latitude: 42.8462, longitude: -2.6722 },
            },
          },
          CanaryIslands: {
            latitude: 28.2916,
            longitude: -16.6291,
            subDistricts: {
              LasPalmas: { latitude: 28.1235, longitude: -15.4366 },
              SantaCruzDeTenerife: { latitude: 28.4636, longitude: -16.2518 },
              Fuerteventura: { latitude: 28.3587, longitude: -14.053 },
              Lanzarote: { latitude: 29.0469, longitude: -13.5891 },
            },
          },
          Cantabria: {
            latitude: 43.1828,
            longitude: -3.9878,
            subDistricts: {
              Santander: { latitude: 43.4623, longitude: -3.8099 },
              Torrelavega: { latitude: 43.3497, longitude: -4.0488 },
            },
          },
          CastileLaMancha: {
            latitude: 39.8628,
            longitude: -3.9503,
            subDistricts: {
              Toledo: { latitude: 39.8628, longitude: -4.0273 },
              Albacete: { latitude: 38.9942, longitude: -1.8564 },
              CiudadReal: { latitude: 38.9848, longitude: -3.9274 },
              Cuenca: { latitude: 40.0703, longitude: -2.1374 },
              Guadalajara: { latitude: 40.6324, longitude: -3.1666 },
            },
          },
          CastileAndLeon: {
            latitude: 41.8357,
            longitude: -4.3976,
            subDistricts: {
              Valladolid: { latitude: 41.6523, longitude: -4.7245 },
              Burgos: { latitude: 42.3439, longitude: -3.6969 },
              Salamanca: { latitude: 40.9701, longitude: -5.6635 },
              Leon: { latitude: 42.5987, longitude: -5.5671 },
              Zamora: { latitude: 41.5036, longitude: -5.7457 },
              Palencia: { latitude: 42.0096, longitude: -4.5288 },
              Avila: { latitude: 40.6567, longitude: -4.6998 },
              Segovia: { latitude: 40.9429, longitude: -4.1088 },
              Soria: { latitude: 41.7636, longitude: -2.4649 },
            },
          },
          Catalonia: {
            latitude: 41.5912,
            longitude: 1.5209,
            subDistricts: {
              Barcelona: { latitude: 41.3851, longitude: 2.1734 },
              Girona: { latitude: 41.9794, longitude: 2.8214 },
              Lleida: { latitude: 41.6176, longitude: 0.62 },
              Tarragona: { latitude: 41.1189, longitude: 1.2445 },
            },
          },
          Extremadura: {
            latitude: 39.1667,
            longitude: -6.1667,
            subDistricts: {
              Merida: { latitude: 38.9156, longitude: -6.3422 },
              Badajoz: { latitude: 38.8794, longitude: -6.9706 },
              Caceres: { latitude: 39.4753, longitude: -6.3724 },
            },
          },
          Galicia: {
            latitude: 42.5751,
            longitude: -8.1339,
            subDistricts: {
              Santiago: { latitude: 42.8782, longitude: -8.5448 },
              ACoruna: { latitude: 43.3713, longitude: -8.3959 },
              Vigo: { latitude: 42.2406, longitude: -8.7207 },
              Ourense: { latitude: 42.3364, longitude: -7.8638 },
              Lugo: { latitude: 43.0097, longitude: -7.5567 },
              Pontevedra: { latitude: 42.4314, longitude: -8.6444 },
            },
          },
          LaRioja: {
            latitude: 42.2871,
            longitude: -2.5396,
            subDistricts: {
              Logrono: { latitude: 42.4663, longitude: -2.4469 },
              Calahorra: { latitude: 42.3044, longitude: -1.9634 },
            },
          },
          Madrid: {
            latitude: 40.4168,
            longitude: -3.7038,
            subDistricts: {
              MadridCity: { latitude: 40.4168, longitude: -3.7038 },
              Mostoles: { latitude: 40.3227, longitude: -3.8658 },
              Alcala: { latitude: 40.4819, longitude: -3.3636 },
              Fuenlabrada: { latitude: 40.2837, longitude: -3.7937 },
            },
          },
          Murcia: {
            latitude: 37.9922,
            longitude: -1.1307,
            subDistricts: {
              MurciaCity: { latitude: 37.9922, longitude: -1.1307 },
              Cartagena: { latitude: 37.6257, longitude: -0.9967 },
              Lorca: { latitude: 37.6712, longitude: -1.6998 },
            },
          },
          Navarre: {
            latitude: 42.6954,
            longitude: -1.6761,
            subDistricts: {
              Pamplona: { latitude: 42.8125, longitude: -1.6458 },
              Tudela: { latitude: 42.0642, longitude: -1.6063 },
            },
          },
          ValencianCommunity: {
            latitude: 39.4697,
            longitude: -0.3774,
            subDistricts: {
              Valencia: { latitude: 39.4697, longitude: -0.3774 },
              Alicante: { latitude: 38.3452, longitude: -0.4815 },
              Castellon: { latitude: 39.9864, longitude: 0.0494 },
              Elche: { latitude: 38.2655, longitude: -0.6987 },
            },
          },
          // Autonomous Cities
          Ceuta: {
            latitude: 35.8894,
            longitude: -5.3213,
            subDistricts: {
              CeutaCity: { latitude: 35.8894, longitude: -5.3213 },
            },
          },
          Melilla: {
            latitude: 35.2923,
            longitude: -2.9381,
            subDistricts: {
              MelillaCity: { latitude: 35.2923, longitude: -2.9381 },
            },
          },
        },
      },

      United_Kingdom: {
        latitude: 55.3781,
        longitude: -3.436,
        subDistricts: {
          England: {
            latitude: 52.3555,
            longitude: -1.1743,
            subDistricts: {
              // South East England
              SouthEast: {
                latitude: 51.45,
                longitude: -0.59,
                subDistricts: {
                  Berkshire: { latitude: 51.4, longitude: -1.0 },
                  Buckinghamshire: { latitude: 51.8, longitude: -0.8 },
                  EastSussex: { latitude: 50.9, longitude: 0.2 },
                  Hampshire: { latitude: 51.05, longitude: -1.3 },
                  IsleOfWight: { latitude: 50.6736, longitude: -1.2967 },
                  Kent: { latitude: 51.2, longitude: 0.7167 },
                  Oxfordshire: { latitude: 51.75, longitude: -1.25 },
                  Surrey: { latitude: 51.25, longitude: -0.3667 },
                  WestSussex: { latitude: 50.9278, longitude: -0.4617 },
                },
              },
              // London
              London: {
                latitude: 51.5074,
                longitude: -0.1278,
                subDistricts: {
                  CentralLondon: { latitude: 51.5074, longitude: -0.1278 },
                  EastLondon: { latitude: 51.54, longitude: 0.0 },
                  NorthLondon: { latitude: 51.59, longitude: -0.12 },
                  SouthLondon: { latitude: 51.45, longitude: -0.1 },
                  WestLondon: { latitude: 51.51, longitude: -0.28 },
                },
              },
              // South West England
              SouthWest: {
                latitude: 50.7772,
                longitude: -3.9995,
                subDistricts: {
                  Bristol: { latitude: 51.4545, longitude: -2.5879 },
                  Cornwall: { latitude: 50.266, longitude: -5.0527 },
                  Devon: { latitude: 50.7156, longitude: -3.5309 },
                  Dorset: { latitude: 50.7488, longitude: -2.3445 },
                  Gloucestershire: { latitude: 51.8642, longitude: -2.238 },
                  Somerset: { latitude: 51.1052, longitude: -2.9262 },
                  Wiltshire: { latitude: 51.3492, longitude: -1.9927 },
                },
              },
              // East of England
              East: {
                latitude: 52.1911,
                longitude: 0.1927,
                subDistricts: {
                  Bedfordshire: { latitude: 52.1, longitude: -0.5 },
                  Cambridgeshire: { latitude: 52.2053, longitude: 0.1218 },
                  Essex: { latitude: 51.75, longitude: 0.5 },
                  Hertfordshire: { latitude: 51.8, longitude: -0.2 },
                  Norfolk: { latitude: 52.614, longitude: 0.8864 },
                  Suffolk: { latitude: 52.1872, longitude: 0.9708 },
                },
              },
              // West Midlands
              WestMidlands: {
                latitude: 52.4751,
                longitude: -1.8298,
                subDistricts: {
                  Birmingham: { latitude: 52.4862, longitude: -1.8904 },
                  Coventry: { latitude: 52.4068, longitude: -1.5197 },
                  Herefordshire: { latitude: 52.0765, longitude: -2.6544 },
                  Shropshire: { latitude: 52.6592, longitude: -2.7282 },
                  Staffordshire: { latitude: 52.8792, longitude: -2.0584 },
                  Warwickshire: { latitude: 52.2823, longitude: -1.5849 },
                  Worcestershire: { latitude: 52.192, longitude: -2.2215 },
                },
              },
              // East Midlands
              EastMidlands: {
                latitude: 52.8306,
                longitude: -1.3321,
                subDistricts: {
                  Derbyshire: { latitude: 53.1333, longitude: -1.6 },
                  Leicestershire: { latitude: 52.772, longitude: -1.205 },
                  Lincolnshire: { latitude: 53.1, longitude: -0.2 },
                  Northamptonshire: { latitude: 52.2333, longitude: -0.9 },
                  Nottinghamshire: { latitude: 53.1333, longitude: -1.1333 },
                  Rutland: { latitude: 52.6583, longitude: -0.7 },
                },
              },
              // Yorkshire and the Humber
              YorkshireAndTheHumber: {
                latitude: 53.9591,
                longitude: -1.0792,
                subDistricts: {
                  EastRiding: { latitude: 53.8419, longitude: -0.4278 },
                  NorthYorkshire: { latitude: 54.0, longitude: -1.5 },
                  SouthYorkshire: { latitude: 53.5, longitude: -1.3 },
                  WestYorkshire: { latitude: 53.8, longitude: -1.5491 },
                },
              },
              // North West England
              NorthWest: {
                latitude: 53.4084,
                longitude: -2.9916,
                subDistricts: {
                  Cheshire: { latitude: 53.1667, longitude: -2.5833 },
                  Cumbria: { latitude: 54.5772, longitude: -2.7975 },
                  GreaterManchester: { latitude: 53.4831, longitude: -2.2441 },
                  Lancashire: { latitude: 53.8, longitude: -2.6 },
                  Merseyside: { latitude: 53.4, longitude: -2.9833 },
                },
              },
              // North East England
              NorthEast: {
                latitude: 54.9783,
                longitude: -1.6178,
                subDistricts: {
                  Durham: { latitude: 54.7761, longitude: -1.5733 },
                  Northumberland: { latitude: 55.2083, longitude: -2.0784 },
                  TyneAndWear: { latitude: 54.9783, longitude: -1.6178 },
                },
              },
            },
          },
          Scotland: {
            latitude: 56.4907,
            longitude: -4.2026,
            subDistricts: {
              // Regions of Scotland
              Highlands: {
                latitude: 57.5359,
                longitude: -4.8281,
                subDistricts: {
                  Inverness: { latitude: 57.4778, longitude: -4.2247 },
                  FortWilliam: { latitude: 56.8198, longitude: -5.1052 },
                },
              },
              Grampian: {
                latitude: 57.1497,
                longitude: -2.1833,
                subDistricts: {
                  Aberdeen: { latitude: 57.1497, longitude: -2.0943 },
                  Aberdeenshire: { latitude: 57.2869, longitude: -2.381 },
                },
              },
              Tayside: {
                latitude: 56.462,
                longitude: -3.0207,
                subDistricts: {
                  Dundee: { latitude: 56.462, longitude: -2.9707 },
                  Perth: { latitude: 56.395, longitude: -3.4308 },
                },
              },
              Fife: {
                latitude: 56.2082,
                longitude: -3.1495,
                subDistricts: {
                  StAndrews: { latitude: 56.3398, longitude: -2.7967 },
                  Dunfermline: { latitude: 56.0719, longitude: -3.4538 },
                },
              },
              Lothian: {
                latitude: 55.9533,
                longitude: -3.1883,
                subDistricts: {
                  Edinburgh: { latitude: 55.9533, longitude: -3.1883 },
                  WestLothian: { latitude: 55.907, longitude: -3.5519 },
                },
              },
              Strathclyde: {
                latitude: 55.8642,
                longitude: -4.2518,
                subDistricts: {
                  Glasgow: { latitude: 55.8642, longitude: -4.2518 },
                  Lanarkshire: { latitude: 55.6736, longitude: -3.782 },
                },
              },
              Borders: {
                latitude: 55.5482,
                longitude: -2.786,
                subDistricts: {
                  Galashiels: { latitude: 55.6179, longitude: -2.8106 },
                  Hawick: { latitude: 55.427, longitude: -2.7901 },
                },
              },
            },
          },
          Wales: {
            latitude: 52.1307,
            longitude: -3.7837,
            subDistricts: {
              NorthWales: {
                latitude: 53.1317,
                longitude: -3.7933,
                subDistricts: {
                  Wrexham: { latitude: 53.0428, longitude: -2.9926 },
                  Rhyl: { latitude: 53.3219, longitude: -3.491 },
                },
              },
              MidWales: {
                latitude: 52.5,
                longitude: -3.65,
                subDistricts: {
                  Aberystwyth: { latitude: 52.415, longitude: -4.0829 },
                  Newtown: { latitude: 52.5133, longitude: -3.3144 },
                },
              },
              SouthWales: {
                latitude: 51.4816,
                longitude: -3.1791,
                subDistricts: {
                  Cardiff: { latitude: 51.4816, longitude: -3.1791 },
                  Swansea: { latitude: 51.6214, longitude: -3.9436 },
                  Newport: { latitude: 51.5842, longitude: -2.9977 },
                },
              },
            },
          },
          NorthernIreland: {
            latitude: 54.7877,
            longitude: -6.4923,
            subDistricts: {
              Belfast: {
                latitude: 54.5973,
                longitude: -5.9301,
                subDistricts: {
                  BelfastCity: { latitude: 54.5973, longitude: -5.9301 },
                  NorthBelfast: { latitude: 54.6332, longitude: -5.9392 },
                },
              },
              CountyAntrim: {
                latitude: 54.9,
                longitude: -6.25,
                subDistricts: {
                  Ballymena: { latitude: 54.8656, longitude: -6.2789 },
                  Lisburn: { latitude: 54.5162, longitude: -6.0581 },
                },
              },
              CountyArmagh: {
                latitude: 54.35,
                longitude: -6.65,
                subDistricts: {
                  ArmaghCity: { latitude: 54.3503, longitude: -6.6528 },
                  Lurgan: { latitude: 54.4634, longitude: -6.3335 },
                },
              },
              CountyDown: {
                latitude: 54.3333,
                longitude: -5.7167,
                subDistricts: {
                  Bangor: { latitude: 54.6598, longitude: -5.6697 },
                  Newry: { latitude: 54.1759, longitude: -6.3377 },
                },
              },
              CountyFermanagh: {
                latitude: 54.3444,
                longitude: -7.6314,
                subDistricts: {
                  Enniskillen: { latitude: 54.3466, longitude: -7.6349 },
                },
              },
              CountyLondonderry: {
                latitude: 54.95,
                longitude: -6.95,
                subDistricts: {
                  Derry: { latitude: 54.9966, longitude: -7.3086 },
                  Coleraine: { latitude: 55.1333, longitude: -6.6667 },
                },
              },
              CountyTyrone: {
                latitude: 54.6,
                longitude: -7.3,
                subDistricts: {
                  Omagh: { latitude: 54.5977, longitude: -7.31 },
                  Strabane: { latitude: 54.8271, longitude: -7.4731 },
                },
              },
            },
          },
        },
      },
      Ireland: {
        latitude: 53.4129,
        longitude: -8.2439,
        subDistricts: {
          Leinster: {
            latitude: 52.5,
            longitude: -6.0,
            subDistricts: {
              Dublin: { latitude: 53.3498, longitude: -6.2603 },
              Wicklow: { latitude: 52.988, longitude: -6.0369 },
              Kildare: { latitude: 53.202, longitude: -6.7039 },
              Wexford: { latitude: 52.334, longitude: -6.4583 },
              Carlow: { latitude: 52.836, longitude: -6.926 },
              Kilkenny: { latitude: 52.6542, longitude: -7.2539 },
              Laois: { latitude: 52.988, longitude: -7.3 },
              Offaly: { latitude: 53.2, longitude: -7.5 },
              Meath: { latitude: 53.7, longitude: -6.5 },
              Louth: { latitude: 53.8, longitude: -6.3 },
              Westmeath: { latitude: 53.5, longitude: -7.5 },
              Longford: { latitude: 53.7, longitude: -7.8 },
              Tipperary: { latitude: 52.5, longitude: -7.5 },
            },
          },
          Munster: {
            latitude: 52.5,
            longitude: -8.0,
            subDistricts: {
              Cork: { latitude: 51.8985, longitude: -8.4756 },
              Limerick: { latitude: 52.6634, longitude: -8.6267 },
              Clare: { latitude: 52.947, longitude: -9.051 },
              Kerry: { latitude: 52.2053, longitude: -9.563 },
              Tipperary: { latitude: 52.5, longitude: -7.5 },
              Waterford: { latitude: 52.2584, longitude: -7.11 },
            },
          },
          Connacht: {
            latitude: 53.5,
            longitude: -9.0,
            subDistricts: {
              Galway: { latitude: 53.2707, longitude: -9.0568 },
              Leitrim: { latitude: 54.1, longitude: -8.5 },
              Mayo: { latitude: 53.85, longitude: -9.5 },
              Roscommon: { latitude: 53.7, longitude: -8.2 },
              Sligo: { latitude: 54.2667, longitude: -8.4833 },
            },
          },
          Ulster: {
            latitude: 55.0,
            longitude: -7.0,
            subDistricts: {
              Donegal: { latitude: 54.6542, longitude: -8.109 },
              Antrim: { latitude: 54.5, longitude: -6.5 },
              Down: { latitude: 54.3, longitude: -5.8 },
              Armagh: { latitude: 54.35, longitude: -6.65 },
              Londonderry: { latitude: 54.95, longitude: -7.0 },
              Monaghan: { latitude: 54.0, longitude: -6.8 },
              Cavan: { latitude: 54.0, longitude: -7.5 },
              Fermanagh: { latitude: 54.3444, longitude: -7.6314 },
            },
          },
        },
      },
      Netherlands: {
        latitude: 52.3784,
        longitude: 4.9009,
        subDistricts: {
          Drenthe: {
            latitude: 52.8,
            longitude: 6.6,
            subDistricts: {
              Assen: { latitude: 52.9955, longitude: 6.5665 },
              Emmen: { latitude: 52.7833, longitude: 6.895 },
              Hoogeveen: { latitude: 52.71, longitude: 6.482 },
            },
          },
          Flevoland: {
            latitude: 52.5,
            longitude: 5.5,
            subDistricts: {
              Lelystad: { latitude: 52.515, longitude: 5.487 },
              Almere: { latitude: 52.3702, longitude: 5.215 },
              Zeewolde: { latitude: 52.36, longitude: 5.586 },
            },
          },
          Friesland: {
            latitude: 53.0,
            longitude: 5.5,
            subDistricts: {
              Leeuwarden: { latitude: 53.201, longitude: 5.79 },
              Sneek: { latitude: 53.025, longitude: 5.653 },
              Drachten: { latitude: 53.1, longitude: 6.09 },
            },
          },
          Gelderland: {
            latitude: 52.0,
            longitude: 5.5,
            subDistricts: {
              Arnhem: { latitude: 51.9851, longitude: 5.8987 },
              Nijmegen: { latitude: 51.842, longitude: 5.852 },
              Apeldoorn: { latitude: 52.2112, longitude: 5.969 },
            },
          },
          Groningen: {
            latitude: 53.2,
            longitude: 6.5,
            subDistricts: {
              Groningen: { latitude: 53.2194, longitude: 6.5665 },
              Delfzijl: { latitude: 53.364, longitude: 6.895 },
              Hoogezand: { latitude: 53.1667, longitude: 6.7 },
            },
          },
          Limburg: {
            latitude: 51.0,
            longitude: 5.5,
            subDistricts: {
              Maastricht: { latitude: 50.8514, longitude: 5.69 },
              Heerlen: { latitude: 50.888, longitude: 5.975 },
              Venlo: { latitude: 51.37, longitude: 6.169 },
            },
          },
          NorthBrabant: {
            latitude: 51.5,
            longitude: 5.5,
            subDistricts: {
              s_Hertogenbosch: { latitude: 51.6862, longitude: 5.3037 },
              Eindhoven: { latitude: 51.4416, longitude: 5.4697 },
              Tilburg: { latitude: 51.555, longitude: 5.091 },
            },
          },
          NorthHolland: {
            latitude: 52.5,
            longitude: 4.5,
            subDistricts: {
              Amsterdam: { latitude: 52.3676, longitude: 4.9041 },
              Haarlem: { latitude: 52.3874, longitude: 4.6369 },
              Alkmaar: { latitude: 52.63, longitude: 4.75 },
            },
          },
          Overijssel: {
            latitude: 52.5,
            longitude: 6.0,
            subDistricts: {
              Zwolle: { latitude: 52.5167, longitude: 6.0833 },
              Enschede: { latitude: 52.2215, longitude: 6.8937 },
              Almelo: { latitude: 52.35, longitude: 6.6667 },
            },
          },
          SouthHolland: {
            latitude: 52.0,
            longitude: 4.5,
            subDistricts: {
              Rotterdam: { latitude: 51.9225, longitude: 4.4798 },
              TheHague: { latitude: 52.0705, longitude: 4.3007 },
              Leiden: { latitude: 52.1582, longitude: 4.4931 },
            },
          },
          Utrecht: {
            latitude: 52.1,
            longitude: 5.1,
            subDistricts: {
              Utrecht: { latitude: 52.0907, longitude: 5.1214 },
              Amersfoort: { latitude: 52.1561, longitude: 5.3878 },
              Veenendaal: { latitude: 52.034, longitude: 5.558 },
            },
          },
          Zeeland: {
            latitude: 51.5,
            longitude: 3.5,
            subDistricts: {
              Middelburg: { latitude: 51.496, longitude: 3.614 },
              Vlissingen: { latitude: 51.444, longitude: 3.61 },
              Terneuzen: { latitude: 51.3333, longitude: 3.8333 },
            },
          },
        },
      },
      Belgium: {
        latitude: 50.8503,
        longitude: 4.3517,
        subDistricts: {
          Flanders: {
            latitude: 51.2,
            longitude: 4.0,
            subDistricts: {
              Antwerp: { latitude: 51.2211, longitude: 4.4211 },
              Ghent: { latitude: 51.0543, longitude: 3.7174 },
              Bruges: { latitude: 51.2093, longitude: 3.2247 },
              Leuven: { latitude: 50.8798, longitude: 4.7009 },
              Mechelen: { latitude: 51.0275, longitude: 4.48 },
            },
          },
          Wallonia: {
            latitude: 50.6,
            longitude: 4.5,
            subDistricts: {
              Charleroi: { latitude: 50.411, longitude: 4.4444 },
              Liège: { latitude: 50.605, longitude: 5.5797 },
              Namur: { latitude: 50.467, longitude: 4.87 },
              Mons: { latitude: 50.4542, longitude: 3.9592 },
              LaLouvière: { latitude: 50.4875, longitude: 4.195 },
            },
          },
          BrusselsCapitalRegion: {
            latitude: 50.8503,
            longitude: 4.3517,
            subDistricts: {
              Brussels: { latitude: 50.8503, longitude: 4.3517 },
              Ixelles: { latitude: 50.8333, longitude: 4.3667 },
              SaintGilles: { latitude: 50.21, longitude: 4.35 },
              Schaerbeek: { latitude: 50.867, longitude: 4.367 },
            },
          },
          GermanSpeakingCommunity: {
            latitude: 50.6,
            longitude: 6.0,
            subDistricts: {
              Eupen: { latitude: 50.605, longitude: 6.036 },
              Malmedy: { latitude: 50.4, longitude: 6.0 },
              StVith: { latitude: 50.5, longitude: 6.0 },
            },
          },
        },
      },

      Portugal: {
        latitude: 39.3999,
        longitude: -8.2245,
        subDistricts: {
          Norte: {
            latitude: 41.5,
            longitude: -8.5,
            subDistricts: {
              Porto: { latitude: 41.1496, longitude: -8.6109 },
              Braga: { latitude: 41.5503, longitude: -8.4265 },
              VianaDoCastelo: { latitude: 41.6941, longitude: -8.838 },
              VilaReal: { latitude: 41.3, longitude: -7.74 },
              Aveiro: { latitude: 40.6401, longitude: -8.6455 },
            },
          },
          Centro: {
            latitude: 40.0,
            longitude: -8.0,
            subDistricts: {
              Coimbra: { latitude: 40.2033, longitude: -8.4103 },
              Leiria: { latitude: 39.7431, longitude: -8.807 },
              CasteloBranco: { latitude: 39.46, longitude: -6.2 },
              Guarda: { latitude: 40.5375, longitude: -7.27 },
              Viseu: { latitude: 40.6613, longitude: -7.91 },
            },
          },
          Lisboa: {
            latitude: 38.7223,
            longitude: -9.1393,
            subDistricts: {
              Lisbon: { latitude: 38.7223, longitude: -9.1393 },
              Setúbal: { latitude: 38.5244, longitude: -8.8909 },
              Cascais: { latitude: 38.697, longitude: -9.4218 },
              Sintra: { latitude: 38.8029, longitude: -9.3817 },
            },
          },
          Alentejo: {
            latitude: 38.5,
            longitude: -7.0,
            subDistricts: {
              Évora: { latitude: 38.5729, longitude: -7.9137 },
              Beja: { latitude: 38.015, longitude: -7.861 },
              Portalegre: { latitude: 39.2922, longitude: -7.429 },
            },
          },
          Algarve: {
            latitude: 37.0174,
            longitude: -7.9307,
            subDistricts: {
              Faro: { latitude: 37.0194, longitude: -7.9304 },
              Lagos: { latitude: 37.102, longitude: -8.676 },
              Portimão: { latitude: 37.1392, longitude: -8.5376 },
            },
          },
        },
      },
      Switzerland: {
        latitude: 46.8182,
        longitude: 8.2275,
        subDistricts: {
          Aargau: {
            latitude: 47.3877,
            longitude: 8.2345,
            subDistricts: {
              Aarau: { latitude: 47.3929, longitude: 8.2345 },
              Baden: { latitude: 47.4637, longitude: 8.2065 },
              Lenzburg: { latitude: 47.485, longitude: 8.179 },
            },
          },
          AppenzellInnerrhoden: {
            latitude: 47.365,
            longitude: 9.409,
            subDistricts: {
              Appenzell: { latitude: 47.365, longitude: 9.409 },
            },
          },
          AppenzellAusserrhoden: {
            latitude: 47.3667,
            longitude: 9.275,
            subDistricts: {
              Herisau: { latitude: 47.3842, longitude: 9.276 },
              St_Gallen: { latitude: 47.4234, longitude: 9.3767 },
            },
          },
          BaselCity: {
            latitude: 47.5596,
            longitude: 7.5886,
            subDistricts: {
              Basel: { latitude: 47.5596, longitude: 7.5886 },
            },
          },
          BaselLandschaft: {
            latitude: 47.4667,
            longitude: 7.7333,
            subDistricts: {
              Liestal: { latitude: 47.485, longitude: 7.7333 },
              Pratteln: { latitude: 47.5, longitude: 7.7333 },
            },
          },
          Bern: {
            latitude: 46.948,
            longitude: 7.4474,
            subDistricts: {
              Bern: { latitude: 46.948, longitude: 7.4474 },
              Thun: { latitude: 46.748, longitude: 7.629 },
              Biel: { latitude: 47.1369, longitude: 7.246 },
            },
          },
          Fribourg: {
            latitude: 46.8065,
            longitude: 7.1619,
            subDistricts: {
              Fribourg: { latitude: 46.8065, longitude: 7.1619 },
              Bulle: { latitude: 46.62, longitude: 7.199 },
            },
          },
          Geneva: {
            latitude: 46.2044,
            longitude: 6.1432,
            subDistricts: {
              Geneva: { latitude: 46.2044, longitude: 6.1432 },
            },
          },
          Glarus: {
            latitude: 47.04,
            longitude: 9.0667,
            subDistricts: {
              Glarus: { latitude: 47.04, longitude: 9.0667 },
            },
          },
          Graubünden: {
            latitude: 46.656,
            longitude: 9.532,
            subDistricts: {
              Chur: { latitude: 46.85, longitude: 9.532 },
              Davos: { latitude: 46.8021, longitude: 9.835 },
              St_Moritz: { latitude: 46.497, longitude: 9.838 },
            },
          },
          Jura: {
            latitude: 47.365,
            longitude: 7.0,
            subDistricts: {
              Delémont: { latitude: 47.3667, longitude: 7.3333 },
              Porrentruy: { latitude: 47.42, longitude: 7.0833 },
            },
          },
          Neuchâtel: {
            latitude: 46.9896,
            longitude: 6.9293,
            subDistricts: {
              Neuchâtel: { latitude: 46.9896, longitude: 6.9293 },
              La_Chaux_de_Fonds: { latitude: 47.104, longitude: 6.832 },
            },
          },
          Nidwalden: {
            latitude: 46.9333,
            longitude: 8.3833,
            subDistricts: {
              Stans: { latitude: 46.964, longitude: 8.366 },
            },
          },
          Obwalden: {
            latitude: 46.8833,
            longitude: 8.25,
            subDistricts: {
              Sarnen: { latitude: 46.898, longitude: 8.247 },
            },
          },
          Schaffhausen: {
            latitude: 47.7333,
            longitude: 8.6333,
            subDistricts: {
              Schaffhausen: { latitude: 47.6939, longitude: 8.6342 },
            },
          },
          Schwyz: {
            latitude: 47.02,
            longitude: 8.6,
            subDistricts: {
              Schwyz: { latitude: 47.02, longitude: 8.6 },
              Einsiedeln: { latitude: 47.037, longitude: 8.743 },
            },
          },
          Thurgau: {
            latitude: 47.5667,
            longitude: 9.0,
            subDistricts: {
              Frauenfeld: { latitude: 47.556, longitude: 8.895 },
              Kreuzlingen: { latitude: 47.65, longitude: 9.1667 },
            },
          },
          Uri: {
            latitude: 46.8,
            longitude: 8.6,
            subDistricts: {
              Altdorf: { latitude: 46.8833, longitude: 8.6333 },
            },
          },
          Vaud: {
            latitude: 46.6034,
            longitude: 6.669,
            subDistricts: {
              Lausanne: { latitude: 46.5197, longitude: 6.6323 },
              Montreux: { latitude: 46.4316, longitude: 6.9102 },
            },
          },
          Valais: {
            latitude: 46.3167,
            longitude: 7.5,
            subDistricts: {
              Sion: { latitude: 46.2333, longitude: 7.32 },
              Brig: { latitude: 46.3167, longitude: 8.0 },
            },
          },
          Zug: {
            latitude: 47.1667,
            longitude: 8.5167,
            subDistricts: {
              Zug: { latitude: 47.1667, longitude: 8.5167 },
            },
          },
          Zurich: {
            latitude: 47.3667,
            longitude: 8.55,
            subDistricts: {
              Zurich: { latitude: 47.3769, longitude: 8.5417 },
              Winterthur: { latitude: 47.4992, longitude: 8.7241 },
            },
          },
        },
      },
      Austria: {
        latitude: 47.5162,
        longitude: 14.5501,
        subDistricts: {
          Burgenland: {
            latitude: 47.0,
            longitude: 16.0,
            subDistricts: {
              Eisenstadt: { latitude: 47.8419, longitude: 16.513 },
              NeusiedlAmSee: { latitude: 47.9431, longitude: 16.853 },
            },
          },
          Carinthia: {
            latitude: 46.5,
            longitude: 14.5,
            subDistricts: {
              Klagenfurt: { latitude: 46.6241, longitude: 14.3126 },
              Villach: { latitude: 46.6104, longitude: 13.855 },
            },
          },
          LowerAustria: {
            latitude: 48.2,
            longitude: 15.5,
            subDistricts: {
              St_Pölten: { latitude: 48.2, longitude: 15.62 },
              Krems: { latitude: 48.399, longitude: 15.6 },
            },
          },
          UpperAustria: {
            latitude: 48.0,
            longitude: 14.0,
            subDistricts: {
              Linz: { latitude: 48.3069, longitude: 14.2858 },
              Wels: { latitude: 48.1667, longitude: 14.0333 },
            },
          },
          Salzburg: {
            latitude: 47.0,
            longitude: 13.0,
            subDistricts: {
              Salzburg: { latitude: 47.8095, longitude: 13.055 },
              Hallein: { latitude: 47.6833, longitude: 13.1667 },
            },
          },
          Styria: {
            latitude: 47.5,
            longitude: 15.0,
            subDistricts: {
              Graz: { latitude: 47.0707, longitude: 15.4395 },
              Leoben: { latitude: 47.3833, longitude: 15.0833 },
            },
          },
          Tyrol: {
            latitude: 47.0,
            longitude: 11.5,
            subDistricts: {
              Innsbruck: { latitude: 47.2692, longitude: 11.4041 },
              Kufstein: { latitude: 47.5983, longitude: 12.1733 },
            },
          },
          Vorarlberg: {
            latitude: 47.5,
            longitude: 9.75,
            subDistricts: {
              Bregenz: { latitude: 47.5, longitude: 9.7333 },
              Dornbirn: { latitude: 47.4125, longitude: 9.74 },
            },
          },
          Vienna: {
            latitude: 48.2082,
            longitude: 16.3738,
            subDistricts: {
              Vienna: { latitude: 48.2082, longitude: 16.3738 },
            },
          },
        },
      },
      Greece: {
        latitude: 39.0742,
        longitude: 21.8243,
        subDistricts: {
          Attica: {
            latitude: 37.9838,
            longitude: 23.7275,
            subDistricts: {
              Athens: { latitude: 37.9838, longitude: 23.7275 },
              Piraeus: { latitude: 37.9475, longitude: 23.6258 },
              Kifisia: { latitude: 38.0733, longitude: 23.8144 },
            },
          },
          CentralGreece: {
            latitude: 38.5,
            longitude: 22.0,
            subDistricts: {
              Livadia: { latitude: 38.5, longitude: 22.5 },
              Lamia: { latitude: 38.9, longitude: 22.5 },
              Karpenisi: { latitude: 38.9, longitude: 21.8 },
            },
          },
          Thessaly: {
            latitude: 39.5,
            longitude: 22.5,
            subDistricts: {
              Larissa: { latitude: 39.64, longitude: 22.42 },
              Trikala: { latitude: 39.555, longitude: 21.76 },
              Karditsa: { latitude: 39.3667, longitude: 21.9167 },
            },
          },
          Epirus: {
            latitude: 39.6,
            longitude: 20.8,
            subDistricts: {
              Ioannina: { latitude: 39.6667, longitude: 20.85 },
              Preveza: { latitude: 38.95, longitude: 20.75 },
              Arta: { latitude: 39.2, longitude: 20.3 },
            },
          },
          Macedonia: {
            latitude: 40.5,
            longitude: 22.0,
            subDistricts: {
              Thessaloniki: { latitude: 40.6401, longitude: 22.9444 },
              Kavala: { latitude: 40.9361, longitude: 24.4042 },
              Serres: { latitude: 41.09, longitude: 23.55 },
            },
          },
          Thrace: {
            latitude: 41.0,
            longitude: 25.0,
            subDistricts: {
              Komotini: { latitude: 41.1, longitude: 25.4 },
              Xanthi: { latitude: 41.15, longitude: 24.9 },
              Alexandroupoli: { latitude: 40.85, longitude: 25.9 },
            },
          },
          Peloponnese: {
            latitude: 37.5,
            longitude: 22.0,
            subDistricts: {
              Patras: { latitude: 38.244, longitude: 21.7346 },
              Tripoli: { latitude: 37.5, longitude: 22.4 },
              Kalamata: { latitude: 37.038, longitude: 22.114 },
            },
          },
          AegeanIslands: {
            latitude: 37.5,
            longitude: 25.0,
            subDistricts: {
              Mykonos: { latitude: 37.4479, longitude: 25.3289 },
              Santorini: { latitude: 36.3932, longitude: 25.4615 },
              Rhodes: { latitude: 36.4344, longitude: 28.2176 },
            },
          },
          Crete: {
            latitude: 35.2401,
            longitude: 24.8093,
            subDistricts: {
              Heraklion: { latitude: 35.34, longitude: 25.1442 },
              Chania: { latitude: 35.5156, longitude: 24.0182 },
              Rethymno: { latitude: 35.3667, longitude: 24.5 },
            },
          },
        },
      },

      Denmark: {
        latitude: 56.2639,
        longitude: 9.5018,
        subDistricts: {
          CapitalRegion: {
            latitude: 55.6761,
            longitude: 12.5683,
            subDistricts: {
              Copenhagen: { latitude: 55.6761, longitude: 12.5683 },
              Frederiksberg: { latitude: 55.6759, longitude: 12.5086 },
              Ballerup: { latitude: 55.74, longitude: 12.36 },
            },
          },
          Zealand: {
            latitude: 55.4,
            longitude: 11.5,
            subDistricts: {
              Roskilde: { latitude: 55.64, longitude: 12.08 },
              Næstved: { latitude: 55.23, longitude: 11.8 },
              Holbæk: { latitude: 55.719, longitude: 11.715 },
            },
          },
          SouthernDenmark: {
            latitude: 55.0,
            longitude: 9.0,
            subDistricts: {
              Odense: { latitude: 55.4038, longitude: 10.4024 },
              Kolding: { latitude: 55.491, longitude: 9.474 },
              Esbjerg: { latitude: 55.48, longitude: 8.458 },
            },
          },
          CentralDenmark: {
            latitude: 56.0,
            longitude: 9.0,
            subDistricts: {
              Aarhus: { latitude: 56.1625, longitude: 10.2039 },
              Viborg: { latitude: 56.45, longitude: 9.4 },
              Randers: { latitude: 56.462, longitude: 10.034 },
            },
          },
          NorthDenmark: {
            latitude: 57.0,
            longitude: 9.0,
            subDistricts: {
              Aalborg: { latitude: 57.0489, longitude: 9.9217 },
              Hjørring: { latitude: 57.455, longitude: 9.98 },
              Thisted: { latitude: 56.961, longitude: 8.694 },
            },
          },
        },
      },
      Norway: {
        latitude: 60.472,
        longitude: 8.4689,
        subDistricts: {
          Oslo: {
            latitude: 59.9139,
            longitude: 10.7522,
            subDistricts: {
              Oslo: { latitude: 59.9139, longitude: 10.7522 },
            },
          },
          Akershus: {
            latitude: 60.0,
            longitude: 11.0,
            subDistricts: {
              Bærum: { latitude: 59.95, longitude: 10.5 },
              Lillestrøm: { latitude: 59.956, longitude: 11.0 },
            },
          },
          Østfold: {
            latitude: 59.3,
            longitude: 11.0,
            subDistricts: {
              Fredrikstad: { latitude: 59.208, longitude: 10.928 },
              Sarpsborg: { latitude: 59.2833, longitude: 11.1 },
            },
          },
          Hedmark: {
            latitude: 60.0,
            longitude: 12.0,
            subDistricts: {
              Hamar: { latitude: 60.7942, longitude: 11.068 },
              Elverum: { latitude: 60.8833, longitude: 11.5833 },
            },
          },
          Oppland: {
            latitude: 61.0,
            longitude: 9.0,
            subDistricts: {
              Lillehammer: { latitude: 61.135, longitude: 10.458 },
              Gjøvik: { latitude: 60.795, longitude: 10.688 },
            },
          },
          Buskerud: {
            latitude: 60.0,
            longitude: 9.5,
            subDistricts: {
              Drammen: { latitude: 59.743, longitude: 10.2045 },
              Kongsberg: { latitude: 59.659, longitude: 9.65 },
            },
          },
          Vestfold: {
            latitude: 59.3,
            longitude: 10.0,
            subDistricts: {
              Tønsberg: { latitude: 59.267, longitude: 10.407 },
              Sandefjord: { latitude: 59.13, longitude: 10.216 },
            },
          },
          Telemark: {
            latitude: 59.0,
            longitude: 8.5,
            subDistricts: {
              Skien: { latitude: 59.209, longitude: 9.608 },
              Porsgrunn: { latitude: 59.139, longitude: 9.655 },
            },
          },
          Aust_Agder: {
            latitude: 58.5,
            longitude: 8.5,
            subDistricts: {
              Arendal: { latitude: 58.461, longitude: 8.774 },
              Grimstad: { latitude: 58.346, longitude: 8.563 },
            },
          },
          Vest_Agder: {
            latitude: 58.0,
            longitude: 7.5,
            subDistricts: {
              Kristiansand: { latitude: 58.146, longitude: 8.005 },
              Mandal: { latitude: 58.02, longitude: 7.45 },
            },
          },
          Rogaland: {
            latitude: 58.5,
            longitude: 5.5,
            subDistricts: {
              Stavanger: { latitude: 58.969, longitude: 5.7331 },
              Sandnes: { latitude: 58.853, longitude: 5.733 },
            },
          },
          Hordaland: {
            latitude: 60.0,
            longitude: 5.0,
            subDistricts: {
              Bergen: { latitude: 60.3922, longitude: 5.324 },
              Os: { latitude: 60.2, longitude: 5.5 },
            },
          },
          SognOgFjordane: {
            latitude: 61.0,
            longitude: 6.0,
            subDistricts: {
              Førde: { latitude: 61.45, longitude: 5.999 },
              Sogndal: { latitude: 61.2, longitude: 7.1 },
            },
          },
          MøreOgRomsdal: {
            latitude: 62.0,
            longitude: 7.0,
            subDistricts: {
              Ålesund: { latitude: 62.472, longitude: 6.149 },
              Molde: { latitude: 62.737, longitude: 7.16 },
            },
          },
          Sør_Trøndelag: {
            latitude: 63.0,
            longitude: 10.0,
            subDistricts: {
              Trondheim: { latitude: 63.4305, longitude: 10.3951 },
              Stjørdal: { latitude: 63.463, longitude: 10.893 },
            },
          },
          Nord_Trøndelag: {
            latitude: 64.0,
            longitude: 11.0,
            subDistricts: {
              Steinkjer: { latitude: 64.014, longitude: 11.5 },
              Namsos: { latitude: 64.466, longitude: 11.5 },
            },
          },
          Nordland: {
            latitude: 67.0,
            longitude: 15.0,
            subDistricts: {
              Bodø: { latitude: 67.2804, longitude: 14.4049 },
              Narvik: { latitude: 68.438, longitude: 17.428 },
            },
          },
          TromsOgFinnmark: {
            latitude: 69.0,
            longitude: 18.0,
            subDistricts: {
              Tromsø: { latitude: 69.6496, longitude: 18.956 },
              Alta: { latitude: 69.968, longitude: 23.271 },
            },
          },
        },
      },
      Finland: {
        latitude: 61.9241,
        longitude: 25.7482,
        subDistricts: {
          Uusimaa: {
            latitude: 60.0,
            longitude: 24.0,
            subDistricts: {
              Helsinki: { latitude: 60.1695, longitude: 24.9354 },
              Vantaa: { latitude: 60.2941, longitude: 25.0402 },
              Espoo: { latitude: 60.2055, longitude: 24.6559 },
            },
          },
          VarsinaisSuomi: {
            latitude: 60.5,
            longitude: 22.5,
            subDistricts: {
              Turku: { latitude: 60.4513, longitude: 22.2666 },
              Naantali: { latitude: 60.4667, longitude: 22.0333 },
            },
          },
          Satakunta: {
            latitude: 61.0,
            longitude: 22.0,
            subDistricts: {
              Pori: { latitude: 61.4482, longitude: 21.7877 },
              Rauma: { latitude: 61.135, longitude: 21.505 },
            },
          },
          Tavastia: {
            latitude: 61.0,
            longitude: 24.0,
            subDistricts: {
              Hämeenlinna: { latitude: 60.996, longitude: 24.446 },
              Lahti: { latitude: 60.982, longitude: 25.661 },
            },
          },
          Pirkanmaa: {
            latitude: 61.5,
            longitude: 23.0,
            subDistricts: {
              Tampere: { latitude: 61.4991, longitude: 23.76 },
              Nokia: { latitude: 61.4333, longitude: 23.5 },
            },
          },
          SouthOstrobothnia: {
            latitude: 62.0,
            longitude: 23.0,
            subDistricts: {
              Seinäjoki: { latitude: 62.6, longitude: 22.85 },
              Lapua: { latitude: 62.8, longitude: 23.0 },
            },
          },
          Ostrobothnia: {
            latitude: 63.0,
            longitude: 22.0,
            subDistricts: {
              Vaasa: { latitude: 63.0942, longitude: 21.6158 },
              Kokkola: { latitude: 63.831, longitude: 22.713 },
            },
          },
          CentralFinland: {
            latitude: 62.0,
            longitude: 25.0,
            subDistricts: {
              Jyväskylä: { latitude: 62.2415, longitude: 25.747 },
              Jyvaskyla: { latitude: 62.2415, longitude: 25.747 },
            },
          },
          NorthSavo: {
            latitude: 62.0,
            longitude: 27.0,
            subDistricts: {
              Kuopio: { latitude: 62.891, longitude: 27.6879 },
              Varkaus: { latitude: 62.314, longitude: 27.883 },
            },
          },
          SouthSavo: {
            latitude: 61.5,
            longitude: 28.0,
            subDistricts: {
              Mikkeli: { latitude: 61.688, longitude: 27.271 },
              Savonlinna: { latitude: 61.866, longitude: 28.888 },
            },
          },
          NorthKarelia: {
            latitude: 62.0,
            longitude: 30.0,
            subDistricts: {
              Joensuu: { latitude: 62.6, longitude: 29.766 },
              Kitee: { latitude: 61.5, longitude: 30.0 },
            },
          },
          Kainuu: {
            latitude: 64.0,
            longitude: 28.0,
            subDistricts: {
              Kajaani: { latitude: 64.22, longitude: 27.733 },
              Sotkamo: { latitude: 64.0, longitude: 28.0 },
            },
          },
          Lapland: {
            latitude: 67.0,
            longitude: 25.0,
            subDistricts: {
              Rovaniemi: { latitude: 66.5039, longitude: 25.9211 },
              Kemi: { latitude: 65.736, longitude: 24.586 },
            },
          },
        },
      },
      Iceland: {
        latitude: 64.9631,
        longitude: -19.0208,
        subDistricts: {
          CapitalRegion: {
            latitude: 64.1355,
            longitude: -21.8954,
            subDistricts: {
              Reykjavik: { latitude: 64.1355, longitude: -21.8954 },
              Kópavogur: { latitude: 64.083, longitude: -21.966 },
              Hafnarfjörður: { latitude: 64.066, longitude: -21.966 },
            },
          },
          SouthernPeninsula: {
            latitude: 63.8,
            longitude: -20.0,
            subDistricts: {
              Selfoss: { latitude: 63.9333, longitude: -20.999 },
              Reykjanesbær: { latitude: 63.999, longitude: -22.6 },
            },
          },
          WestIceland: {
            latitude: 64.5,
            longitude: -21.0,
            subDistricts: {
              Borgarnes: { latitude: 64.538, longitude: -21.92 },
              Akranes: { latitude: 64.325, longitude: -22.1 },
            },
          },
          Westfjords: {
            latitude: 65.0,
            longitude: -23.0,
            subDistricts: {
              Ísafjörður: { latitude: 66.075, longitude: -23.135 },
              Bolungarvík: { latitude: 66.1667, longitude: -23.2 },
            },
          },
          NorthIceland: {
            latitude: 65.0,
            longitude: -18.0,
            subDistricts: {
              Akureyri: { latitude: 65.6885, longitude: -18.11 },
              Húsavík: { latitude: 65.952, longitude: -17.341 },
            },
          },
          EastIceland: {
            latitude: 65.0,
            longitude: -14.0,
            subDistricts: {
              Egilsstaðir: { latitude: 65.265, longitude: -14.4 },
              Seyðisfjörður: { latitude: 65.262, longitude: -14.0 },
            },
          },
          SouthIceland: {
            latitude: 63.5,
            longitude: -19.0,
            subDistricts: {
              Vik: { latitude: 63.4189, longitude: -19.006 },
              Selfoss: { latitude: 63.9333, longitude: -20.999 },
            },
          },
        },
      },
      Russia: {
        latitude: 61.524,
        longitude: 105.3188,
        subDistricts: {
          Moscow: {
            latitude: 55.7558,
            longitude: 37.6173,
            subDistricts: {
              Moscow: { latitude: 55.7558, longitude: 37.6173 },
            },
          },
          SaintPetersburg: {
            latitude: 59.9343,
            longitude: 30.3351,
            subDistricts: {
              SaintPetersburg: { latitude: 59.9343, longitude: 30.3351 },
            },
          },
          Novosibirsk: {
            latitude: 55.0084,
            longitude: 82.0155,
            subDistricts: {
              Novosibirsk: { latitude: 55.0084, longitude: 82.0155 },
            },
          },
        },
      },
}