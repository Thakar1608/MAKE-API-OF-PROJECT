

Yeh ek aasan aur clean Project Management application hai jise React (Vite), Node.js, Express, aur MongoDB ka use karke banaya gaya hai. Is project me backend API aur frontend UI dono ek sath chalte hain.

Humne is project ka styling pehle se kaafi simple, minimal aur clean kar diya hai taaki users ko samajhne me koi pareshani na ho. Saath hi sath, saare code files me se comments ko hata diya hai taaki code pure aur human-written lage.


- **Naya Project Add Karein**: Title, description, status, tech stack, aur deadline select karke naya project create karein.
- **Projects Ki List Dekhein**: Saare projects ek clean card layout me dikhenge.
- **Status Change Karein**: Planning, In Progress, aur Completed status.
- **Dynamic Search**: Title se kisi bhi project ko real-time me search karein.
- **Update aur Delete**: Projects ko aasaani se edit ya remove karein.
- **Clean aur Minimal UI**: Bina kisi faltu gradient ya flashy components ke, ek dum simple aur professional white-slate layout.



1. Aapke system me **Node.js** install hona chahiye.
2. **MongoDB** background me run ho raha hona chahiye.
   - Backend `.env` file me database ka connection local port 27017 ke liye configured hai.


Aap root folder me cmd kholkar ya double click karke `run.bat` file ko run kar sakte hain:
```bash
run.bat
```
Yeh script automatically backend aur frontend dono ki dependencies ko install karegi aur dono servers ko separate windows me start kar degi.

Agar aap separate terminals me manually run karna chahte hain:

1. **Backend ke liye**:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. **Frontend ke liye**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Folder Ka Structure

- `backend/`: Express server logic, MongoDB models, aur API routes.
- `frontend/`: React Components, Services, aur CSS file.
- `run.bat`: Project ko ek baar me run karne ka shortcut script.
