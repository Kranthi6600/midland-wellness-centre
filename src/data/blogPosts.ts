export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  comments: number;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Kinesio Taping: Athletic Performance & Recovery',
    slug: 'kinesio-taping-athletic-performance-recovery',
    excerpt: 'Learn how kinesio taping can enhance athletic performance, prevent injuries, and accelerate recovery. Our certified therapists use specialized taping techniques to support muscles, improve circulation, and provide stability during physical activities.',
    content: `Discover how kinesio taping can enhance athletic performance, prevent injuries, and accelerate recovery. Our certified therapists use specialized taping techniques to support muscles, improve circulation, and provide stability during physical activities.

Kinesio taping is a revolutionary therapeutic technique that has gained widespread recognition in sports medicine and rehabilitation. This elastic therapeutic tape is designed to mimic the properties of human skin, providing support without restricting movement.

The benefits of kinesio taping extend beyond injury prevention. Athletes use it to enhance performance by improving muscle activation, reducing fatigue, and increasing proprioception. The tape's unique elasticity allows it to provide dynamic support that moves with the body, unlike traditional athletic tape.

Our certified therapists apply specialized taping techniques tailored to each individual's needs. Whether you're recovering from an injury, looking to prevent future problems, or seeking to optimize your athletic performance, kinesio taping can be an invaluable tool in your treatment plan.`,
    image: '/assets/images/resource/healthylife.webp',
    date: 'March 6, 2023',
    author: 'Dr. Sarah Johnson',
    comments: 2,
    category: 'Kinesio Taping',
    tags: ['Kinesio Taping', 'Sports Medicine', 'Athletic Performance']
  },
  {
    id: '2',
    title: 'Chiropractic Adjustments: Restoring Spinal Health',
    slug: 'chiropractic-adjustments-restoring-spinal-health',
    excerpt: 'Discover how chiropractic adjustments can provide immediate relief from back pain, neck pain, and headaches. Our skilled chiropractors use gentle spinal manipulation techniques to correct misalignments, improve nervous system function, and enhance overall wellness.',
    content: `Discover how chiropractic adjustments can provide immediate relief from back pain, neck pain, and headaches. Our skilled chiropractors use gentle spinal manipulation techniques to correct misalignments, improve nervous system function, and enhance overall wellness.

Chiropractic care is based on the principle that proper alignment of the body's musculoskeletal structure, particularly the spine, enables the body to heal itself without surgery or medication. When vertebrae become misaligned, they can interfere with the nervous system's function, leading to pain, discomfort, and various health issues.

Our chiropractors use precise, controlled forces to restore proper alignment to the spine and other joints. These adjustments not only provide immediate pain relief but also improve overall body function. Many patients report improvements in sleep, energy levels, and immune system function following regular chiropractic care.

Beyond treating existing conditions, chiropractic care focuses on prevention. By maintaining proper spinal alignment and nervous system function, we help patients avoid future injuries and maintain optimal health throughout their lives.`,
    image: '/assets/images/service/physiotherapy.webp',
    date: 'March 5, 2023',
    author: 'Dr. Michael Chen',
    comments: 5,
    category: 'Chiropractic Adjustments',
    tags: ['Chiropractic', 'Spinal Health', 'Pain Relief']
  },
  {
    id: '3',
    title: 'Massage Therapy: Healing Through Touch',
    slug: 'massage-therapy-healing-through-touch',
    excerpt: 'Experience the healing power of therapeutic massage. Our registered massage therapists combine various techniques to reduce stress, alleviate pain, improve circulation, and promote overall wellness.',
    content: `Experience the healing power of therapeutic massage. Our registered massage therapists combine various techniques to reduce stress, alleviate pain, improve circulation, and promote overall wellness.

Massage therapy is more than just relaxation; it's a powerful therapeutic tool that addresses both physical and mental health concerns. Through skilled manipulation of soft tissues, massage can relieve muscle tension, reduce inflammation, and improve flexibility.

Our therapists are trained in multiple massage techniques including Swedish massage, deep tissue massage, trigger point therapy, and myofascial release. This diverse skill set allows us to customize treatments to each patient's specific needs, whether you're seeking relief from chronic pain, recovering from an injury, or simply looking to reduce stress.

Regular massage therapy has been shown to have numerous health benefits, including improved immune function, better sleep quality, reduced anxiety and depression, and enhanced athletic performance. Many of our patients find that incorporating massage into their wellness routine leads to significant improvements in their overall quality of life.`,
    image: '/assets/images/resource/modern technology1.webp',
    date: 'March 4, 2023',
    author: 'Emily Rodriguez, RMT',
    comments: 0,
    category: 'Massage Therapy',
    tags: ['Massage Therapy', 'Stress Relief', 'Wellness']
  },
  {
    id: '4',
    title: 'Orthotics: Custom Solutions for Foot Health',
    slug: 'orthotics-custom-solutions-foot-health',
    excerpt: 'Custom orthotics can transform your daily comfort and prevent chronic pain. Learn how personalized foot support solutions can address biomechanical issues and improve your overall posture and mobility.',
    content: `Custom orthotics can transform your daily comfort and prevent chronic pain. Learn how personalized foot support solutions can address biomechanical issues and improve your overall posture and mobility.

Your feet are the foundation of your body, and even subtle imbalances can lead to pain and dysfunction throughout your entire musculoskeletal system. Custom orthotics are specially designed shoe inserts that provide personalized support and correction for your unique foot structure and biomechanics.

Our comprehensive orthotic assessment includes detailed gait analysis, pressure mapping, and physical examination to identify the root cause of your foot-related issues. Whether you're dealing with plantar fasciitis, flat feet, high arches, or other conditions, custom orthotics can provide the targeted support you need.

The benefits of custom orthotics extend far beyond foot comfort. By properly aligning your feet and ankles, orthotics can improve knee, hip, and back alignment, reducing strain throughout your entire body. Many patients experience relief from chronic pain, improved athletic performance, and enhanced overall mobility after being fitted with custom orthotics.`,
    image: '/assets/images/service/massage1.webp',
    date: 'March 3, 2023',
    author: 'Dr. James Wilson',
    comments: 3,
    category: 'Orthotics',
    tags: ['Orthotics', 'Foot Health', 'Biomechanics']
  },
  {
    id: '5',
    title: 'Physiotherapy: Complete Guide to Rehabilitation',
    slug: 'physiotherapy-complete-guide-rehabilitation',
    excerpt: 'Comprehensive guide to physiotherapy rehabilitation techniques. Learn about exercise therapy, manual therapy, and specialized treatments for injury recovery and chronic condition management.',
    content: `Comprehensive guide to physiotherapy rehabilitation techniques. Learn about exercise therapy, manual therapy, and specialized treatments for injury recovery and chronic condition management.

Physiotherapy is a dynamic healthcare profession that helps individuals of all ages achieve their optimal physical function and movement. Through evidence-based assessment and treatment techniques, physiotherapists address a wide range of conditions from acute injuries to chronic diseases.

Our rehabilitation programs are comprehensive and personalized, combining various therapeutic approaches including manual therapy, therapeutic exercise, electrotherapy, and patient education. We work closely with each patient to develop treatment plans that address their specific goals, whether that's returning to sports, managing chronic pain, or improving daily function.

The success of physiotherapy lies in its holistic approach. Rather than just treating symptoms, we identify and address the underlying causes of dysfunction. This approach not only provides immediate relief but also equips patients with the knowledge and tools they need to prevent future injuries and maintain long-term health and wellness.`,
    image: '/assets/images/service/Chiropractic Adjustments.webp',
    date: 'March 2, 2023',
    author: 'Dr. Sarah Johnson',
    comments: 7,
    category: 'Physiotherapy',
    tags: ['Physiotherapy', 'Rehabilitation', 'Exercise Therapy']
  },
  {
    id: '6',
    title: 'Electrotherapy: Modern Pain Management',
    slug: 'electrotherapy-modern-pain-management',
    excerpt: 'Explore how electrotherapy uses electrical stimulation to treat pain and promote healing. Our advanced electrotherapy treatments can accelerate tissue repair, reduce inflammation, and provide drug-free pain relief.',
    content: `Explore how electrotherapy uses electrical stimulation to treat pain and promote healing. Our advanced electrotherapy treatments can accelerate tissue repair, reduce inflammation, and provide drug-free pain relief.

Electrotherapy represents one of the most advanced approaches to pain management and tissue healing. By using carefully controlled electrical currents, we can stimulate nerves, muscles, and tissues to achieve therapeutic effects that would be impossible through manual techniques alone.

Our electrotherapy programs utilize various modalities including TENS (Transcutaneous Electrical Nerve Stimulation), EMS (Electrical Muscle Stimulation), ultrasound therapy, and interferential current. Each modality serves specific purposes, from pain gate control to muscle re-education and tissue regeneration.

The beauty of electrotherapy lies in its versatility and safety. It can be used to treat acute injuries, chronic pain conditions, post-surgical recovery, and neurological disorders. Many patients find that electrotherapy provides relief when other treatments have failed, allowing them to reduce or eliminate their dependence on pain medications.`,
    image: '/assets/images/service/kinesiotaping.webp',
    date: 'March 1, 2023',
    author: 'Dr. Michael Chen',
    comments: 1,
    category: 'Electrotherapy',
    tags: ['Electrotherapy', 'Pain Management', 'Modern Treatment']
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}
