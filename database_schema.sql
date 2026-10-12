CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    form_type VARCHAR(50) NOT NULL,
    business_name VARCHAR(255) NULL,
    phone_number VARCHAR(50) NULL,
    email VARCHAR(255) NULL,
    problem_or_message TEXT NULL,
    interested_solution VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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

CREATE TABLE IF NOT EXISTS news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content LONGTEXT,
    image_url VARCHAR(255),
    meta_title VARCHAR(255),
    meta_description TEXT,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
