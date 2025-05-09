export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'buying', name: 'Buying Guides' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'warranty', name: 'Warranty & Returns' },
  { id: 'shipping', name: 'Shipping' }
];

export const faqData: FAQ[] = [
  {
    id: 1,
    question: 'How do I choose the right bike size?',
    answer: 'Choosing the right bike size is crucial for comfort and performance. We recommend using our size guide, which considers your height and inseam measurements. For most accurate sizing, visit our store for a professional fitting. Remember that different bike types (road, mountain, hybrid) have different sizing standards.',
    category: 'buying'
  },
  {
    id: 2,
    question: 'What\'s the difference between road bikes and mountain bikes?',
    answer: 'Road bikes are designed for paved surfaces with lightweight frames, thin tires, and drop handlebars for aerodynamic positioning. Mountain bikes are built for off-road trails with sturdy frames, wide knobby tires, suspension systems, and flat handlebars for better control on rough terrain. Your riding environment and goals should determine which type is best for you.',
    category: 'buying'
  },
  {
    id: 3,
    question: 'How often should I service my bicycle?',
    answer: 'Regular maintenance depends on how frequently you ride and in what conditions. As a general rule: Basic check (tire pressure, brakes, chain) before every ride. Quick cleaning and chain lubrication every 1-2 weeks for regular riders. Complete cleaning every month or after riding in wet/muddy conditions. Professional service every 6-12 months or 1,500-2,000 miles.',
    category: 'maintenance'
  },
  {
    id: 4,
    question: 'How do I fix a flat tire?',
    answer: 'To fix a flat tire: 1) Remove the wheel from the bike. 2) Use tire levers to remove one side of the tire from the rim. 3) Remove the damaged inner tube. 4) Check the tire for sharp objects that may have caused the puncture. 5) Install a new inner tube, slightly inflated to hold its shape. 6) Re-mount the tire on the rim. 7) Inflate to the recommended pressure. If you\'re uncomfortable doing this yourself, visit our service center for assistance.',
    category: 'maintenance'
  },
  {
    id: 5,
    question: 'What accessories do I need for commuting by bicycle?',
    answer: 'Essential accessories for bike commuting include: Lights (front and rear) for visibility. A quality lock to secure your bike. Fenders to protect from road spray in wet conditions. A rack and panniers or a backpack for carrying items. A helmet for safety. Weather-appropriate clothing. A basic repair kit with spare tube, tire levers, and mini-pump. Optional but useful: bell, phone mount, and reflective gear.',
    category: 'accessories'
  },
  {
    id: 6,
    question: 'Are electric bikes worth the investment?',
    answer: 'Electric bikes can be worth the investment for many riders. They extend your riding range, make hills easier, and allow you to arrive at destinations less sweaty. For commuters, they can replace car trips and save on fuel and parking costs. For recreational riders, they can help keep up with faster friends or extend your riding years. The higher initial cost is offset by minimal operating costs and potential transportation savings.',
    category: 'buying'
  },
  {
    id: 7,
    question: 'What\'s covered under your warranty?',
    answer: 'Our warranty covers manufacturing defects in materials and workmanship for the original owner: Frame and rigid fork: Lifetime warranty. Suspension components and electric systems: 2 years. Paint and decals: 1 year. Components: Covered by respective manufacturers\' warranties, typically 1-2 years. Normal wear and tear, improper assembly, maintenance, or installation of parts are not covered. Damage from accidents, misuse, or neglect is also excluded.',
    category: 'warranty'
  },
  {
    id: 8,
    question: 'How do I return a product I\'m not satisfied with?',
    answer: 'To return a product: Complete our online return form within 30 days of purchase. You\'ll receive return shipping instructions and a prepaid label for items under 10 lbs. Package the item in its original packaging if possible. Attach the shipping label and drop off at the specified carrier. Once received and inspected, your refund will be processed within 3-5 business days. Custom orders, sale items, and used products with signs of wear may have different return policies.',
    category: 'warranty'
  },
  {
    id: 9,
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most international destinations. International shipping rates vary by country and order size. Delivery typically takes 7-14 business days, though customs clearance can sometimes cause delays. Please note that international customers are responsible for all duties, taxes, and customs fees. Returns from international locations require customers to cover return shipping costs.',
    category: 'shipping'
  },
  {
    id: 10,
    question: 'How long does shipping take?',
    answer: 'Standard domestic shipping: 3-5 business days. Express domestic shipping: 1-2 business days. International shipping: 7-14 business days, plus potential customs delays. Made-to-order bikes may require an additional 1-3 weeks of processing time before shipping. You\'ll receive tracking information via email once your order ships. Please note that shipping times are estimates and may vary during peak seasons or unusual circumstances.',
    category: 'shipping'
  },
  {
    id: 11,
    question: 'What tools should I have for basic bike maintenance?',
    answer: 'For basic bike maintenance, we recommend: A set of Allen wrenches (2-8mm). Tire levers. A bicycle-specific pump with pressure gauge. Chain lubricant. A chain wear indicator. Torque wrench for carbon components. Screwdrivers (Phillips and flathead). Cleaning brushes and degreaser. Patch kit and spare inner tubes. Multitool for on-the-go repairs. Having these tools will allow you to handle most routine maintenance tasks at home.',
    category: 'maintenance'
  },
  {
    id: 12,
    question: 'How do I properly lock my bike?',
    answer: 'To properly secure your bike: Use a high-quality U-lock or chain lock. Lock the frame and at least one wheel to an immovable object. Remove detachable items like lights, computers, and bags. Consider using a secondary lock for the other wheel. Lock in visible, well-lit areas when possible. For extended periods, store your bike indoors. Register your bike with local authorities and keep record of its serial number. Consider bike insurance for expensive models.',
    category: 'accessories'
  }
];