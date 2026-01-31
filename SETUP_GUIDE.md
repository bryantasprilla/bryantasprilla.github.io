# Quick Setup Guide for GitHub Pages

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `bryantasprilla.github.io` (recommended) or `personal-website`
4. Description: "My professional portfolio website"
5. Make it **Public**
6. **DO NOT** check "Add a README file"
7. Click **"Create repository"**

### 2. Upload Your Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL the files from your project folder
3. Make sure to maintain the folder structure (css/, js/, images/, files/)
4. Scroll down, add commit message: "Initial commit"
5. Click **"Commit changes"**

**Option B: Using Git Command Line**

```bash
# Navigate to where you want to store the project
cd ~/Documents

# Clone the repository
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME

# Copy all files into this folder
# (index.html, css/, js/, images/, files/, etc.)

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Portfolio website"

# Push to GitHub
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top of page)
3. Click **"Pages"** in the left sidebar (under "Code and automation")
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes
7. Refresh the page - you'll see: "Your site is live at https://YOUR-USERNAME.github.io/REPO-NAME/"

### 4. Verify Your Site

1. Click the link GitHub provides
2. Your website should be live!
3. If you see a 404 error, wait a few more minutes and refresh

### 5. Customize Your Content

Before sharing with recruiters, edit `index.html`:

**Replace these placeholders:**
- [ ] Your name (already "Bryant Asprilla" but verify)
- [ ] Professional title/tagline
- [ ] About me section
- [ ] Work experience (job titles, companies, dates, achievements)
- [ ] Skills and technologies
- [ ] Project descriptions and links
- [ ] Email address
- [ ] LinkedIn URL
- [ ] GitHub URL

**Add these files:**
- [ ] `images/profile.jpg` - Your professional photo
- [ ] `images/project1.jpg` - Project screenshot
- [ ] `images/project2.jpg` - Project screenshot  
- [ ] `images/project3.jpg` - Project screenshot
- [ ] `files/resume.pdf` - Your resume PDF

### 6. Update Your Site

After making changes locally:

```bash
git add .
git commit -m "Updated experience and added photos"
git push origin main
```

Wait 1-2 minutes for GitHub to rebuild your site.

### 7. Connect Custom Domain (After 60-Day Wait)

Once you've transferred bryantasprilla.com to Cloudflare:

**In GitHub:**
1. Repository Settings → Pages
2. Under "Custom domain", enter: `bryantasprilla.com`
3. Click "Save"
4. Check "Enforce HTTPS" (may take a few minutes to become available)

**In Cloudflare:**
1. Go to DNS settings
2. Add these records:

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Target: `YOUR-USERNAME.github.io`
   - Proxy status: Proxied (orange cloud)

   **For root domain:**
   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.108.153`
   - Proxy status: Proxied

   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.109.153`
   - Proxy status: Proxied

   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.110.153`
   - Proxy status: Proxied

   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.111.153`
   - Proxy status: Proxied

3. Wait up to 24 hours for DNS propagation (usually much faster)

### 8. Test and Share

- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify all links work
- [ ] Download resume PDF to test
- [ ] Share on LinkedIn
- [ ] Add to email signature
- [ ] Include in job applications

## Troubleshooting

**Site shows 404 error:**
- Wait 5 minutes and refresh
- Make sure `index.html` is in the root of your repository
- Check that GitHub Pages is enabled in Settings

**Images not showing:**
- Verify file names match exactly (case-sensitive)
- Check that images are in the `images/` folder
- Make sure you committed and pushed all files

**CSS not loading:**
- Check that `css/style.css` exists
- Verify the path in `index.html` is correct
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

**Changes not appearing:**
- Make sure you committed and pushed changes
- Wait 1-2 minutes for GitHub to rebuild
- Clear your browser cache

## Next Steps

1. ✅ Customize all content
2. ✅ Add professional photos
3. ✅ Test on multiple devices
4. ✅ Get feedback from friends
5. ✅ Share on social media
6. ⏳ Wait 60 days for domain transfer
7. ✅ Connect custom domain
8. ✅ Start applying to jobs!

---

**Need help?** Check out:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
