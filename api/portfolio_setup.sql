CREATE TABLE IF NOT EXISTS portfolio_projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    categories JSON,
    industry VARCHAR(100),
    link VARCHAR(255),
    is_superstar BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT IGNORE INTO portfolio_projects (project_id, name, description, image, categories, industry, link, is_superstar) VALUES
('shoptec-ecommerce', 'Shoptec.in', 'A complete multi-vendor e-commerce platform with inventory management and payment gateway integration.', '/portfolio/shoptec.jpg', '["E-commerce", "Web App"]', 'Retail', 'https://shoptec.in', FALSE),
('national-academy', 'National Academy', 'Educational portal with student management, online admission process, and digital notice board.', '/portfolio/national_academy.jpg', '["Website", "Portal"]', 'Education', 'https://www.nationalacademyedu.com/', FALSE),
('modulus-academy', 'Modulus Academy', 'Ongoing management, technical updates, and SEO strategy for the leading IIT/JEE & NEET coaching institute in Alwar.', '/portfolio/modulus_academy.jpg', '["SEO", "Maintenance", "Updates"]', 'Education', 'https://www.modulusacademy.com/', FALSE),
('alwar-furniture', 'AlwarFurniture.in', 'Online furniture catalog with augmented reality product preview and custom order forms.', '/portfolio/alwar_furniture.jpg', '["E-commerce", "3D"]', 'Retail', 'https://alwarfurniture.in', FALSE),
('lali-super', 'LaliSuper.in', 'Local grocery delivery platform with real-time inventory tracking and delivery route optimization.', '/portfolio/lali_super.jpg', '["E-commerce", "Delivery"]', 'Food & Beverage', 'https://lalisuper.in', FALSE),
('sania-hospital', 'Sania Hospital', 'A comprehensive hospital management website demo featuring appointment booking, doctor profiles, and department services.', '/portfolio/sania_hospital.jpg', '["Website", "Healthcare", "Demo"]', 'Healthcare', 'https://sania-hospital-demo.vercel.app/', FALSE),
('shoptec-partner-app', 'Shoptec Partner App', 'A robust Android application for Shoptec partners to manage their e-commerce store operations efficiently on the go.', '/portfolio/shoptec_app.jpg', '["Mobile App", "E-commerce"]', 'Retail', 'https://play.google.com/store/apps/details?id=kasinfo.shoptec.shop&hl=en_IN', FALSE),
('gym-levelling-app', 'Gym Levelling', 'A comprehensive fitness management app designed to help gym owners handle memberships, schedules, and operations.', '/portfolio/gym_levelling.jpg', '["Mobile App", "Fitness"]', 'Health & Fitness', 'https://play.google.com/store/apps/details?id=com.intvarautomation.gymlevelling&hl=en_IN', FALSE),
('sahi-jagah-app', 'Sahi Jagah', 'A comprehensive real estate and property search mobile application to help users find their ideal properties.', '/portfolio/sahi_jagah.jpg', '["Mobile App", "Real Estate"]', 'Real Estate', 'https://play.google.com/store/apps/details?id=com.kasinfo.sahijagah&hl=hi', FALSE),
('jashoda-hospital', 'Jashoda Hospital', 'A comprehensive healthcare website and digital presence for Jashoda Hospital.', '/portfolio/jashoda_hospital.jpg', '["Website", "Healthcare"]', 'Healthcare', 'https://jashodahospital.in', FALSE),
('ram-solar', 'Ram Solar', 'A platform offering solar energy solutions to help users lower their energy bills and earn higher returns.', '/portfolio/ram_solar.jpg', '["Website", "Renewable Energy"]', 'Energy', 'https://ramsolar.in', FALSE),
('sahi-jagah-web', 'Sahi Jagah Web', 'The primary web platform for Sahi Jagah, offering a comprehensive real estate search experience.', '/portfolio/sahi_jagah_web.jpg', '["Website", "Real Estate"]', 'Real Estate', 'https://sahijagah.com', FALSE),
('shiksha-hi-samadhan', 'Shiksha Hi Samadhan', 'An educational trust website focused on providing academic coaching and support to disadvantaged students.', '/portfolio/shikshahisamadhan.jpg', '["Website", "NGO"]', 'Education', 'https://shikshahisamadhan.in', FALSE),
('ca-mukhtyar', 'CA Mukhtyar', 'Professional website providing financial, accounting, and taxation services.', '/portfolio/camukhtyar.jpg', '["Website", "Professional Services"]', 'Finance & Accounting', 'https://camukhtyar.in', FALSE),
('meo-society', 'Meo Society', 'A community and cultural portal dedicated to the heritage and social initiatives of the Meo society.', '/portfolio/meosociety.jpg', '["Website", "Community"]', 'Non-Profit & Community', 'https://meosociety.com', FALSE);
