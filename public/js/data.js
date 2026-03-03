// ────────────────────────────────────────────────────────────
//  276Mimo — Course Data (extracted from CMPT 276 PDF notes)
// ────────────────────────────────────────────────────────────

const COURSE_DATA = [
  // ══════════════════════════════════════════════════════════
  // TOPIC 1 — Introduction to Software Engineering
  // ══════════════════════════════════════════════════════════
  {
    id: 't1',
    icon: '🖥️',
    title: 'Introduction to Software Engineering',
    subtitle: '4 lessons · What SE is, types, ethics & case studies',
    lessons: [
      {
        id: 't1l1',
        title: 'What is Software Engineering?',
        description: 'Core definition, goals and scope',
        slides: [
          { tag: 'Definition', heading: 'Software Engineering', body: 'Software Engineering is an engineering discipline concerned with all aspects of software production — from early specification through maintenance after a system goes into use.', type: 'text' },
          { tag: 'Key Idea', heading: 'Engineering ≠ just coding', body: 'SE applies systematic, disciplined, quantifiable approaches to development, operation and maintenance of software — similar to how civil or electrical engineers apply theory and methods to solve real-world problems.', type: 'text' },
          { tag: 'Why it matters', heading: 'The Software Crisis', body: 'Projects routinely ran over budget, were delivered late, or failed completely. SE emerged to bring rigour and repeatability to software development.', type: 'text' },
          { tag: 'Goals', heading: 'Core Goals of SE', bullets: ['Produce software that meets user needs', 'Deliver on time and within budget', 'Create maintainable, reliable systems', 'Manage complexity through abstraction and process', 'Make software development a predictable discipline'], type: 'bullets' },
          { tag: 'Activities', heading: 'What do Software Engineers do?', bullets: ['Specification — what should the system do?', 'Development — designing & coding the solution', 'Validation — does it do what users need?', 'Evolution — changing it as requirements change'], type: 'bullets' },
          { tag: 'Reality Check', heading: 'SE vs Computer Science', highlight: 'CS is concerned with theory and fundamentals. SE is concerned with the practical problems of building and delivering useful software on schedule.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Which of the following best describes Software Engineering?', options: ['Writing code as fast as possible', 'An engineering discipline concerned with all aspects of software production', 'A branch of mathematics dealing with algorithms', 'The study of computer hardware'], answer: 1 },
          { q: 'Which of the four core SE activities answers "what should the system do?"', options: ['Development', 'Validation', 'Specification', 'Evolution'], answer: 2 },
          { q: 'How does SE differ from Computer Science?', options: ['SE only deals with frontend development', 'CS focuses on practical delivery; SE focuses on theory', 'SE focuses on practical delivery; CS focuses on theory and fundamentals', 'There is no meaningful difference'], answer: 2 },
          { q: 'Which SE activity involves "changing the system in response to customer needs"?', options: ['Specification', 'Validation', 'Development', 'Evolution'], answer: 3 },
          { q: 'The "Software Crisis" refers to:', options: ['A global shortage of software developers', 'Projects routinely running over budget, late, or failing completely', 'A security crisis in internet software', 'The rapid decline of desktop software'], answer: 1 },
          { q: 'SE emerged primarily to bring what to software development?', options: ['More programming languages', 'Rigour and repeatability', 'Faster hardware', 'Open source licensing'], answer: 1 },
          { q: 'Which of the following is NOT one of the four fundamental SE activities?', options: ['Specification', 'Marketing', 'Validation', 'Evolution'], answer: 1 },
          { q: 'Software Engineering is most similar in approach to:', options: ['Creative writing', 'Pure mathematics', 'Civil or electrical engineering', 'Philosophy'], answer: 2 }
        ]
      },
      {
        id: 't1l2',
        title: 'Types of Software',
        description: 'Generic vs custom, stand-alone, embedded, SaaS & more',
        slides: [
          { tag: 'Classification', heading: 'Generic vs Custom Software', body: 'Generic (or "shrink-wrap") software is sold to many users with the same base product — e.g. Microsoft Word. Custom software is developed for a specific client — e.g. a hospital records system.', type: 'text' },
          { tag: 'Types', heading: 'Software Application Types', bullets: ['Stand-alone applications — run on a local PC (word processors, games)', 'Interactive transaction-based — web apps (e-commerce, banking)', 'Embedded control systems — control hardware (anti-lock brakes, pacemakers)', 'Batch processing — large-scale business processing (payroll)', 'Entertainment — games, multimedia', 'Systems for modelling & simulation — engineering/scientific modelling', 'Data collection — sensors, IoT gathering data', 'Systems of systems — integrated networks of other software systems'], type: 'bullets' },
          { tag: 'Cloud Era', heading: 'SaaS vs SAA', body: 'Software as a Service (SaaS): delivered over the internet, hosted in the cloud (Gmail, Google Docs). Stand-Alone Application (SAA): installed locally on user hardware.', type: 'text' },
          { tag: 'Key Insight', heading: 'Why type matters for engineering', highlight: 'The type of software dictates the appropriate process model, testing strategy, and deployment approach. Embedded systems have very different constraints than web apps.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Which type of software is an example of a "generic" product?', options: ['A custom hospital records system', 'Microsoft Word', 'A company\'s internal payroll system', 'A pacemaker firmware'], answer: 1 },
          { q: 'SaaS stands for:', options: ['Software as a System', 'System as a Service', 'Software as a Service', 'Stand-alone Application Software'], answer: 2 },
          { q: 'Anti-lock brake software is an example of which application type?', options: ['Interactive transaction-based', 'Batch processing', 'Embedded control system', 'Stand-alone application'], answer: 2 },
          { q: 'Which application type typically processes large amounts of data without user interaction during execution?', options: ['Entertainment', 'Batch processing', 'SaaS', 'Embedded control'], answer: 1 },
          { q: 'A weather forecasting simulation tool is best classified as:', options: ['Stand-alone application', 'System of systems', 'Systems for modelling and simulation', 'Data collection'], answer: 2 },
          { q: 'Google Docs is an example of:', options: ['Stand-alone application (SAA)', 'Embedded control system', 'Software as a Service (SaaS)', 'Batch processing software'], answer: 2 },
          { q: 'Custom software is developed:', options: ['For mass market retail sale', 'For a specific client\'s particular needs', 'Only for government organizations', 'Always as open-source'], answer: 1 },
          { q: 'A "system of systems" refers to:', options: ['A single large application with many modules', 'IoT sensors collecting data', 'Integrated networks of other software systems working together', 'Any software running on multiple servers'], answer: 2 }
        ]
      },
      {
        id: 't1l3',
        title: 'Software Ethics',
        description: 'ACM/IEEE code, ethical frameworks and legal considerations',
        slides: [
          { tag: 'Ethics', heading: 'Why Ethics in SE?', body: 'Software engineers have power over systems that affect people\'s lives. With that power comes responsibility — to the public, clients, employers, and the profession.', type: 'text' },
          { tag: 'Professional Code', heading: 'ACM/IEEE Code of Ethics — 8 Principles', bullets: ['1. PUBLIC — act in the public interest', '2. CLIENT & EMPLOYER — serve client/employer in the public interest', '3. PRODUCT — ensure software meets professional standards', '4. JUDGMENT — maintain integrity and independence', '5. MANAGEMENT — promote ethical management', '6. PROFESSION — advance integrity of the profession', '7. COLLEAGUES — be fair and supportive', '8. SELF — commit to lifelong learning'], type: 'bullets' },
          { tag: 'Frameworks', heading: 'Two Ethical Frameworks', bullets: ['Utilitarian — maximize overall happiness/benefit for the greatest number of people', 'Deontological — duty-based; some actions are inherently right or wrong regardless of outcome'], type: 'bullets' },
          { tag: 'Legal Context', heading: 'Privacy Laws You Must Know', bullets: ['FERPA — Family Educational Rights and Privacy Act (USA student records)', 'HIPAA — Health Insurance Portability and Accountability Act (USA health data)', 'FIPPA — Freedom of Information and Protection of Privacy Act (BC/Canada govt data)', 'PIPEDA — Personal Information Protection and Electronic Documents Act (Canada private sector)'], type: 'bullets' },
          { tag: 'Application', heading: 'Ethical Dilemmas in SE', highlight: 'An employer asks you to ship software with a known security flaw to meet a deadline. Under ACM/IEEE principle 1 (PUBLIC), you must prioritize public safety over employer pressure.', type: 'highlight' }
        ],
        quiz: [
          { q: 'The ACM/IEEE Code of Ethics has how many principles?', options: ['5', '6', '8', '10'], answer: 2 },
          { q: 'Which ethical framework says "maximize benefit for the greatest number of people"?', options: ['Deontological', 'Utilitarian', 'Virtue ethics', 'Contractarian'], answer: 1 },
          { q: 'HIPAA governs:', options: ['Student records in the USA', 'Health data in the USA', 'Government data in British Columbia', 'Financial records in Canada'], answer: 1 },
          { q: 'ACM/IEEE Principle 1 (PUBLIC) requires engineers to:', options: ['Follow employer instructions unconditionally', 'Act in the public interest above all else', 'Maximize shareholder value', 'Prioritize product delivery speed'], answer: 1 },
          { q: 'A deontological ethical framework holds that:', options: ['Outcomes determine whether actions are right', 'Some actions are inherently right or wrong regardless of outcome', 'The majority\'s happiness defines morality', 'Engineers have no personal ethical obligations'], answer: 1 },
          { q: 'FIPPA applies to:', options: ['US health organizations', 'Canadian private-sector companies', 'BC and Canadian government data', 'University student records globally'], answer: 2 },
          { q: 'ACM/IEEE Principle 8 (SELF) requires engineers to:', options: ['Put themselves first in all decisions', 'Commit to lifelong learning and professional development', 'Work independently without collaboration', 'Avoid all conflicts of interest'], answer: 1 },
          { q: 'PIPEDA applies to:', options: ['USA student records', 'Canadian private sector organizations', 'British Columbia government agencies', 'US healthcare providers'], answer: 1 }
        ]
      },
      {
        id: 't1l4',
        title: 'Case Studies',
        description: 'Insulin pump, MHC-PMS and Weather Station systems',
        slides: [
          { tag: 'Case Study 1', heading: 'Insulin Pump Control System', body: 'An embedded system that monitors blood sugar and automatically delivers insulin. Safety-critical — a software failure could kill the patient. Requires formal verification and extensive testing.', type: 'text' },
          { tag: 'Insulin Pump', heading: 'Key Engineering Concerns', bullets: ['Safety: never over- or under-dose insulin', 'Reliability: must work 24/7 without failure', 'Real-time: must respond within milliseconds', 'Redundancy: hardware backup if software fails'], type: 'bullets' },
          { tag: 'Case Study 2', heading: 'MHC-PMS (Mental Health Care Patient Management)', body: 'A system to manage care of patients with mental health problems. Handles sensitive personal data. Must balance confidentiality with the safety need to share info between care providers.', type: 'text' },
          { tag: 'MHC-PMS', heading: 'Key Engineering Concerns', bullets: ['Privacy: patient data is extremely sensitive', 'Security: strict role-based access control', 'Availability: clinicians need it during appointments', 'Interoperability: must share info with other health systems', 'Legal compliance: HIPAA / FIPPA requirements'], type: 'bullets' },
          { tag: 'Case Study 3', heading: 'Wilderness Weather Station', body: 'Remote hardware + software station that collects environmental data and transmits it. Operates unattended — must be highly reliable and self-diagnosing because human maintenance is expensive.', type: 'text' },
          { tag: 'Key Takeaway', heading: 'What the Case Studies Teach Us', highlight: 'Different systems have different dominant concerns. Embedded → safety/reliability. Healthcare → privacy/security. Remote → autonomy/resilience. Good SE means identifying the most critical requirements first.', type: 'highlight' }
        ],
        quiz: [
          { q: 'The insulin pump is primarily classified as what type of software system?', options: ['SaaS application', 'Batch processing system', 'Embedded control system', 'Interactive transaction-based system'], answer: 2 },
          { q: 'The main tension in the MHC-PMS system is between:', options: ['Speed and accuracy', 'Cost and reliability', 'Confidentiality and the need to share patient information for care', 'Open-source vs proprietary software'], answer: 2 },
          { q: 'Why must the Wilderness Weather Station be especially self-diagnosing?', options: ['Because it processes very large datasets', 'Because human maintenance visits are expensive and infrequent', 'Because it runs on a SaaS model', 'Because it handles sensitive personal data'], answer: 1 },
          { q: 'Which property is MOST critical for the insulin pump system?', options: ['Usability', 'Safety', 'Cost-efficiency', 'Portability'], answer: 1 },
          { q: 'MHC-PMS must comply with which laws?', options: ['FERPA and PIPEDA', 'HIPAA and FIPPA', 'GDPR and SOX', 'PCI-DSS and ISO 9001'], answer: 1 },
          { q: 'The insulin pump requires redundancy because:', options: ['It is expensive to build', 'A software failure could be life-threatening', 'It operates in a remote location', 'It handles sensitive patient data'], answer: 1 },
          { q: 'Which case study best illustrates the requirement of "interoperability"?', options: ['Insulin Pump — must work with blood glucose sensors', 'MHC-PMS — must share data with other health systems', 'Weather Station — must transmit data wirelessly', 'All three equally'], answer: 1 },
          { q: 'The dominant concern for the Wilderness Weather Station is:', options: ['Privacy and security', 'Safety and reliability in an unattended environment', 'Real-time response', 'Role-based access control'], answer: 1 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 2 — Software Processes
  // ══════════════════════════════════════════════════════════
  {
    id: 't2',
    icon: '🔄',
    title: 'Software Processes',
    subtitle: '4 lessons · Waterfall, Incremental, Reuse & Spiral models',
    lessons: [
      {
        id: 't2l1',
        title: 'What is a Software Process?',
        description: 'Process models, activities and the Plan-Driven spectrum',
        slides: [
          { tag: 'Definition', heading: 'Software Process', body: 'A software process is a structured set of activities required to develop a software system. It describes the WHO, WHAT, WHEN, and HOW of software development.', type: 'text' },
          { tag: 'Core Activities', heading: 'Four Fundamental Activities', bullets: ['Specification — defining what the system should do', 'Design & Implementation — defining the system organization and coding', 'Validation — checking that the system meets requirements', 'Evolution — changing the system in response to customer needs'], type: 'bullets' },
          { tag: 'Spectrum', heading: 'Plan-Driven vs Agile', body: 'Plan-driven processes specify all activities in advance and measure progress against a plan. Agile processes are iterative — planning is incremental and easier to change to reflect changing requirements.', type: 'text' },
          { tag: 'Reality', heading: 'No "Best" Process', highlight: 'The right process depends on the problem. Large safety-critical systems often require more plan-driven approaches. Rapidly changing business apps benefit from agile approaches.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Which activity in the software process involves "defining what the system should do"?', options: ['Implementation', 'Evolution', 'Specification', 'Validation'], answer: 2 },
          { q: 'A plan-driven process:', options: ['Plans all activities upfront and measures against that plan', 'Uses sprints and daily standups', 'Has no documentation requirements', 'Is always inferior to agile approaches'], answer: 0 },
          { q: 'Which type of project might prefer a plan-driven approach?', options: ['A startup\'s prototype', 'A rapidly changing e-commerce site', 'A large safety-critical system', 'A personal side project'], answer: 2 },
          { q: 'In agile processes, planning is:', options: ['Done entirely upfront', 'Incremental and adaptable to change', 'Skipped in favour of coding', 'Delegated to the customer'], answer: 1 },
          { q: 'The four fundamental SE activities are:', options: ['Design, Code, Test, Deploy', 'Specification, Design/Implementation, Validation, Evolution', 'Planning, Analysis, Build, Release', 'Inception, Elaboration, Construction, Transition'], answer: 1 },
          { q: 'A software process describes the:', options: ['Programming language to use', 'WHO, WHAT, WHEN, and HOW of software development', 'Hardware requirements only', 'Marketing strategy'], answer: 1 },
          { q: 'Which activity deals with "checking that the system meets requirements"?', options: ['Specification', 'Evolution', 'Validation', 'Implementation'], answer: 2 },
          { q: 'Agile processes are best suited for:', options: ['Safety-critical embedded systems', 'Projects with fixed, well-known requirements', 'Rapidly changing business applications', 'Large government defence contracts'], answer: 2 }
        ]
      },
      {
        id: 't2l2',
        title: 'The Waterfall Model',
        description: 'Phases, when to use it, and its limitations',
        slides: [
          { tag: 'Model', heading: 'Waterfall — The Original Process Model', body: 'Waterfall was the first published software process model (Royce, 1970). It flows in one direction — like water — through phases. Each phase must be complete before the next begins.', type: 'text' },
          { tag: 'Phases', heading: 'The 5 Waterfall Phases', bullets: ['1. Requirements Analysis — what does the system need to do?', '2. System Design — how will it be structured?', '3. Implementation — coding the modules', '4. Testing (Verification) — does it work correctly?', '5. Deployment & Maintenance — delivering and updating'], type: 'bullets' },
          { tag: 'Key Feature', heading: 'Single Delivery', highlight: 'Waterfall produces ONE final product at the end. There are no intermediate releases to the customer. This is suitable when requirements are very well understood upfront.', type: 'highlight' },
          { tag: 'When to Use', heading: 'Waterfall is appropriate when:', bullets: ['Requirements are well-understood and unlikely to change', 'The system is being built to replace an existing system with clear requirements', 'A large team working across multiple sites needs strict coordination', 'Regulatory compliance requires extensive documentation at each phase'], type: 'bullets' },
          { tag: 'Weakness', heading: 'Problems with Waterfall', bullets: ['Inflexible — hard to accommodate changing requirements mid-project', 'Customer doesn\'t see working software until very late', 'Testing is at the end — defects found late are expensive to fix', 'Requirements change: most projects find waterfall too rigid in practice'], type: 'bullets' }
        ],
        quiz: [
          { q: 'In the Waterfall model, when does the customer typically see working software?', options: ['After every sprint', 'At the end of the project', 'During the design phase', 'At the start of implementation'], answer: 1 },
          { q: 'Waterfall is most appropriate when:', options: ['Requirements are unclear and likely to change', 'The project is very small', 'Requirements are well-understood and stable', 'The team is small and co-located'], answer: 2 },
          { q: 'Which is a major weakness of the Waterfall model?', options: ['It requires too many intermediate deliveries', 'Testing happens at the end, making defects expensive to fix', 'It does not require any documentation', 'It works best for projects with changing requirements'], answer: 1 },
          { q: 'Waterfall was first published by:', options: ['Kent Beck in 1999', 'Royce in 1970', 'Barry Boehm in 1988', 'The Agile Alliance in 2001'], answer: 1 },
          { q: 'In Waterfall, the correct phase order is:', options: ['Design → Requirements → Implementation → Testing → Deployment', 'Requirements → Design → Implementation → Testing → Deployment', 'Implementation → Design → Requirements → Testing → Deployment', 'Requirements → Implementation → Design → Testing → Deployment'], answer: 1 },
          { q: 'Why is Waterfall described as "flowing in one direction"?', options: ['Code is written from top to bottom', 'Each phase must complete before the next begins — no going back', 'Data flows through the system sequentially', 'The project always runs on time'], answer: 1 },
          { q: 'Waterfall is well-suited for systems being built to:', options: ['Handle rapidly changing user requirements', 'Replace an existing system with clearly understood requirements', 'Prototype a new product concept', 'Deliver features in weekly increments'], answer: 1 },
          { q: 'Which Waterfall phase corresponds to "does it work correctly?"', options: ['Requirements Analysis', 'System Design', 'Implementation', 'Testing (Verification)'], answer: 3 }
        ]
      },
      {
        id: 't2l3',
        title: 'Incremental Development',
        description: 'Iterative delivery, advantages, code rot and refactoring',
        slides: [
          { tag: 'Model', heading: 'Incremental Development', body: 'Instead of one big delivery, you divide the system into increments and deliver useful functionality with each one. The customer gets value early and can provide feedback that shapes future increments.', type: 'text' },
          { tag: 'How it works', heading: 'Increment Cycle', bullets: ['Start with the most important/highest-priority features', 'Develop and deliver a first increment', 'Customer evaluates and provides feedback', 'Next increment incorporates feedback and adds new features', 'Continue until the full system is delivered'], type: 'bullets' },
          { tag: 'Advantages', heading: 'Why Incremental is Better (Often)', bullets: ['Customer sees value early — not waiting until the end', 'Early feedback means you build the RIGHT thing', 'Lower risk — problems discovered early when they\'re cheap to fix', 'More predictable — small increments are easier to estimate'], type: 'bullets' },
          { tag: 'Problem', heading: 'Code Rot & Technical Debt', body: 'As new increments are added, the structure of the software degrades — this is called "code rot". Without deliberate refactoring, the codebase becomes harder to understand and modify.', type: 'text' },
          { tag: 'Solution', heading: 'Refactoring', highlight: 'Refactoring means restructuring code without changing its external behaviour — cleaning up, removing duplication, improving clarity. It fights code rot and keeps the system healthy for future increments.', type: 'highlight' }
        ],
        quiz: [
          { q: 'What is the main advantage of incremental development over Waterfall?', options: ['It requires no testing', 'The customer sees working software early and can provide feedback', 'It always produces better code quality', 'It requires no documentation'], answer: 1 },
          { q: '"Code rot" refers to:', options: ['Software that crashes frequently', 'The gradual degradation of software structure as increments are added', 'Deleted source code', 'Security vulnerabilities in legacy code'], answer: 1 },
          { q: 'Refactoring means:', options: ['Adding new features to existing modules', 'Re-writing software from scratch', 'Restructuring code without changing its external behaviour', 'Deleting unused code files'], answer: 2 },
          { q: 'In incremental development, which features should go in the FIRST increment?', options: ['The easiest to implement', 'The lowest risk features', 'The highest priority/most valuable features', 'Features the development team prefers'], answer: 2 },
          { q: 'What problem does refactoring solve?', options: ['Slow network performance', 'Code rot and technical debt accumulation', 'Missing requirements', 'Poor user interface design'], answer: 1 },
          { q: 'A key benefit of early customer feedback in incremental development is:', options: ['It eliminates the need for testing', 'It ensures you are building the RIGHT thing', 'It reduces the number of developers needed', 'It guarantees on-time delivery'], answer: 1 },
          { q: 'Technical debt in software development refers to:', options: ['The monetary cost of software licenses', 'Shortcuts and structural problems that accumulate and slow future development', 'Unpaid developer salaries', 'Outdated hardware infrastructure'], answer: 1 },
          { q: 'Compared to Waterfall, incremental development has:', options: ['Higher risk overall', 'No need for architecture planning', 'Lower risk because problems are found early', 'Longer total development time always'], answer: 2 }
        ]
      },
      {
        id: 't2l4',
        title: 'Reuse-Oriented & Spiral Models',
        description: 'Building with components and managing risk with spirals',
        slides: [
          { tag: 'Model', heading: 'Reuse-Oriented Process', body: 'Rather than building everything from scratch, this model relies on reusing existing components. The development process focuses on configuring, adapting, and integrating existing software.', type: 'text' },
          { tag: 'Levels of Reuse', heading: '4 Levels of Software Reuse', bullets: ['1. Function level — reusing individual functions/algorithms', '2. Library level — using standard libraries (e.g. sort algorithms)', '3. Object-oriented — inheriting and extending classes', '4. COTS (Commercial Off-The-Shelf) — buying & integrating whole systems'], type: 'bullets' },
          { tag: 'Trade-offs', heading: 'Reuse: Pros and Cons', bullets: ['✅ Faster development — less code to write', '✅ Lower cost — reusing existing investment', '✅ Higher reliability — reused code is battle-tested', '❌ Compromise on requirements — may not fit perfectly', '❌ Loss of control — dependent on vendor timelines & quality', '❌ Integration complexity — components may not work together smoothly'], type: 'bullets' },
          { tag: 'Model', heading: 'The Spiral Model (Boehm, 1988)', body: 'The spiral model adds risk management to the incremental approach. Each spiral loop represents a phase — but before committing to the next phase, you assess and mitigate risks.', type: 'text' },
          { tag: 'Spiral Quadrants', heading: 'Four Quadrants of Each Spiral Loop', bullets: ['1. Determine objectives, alternatives, constraints', '2. Evaluate alternatives, identify and resolve risks', '3. Develop and verify next-level product', '4. Plan next phases'], type: 'bullets' },
          { tag: 'Key Insight', heading: 'Spiral vs Other Models', highlight: 'The spiral model is not just incremental — it\'s explicitly risk-driven. The loop repeats only if the risk assessment says it\'s worth proceeding. This makes it suitable when uncertainty is high.', type: 'highlight' }
        ],
        quiz: [
          { q: 'COTS in the reuse-oriented model stands for:', options: ['Code-Oriented Testing Strategy', 'Commercial Off-The-Shelf', 'Component-Oriented Technology Stack', 'Continuous Object Testing System'], answer: 1 },
          { q: 'A key downside of reuse-oriented development is:', options: ['It always takes longer than building from scratch', 'Reused code has never been tested', 'You may have to compromise requirements to fit available components', 'It cannot be used with agile approaches'], answer: 2 },
          { q: 'What distinguishes the Spiral model from plain incremental development?', options: ['It uses waterfall phases instead of iterations', 'It is explicitly risk-driven — each loop includes risk assessment', 'It delivers software only once at the end', 'It requires no customer involvement'], answer: 1 },
          { q: 'The Spiral model was developed by:', options: ['Winston Royce in 1970', 'Kent Beck in 1999', 'Barry Boehm in 1988', 'The Agile Alliance in 2001'], answer: 2 },
          { q: 'Which is an ADVANTAGE of reuse-oriented development?', options: ['Full control over all component quality', 'Requirements always fit perfectly', 'Faster development through reduced code writing', 'No integration complexity'], answer: 2 },
          { q: 'The second quadrant of each Spiral loop involves:', options: ['Planning the next phases', 'Developing and verifying the product', 'Evaluating alternatives and identifying risks', 'Determining objectives and constraints'], answer: 2 },
          { q: 'The highest level of software reuse is:', options: ['Function level', 'Library level', 'Object-oriented inheritance', 'COTS — Commercial Off-The-Shelf systems'], answer: 3 },
          { q: 'The Spiral model is most appropriate for:', options: ['Simple, well-understood projects', 'Large, high-risk projects with significant uncertainty', 'Projects with no customer interaction', 'Projects that must deliver in a single release'], answer: 1 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 3 — Coping with Change & Process Improvement
  // ══════════════════════════════════════════════════════════
  {
    id: 't3',
    icon: '⚙️',
    title: 'Coping with Change',
    subtitle: '4 lessons · Prototyping, incremental delivery, CMM & RUP',
    lessons: [
      {
        id: 't3l1',
        title: 'Why Change is Costly',
        description: 'The cost of change curve and change strategies',
        slides: [
          { tag: 'Problem', heading: 'Change is Inevitable', body: 'Requirements change because businesses evolve, regulations change, and users discover they want something different once they see the system. The challenge is managing this change cost-effectively.', type: 'text' },
          { tag: 'Cost Curve', heading: 'Cost of Change Grows Over Time', body: 'A defect caught during requirements is cheap to fix — maybe an hour of work. The same defect found in production can cost 100× more to fix. This is the "cost of change" curve.', type: 'text' },
          { tag: 'Two Strategies', heading: 'Dealing with Change', bullets: ['Change Avoidance — try to avoid needing changes (prototyping, validation early)', 'Change Tolerance — design the process so changes are cheap to make (incremental delivery, agile)'], type: 'bullets' },
          { tag: 'Summary', heading: 'Key Trade-off', highlight: 'Change avoidance front-loads the cost (expensive requirements/design). Change tolerance spreads cost across iterations but requires good architecture to stay manageable.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Compared to fixing a defect during requirements, fixing the same defect in production costs approximately:', options: ['The same amount', 'Twice as much', '10× as much', '100× or more'], answer: 3 },
          { q: 'Which strategy tries to avoid needing changes in the first place?', options: ['Change tolerance', 'Change avoidance', 'Refactoring', 'Spiral planning'], answer: 1 },
          { q: '"Incremental delivery" is primarily a strategy for:', options: ['Change avoidance', 'Change tolerance', 'Risk elimination', 'Documentation'], answer: 1 },
          { q: 'Requirements change primarily because:', options: ['Developers make mistakes', 'Businesses evolve, regulations change, and users see things differently once a system exists', 'Programming languages are too complex', 'Testing is inadequate'], answer: 1 },
          { q: 'Change avoidance front-loads cost through:', options: ['More frequent releases', 'Expensive upfront requirements analysis and design', 'Hiring more developers', 'Automated testing'], answer: 1 },
          { q: 'The "cost of change" curve shows that costs are LOWEST:', options: ['During deployment', 'After user acceptance testing', 'During the requirements/early design phase', 'During system integration'], answer: 2 },
          { q: 'Prototyping is primarily a technique for:', options: ['Change tolerance', 'Change avoidance', 'Batch processing', 'Automated deployment'], answer: 1 },
          { q: 'Change tolerance requires:', options: ['No architecture planning', 'Good architecture so changes remain manageable across iterations', 'Waterfall phases', 'Fixed requirements at the start'], answer: 1 }
        ]
      },
      {
        id: 't3l2',
        title: 'Prototyping',
        description: 'Throwaway vs evolutionary prototypes',
        slides: [
          { tag: 'Definition', heading: 'What is a Prototype?', body: 'A prototype is an initial version of a system, built to explore requirements, demonstrate concepts, or investigate design options. The key goal is learning — not shipping.', type: 'text' },
          { tag: 'Types', heading: 'Two Types of Prototypes', bullets: ['Throwaway prototype — built to explore requirements, then DISCARDED. Fast and dirty. Should never become the final product.', 'Evolutionary prototype — a prototype that is continuously refined and eventually becomes the delivered system.'], type: 'bullets' },
          { tag: 'Benefits', heading: 'Why Prototype?', bullets: ['Helps discover missing or conflicting requirements early', 'Lets customers see and touch the system concept before full investment', 'Validates feasibility of key technical approaches', 'Improves usability by getting early UX feedback'], type: 'bullets' },
          { tag: 'Warning', heading: 'Prototype ≠ Production Code', highlight: 'A throwaway prototype is intentionally fast-and-dirty. If you let it evolve into production software, you inherit all the shortcuts and missing quality attributes. Plan to throw it away.', type: 'highlight' }
        ],
        quiz: [
          { q: 'A throwaway prototype is:', options: ['A prototype that is refined until it becomes the final system', 'Built quickly to learn, then discarded before production', 'A prototype built with production-quality code', 'The same as an MVP (minimum viable product)'], answer: 1 },
          { q: 'The primary goal of prototyping is:', options: ['To deliver the final product faster', 'To replace requirements documentation', 'To learn — explore requirements, design, feasibility', 'To write production code faster'], answer: 2 },
          { q: 'Which of the following is a risk of evolutionary prototyping?', options: ['It takes too long to throw away', 'The prototype shortcuts get carried into production', 'Customers cannot give feedback on prototypes', 'It requires formal verification at every step'], answer: 1 },
          { q: 'An evolutionary prototype is one that:', options: ['Is always thrown away after demonstrations', 'Is refined over time until it becomes the delivered system', 'Is built to test hardware interfaces only', 'Is used only for UI/UX design validation'], answer: 1 },
          { q: 'Prototyping is best used as a strategy for:', options: ['Change tolerance', 'Change avoidance — discovering problems before full commitment', 'Replacing the testing phase', 'Managing team communication'], answer: 1 },
          { q: 'Why should a throwaway prototype never become production software?', options: ['It uses the wrong programming language', 'It inherits all the shortcuts and lacks required quality attributes', 'Customers won\'t accept prototype-based systems', 'It costs too much to maintain'], answer: 1 },
          { q: 'Which benefit of prototyping relates to UX and design?', options: ['Validates hardware interfaces', 'Discovers database schema issues', 'Improves usability by getting early UX feedback', 'Automates regression testing'], answer: 2 },
          { q: 'Prototyping helps discover which type of requirements problems early?', options: ['Only non-functional requirements', 'Missing or conflicting requirements', 'Database indexing problems', 'Network latency issues'], answer: 1 }
        ]
      },
      {
        id: 't3l3',
        title: 'Incremental Delivery',
        description: 'Delivering value progressively through increments',
        slides: [
          { tag: 'Model', heading: 'Incremental Delivery', body: 'Rather than building the whole system before release, you identify a series of increments. Each increment adds value. Customers get a working system early — not at the very end.', type: 'text' },
          { tag: 'Process', heading: 'Incremental Delivery Steps', bullets: ['1. Outline requirements — general description of what\'s needed', '2. Assign requirements to increments — prioritize ruthlessly', '3. Design system architecture — must support all planned increments', '4. Develop and validate increment', '5. Integrate increment and validate the whole system', '6. If incomplete: repeat for next increment'], type: 'bullets' },
          { tag: 'Benefit', heading: 'Why it works', bullets: ['Customers can use the system and give feedback from early on', 'High-value features delivered first — ROI sooner', 'Lower risk — problems found early are cheaper to fix', 'Momentum: a working system encourages continued investment'], type: 'bullets' },
          { tag: 'Challenge', heading: 'The Architecture Problem', highlight: 'You must design the architecture at the start to support ALL planned increments — even though you won\'t build them all yet. Adding architectural features later is expensive.', type: 'highlight' }
        ],
        quiz: [
          { q: 'In incremental delivery, when does the customer first receive working software?', options: ['Only after all increments are complete', 'After the first increment is developed and integrated', 'During the requirements phase', 'Only after formal acceptance testing is complete'], answer: 1 },
          { q: 'When prioritizing what goes in the first increment, you should include:', options: ['The easiest features to build', 'The least risky features', 'The most valuable/highest-priority features', 'All features the customer has requested'], answer: 2 },
          { q: 'A key challenge of incremental delivery is:', options: ['Customers can\'t give feedback on partial systems', 'The architecture must support all future increments, designed upfront', 'Each increment must be fully documented before starting', 'The team must be larger than for waterfall projects'], answer: 1 },
          { q: 'Why does incremental delivery produce ROI sooner than Waterfall?', options: ['It costs less to develop', 'High-value features are delivered first and available to users early', 'It requires fewer developers', 'Testing is eliminated in early increments'], answer: 1 },
          { q: 'Which step in incremental delivery must be completed BEFORE developing the first increment?', options: ['Acceptance testing', 'Designing the system architecture', 'Writing user manuals', 'Deployment to production'], answer: 1 },
          { q: 'Incremental delivery is primarily a strategy for:', options: ['Change avoidance', 'Change tolerance — making changes cheaper to incorporate', 'Eliminating requirements analysis', 'Single large releases'], answer: 1 },
          { q: '"Momentum" as a benefit of incremental delivery means:', options: ['The team works faster over time', 'A working system encourages continued stakeholder investment', 'Each increment takes less time than the last', 'Automated CI/CD speeds up delivery'], answer: 1 },
          { q: 'The architecture in incremental delivery must be designed to:', options: ['Support only the first two increments', 'Be replaced entirely with each new increment', 'Support all planned increments from the beginning', 'Be as minimal as possible at first'], answer: 2 }
        ]
      },
      {
        id: 't3l4',
        title: 'Process Improvement: CMM & RUP',
        description: 'Maturity models and the Rational Unified Process',
        slides: [
          { tag: 'Why Improve?', heading: 'Software Process Improvement', body: 'Process improvement means understanding existing processes and changing them to increase quality, reduce costs, or speed up development. Two main schools: the maturity approach (CMM) and the agile approach.', type: 'text' },
          { tag: 'Model', heading: 'Capability Maturity Model (CMM)', bullets: ['Level 1 — Initial: chaotic, success depends on individuals', 'Level 2 — Repeatable: basic project management, can repeat past successes', 'Level 3 — Defined: processes are documented, standardized organization-wide', 'Level 4 — Managed: processes are measured and controlled quantitatively', 'Level 5 — Optimizing: continuous process improvement using feedback'], type: 'bullets' },
          { tag: 'Framework', heading: 'Rational Unified Process (RUP)', body: 'RUP is a heavyweight iterative process framework with four phases. It\'s use-case driven, architecture-centric, iterative and incremental. Widely used in enterprise software.', type: 'text' },
          { tag: 'RUP Phases', heading: 'Four RUP Phases', bullets: ['Inception — establish business case, define scope', 'Elaboration — analyse the problem, develop the architecture, plan the project', 'Construction — design, code, and test the system', 'Transition — deploy to production, train users, get feedback'], type: 'bullets' },
          { tag: 'RUP Workflows', heading: 'RUP Core Workflows', bullets: ['Business Modelling, Requirements, Analysis & Design', 'Implementation, Testing, Deployment', 'Configuration Management, Project Management, Environment'], type: 'bullets' },
          { tag: 'Key Insight', heading: 'CMM vs Agile for Improvement', highlight: 'CMM (maturity approach) introduces more process and measurement. Agile approach reduces process overhead and adds agility. Most real organizations are somewhere in between.', type: 'highlight' }
        ],
        quiz: [
          { q: 'At CMM Level 1 (Initial), software processes are:', options: ['Fully documented and standardized', 'Quantitatively measured', 'Chaotic — success depends on individuals', 'Continuously improved using data'], answer: 2 },
          { q: 'The four phases of RUP in order are:', options: ['Requirements, Design, Code, Test', 'Inception, Elaboration, Construction, Transition', 'Planning, Analysis, Implementation, Deployment', 'Initiation, Development, Testing, Release'], answer: 1 },
          { q: 'CMM Level 5 (Optimizing) is characterized by:', options: ['Basic project management in place', 'Processes documented across the organization', 'Continuous process improvement using feedback data', 'Chaotic, hero-driven development'], answer: 2 },
          { q: 'RUP is described as "use-case driven" because:', options: ['It was created by Rational Software', 'Use cases drive the entire development process', 'It only supports UML diagrams', 'It requires daily standups like Scrum'], answer: 1 },
          { q: 'CMM Level 3 (Defined) means:', options: ['Only key individuals know the process', 'Processes are measured quantitatively', 'Processes are documented and standardized across the organization', 'Continuous improvement is in place'], answer: 2 },
          { q: 'The RUP "Elaboration" phase focuses on:', options: ['Writing production code', 'Deploying to users', 'Analysing the problem and developing the system architecture', 'Establishing only the business case'], answer: 2 },
          { q: 'CMM Level 2 (Repeatable) means:', options: ['All processes are chaotic', 'Basic project management allows past successes to be repeated', 'Quantitative measurement drives all decisions', 'Continuous improvement cycles are in place'], answer: 1 },
          { q: 'Which CMM level involves quantitative measurement and control of processes?', options: ['Level 1 — Initial', 'Level 2 — Repeatable', 'Level 3 — Defined', 'Level 4 — Managed'], answer: 3 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 4 — Agile Development
  // ══════════════════════════════════════════════════════════
  {
    id: 't4',
    icon: '🏃',
    title: 'Agile Development',
    subtitle: '4 lessons · Manifesto, XP, Scrum and scaling Agile',
    lessons: [
      {
        id: 't4l1',
        title: 'The Agile Manifesto',
        description: '4 values, 12 principles and plan-driven vs agile',
        slides: [
          { tag: 'History', heading: 'Birth of Agile (2001)', body: '17 software practitioners met in Snowbird, Utah and wrote the Agile Manifesto — a reaction against heavyweight, plan-driven processes that were slowing teams down and producing the wrong software.', type: 'text' },
          { tag: 'Values', heading: '4 Core Agile Values', bullets: ['Individuals and interactions  OVER  processes and tools', 'Working software  OVER  comprehensive documentation', 'Customer collaboration  OVER  contract negotiation', 'Responding to change  OVER  following a plan'], type: 'bullets' },
          { tag: 'Note', heading: 'Both sides matter', highlight: '"While there is value in the items on the right, we value the items on the left more." The manifesto doesn\'t say documentation is bad — it says working software matters MORE.', type: 'highlight' },
          { tag: 'Principles', heading: 'Key Agile Principles', bullets: ['Deliver working software frequently (weeks, not months)', 'Welcome changing requirements, even late in development', 'Business people and developers work together daily', 'Build projects around motivated individuals — trust them', 'Working software is the primary measure of progress', 'Sustainable development — maintain a constant pace', 'Continuous attention to technical excellence and good design', 'Simplicity — maximize the work NOT done'], type: 'bullets' },
          { tag: 'Comparison', heading: 'Plan-Driven vs Agile', bullets: ['Plan-driven: upfront design, fixed requirements, single delivery', 'Agile: iterative design, evolving requirements, frequent delivery', 'Plan-driven suits stable, safety-critical systems', 'Agile suits changing, business-focused systems'], type: 'bullets' }
        ],
        quiz: [
          { q: 'Which of the following is NOT one of the 4 Agile Manifesto values?', options: ['Individuals and interactions over processes and tools', 'Working software over comprehensive documentation', 'Detailed contracts over customer collaboration', 'Responding to change over following a plan'], answer: 2 },
          { q: 'The Agile Manifesto was written in:', options: ['1995', '1998', '2001', '2005'], answer: 2 },
          { q: 'According to Agile principles, what is the PRIMARY measure of progress?', options: ['Lines of code written', 'Number of documented requirements', 'Working software', 'Passing the sprint review'], answer: 2 },
          { q: 'How many people signed the original Agile Manifesto?', options: ['5', '12', '17', '27'], answer: 2 },
          { q: 'The Agile value "Customer collaboration over contract negotiation" means:', options: ['Contracts should be eliminated entirely', 'Working directly with customers is more valuable than rigid contract adherence', 'Customers must write all requirements', 'Legal teams should manage all customer communication'], answer: 1 },
          { q: 'Agile\'s "sustainable pace" principle means:', options: ['Only senior developers should work on complex features', 'The team maintains a constant pace — no overtime or death marches', 'All sprints must be exactly 2 weeks', 'Velocity must increase each sprint'], answer: 1 },
          { q: 'Which principle says teams should "welcome changing requirements, even late in development"?', options: ['The waterfall principle', 'An Agile principle', 'The CMM Level 3 standard', 'The RUP Elaboration phase guideline'], answer: 1 },
          { q: 'Agile favours "simplicity" which means:', options: ['Writing the minimum possible code — maximize the work NOT done', 'Using simple programming languages only', 'Avoiding architecture planning', 'Removing all documentation'], answer: 0 }
        ]
      },
      {
        id: 't4l2',
        title: 'Extreme Programming (XP)',
        description: 'XP practices: TDD, pair programming, collective ownership & CI',
        slides: [
          { tag: 'Method', heading: 'Extreme Programming (XP)', body: 'XP is an agile method that "takes good practices to the extreme". If code reviews are good, review code all the time (pair programming). If testing is good, test all the time (TDD).', type: 'text' },
          { tag: 'Requirements', heading: 'User Stories', body: 'XP uses user stories instead of formal requirements documents. A user story is a card describing a feature from the user\'s perspective: "As a [user], I want [feature] so that [benefit]."', type: 'text' },
          { tag: 'Practice', heading: 'Test-Driven Development (TDD)', bullets: ['1. Write a failing test FIRST (before any production code)', '2. Write the minimum code to make the test pass', '3. Refactor the code while keeping tests green', 'Repeat for every new feature — tests become the spec'], type: 'bullets' },
          { tag: 'Practice', heading: 'Pair Programming', body: 'Two developers work together at one machine. One types (driver), the other reviews in real-time (navigator). They swap roles frequently. Benefits: fewer defects, knowledge sharing, better design decisions.', type: 'text' },
          { tag: 'Practice', heading: 'Key XP Practices', bullets: ['Collective code ownership — anyone can change any code', 'Continuous integration (CI) — integrate and test multiple times per day', 'Small releases — ship small, working increments frequently', 'On-site customer — a customer representative works with the team', 'Sustainable pace — no overtime; tired developers make mistakes', 'Simple design — do the simplest thing that could possibly work'], type: 'bullets' },
          { tag: 'Key Insight', heading: 'XP\'s Philosophy', highlight: 'XP is opinionated — it says if a practice is good, do it constantly. The discipline comes from not cutting corners: tests are never skipped, code is always integrated, design is always simplified.', type: 'highlight' }
        ],
        quiz: [
          { q: 'In Test-Driven Development (TDD), what comes FIRST?', options: ['Writing the production code', 'Writing a failing test', 'Running the integration tests', 'Documenting the function signature'], answer: 1 },
          { q: 'In pair programming, the "navigator" is the person who:', options: ['Types the code', 'Reviews the code in real-time while the driver types', 'Manages the sprint backlog', 'Writes the user stories'], answer: 1 },
          { q: 'XP\'s "collective code ownership" means:', options: ['Only senior developers can change production code', 'Code is owned by the team — anyone can change anything', 'All changes require management approval', 'Code is reviewed by a separate QA team before merging'], answer: 1 },
          { q: 'XP requires how many developers at one workstation for pair programming?', options: ['1', '2', '3', '4'], answer: 1 },
          { q: 'Continuous Integration (CI) in XP means:', options: ['Deploying to production once per month', 'Integrating and testing multiple times per day', 'Having continuous code reviews', 'Continuous customer meetings'], answer: 1 },
          { q: 'XP user stories follow the format:', options: ['"The system shall..."', '"Given/When/Then..."', '"As a [user], I want [feature] so that [benefit]"', '"Feature: [name], Priority: [high/low]"'], answer: 2 },
          { q: 'The TDD cycle in the correct order is:', options: ['Code → Test → Refactor', 'Test → Code → Refactor', 'Refactor → Test → Code', 'Code → Refactor → Test'], answer: 1 },
          { q: 'XP\'s "on-site customer" practice means:', options: ['Customers visit the office once a month', 'A customer representative works with the team throughout development', 'Developers work at the customer\'s office', 'Customer signs off on each sprint'], answer: 1 }
        ]
      },
      {
        id: 't4l3',
        title: 'Scrum',
        description: 'Roles, Sprint cycle, backlog, velocity and story points',
        slides: [
          { tag: 'Framework', heading: 'Scrum', body: 'Scrum is an agile framework focused on project management rather than engineering practices. It uses fixed-length iterations (Sprints), a prioritized backlog, and three defined roles.', type: 'text' },
          { tag: 'Roles', heading: 'Three Scrum Roles', bullets: ['Development Team — self-organizing, cross-functional team of 3–9 people who build the product', 'Scrum Master — facilitates the process, removes impediments, NOT a project manager', 'Product Owner — owns the product backlog, prioritizes features, represents the business'], type: 'bullets' },
          { tag: 'Cycle', heading: 'The Sprint Cycle', bullets: ['1. Sprint Planning — team selects items from the Product Backlog', '2. Sprint (1–4 weeks) — team works on Sprint Backlog items', '3. Daily Scrum (15 min standup) — coordination meeting', '4. Sprint Review — demo working software to stakeholders', '5. Sprint Retrospective — inspect and adapt the process'], type: 'bullets' },
          { tag: 'Daily Scrum', heading: 'The 3 Questions of Daily Scrum', bullets: ['1. What did I do yesterday that helped the team meet the Sprint Goal?', '2. What will I do today to help the team meet the Sprint Goal?', '3. Do I see any impediment that prevents me or the team from meeting the Sprint Goal?'], type: 'bullets' },
          { tag: 'Estimation', heading: 'Velocity & Story Points', body: 'Story points estimate the effort/complexity of backlog items (not time). Velocity is the number of story points a team completes per sprint — used to predict future sprint capacity.', type: 'text' },
          { tag: 'Insight', heading: 'Scrum vs XP', highlight: 'Scrum is a project management framework — it doesn\'t prescribe engineering practices. XP is an engineering method — it prescribes TDD, pair programming, CI. Teams often combine both.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Who owns and prioritizes the Product Backlog in Scrum?', options: ['Scrum Master', 'Development Team', 'Product Owner', 'Stakeholders'], answer: 2 },
          { q: 'The Daily Scrum (standup) is limited to:', options: ['5 minutes', '15 minutes', '30 minutes', '1 hour'], answer: 1 },
          { q: 'In Scrum, "velocity" refers to:', options: ['How fast developers type code', 'The speed of CI/CD pipelines', 'The number of story points a team completes per sprint', 'Time to deploy to production'], answer: 2 },
          { q: 'The Scrum Master\'s role is to:', options: ['Manage the development team\'s salaries', 'Facilitate the process and remove impediments', 'Own the product backlog and prioritize features', 'Write code when the team is behind'], answer: 1 },
          { q: 'A Sprint in Scrum lasts:', options: ['1 day', '1 week only', '1–4 weeks', '3–6 months'], answer: 2 },
          { q: 'Story points measure:', options: ['Time in hours to complete a task', 'The effort and complexity of a backlog item', 'Lines of code to be written', 'Number of bugs to fix'], answer: 1 },
          { q: 'The Sprint Retrospective focuses on:', options: ['Demoing working software to stakeholders', 'Planning the next sprint\'s work', 'Inspecting and improving the team\'s process', 'Reviewing the product backlog priorities'], answer: 2 },
          { q: 'Which Scrum event is used to demo working software to stakeholders?', options: ['Sprint Planning', 'Daily Scrum', 'Sprint Review', 'Sprint Retrospective'], answer: 2 }
        ]
      },
      {
        id: 't4l4',
        title: 'Scaling Agile',
        description: 'Agile beyond small teams: SAFe, challenges and large-scale',
        slides: [
          { tag: 'Context', heading: 'Agile Works Best for Small Teams', body: 'The original Agile manifesto was written for small, co-located teams of motivated individuals. Scaling to large organizations introduces new challenges.', type: 'text' },
          { tag: 'Challenges', heading: 'Scaling Challenges', bullets: ['Multiple teams must coordinate on shared architecture', 'Product backlogs grow complex across many teams', 'Contract management: clients want fixed scope, agile needs flexibility', 'Regulatory compliance may require formal documentation', 'Distributed teams lose the benefits of face-to-face communication'], type: 'bullets' },
          { tag: 'Approaches', heading: 'Scaled Agile Approaches', bullets: ['SAFe (Scaled Agile Framework) — adds portfolio, program, and team levels', 'LeSS (Large-Scale Scrum) — minimize extra roles, use one Product Owner per product', 'Scrum of Scrums — daily sync between Scrum Masters of multiple teams'], type: 'bullets' },
          { tag: 'Reality', heading: 'Agile in Practice', highlight: 'Most large organizations practice "Agile in name" — they use some agile ceremonies but maintain plan-driven contracts, fixed budgets, and waterfall governance. True scaled agile requires cultural change.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Why is scaling Agile challenging?', options: ['Agile doesn\'t work for any software project', 'Multiple teams must coordinate, contracts need flexibility, and regulation may require formal docs', 'Agile requires face-to-face meetings that are impossible for large teams', 'Agile only works in startups, not enterprises'], answer: 1 },
          { q: 'SAFe stands for:', options: ['Simple Agile Framework for Enterprises', 'Scaled Agile Framework', 'Secure Agile Feature Engineering', 'Sprint-based Agile Feature Execution'], answer: 1 },
          { q: '"Scrum of Scrums" is a technique for:', options: ['Running multiple sprints simultaneously within one team', 'Synchronizing multiple Scrum teams through their Scrum Masters', 'Estimating story points across all teams', 'Combining Scrum and XP practices'], answer: 1 },
          { q: 'LeSS (Large-Scale Scrum) minimizes:', options: ['The number of sprints', 'Extra roles and overhead, using one Product Owner per product', 'The number of developers on each team', 'Customer involvement in development'], answer: 1 },
          { q: '"Agile in name" means organizations:', options: ['Use all Agile practices faithfully', 'Have abandoned Agile entirely', 'Use some Agile ceremonies but keep plan-driven contracts and governance', 'Only do pair programming and TDD'], answer: 2 },
          { q: 'Which scaling challenge involves clients expecting a fixed price and scope?', options: ['Regulatory compliance', 'Contract management tension', 'Shared architecture coordination', 'Distributed team communication'], answer: 1 },
          { q: 'True scaled Agile adoption requires:', options: ['Only technical changes to engineering practices', 'Cultural change across the organization', 'Replacing all managers with Scrum Masters', 'Removing all project management processes'], answer: 1 },
          { q: 'SAFe adds which organizational levels beyond the team level?', options: ['Division and Department levels', 'Portfolio and Program levels', 'Executive and Management levels', 'Sprint and Release levels'], answer: 1 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 5 — Requirements Engineering
  // ══════════════════════════════════════════════════════════
  {
    id: 't5',
    icon: '📋',
    title: 'Requirements Engineering',
    subtitle: '4 lessons · User/system reqs, NFRs, elicitation & use cases',
    lessons: [
      {
        id: 't5l1',
        title: 'User vs System Requirements',
        description: 'Types of requirements and why they differ',
        slides: [
          { tag: 'Definition', heading: 'What is a Requirement?', body: 'A requirement is a statement of what a system should do (functional) or what quality properties it should have (non-functional). Requirements bridge the gap between what customers need and what engineers build.', type: 'text' },
          { tag: 'Types', heading: 'User Requirements', body: 'Written in natural language (+ diagrams) for non-technical stakeholders. Describes what the system must do from the USER\'s perspective. Should be technology-agnostic.', type: 'text' },
          { tag: 'Types', heading: 'System Requirements', body: 'A detailed, precise description of the system\'s functions, services, and operational constraints. Written for developers and testers. May include formal notation.', type: 'text' },
          { tag: 'Example', heading: 'User vs System — Example', bullets: ['User req: "The system shall allow users to search for available appointments."', 'System req: "The appointment search function shall return results within 2 seconds for up to 10,000 concurrent users, using full-text search across the appointments database."'], type: 'bullets' },
          { tag: 'Key Insight', heading: 'Why the distinction matters', highlight: 'User requirements are often ambiguous and subject to interpretation. System requirements nail down the details. Moving from user to system requirements is a critical step that uncovers hidden complexity.', type: 'highlight' }
        ],
        quiz: [
          { q: 'User requirements are written for:', options: ['Developers and testers', 'Non-technical stakeholders and customers', 'The operations team', 'Regulatory bodies'], answer: 1 },
          { q: 'System requirements are:', options: ['Written in natural language for managers', 'Technology-agnostic high-level descriptions', 'Detailed, precise descriptions of functions and constraints for developers', 'Only about performance and scalability'], answer: 2 },
          { q: 'The key challenge when moving from user to system requirements is:', options: ['User requirements are always wrong', 'Hidden complexity is revealed — ambiguous user reqs must be made precise', 'System requirements must be written in formal mathematical notation', 'User requirements can\'t be traced to system requirements'], answer: 1 },
          { q: 'User requirements should be:', options: ['Written in code', 'Technology-specific and implementation-focused', 'Written in natural language, technology-agnostic', 'Only created after system design is complete'], answer: 2 },
          { q: 'Which statement is a USER requirement?', options: ['"The login API shall respond within 100ms for 99.9% of requests"', '"The system shall use PostgreSQL for data storage"', '"The system shall allow users to log in using their email and password"', '"The auth module shall implement OAuth 2.0 with PKCE"'], answer: 2 },
          { q: 'System requirements may include:', options: ['Only natural language descriptions', 'Formal notation and precise technical constraints', 'Business strategy documents', 'Marketing personas'], answer: 1 },
          { q: 'Requirements "bridge the gap" between:', options: ['Frontend and backend development', 'What customers need and what engineers build', 'Management and developers', 'Design and testing'], answer: 1 },
          { q: 'Which is an example of a SYSTEM requirement?', options: ['"Users should be able to view their order history"', '"The order history page shall load in under 500ms for datasets of up to 1,000 orders"', '"The app should be easy to use"', '"The system should support mobile users"'], answer: 1 }
        ]
      },
      {
        id: 't5l2',
        title: 'Functional & Non-Functional Requirements',
        description: 'Product, organizational & external NFRs and measurable metrics',
        slides: [
          { tag: 'Types', heading: 'Functional Requirements', body: 'Describe WHAT the system should do — specific behaviours, services, functions. Example: "The system shall allow a user to log in using email and password."', type: 'text' },
          { tag: 'Types', heading: 'Non-Functional Requirements (NFRs)', body: 'Describe HOW the system should be — its qualities, constraints, and performance characteristics. NFRs often apply across the whole system, not just one function.', type: 'text' },
          { tag: 'NFR Categories', heading: 'Three Categories of NFRs', bullets: ['Product requirements — behaviour of the product itself (performance, reliability, usability, security)', 'Organizational requirements — derived from org policies (coding standards, development process, tools)', 'External requirements — from external laws, regulations, standards (HIPAA, GDPR, ISO 9001)'], type: 'bullets' },
          { tag: 'Measurement', heading: 'NFR Metrics — Make them Measurable', bullets: ['Speed: transactions/second, response time in ms', 'Availability: % uptime (e.g. 99.9% = "three nines")', 'Reliability: mean time between failures (MTBF)', 'Security: number of security incidents per year', 'Usability: time to complete a task, error rate'], type: 'bullets' },
          { tag: 'Danger', heading: 'Vague NFRs are Useless', highlight: '"The system should be fast." → useless. "The system shall return search results in under 200ms for 95% of requests under normal load." → testable and verifiable.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Which of the following is a NON-functional requirement?', options: ['The system shall allow users to reset their password', 'The system shall respond to all requests within 300ms', 'The system shall display a list of available doctors', 'The system shall allow an admin to deactivate a user account'], answer: 1 },
          { q: 'HIPAA compliance is an example of which category of NFR?', options: ['Product requirement', 'Organizational requirement', 'External requirement', 'Functional requirement'], answer: 2 },
          { q: 'Why must NFRs be made measurable?', options: ['To make them longer and more impressive', 'So they can be tested and verified — vague NFRs can\'t be confirmed as met or not met', 'Because functional requirements don\'t need to be tested', 'To increase the project budget estimate'], answer: 1 },
          { q: 'A requirement that "the system must use Python" is an example of:', options: ['A functional requirement', 'A product NFR (performance)', 'An organizational requirement (tool/process policy)', 'An external requirement'], answer: 2 },
          { q: 'MTBF stands for:', options: ['Maximum Time Between Features', 'Mean Time Between Failures', 'Minimum Testable Bug Frequency', 'Module Test Build Framework'], answer: 1 },
          { q: '"Three nines" availability (99.9%) means the system is unavailable for approximately:', options: ['8.7 hours per year', '87 hours per year', '1 hour per month', '8 hours per month'], answer: 0 },
          { q: 'Which is a FUNCTIONAL requirement?', options: ['The system must process 500 transactions per second', 'The system shall allow users to filter products by category', 'The system must comply with GDPR', 'The app must use the company\'s standard UI toolkit'], answer: 1 },
          { q: 'Product NFRs describe:', options: ['External regulations the system must comply with', 'Organizational development process standards', 'The quality properties and behaviour of the product itself', 'User interface styling guidelines'], answer: 2 }
        ]
      },
      {
        id: 't5l3',
        title: 'Requirements Elicitation',
        description: 'Interviews, ethnography, scenarios and elicitation process',
        slides: [
          { tag: 'Process', heading: 'Requirements Engineering Process', bullets: ['Elicitation — discovering requirements from stakeholders', 'Analysis — checking consistency, completeness, conflicts', 'Validation — confirming requirements meet stakeholder needs', 'Management — tracking changes to requirements over time'], type: 'bullets' },
          { tag: 'Technique', heading: 'Interviews', body: 'The most common elicitation technique. Engineers interview stakeholders to understand their needs, problems, and expectations.', type: 'text' },
          { tag: 'Interview Types', heading: 'Open vs Closed Interviews', bullets: ['Open interviews — no predefined agenda; exploratory. Good for understanding the problem space.', 'Closed interviews — predefined questions; structured. Good for specific details or comparisons.'], type: 'bullets' },
          { tag: 'Technique', heading: 'Ethnography', body: 'Observing users in their real work environment without asking them to explain — you observe what they actually do (not what they think they do). Reveals implicit, unstated requirements.', type: 'text' },
          { tag: 'Technique', heading: 'Requirements Scenarios', body: 'A scenario describes a specific interaction between a user and the system — like a story. It makes abstract requirements concrete and helps stakeholders understand what they\'re agreeing to.', type: 'text' },
          { tag: 'Key Insight', heading: 'The "Tell me what you do" Problem', highlight: 'Stakeholders often struggle to articulate their needs. They know what they do but not what they need. Ethnography and scenarios help discover requirements that interviews alone would miss.', type: 'highlight' }
        ],
        quiz: [
          { q: 'Ethnography as a requirements elicitation technique involves:', options: ['Asking stakeholders structured questions', 'Running workshops with post-it notes', 'Observing users in their real work environment', 'Analysing existing system documentation'], answer: 2 },
          { q: 'An open interview is best for:', options: ['Getting precise technical specifications', 'Comparing two competing designs', 'Exploring the problem space without a predefined agenda', 'Confirming requirements against a checklist'], answer: 2 },
          { q: 'The four activities in the Requirements Engineering process are:', options: ['Design, Code, Test, Deploy', 'Elicitation, Analysis, Validation, Management', 'Inception, Elaboration, Construction, Transition', 'Planning, Specification, Implementation, Review'], answer: 1 },
          { q: 'Requirements elicitation is the activity of:', options: ['Testing requirements for consistency', 'Tracking changes to requirements', 'Discovering requirements from stakeholders', 'Writing formal specifications'], answer: 2 },
          { q: 'Why do stakeholders often struggle to articulate their requirements?', options: ['They don\'t want to help the development team', 'They know what they DO but find it hard to specify what they NEED', 'They only understand technical language', 'Requirements don\'t exist until developers define them'], answer: 1 },
          { q: 'Requirements validation confirms that:', options: ['The code is working correctly', 'Requirements are consistent with each other', 'Requirements actually meet stakeholder needs', 'All requirements are written in the correct format'], answer: 2 },
          { q: 'A closed interview uses:', options: ['No questions at all', 'Predefined questions — structured to get specific information', 'Only open-ended questions about the problem domain', 'Video recording without questions'], answer: 1 },
          { q: 'Requirements management involves:', options: ['Writing the initial requirements', 'Validating requirements with customers', 'Tracking and managing changes to requirements over time', 'Prioritizing requirements for the first sprint'], answer: 2 }
        ]
      },
      {
        id: 't5l4',
        title: 'Use Cases & UML',
        description: 'Use case diagrams, actors and the MHC-PMS example',
        slides: [
          { tag: 'Technique', heading: 'Use Cases', body: 'A use case describes a specific interaction between an actor (person or external system) and the system to achieve a goal. Use cases are a powerful way to capture functional requirements.', type: 'text' },
          { tag: 'Components', heading: 'Use Case Diagram Elements', bullets: ['Actor — someone or something that interacts with the system (drawn as stick figure)', 'Use Case — an interaction or service (drawn as ellipse)', 'System boundary — a box enclosing all use cases inside the system', 'Association — line between actor and use case showing who does what', '«include» — one use case always includes another', '«extend» — one use case optionally extends another'], type: 'bullets' },
          { tag: 'Actor Types', heading: 'Primary vs Secondary Actors', bullets: ['Primary actor — initiates the use case to achieve their goal (e.g. Patient checking in)', 'Secondary actor — supports the use case; needed to complete it (e.g. Hospital database)'], type: 'bullets' },
          { tag: 'Example', heading: 'MHC-PMS Use Cases', bullets: ['Individual care management — doctor manages a patient\'s care plan', 'Patient monitoring — system monitors patient across providers', 'Administrative reporting — management generates statistical reports', 'Personal summary — create a summary for a specific patient'], type: 'bullets' },
          { tag: 'Use Case Detail', heading: 'A Use Case Description includes:', bullets: ['Name and description of the interaction', 'Pre-conditions: what must be true before the use case starts', 'Main flow: the normal sequence of steps', 'Exceptions/Alternative flows: what happens if something goes wrong', 'Post-conditions: what is true after the use case completes'], type: 'bullets' },
          { tag: 'Key Insight', heading: 'Use Cases vs User Stories', highlight: 'User stories (Agile) are brief and focus on value: "As a doctor, I want to view a patient\'s history." Use cases (traditional) are detailed, with pre/post conditions and exception flows. Both capture functional requirements — different levels of detail.', type: 'highlight' }
        ],
        quiz: [
          { q: 'In a UML use case diagram, an "actor" is represented by:', options: ['An ellipse', 'A rectangle', 'A stick figure', 'A diamond'], answer: 2 },
          { q: 'A "primary actor" in a use case is:', options: ['The most important secondary system', 'The actor who initiates the use case to achieve their goal', 'The database that stores the results', 'The senior stakeholder who approves requirements'], answer: 1 },
          { q: 'The «include» relationship between use cases means:', options: ['One use case optionally extends another', 'One use case always includes another use case as part of its flow', 'Both use cases can run simultaneously', 'One actor includes another actor in their work'], answer: 1 },
          { q: 'In a UML use case diagram, a use case itself is drawn as:', options: ['A stick figure', 'A rectangle', 'An ellipse', 'A diamond'], answer: 2 },
          { q: 'The «extend» relationship means:', options: ['One use case always calls another', 'One use case optionally extends another under certain conditions', 'Two actors share the same use case', 'The use case is mandatory for all actors'], answer: 1 },
          { q: 'Pre-conditions in a use case description specify:', options: ['What happens when the use case fails', 'What must be true BEFORE the use case starts', 'The main sequence of steps in the use case', 'What state the system is in AFTER the use case completes'], answer: 1 },
          { q: 'Compared to use cases, user stories are:', options: ['More detailed with pre/post conditions and exception flows', 'Less commonly used in industry', 'Briefer and focused on user value, common in Agile contexts', 'Only used for non-functional requirements'], answer: 2 },
          { q: 'A secondary actor in a use case:', options: ['Initiates the use case', 'Is always a human user', 'Supports the use case but doesn\'t initiate it (e.g., a database)', 'Is the Product Owner in Scrum'], answer: 2 }
        ]
      }
    ]
  }
];
