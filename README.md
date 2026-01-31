# Bryant Asprilla - Professional Portfolio Website

A clean, modern, and responsive portfolio website built with Bootstrap 5 to showcase your professional experience, skills, and projects to potential recruiters and employers.

## 🚀 Quick Start

### Prerequisites
- A GitHub account (you already have this!)
- Git installed on your computer
- A text editor (VS Code recommended)

### Setup Instructions

1. **Create a new repository on GitHub**
   - Go to GitHub.com and click "New Repository"
   - Name it: `bryantasprilla.github.io` (or any name like `personal-website`)
   - Make it Public
   - Don't initialize with README (we already have files)
   - Click "Create Repository"

2. **Clone this repository to your computer**
   ```bash
   git clone https://github.com/YOUR-USERNAME/bryantasprilla.github.io.git
   cd bryantasprilla.github.io
   ```

3. **Add your files**
   - Copy all the files from this project into your repository folder
   - Your folder structure should look like:
     ```
     bryantasprilla.github.io/
     ├── index.html
     ├── css/
     │   └── style.css
     ├── js/
     │   └── script.js
     ├── images/
     │   ├── profile.jpg (add your photo here)
     │   ├── project1.jpg
     │   ├── project2.jpg
     │   └── project3.jpg
     └── files/
         └── resume.pdf (add your resume here)
     ```

4. **Customize your content**
   - Open `index.html` in your text editor
   - Replace placeholder text with your actual information:
     - Professional title
     - About me section
     - Work experience
     - Skills
     - Projects
     - Contact information
     - Social media links

5. **Add your images**
   - Add your professional photo as `images/profile.jpg`
   - Add project screenshots as `images/project1.jpg`, etc.
   - Add your resume PDF as `files/resume.pdf`

6. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Personal portfolio website"
   git push origin main
   ```

7. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

8. **Connect your custom domain (after 60 days)**
   - Once you've transferred your domain to Cloudflare
   - In GitHub repository settings → Pages
   - Add your custom domain: `bryantasprilla.com`
   - In Cloudflare DNS settings, add:
     - CNAME record: `www` → `YOUR-USERNAME.github.io`
     - A records (for root domain):
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`

## 📝 Customization Guide

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0d6efd;  /* Change to your preferred color */
    --secondary-color: #6c757d;
    --dark-color: #212529;
    --light-color: #f8f9fa;
}
```

### Sections
You can easily add, remove, or reorder sections by editing `index.html`. Each section is wrapped in a `<section>` tag with an ID.

### Hero Background
The hero section has a gradient background. To change it, edit the `.hero-section` class in `css/style.css`:
```css
background: linear-gradient(135deg, #YOUR-COLOR-1 0%, #YOUR-COLOR-2 100%);
```

## 🛠️ Technologies Used

- **Bootstrap 5.3.2** - CSS framework
- **Bootstrap Icons** - Icon library
- **Vanilla JavaScript** - For interactivity
- **GitHub Pages** - Hosting

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Active nav link highlighting
- ✅ Downloadable resume
- ✅ Project showcase with links
- ✅ Social media integration
- ✅ Professional and recruiter-friendly layout
- ✅ Fast loading times
- ✅ Clean, modern design

## 🎨 Folder Structure

```
bryantasprilla.github.io/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── script.js       # Custom JavaScript
├── images/             # Your images
│   ├── profile.jpg
│   └── project*.jpg
├── files/              # Your files
│   └── resume.pdf
└── README.md           # This file
```

## 💡 Tips for Recruiters

- Keep your resume PDF up to date
- Use professional photos (headshot for profile, screenshots for projects)
- Include metrics and achievements in your experience section
- Link to live demos of your projects when possible
- Keep your GitHub profile active with this and other projects
- Add a clear call-to-action (email, LinkedIn)

## 🔄 Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild your site within a few minutes.

## 🐛 Troubleshooting

**Site not showing up?**
- Make sure GitHub Pages is enabled in repository settings
- Check that your repository is public
- Wait a few minutes for GitHub to build the site

**Images not loading?**
- Check file names match exactly (case-sensitive)
- Ensure images are in the correct folder
- Make sure files are committed and pushed to GitHub

**Custom domain not working?**
- Verify DNS settings in Cloudflare
- Check that HTTPS is enforced in GitHub settings
- DNS changes can take up to 24 hours to propagate

## 📚 Next Steps

1. ✅ Customize all placeholder content
2. ✅ Add your professional photo
3. ✅ Upload your resume PDF
4. ✅ Add real project screenshots
5. ✅ Test on multiple devices
6. ✅ Share your site on LinkedIn
7. ✅ Wait 60 days to transfer domain
8. ✅ Connect custom domain

## 📞 Need Help?

If you run into issues:
- Check GitHub Pages documentation
- Review Bootstrap documentation for component customization
- Test locally by opening `index.html` in a browser

## 📄 License

This is your personal website - feel free to customize it however you like!

---

Built with ❤️ using Bootstrap 5
```
