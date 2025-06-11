import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Twitter, FileText, Globe } from 'lucide-react';

interface Command {
  input: string;
  output: React.ReactNode;
}

interface CommandFunction {
  (input?: string): React.ReactNode;
}

const Terminal = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const commandHistoryRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, CommandFunction> = {
    help: () => (
      <div className="text-terminal-accent">
        <div>Available commands:</div>
        <div className="ml-4 mt-2 space-y-1">
          <div><span className="text-terminal-primary">welcome</span> - Display welcome message</div>
          <div><span className="text-terminal-primary">about</span> - Learn more about me</div>
          <div><span className="text-terminal-primary">projects</span> - View my projects</div>
          <div><span className="text-terminal-primary">contact</span> - Get in touch</div>
          <div><span className="text-terminal-primary">skills</span> - Technical skills</div>
          <div><span className="text-terminal-primary">experience</span> - Work experience</div>
          <div><span className="text-terminal-primary">education</span> - Educational background</div>
          <div><span className="text-terminal-primary">achievements</span> - My accomplishments</div>
          <div><span className="text-terminal-primary">resume</span> - Download my resume</div>
          <div><span className="text-terminal-primary">clear</span> - Clear terminal</div>
          <div><span className="text-terminal-primary">theme</span> - Change terminal theme</div>
          <div><span className="text-terminal-primary">fortune</span> - Display a random programming quote</div>
        </div>
        <div className="mt-4 text-terminal-text">
          For more commands, type <span className="text-terminal-primary">man</span> to see the complete manual.
        </div>
      </div>
    ),
    about: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ About Yash</div>
        <div className="ml-4 space-y-2">
          <div>👋 Hey there! I'm Yash, a passionate Frontend Developer, Technical Writer, and Computer Science student.</div>
          <div>🚀 I specialize in building responsive web applications, AI-powered solutions, and creating engaging content.</div>
          <div>✍️ As a technical writer, I craft compelling narratives and technical documentation that bridges the gap between complex technology and user understanding.</div>
          <div>💡 Currently pursuing B.Sc. in Computer Science at BITS Pilani and Scaler School of Technology.</div>
          <div>🎯 Goal: Creating impactful web applications and content that solve real-world problems.</div>
          <div>🌟 When I'm not coding, you'll find me writing content, leading teams, or organizing events at Scaler School of Technology.</div>
        </div>
      </div>
    ),
    projects: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Featured Projects</div>
        <div className="ml-4 space-y-3">
          <div className="border border-terminal-muted p-3 rounded">
            <div className="text-terminal-accent font-bold">📚 Kitabi Keeda - AI Book Recommender</div>
            <div className="text-sm mt-1">AI-powered book discovery platform using OpenAI prompts</div>
            <div className="text-terminal-primary text-xs mt-1">Tech: React, OpenAI API, Vercel, Tailwind</div>
            <div className="text-xs mt-1">• Integrated Google Books API for real-time metadata</div>
            <div className="text-xs">• Natural language prompt-based book recommendations</div>
            <div className="mt-2">
              <a 
                href="https://kitabi-keeda-six.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-terminal-primary hover:text-terminal-accent transition-colors flex items-center gap-2 text-xs"
              >
                <Globe size={12} />
                <span>Live Demo → kitabi-keeda-six.vercel.app</span>
              </a>
            </div>
          </div>
          <div className="border border-terminal-muted p-3 rounded">
            <div className="text-terminal-accent font-bold">👨‍⚕️ Doctor Dashboard</div>
            <div className="text-sm mt-1">Interactive healthcare dashboard with chatbot integration</div>
            <div className="text-terminal-primary text-xs mt-1">Tech: React, Vite, Tailwind CSS, Vercel</div>
            <div className="text-xs mt-1">• Visualized doctor's dashboard with chatbot interface</div>
            <div className="text-xs">• Modern, responsive healthcare platform design</div>
            <div className="mt-2">
              <a 
                href="https://health-nivaran-doctor-dash.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-terminal-primary hover:text-terminal-accent transition-colors flex items-center gap-2 text-xs"
              >
                <Globe size={12} />
                <span>Live Demo → health-nivaran-doctor-dash.vercel.app</span>
              </a>
            </div>
          </div>
          <div className="border border-terminal-muted p-3 rounded">
            <div className="text-terminal-accent font-bold">✍️ Technical Documentation & Content</div>
            <div className="text-sm mt-1">Comprehensive technical documentation and SEO content creation</div>
            <div className="text-terminal-primary text-xs mt-1">Skills: Technical Writing, SEO, User Guides, API Documentation</div>
            <div className="text-xs mt-1">• Created user guides and technical documentation for web applications</div>
            <div className="text-xs">• Wrote SEO-optimized blog posts and content for client websites</div>
            <div className="text-xs">• Developed API documentation and developer guides</div>
            <div className="text-xs">• Improved website rankings through strategic content creation</div>
          </div>
          <div className="mt-4 pt-4 border-t border-terminal-muted">
            <div className="text-terminal-accent font-bold mb-2">📦 More Projects</div>
            <div className="text-sm">
              Check out more of my projects on GitHub,
            </div>
            <div className="mt-3">
              <a 
                href="https://github.com/YashSensei?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-terminal-primary hover:text-terminal-accent transition-colors flex items-center gap-2 text-xs"
              >
                <Github size={12} />
                <span>View All Projects → github.com/YashSensei</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    skills: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Technical Skills</div>
        <div className="ml-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-terminal-accent mb-2">Languages</div>
              <div className="text-sm space-y-1">
                <div>• Python</div>
                <div>• JavaScript</div>
                <div>• Dart</div>
                <div>• SQL</div>
              </div>
            </div>
            <div>
              <div className="text-terminal-accent mb-2">Frameworks & Tools</div>
              <div className="text-sm space-y-1">
                <div>• React</div>
                <div>• Tailwind CSS</div>
                <div>• Flutter</div>
                <div>• HTML5 / CSS3</div>
              </div>
            </div>
            <div>
              <div className="text-terminal-accent mb-2">Content & Others</div>
              <div className="text-sm space-y-1">
                <div>• Technical Writing</div>
                <div>• Blog Content Creation</div>
                <div>• SEO Content</div>
                <div>• Git / GitHub</div>
                <div>• Figma</div>
                <div>• Vercel</div>
                <div>• Firebase</div>
                <div>• SEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    experience: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Work Experience</div>
        <div className="ml-4 space-y-3">
          <div className="border-l-2 border-terminal-primary pl-4">
            <div className="text-terminal-accent font-bold">Frontend Developer / Technical Writer</div>
            <div className="text-terminal-primary text-sm">MagnumKare (Remote) • June 2024 - Jan 2025</div>
            <div className="text-sm mt-1">• Developed and maintained responsive user interfaces for healthcare portals, improved engagement by enhancing UX</div>
            <div className="text-sm">• Documented frontend, API, and other workflows and wrote internal guides to streamline onboarding and collaboration</div>
            <div className="text-sm">• Wrote technical documentation and blog posts to help clients understand the integration of custom chatbots</div>
          </div>
          <div className="border-l-2 border-terminal-primary pl-4">
            <div className="text-terminal-accent font-bold">Freelance Web Developer & Technical Writer</div>
            <div className="text-terminal-primary text-sm">Local Businesses (Remote) • July 2023 - Present</div>
            <div className="text-sm mt-1">• Built and deployed websites for SMEs with SEO focus</div>
            <div className="text-sm">• Created custom chatbot assistants using OpenAI APIs</div>
            <div className="text-sm">• Built AI-enabled assistants used by 50+ small businesses</div>
            <div className="text-sm">• Wrote technical documentation and user guides for web applications</div>
            <div className="text-sm">• Created SEO-optimized content and blog posts for client websites</div>
          </div>
        </div>
      </div>
    ),
    education: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Education</div>
        <div className="ml-4 space-y-3">
          <div className="border border-terminal-muted p-3 rounded">
            <div className="text-terminal-accent font-bold">Bachelor of Science in Computer Science</div>
            <div className="text-terminal-primary text-sm">BITS Pilani • Expected May 2027</div>
            <div className="text-sm mt-1">Bangalore, India</div>
          </div>
          <div className="border border-terminal-muted p-3 rounded">
            <div className="text-terminal-accent font-bold">Bachelor of Science in Computer Science</div>
            <div className="text-terminal-primary text-sm">Scaler School of Technology • Expected April 2028</div>
            <div className="text-sm mt-1">Bangalore, India</div>
          </div>
        </div>
      </div>
    ),
    achievements: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Achievements</div>
        <div className="ml-4 space-y-2">
          <div>🏆 Qualified Scaler NSET 2024 with 100% score in Learnability</div>
          <div>🤖 Built AI-enabled assistant used by 50+ small businesses</div>
          <div>✍️ Created technical documentation and user guides for multiple web applications</div>
          <div>📝 Wrote SEO-optimized content that improved client website rankings</div>
          <div>👥 House Captain and Basketball Team Captain at Scaler School of Technology</div>
          <div>🎯 Self-taught React, Node.js, and AI APIs</div>
          <div>🤝 Active collaborator with designers, marketers, and developers</div>
        </div>
      </div>
    ),
    contact: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Contact Information</div>
        <div className="ml-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-terminal-accent">📱 Phone:</span> 
            <span>+91-9473795535</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-terminal-accent">📍 Location:</span> 
            <span>Bangalore, India</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-terminal-accent">📧 Email:</span> 
            <span>yashagrawalrkt123@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-terminal-accent">🌐 GitHub:</span> 
            <a href="https://github.com/YashSensei/console-portfolio-craft.git" target="_blank" rel="noopener noreferrer" className="text-terminal-primary hover:text-terminal-accent">github.com/YashSensei</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-terminal-accent">💼 LinkedIn:</span> 
            <a href="https://www.linkedin.com/in/yash-agrawal-208841307/" target="_blank" rel="noopener noreferrer" className="text-terminal-primary hover:text-terminal-accent">linkedin.com/in/yash-agrawal</a>
          </div>
        </div>
      </div>
    ),
    resume: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Resume</div>
        <div className="ml-4 space-y-2">
          <div>📄 Download my resume:</div>
          <a 
            href="/yash_resume_cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-terminal-primary hover:text-terminal-accent transition-colors flex items-center gap-2"
          >
            <FileText size={14} />
            <span>yash_resume_cv.pdf</span>
          </a>
          <div className="text-sm text-terminal-muted mt-2">
            Click the link above to view or download my resume.
          </div>
        </div>
      </div>
    ),
    theme: () => (
      <div className="text-terminal-accent">
        <div>🎨 Available themes:</div>
        <div className="ml-4 mt-2 space-y-1 text-sm">
          <div>• <span className="text-terminal-primary">matrix</span> - Classic green terminal</div>
          <div>• <span className="text-terminal-primary">cyberpunk</span> - Current neon theme</div>
          <div>• <span className="text-terminal-primary">retro</span> - Vintage amber terminal</div>
          <div className="mt-2 text-terminal-text">Type: theme [name] to switch</div>
        </div>
      </div>
    ),
    clear: () => {
      setCommandHistory([]);
      setHistoryIndex(-1);
      return null;
    },
    ls: () => (
      <div className="text-terminal-text">
        <div>Directory listing:</div>
        <div className="ml-4">
          <div>📁 about</div>
          <div>📁 projects</div>
          <div>📁 contact</div>
          <div>📁 skills</div>
          <div>📁 experience</div>
          <div>📁 education</div>
          <div>📁 achievements</div>
          <div>📄 resume.pdf</div>
        </div>
      </div>
    ),
    exit: () => {
      const shouldExit = window.confirm('Are you sure you want to exit the terminal?');
      if (shouldExit) {
        window.close(); // This will attempt to close the tab
        return <div>Closing terminal...</div>;
      }
      return <div>Exit cancelled.</div>;
    },
    pwd: () => (
      <div className="text-terminal-text">
        /home/yash/portfolio
      </div>
    ),
    cd: () => (
      <div className="text-terminal-text">
        <div className="text-red-400">Error: Cannot change directory in this terminal session.</div>
        <div className="text-terminal-muted text-sm mt-1">This is a read-only terminal for portfolio navigation.</div>
      </div>
    ),
    mkdir: () => (
      <div className="text-terminal-text">
        <div className="text-red-400">Error: Cannot create directories in this terminal session.</div>
        <div className="text-terminal-muted text-sm mt-1">This is a read-only terminal for portfolio navigation.</div>
      </div>
    ),
    touch: () => (
      <div className="text-terminal-text">
        <div className="text-red-400">Error: Cannot create files in this terminal session.</div>
        <div className="text-terminal-muted text-sm mt-1">This is a read-only terminal for portfolio navigation.</div>
      </div>
    ),
    cat: () => (
      <div className="text-terminal-text">
        <div className="text-red-400">Error: Cannot read files in this terminal session.</div>
        <div className="text-terminal-muted text-sm mt-1">This is a read-only terminal for portfolio navigation.</div>
      </div>
    ),
    echo: (input: string = '') => {
      const message = input.replace('echo', '').trim();
      return (
        <div className="text-terminal-text">
          {message || ''}
        </div>
      );
    },
    whoami: () => (
      <div className="text-terminal-text">
        yash@portfolio
      </div>
    ),
    date: () => {
      const now = new Date();
      return (
        <div className="text-terminal-text">
          {now.toLocaleString()}
        </div>
      );
    },
    sudo: () => (
      <div className="text-terminal-text">
        <div className="text-red-400">Error: Permission denied.</div>
        <div className="text-terminal-muted text-sm mt-1">This is a read-only terminal for portfolio navigation.</div>
      </div>
    ),
    rm: () => (
      <div className="text-terminal-text">
        <div className="text-red-400">Error: Cannot remove files in this terminal session.</div>
        <div className="text-terminal-muted text-sm mt-1">This is a read-only terminal for portfolio navigation.</div>
      </div>
    ),
    man: () => (
      <div className="text-terminal-text">
        <div className="text-terminal-secondary mb-2">▶ Manual Pages</div>
        <div className="ml-4 space-y-2">
          <div>Available commands:</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <div>• help - Show available commands</div>
            <div>• ls - List directory contents</div>
            <div>• pwd - Print working directory</div>
            <div>• whoami - Print effective user ID</div>
            <div>• date - Display system date/time</div>
            <div>• echo - Display a line of text</div>
            <div>• clear - Clear terminal screen</div>
            <div>• exit - Exit the terminal</div>
            <div>• theme - Change terminal theme</div>
            <div>• about - About me</div>
            <div>• projects - View projects</div>
            <div>• contact - Contact information</div>
            <div>• skills - Technical skills</div>
            <div>• experience - Work experience</div>
            <div>• education - Educational background</div>
            <div>• achievements - My accomplishments</div>
            <div>• resume - Download resume</div>
            <div>• fortune - Display random programming quotes</div>
            <div>• cowsay - Display message in ASCII art</div>
            <div>• neofetch - Display system information</div>
            <div>• cd - Change directory (simulated)</div>
            <div>• mkdir - Make directory (simulated)</div>
            <div>• touch - Create file (simulated)</div>
            <div>• cat - Read file (simulated)</div>
            <div>• rm - Remove file (simulated)</div>
            <div>• sudo - Execute as superuser (simulated)</div>
          </div>
          <div className="text-terminal-muted text-sm mt-2">
            Note: Some commands are simulated and have limited functionality.
          </div>
        </div>
      </div>
    ),
    fortune: () => {
      const quotes = [
        "A real resume is just a catalog of all your sufferings - Naval Ravikant",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "The best way to predict the future is to implement it. - Alan Kay",
        "Talk is cheap. Show me the code. - Linus Torvalds",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
        "First, solve the problem. Then, write the code. - John Johnson",
        "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon",
        "It's not a bug – it's an undocumented feature. - Anonymous",
        "Code never lies, comments sometimes do. - Ron Jeffries",
        "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
        "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
        "Sometimes the best way to solve a problem is to stop participating in the problem. - Jonathan Mead",
        "The most damaging phrase in the language is 'We've always done it this way.' - Grace Hopper",
        "Good code is like a good joke: it needs no explanation. - Russ Olsen",
        "Programming is the art of telling another human what one wants the computer to do. - Donald Knuth",
        "The best error message is the one that never shows up. - Thomas Fuchs",
        "Code is like humor. When you have to explain it, it's bad. - Cory House"
      ];
      return <div className="text-terminal-text">{quotes[Math.floor(Math.random() * quotes.length)]}</div>;
    },
    welcome: () => (
      <div className="text-terminal-text">
        <div className="space-y-2">
          <div className="text-terminal-accent">Welcome to Yash's Portfolio Terminal! 🚀</div>
          <div className="text-sm">I'm a Frontend Developer, Techical Writer, and Computer Science student passionate about building impactful web applications and creating engaging content.</div>
          <div className="text-sm mt-4">Quick Start:</div>
          <div className="ml-4 space-y-1 text-sm">
            <div>• Type <span className="text-terminal-primary">help</span> to see available commands</div>
            <div>• Type <span className="text-terminal-primary">about</span> to learn more about me</div>
            <div>• Type <span className="text-terminal-primary">projects</span> to view my work</div>
            <div>• Type <span className="text-terminal-primary">contact</span> to get in touch</div>
          </div>
          <div className="text-terminal-primary mt-4">Ready to explore? Let's dive in! 💻</div>
        </div>
      </div>
    ),
    cowsay: (input: string = '') => {
      const message = input.replace('cowsay', '').trim() || 'Moo!';
      return (
        <div className="text-terminal-text font-mono">
          <pre>{`
 ${'_'.repeat(message.length + 2)}
< ${message} >
 ${'-'.repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
      `}</pre>
        </div>
      );
    },
    neofetch: () => (
      <div className="text-terminal-text font-mono">
        <pre>{`
    yash@portfolio
    ---------------
    OS: Portfolio Terminal
    Host: React.js
    Kernel: TypeScript
    Shell: Custom Terminal
    Theme: Cyberpunk
    Icons: Lucide Icons
    Terminal: Web Browser
    CPU: JavaScript Engine
    Memory: Browser Memory
    Disk: Local Storage
    `}</pre>
      </div>
    )
  };

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    
    // Handle sudo commands
    if (trimmedInput.startsWith('sudo ')) {
      const command = trimmedInput.replace('sudo', '').trim();
      setCommandHistory(prev => [...prev, { 
        input, 
        output: <div className="text-terminal-text">
          <div className="text-red-400">Permission denied: {command}</div>
          <div className="text-terminal-muted text-sm mt-1">This is a read-only terminal for portfolio navigation.</div>
        </div>
      }]);
      setHistoryIndex(-1);
      return;
    }

    // Handle echo command separately since it needs the full input
    if (trimmedInput.startsWith('echo ')) {
      const output = commands.echo(input);
      setCommandHistory(prev => [...prev, { input, output }]);
      setHistoryIndex(-1);
      return;
    }

    // Handle cowsay command separately since it needs the full input
    if (trimmedInput.startsWith('cowsay ')) {
      const output = commands.cowsay(input);
      setCommandHistory(prev => [...prev, { input, output }]);
      setHistoryIndex(-1);
      return;
    }

    // Handle theme command
    if (trimmedInput.startsWith('theme ')) {
      const themeName = trimmedInput.split(' ')[1];
      const validThemes = ['matrix', 'cyberpunk', 'retro'];
      
      if (validThemes.includes(themeName)) {
        // Remove existing theme classes
        document.documentElement.classList.remove('theme-matrix', 'theme-cyberpunk', 'theme-retro');
        // Add new theme class
        document.documentElement.classList.add(`theme-${themeName}`);
        
        setCommandHistory(prev => [...prev, { 
          input, 
          output: <div className="text-terminal-accent">Theme switched to {themeName} successfully!</div>
        }]);
        setHistoryIndex(-1);
        return;
      } else {
        setCommandHistory(prev => [...prev, { 
          input, 
          output: <div className="text-red-400">Invalid theme. Available themes: matrix, cyberpunk, retro</div>
        }]);
        setHistoryIndex(-1);
        return;
      }
    }

    const command = commands[trimmedInput as keyof typeof commands];
    
    if (trimmedInput === 'clear') {
      setCommandHistory([]);
      setHistoryIndex(-1);
      return;
    }

    const output = command ? command() : (
      <div className="text-red-400">
        Command '{input}' not found. Type 'help' for available commands.
      </div>
    );

    setCommandHistory(prev => [...prev, { input, output }]);
    setHistoryIndex(-1);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        handleCommand(currentInput);
      }
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex].input);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex].input);
        }
      }
    }
  };

  const asciiName = `
██    ██  █████  ███████ ██   ██ 
 ██  ██  ██   ██ ██      ██   ██ 
  ████   ███████ ███████ ███████ 
   ██    ██   ██      ██ ██   ██ 
   ██    ██   ██ ███████ ██   ██ 
  `;

  useEffect(() => {
    const welcomeCommand = () => (
      <div className="text-terminal-text">
        <div className="mb-4">Welcome to my portfolio! - Type 'help' for a list of supported commands.</div>
        <div className="text-sm mb-2">Frontend Developer • Technical Writer • Computer Science Student</div>
        <div className="text-terminal-primary">Ready to explore? Let's dive in! 🚀</div>
      </div>
    );
    
    setCommandHistory([{ input: 'welcome', output: welcomeCommand() }]);
  }, []);

  useEffect(() => {
    if (commandHistoryRef.current) {
      commandHistoryRef.current.scrollTop = commandHistoryRef.current.scrollHeight;
    }
  }, [commandHistory]);

  return (
    <div className="min-h-screen bg-terminal-bg terminal-background relative">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 lg:p-6 border-b border-terminal-muted/20 gap-4 lg:gap-0">
        {/* Name Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
          <div className="ascii-art text-terminal-primary text-lg font-bold neon-glow">
            <pre className="text-xs sm:text-sm lg:text-base leading-tight">{asciiName}</pre>
          </div>
          <div className="text-terminal-text text-xs sm:text-sm">
            <div>Kirito</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2 text-xs sm:text-sm w-full lg:w-auto">
          <div className="text-terminal-accent text-left lg:text-center mb-2">Yash Agrawal</div>
          <div className="text-terminal-muted text-xs text-left lg:text-center mb-2">Frontend Developer • Technical Writer • CS Student</div>
          <div className="space-y-1">
            <a href="https://github.com/YashSensei" target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-terminal-primary transition-colors flex items-center gap-2">
              <Github size={14} />
              <span className="truncate">GitHub → github.com/YashSensei</span>
            </a>
            <a href="https://www.linkedin.com/in/yash-agrawal-208841307/" target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-terminal-primary transition-colors flex items-center gap-2">
              <Linkedin size={14} />
              <span className="truncate">LinkedIn → linkedin.com/in/yash-agrawal</span>
            </a>
            <a href="https://x.com/Yash__Sensei" target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-terminal-primary transition-colors flex items-center gap-2">
              <Twitter size={14} />
              <span className="truncate">X (Twitter) → x.com/Yash__Sensei</span>
            </a>
            <a href="https://www.instagram.com/yash__sensei/" target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-terminal-primary transition-colors flex items-center gap-2">
              <Instagram size={14} />
              <span className="truncate">Instagram → instagram.com/yash__sensei</span>
            </a>
            <a href="mailto:yashagrawalrkt123@gmail.com" className="text-terminal-text hover:text-terminal-primary transition-colors flex items-center gap-2">
              <FileText size={14} />
              <span className="truncate">Email → yashagrawalrkt123@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 lg:p-6 pb-24">
        {/* Terminal Window */}
        <div className="terminal-window rounded-lg p-4 lg:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-terminal-muted text-xs sm:text-sm">yash@portfolio:~$</div>
          </div>

          {/* Welcome message */}
          <div className="mb-6 text-terminal-text text-sm">
            <div>Welcome to my portfolio! - Type 'help' for a list of supported commands.</div>
          </div>

          {/* Command History */}
          <div 
            ref={commandHistoryRef}
            className="space-y-4 mb-4 max-h-96 overflow-y-auto scroll-smooth"
          >
            {commandHistory.map((cmd, index) => (
              <div key={index}>
                <div className="command-line text-terminal-primary text-sm">{cmd.input}</div>
                <div className="mt-2 ml-6">{cmd.output}</div>
              </div>
            ))}
          </div>

          {/* Current Input */}
          <div className="flex items-center">
            <span className="text-terminal-primary mr-2 text-sm">[kirito]-$</span>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-terminal-text flex-1 font-mono cursor text-sm"
              placeholder=""
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Music Player - Fixed to bottom right */}
      <div className="fixed bottom-4 right-4 z-10">
        <div className="terminal-window rounded p-3 text-xs text-terminal-text max-w-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-terminal-accent rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-terminal-bg">♪</span>
            </div>
            <div className="min-w-0 flex-1">
              <div>Now Listening to...</div>
              <div className="text-terminal-primary truncate">Track: Hai apna dil to awara</div>
              <div className="text-terminal-accent truncate">Artist: S. D. Burman</div>
              <a 
                href="https://open.spotify.com/track/0p7EstNUg5VYyD8jxs1Na7?si=b589efb18653477a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-secondary hover:text-terminal-primary transition-colors text-xs mt-1 block truncate"
              >
                Listen on Spotify →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
