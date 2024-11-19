```markdown
# Modern Event Ticketing Platform - File Structure

## Root Directory
```
/
├── src/                    # Source code directory
├── public/                 # Static assets
├── index.html             # Entry HTML file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## Source Directory (`/src`)

### Core Application Files
```
src/
├── main.tsx              # Application entry point with providers
├── App.tsx               # Root component with routing logic
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite type declarations
```

### Components (`/src/components`)

#### Admin Components
```
src/components/admin/
├── index.ts                     # Admin components barrel file
├── SuperAdminDashboard.tsx      # Main admin dashboard
├── TenantDashboard.tsx          # Tenant management dashboard
├── UserManagementView.tsx       # User management interface
└── tabs/                        # Admin dashboard tabs
    ├── AnalyticsTab.tsx         # Analytics and metrics
    ├── AuditTab.tsx             # Audit logs and tracking
    ├── SecurityTab.tsx          # Security settings
    ├── SystemTab.tsx            # System configuration
    ├── TenantsTab.tsx           # Tenant management
    └── UsersTab.tsx             # User administration
```

#### Event Components
```
src/components/events/
├── EventForm.tsx                # Event creation/editing form
├── EventDetails.tsx             # Event details display
├── sections/                    # Event page sections
│   ├── EventActions.tsx         # Event action buttons
│   └── EventAnalytics.tsx       # Event-specific analytics
└── wizard/                      # Event creation wizard
    ├── QuickStartWizard.tsx     # Streamlined event setup
    └── steps/                   # Wizard step components
```

#### Form Builder Components
```
src/components/form-builder/
├── FormBuilder.tsx              # Main form builder
├── FormPreview.tsx             # Live form preview
├── ToolboxPanel.tsx            # Form element toolbox
└── fields/                     # Form field components
    ├── TextField.tsx           # Text input field
    ├── SelectField.tsx         # Dropdown field
    └── DateField.tsx           # Date picker field
```

### Contexts (`/src/contexts`)
```
src/contexts/
├── AdminContext.tsx            # Admin state management
├── AuthContext.tsx             # Authentication state
├── EventContext.tsx            # Event data management
├── SystemContext.tsx           # System-wide state
├── TenantContext.tsx           # Tenant management state
└── ToastContext.tsx            # Notification system
```

### Hooks (`/src/hooks`)
```
src/hooks/
├── useAdmin.ts                 # Admin functionality
├── useAttendees.ts            # Attendee management
├── useEvents.ts               # Event operations
├── useRoleChange.ts           # Role management
└── useTwoFactorAuth.ts        # 2FA functionality
```

### Services (`/src/services`)
```
src/services/
├── AdminService.ts            # Admin operations
├── AIService.ts              # AI/ML functionality
├── EventService.ts           # Event management
├── PaymentService.ts         # Payment processing
├── SecurityService.ts        # Security features
└── TwoFactorService.ts       # 2FA implementation
```

### Types (`/src/types`)
```
src/types/
├── index.ts                  # Type definitions barrel
└── registration.ts          # Registration-specific types
```

### Modules (`/src/modules`)
```
src/modules/
└── Analytics/               # Analytics module
    ├── components/          # Analytics components
    ├── hooks/              # Analytics hooks
    └── services/           # Analytics services
```

### Library (`/src/lib`)
```
src/lib/
├── db/                     # Database utilities
│   ├── collections.ts      # Collection definitions
│   └── schema.ts          # Database schema
└── firebase.ts            # Firebase configuration
```

## Key Features by Directory

### Admin Module
- Complete tenant management system
- User administration
- System monitoring
- Security settings
- Audit logging

### Event Management
- Event creation wizard
- Ticket management
- Attendee tracking
- Analytics dashboard
- Registration system

### Form Builder
- Drag-and-drop interface
- Custom field types
- Form validation
- Live preview
- Mobile responsiveness

### Security Features
- Two-factor authentication
- Role-based access control
- API key management
- Audit logging
- Content moderation

### Analytics
- Real-time metrics
- Custom reports
- Data visualization
- Export capabilities
- AI-powered insights

## Technology Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- Recharts for data visualization

### State Management
- React Context API
- Custom hooks
- Real-time updates

### Authentication
- Firebase Authentication
- Two-factor authentication
- Role-based access control

### Database
- Firestore
- Real-time data sync
- Structured collections

### Security
- JWT authentication
- API rate limiting
- Content moderation
- Data encryption

### Development Tools
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Vite for development server
```