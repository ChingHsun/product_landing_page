# Computer Product Landing Page

URL: https://product-landing-page-bgno.vercel.app/

![Computer Product Landing Page](/readme.png)

## 🛠️ Tech Stack

- **Next.js 15**: React framework with server components and app router
- **TypeScript**: Type safety for more robust code
- **React 19**: Latest version of React for building user interfaces
- **Bootstrap**: For responsive UI components
- **Sass/SCSS**: For advanced styling and theming
- **ESLint**: Code quality and style checking
- **AI-Driven Development**: Built with assistance from Claude AI for code generation and problem-solving

## 📁 Project Structure

```
/src
  /app             # Next.js app router pages and layouts
  /components      # React components
  /styles          # Global styles, variables, and mixins
  /types           # TypeScript type definitions
  MOCK_data.ts     # mock product data from API
```

## 🤖 Development Challenging & Solutions

This project was developed with significant assistance from Claude AI, which provided an innovative approach to web development:

### Prompt Engineering Journey

1. **Challenging**: Early attempted prompts involved providing comprehensive requirements all at once, which resulted in information overload and complex outputs that were difficult to refine.

2. **Solution**: The successful approach involved breaking down the development process into logical steps:
   - First defining product specifications and data structure
   - Establishing the visual style and theme
   - Building components sequentially (Header → Hero → Product Cards → Footer)
   - Finally optimizing SEO and performance

### Bootstrap and Next.js Integration

1. **Challenging**: Initially faced compatibility challenges between Bootstrap and Next.js. These frameworks are less commonly paired together because:

   - Bootstrap relies heavily on JavaScript that needs to run in the client
   - Next.js's server components architecture requires special handling for client-side libraries
   - CSS module conflicts can occur without proper configuration

2. **Solution**: Implemented `react-bootstrap` which provides React components that work natively with Next.js's component model, and created a custom `BootstrapLoader` base on [this article](https://1manstartup.com/blogs/install-bootstrap-for-nextjs-app-router).

### Performance Optimization

Used Lighthouse to test and optimize the site's performance, focusing on:

- Core Web Vitals
- Accessibility features
- SEO optimization
- Best practices for modern web development
