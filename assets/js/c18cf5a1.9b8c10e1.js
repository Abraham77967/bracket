"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[970],{9442:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var t=r(5893),o=r(1151);const c={sidebar_position:3},i="Deployment",s={id:"running-bracket/deployment",title:"Deployment",description:"This guide explains how to run Bracket in production with Docker. If you quickly want to get up and",source:"@site/docs/running-bracket/deployment.md",sourceDirName:"running-bracket",slug:"/running-bracket/deployment",permalink:"/bracket/docs/running-bracket/deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/running-bracket/deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/bracket/docs/running-bracket/configuration"},next:{title:"Community",permalink:"/bracket/docs/category/community"}},d={},a=[{value:"Docker",id:"docker",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Backend configuration",id:"backend-configuration",level:3},{value:"Frontend configuration",id:"frontend-configuration",level:3},{value:"Deploy to cloud service",id:"deploy-to-cloud-service",level:2},{value:"Vercel",id:"vercel",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsxs)(n.p,{children:["This guide explains how to run Bracket in production with Docker. If you quickly want to get up and\nrunning, please read ",(0,t.jsx)(n.a,{href:"/bracket/docs/running-bracket/quickstart",children:"quickstart.md"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,t.jsx)(n.p,{children:"First, make sure you have docker and docker-compose installed."}),"\n",(0,t.jsxs)(n.p,{children:["Then, store the following YAML in a file called ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," and run it using\n",(0,t.jsx)(n.code,{children:"docker-compose up -d"})," in the same directory as the file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'version: \'3.1\'\n\nservices:\n    bracket-frontend:\n        image: ghcr.io/evroon/bracket-frontend\n        container_name: bracket-frontend\n        ports:\n            - "3000:3000"\n        environment:\n            NEXT_PUBLIC_API_BASE_URL: "https://bracket.mywebsite.com"\n            # Go to https://dashboard.hcaptcha.com/signup, create a site and put the site key here\n            NEXT_PUBLIC_HCAPTCHA_SITE_KEY: "xxxxx"\n            NODE_ENV: "production"\n        restart: unless-stopped\n\n    bracket-backend:\n        image: ghcr.io/evroon/bracket-backend\n        container_name: bracket-backend\n        ports:\n            - "8400:8400"\n        environment:\n            ENVIRONMENT: "PRODUCTION"\n            PG_DSN: "postgresql://bracket_prod:bracket_prod@postgres:5432/bracket_prod"\n        restart: unless-stopped\n        depends_on:\n          - postgres\n\n    postgres:\n        image: postgres\n        restart: always\n        environment:\n          POSTGRES_DB: bracket_prod\n          POSTGRES_USER: bracket_prod\n          POSTGRES_PASSWORD: bracket_prod\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"backend-configuration",children:"Backend configuration"}),"\n",(0,t.jsx)(n.p,{children:"The following configuration variables need to be adjusted for the backend to run it in production:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"JWT_SECRET"}),": Create a random secret using ",(0,t.jsx)(n.code,{children:"openssl rand -hex 32"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CORS_ORIGINS"}),": Set frontend domain names for CORS.\nFor example: ",(0,t.jsx)(n.code,{children:"CORS_ORIGINS=https://frontend.bracket.com"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ADMIN_EMAIL"})," and ",(0,t.jsx)(n.code,{children:"ADMIN_PASSWORD"}),": It's important to not leave the admin credentials to the\ndefault values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ALLOW_INSECURE_HTTP_SSO"}),": Must be set to ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Optional:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SENTRY_DSN"}),": The ",(0,t.jsx)(n.a,{href:"https://sentry.io",children:"Sentry"})," DSN  for monitoring and error tracking"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BASE_URL"}),": The base url of the API used for SSO"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/bracket/docs/running-bracket/configuration",children:"the config docs"})," for more information."]}),"\n",(0,t.jsx)(n.h3,{id:"frontend-configuration",children:"Frontend configuration"}),"\n",(0,t.jsx)(n.p,{children:"The following configuration variables need to be adjusted for the frontend to run it in production:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NEXT_PUBLIC_API_BASE_URL"}),": The base URL of the backend API to which the frontend sends requests.\nFor example: ",(0,t.jsx)(n.code,{children:"https://api.bracket.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Optional:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NEXT_PUBLIC_HCAPTCHA_SITE_KEY"}),": The HCaptcha key used for captcha challenges when creating new\naccounts. You get the secret when you create a new site in HCaptcha. If left blank, HCaptcha will\nbe disabled for your site."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-to-cloud-service",children:"Deploy to cloud service"}),"\n",(0,t.jsx)(n.h3,{id:"vercel",children:"Vercel"}),"\n",(0,t.jsx)(n.p,{children:"To deploy the frontend to Vercel, use the following link:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"https://vercel.com/new/project?template=https://github.com/evroon/bracket\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to select the ",(0,t.jsx)(n.code,{children:"frontend"})," directory as root directory, and use Next.js as framework."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(7294);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);