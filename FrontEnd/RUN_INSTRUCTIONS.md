# How to Run Smart Governance Portal

## Prerequisites

Make sure you have the following installed:
- **Node.js** version 18 or higher
- **npm** (comes with Node.js) or **yarn**

### Check if you have Node.js installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

---

## Step-by-Step Instructions

### Step 1: Navigate to FrontEnd Folder

Open your terminal/command prompt and navigate to the FrontEnd directory:

**Windows (PowerShell or CMD):**
```bash
cd C:\Users\hp\Downloads\Smart_Governence\FrontEnd
```

**Mac/Linux:**
```bash
cd ~/Downloads/Smart_Governence/FrontEnd
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- Next.js framework
- React
- Tailwind CSS
- TypeScript
- Lucide React icons
- And all other dependencies

**Wait for installation to complete** (may take 2-5 minutes)

### Step 3: Start Development Server

Run the development server:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

### Step 4: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

The application should now be running! 🎉

---

## Alternative Commands

### Run in Production Mode

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

### Run with Different Port

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

Then open: `http://localhost:3001`

---

## Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution:** 
- Kill the process using port 3000, OR
- Run on a different port: `npm run dev -- -p 3001`

**Windows (kill process on port 3000):**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### Issue: "Module not found" errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
rm package-lock.json  # or yarn.lock if using yarn
npm install
```

### Issue: Build errors or TypeScript errors
**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue: Tailwind CSS not working
**Solution:** Make sure `postcss.config.js` and `tailwind.config.js` exist in the FrontEnd folder.

---

## Available Routes

Once running, you can access these pages:

### Citizen Views:
- **Home:** http://localhost:3000/
- **Report Issue:** http://localhost:3000/report
- **Emergency Report:** http://localhost:3000/emergency
- **Track Status:** http://localhost:3000/track

### Admin/Volunteer Views:
- **Admin Dashboard:** http://localhost:3000/admin
- **Volunteer Dashboard:** http://localhost:3000/volunteer

### Auto-navigated Pages:
- **AI Analysis:** Automatically shown after submitting a report
- **Success Page:** Automatically shown after AI analysis

---

## Quick Test Flow

1. Go to http://localhost:3000
2. Click "Submit an Issue"
3. Fill out the form
4. Submit - you'll see AI analysis
5. View success page with ticket number
6. Click "Track Status" to see progress

---

## Need Help?

If you encounter any issues:
1. Check that Node.js version is 18+
2. Make sure all dependencies installed correctly
3. Check the terminal for error messages
4. Try clearing cache and reinstalling (see troubleshooting above)

