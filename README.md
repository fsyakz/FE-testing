# Dinas Pangan Provinsi Sulawesi Tengah - Website Clone

A modern, responsive clone of the official Dinas Pangan (Food Department) website for Central Sulawesi Province, Indonesia. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, accessible design with smooth animations
- **Real-time Data**: Dynamic content with API integration
- **Interactive Components**: Polling system, carousel, and content tabs
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **API**: Next.js API Routes
- **Fonts**: Google Fonts (Inter)
- **Image Optimization**: Next.js Image component
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## 📁 Project Structure

```
dinas-pangan-clone/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── harga-pangan/
│   │   │   │   └── route.ts          # Food prices API
│   │   │   └── poll/
│   │   │       └── route.ts          # Polling API
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page
│   ├── components/
│   │   ├── Header.tsx                # Navigation header
│   │   ├── Carousel.tsx              # Banner carousel
│   │   ├── PricingSection.tsx        # Food price ticker
│   │   ├── InstitutionServices.tsx   # Service icons grid
│   │   ├── ContentTabs.tsx           # Tabbed content
│   │   ├── Polling.tsx               # Interactive polling
│   │   ├── Infographics.tsx          # Image gallery
│   │   ├── ExternalLinks.tsx         # Partner links
│   │   └── Footer.tsx                # Site footer
│   ├── data/
│   │   └── sampleData.ts             # Sample data
│   └── utils/
│       └── api.ts                    # API utilities
├── public/                           # Static assets
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dinas-pangan-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📡 API Endpoints

### Food Prices API (`/api/harga-pangan`)

- **GET** - Retrieve all food prices
- **POST** - Add new food price entry

**Example Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Bawang Putih",
      "price": "Rp. 35.000/Kg",
      "date": "25 Juli 2025",
      "views": 0
    }
  ],
  "message": "Food prices retrieved successfully"
}
```

### Polling API (`/api/poll`)

- **GET** - Get poll results
- **POST** - Submit vote
- **DELETE** - Reset poll

**Example Vote Submission:**
```json
{
  "selectedOption": "sangat_baik"
}
```

## 🎨 Components Overview

### Header
- Responsive navigation
- Search functionality
- Social media links
- Mobile-friendly menu

### Carousel
- Auto-sliding banner
- Manual navigation
- Responsive images
- Error handling

### PricingSection
- Scrolling price ticker
- Real-time data updates
- Loading states

### InstitutionServices
- Grid layout of services
- Hover effects
- External link handling

### ContentTabs
- Tabbed interface
- Dynamic content loading
- Responsive design

### Polling
- Interactive voting system
- Real-time results
- Progress bars
- Vote validation

### Infographics
- Image gallery
- Modal view
- Responsive grid
- Error handling

### ExternalLinks
- Carousel of partner links
- Auto-scrolling
- Manual navigation

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind Configuration

The project uses Tailwind CSS with custom configurations in `tailwind.config.js`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

The project includes error handling and loading states for all components. To test:

1. **API Endpoints**: Use tools like Postman or curl
2. **Components**: Test responsive design and interactions
3. **Error States**: Test with network failures

## 🔒 Security Features

- Input validation on all API endpoints
- XSS protection with Next.js built-in security
- CSRF protection
- Secure headers configuration

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Support

- Responsive design for all screen sizes
- Touch-friendly interactions
- Mobile-optimized images
- Fast loading on mobile networks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original website: [Dinas Pangan Provinsi Sulawesi Tengah](https://www.dpp.sultengprov.go.id)
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and deployment platform

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team

## 🔄 Updates

This project is actively maintained. Check the releases page for updates and new features.

---

**Built with ❤️ for Dinas Pangan Provinsi Sulawesi Tengah**
