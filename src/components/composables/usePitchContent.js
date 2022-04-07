// import { readonly } from 'vue'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    CubeIcon,
    CreditCardIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    UsersIcon,
    XIcon,
    CurrencyDollarIcon,
    ClipboardListIcon,
    LightBulbIcon,
    UserGroupIcon } from '@heroicons/vue/outline'

const en = {
  intro: {
    title: "Designed in Saudi",
    subtitle: "We turn ideas into quality products",
    description:
      "We are a Product Design Accelerator specialized in Design for Manufacturing (DFM) which is the process of designing parts, components or products for ease of manufacturing with an end goal of making a better product at a lower cost.",
  },
  whatWeDo: {
    title: 'What we do',
    description: 'We enable individuals to submit product ideas through our invention platform and we turn their ideas into quality products by utilizing our partner network of experts, sponsors, and manufacturers.'
  },
  whyItMatters: {
    title: 'Why does it matter?',
    items: [
      'Its difficult for individuals to manufacture an idea into a quality product.',
      'Its not easy for individuals to sell, market and deliver the product at scale.',
      'Lack of investment opportunities for individuals with conservative capital.',
      'Finding a sustainable secondary source of income is not an easy task.',
      'General lack of inventions in the sector of light manufactured consumer products in Saudi Arabia.'
    ]
  },
  valueProposition: { 
    title: 'The Value Proposition',
    subtitle: 'A Product Invention Platform',
    items: [
    {
      icon: CubeIcon,
      name: "Innovative Platform",
      description:
        "A digital platform for creators to submit product ideas and monitor progress on timely manner",
    },
    {
      icon: CreditCardIcon,
      name: 'Passive Income',
      description: 'Creators get to build a product portfolio, receive community recognition, and generate passive income from their manufactured product ideas'
    },
    {
      icon: ClipboardListIcon,
      name: "Design Guidelines",
      description:
        "A rigorous and discplined design-for-manufacturing journey that ensures ideas come out as quality products.",
    },
    {
      icon: CurrencyDollarIcon,
      name: "Investment Opportunities",
      description: "Sponsors can join our partner network and get access to investment opportunities with low capital requirements and gain short-term profit from the created opportunities",
    },
  ]},
  community: {
    title: 'The Community',
    subtitle: 'Our Partners in Success',
    items: [
      {
        name: "Creators",
        description:
          "Individual or group, DIY enthusiasts, or professional designers with product ideas.",
        icon: LightBulbIcon,
      },
      {
        name: "Sponsors",
        description:
          "Individuals looking for short-term investment opportunities with low risks",
        icon: UsersIcon,
      },
      {
        name: "Partners",
        description:
          "Our connection from manufacturers, retailers, logistic providers...etc",
        icon: UserGroupIcon,
      },
      {
        name: "Valuable Customers",
        description:
          "The end consumers who buy the end products thru our e-commerce channels",
        icon: HeartIcon,
      },
    ]
  },
  platform: { 
    title: 'The Platform: All-in-One Ecosystem',
    subtitle: 'An ecosystem that provides complete services to transfer ideas to a product',
    items: [
    {
      name: "Research",
      description:
        "The first stage of the idea where the feasibility of design to be turned into a product.",
      icon: InboxIcon,
    },
    {
      name: "Design",
      description:
        "The phase where the design goes through a series of quality checks and the final specs defined",
      icon: UsersIcon,
    },
    {
      name: "Manufacturing",
      description: "Where the idea becomes a quality product for our valuable consumers.",
      icon: TrashIcon,
    },
    {
      name: "Marketing",
      description:
        "Initiate regular advertisement campaign to announce our product.",
      icon: PencilAltIcon,
    },
    {
      name: "Retail and Distribution",
      description:
        "selling the product through our e-channels or selling partners.",
      icon: ReplyIcon,
    },
    {
      name: "Logistics",
      description:
        "Shipping the product to e product to our stores from there to the end customer.",
      icon: DocumentReportIcon,
    },
  ]},
  market: {
    title: 'Saudi Arabia Online Shopping Consumer Behavior in 2021',
    subtitle: 'Valuable Statistics',
    description: 'The market of e-commerce in Saudi Arabia has been going through steady growth as more shops are moving towards e-commerce as a sale channel',
    items: [
      {
        id: 1,
        stat: "93%",
        description: "Internet users in Saudi Arabia are 93% of the total population.",
      },
      {
        id: 2,
        stat: "38B+",
        description: "38+ Billion Saudi Riyal is spent yearly on online shopping.",
      },
      {
        id: 3,
        stat: "21M+",
        description: "The total number of online shoppers in Saudi Arabia is 21.43 millions",
      },
      {
        id: 4,
        stat: "70%",
        description: "The number of online stores has increased 70% in the past 4 years.",
      },
    ]
  },
  contact: {
    title: "Let’s stay connected",
    description: "We love to hear from you. Call or email us and we'll get back to you as soon as possible!"
  }
};
const ar = {
  intro: {
    title: "صمم في السعودية",
    subtitle: "نحول الأفكار إلى منتجات عالية الجودة",
    description: "نحن مسرع تصميم المنتجات المتخصص في تصميم التصنيع (DFM) وهي عملية تصميم أجزاء أو مكونات أو منتجات لسهولة التصنيع بهدف نهائي يتمثل في صنع منتج أفضل بتكلفة أقل."
  },
  whatWeDo: {
    title: 'ماذا نفعل',
    description: 'نحن نمكن الأفراد من تقديم أفكار المنتجات من خلال منصة الاختراع الخاصة بنا ونحول أفكارهم إلى منتجات عالية الجودة من خلال استخدام شبكة شركائنا من الخبراء والرعاة والمصنعين.'
  },
  whyItMatters: {
    title: 'ما المهم في الأمر؟',
    items: [
      
      'من الصعب على الأفراد تصنيع فكرة في منتج عالي الجودة.',
      'ليس من السهل على الأفراد بيع المنتج وتسويقه وتسليمه على نطاق واسع.',
      'نقص فرص الاستثمار للأفراد ذوي رأس المال المحافظ.',
      'العثور على مصدر ثانوي مستدام للدخل ليس مهمة سهلة.',
      'النقص العام في الاختراعات في قطاع المنتجات الاستهلاكية المصنعة الخفيفة في المملكة العربية السعودية.'
    ]
  },
  valueProposition: {
    title: 'القيمة المضافة',
    subtitle: 'منصة إبتكار منتجات',
    items: [
      {
        icon: CubeIcon,
        name: "منصة إبتكار",
        description: "منصة على شبكة الإنترنت للمخترعين لتقديم أفكار المنتجات ومراقبة التقدم المحرز."
      },
      {
        icon: ClipboardListIcon,
        name: "معايير تصميم",
        description: "رحلة تصميم وتصنيع صارمة ومميزة تضمن ظهور الأفكار كمنتجات عالية الجودة."
      },
      {
        icon: ClipboardListIcon,
        name: "معايير تصميم",
        description: "رحلة تصميم وتصنيع صارمة ومميزة تضمن ظهور الأفكار كمنتجات عالية الجودة."
      },
      {
        icon: CurrencyDollarIcon,
        name: "الميزة المالية",
        description: "الأرباح وفرص الاستثمار للمجتمع."
      },
    ]
  },
  community: {
    title: 'المجتمع',
    subtitle: 'شركاؤنا في النجاح',
    items: [
      {
        name: "المخترعون",
        description: "فرد أو جماعي، أو عشاق DIY، أو مصممين محترفين لديهم أفكار منتجات.",
        icon: LightBulbIcon
      },
      {
        name: "شبكة الشركاء",
        description: "اتصالنا من المصنعين وتجار التجزئة ومقدمي الخدمات اللوجستية ... إلخ",
        icon: UserGroupIcon
      },
      {
        name: "الرعاة",
        description: "الأفراد الذين يبحثون عن فرص استثمارية قصيرة الأجل ذات مخاطر منخفضة",
        icon: UsersIcon
      },
      {
        name: "العملاء",
        description: "المستهلكون النهائيون الذين يشترون المنتجات النهائية من خلال قنوات التجارة الإلكترونية الخاصة بنا",
        icon: HeartIcon
      },
    ]
  },
  platform: {
    title: 'المنصة: النظام المتكامل',
    subtitle: 'نظام بيئي يوفر خدمات متكاملة لتحويل الأفكار إلى منتجات عالية الجودة',
    items: [
      {
        name: "البحث",
        description: "المرحلة الأولى من الفكرة حيث يتم تحويل جدوى التصميم إلى منتج.",
        icon: InboxIcon
      },
      {
        name: "التصميم",
        description: "المرحلة التي يمر فيها التصميم بسلسلة من فحوصات الجودة والمواصفات النهائية المحددة",
        icon: UsersIcon
      },
      {
        name: "التصنيع",
        description: "حيث تصبح الفكرة منتجا عالي الجودة لعملائنا الكرام.",
        icon: TrashIcon
      },
      {
        name: "التسويق",
        description: "ابدأ حملة إعلانية منتظمة للإعلان عن منتجاتنا.",
        icon: PencilAltIcon
      },
      {
        name: "البيع بالتجزئة والتوزيع",
        description: "بيع المنتج من خلال قنواتنا الإلكترونية أو شركائنا في البيع.",
        icon: ReplyIcon
      },
      {
        name: "الخدمات اللوجستية",
        description: "شحن المنتج إلى المنتج الإلكتروني إلى متاجرنا من هناك إلى العميل النهائي.",
        icon: DocumentReportIcon
      },
    ]
  },
  market: {
    title: 'سلوك المستهلك للتسوق عبر الإنترنت في المملكة العربية السعودية في عام 2021',
    subtitle: 'إحصائيات',
    description: 'يمر سوق التجارة الإلكترونية في المملكة العربية السعودية بنمو مطرد حيث تتجه المزيد من المتاجر نحو التجارة الإلكترونية كقناة بيع',
    items: [
      {
        id: 1,
        stat: "93%",
        description: "يشكل مستخدمو الإنترنت في المملكة العربية السعودية 93٪ من إجمالي السكان."
      },
      {
        id: 2,
        stat: "38B+",
        description: "يتم إنفاق أكثر من 38 مليار ريال سعودي سنويا على التسوق عبر الإنترنت."
      },
      {
        id: 3,
        stat: "21M+",
        description: "يبلغ إجمالي عدد المتسوقين عبر الإنترنت في المملكة العربية السعودية 21.43 مليون"
      },
      {
        id: 4,
        stat: "70%",
        description: "زاد عدد المتاجر عبر الإنترنت بنسبة 70٪ في السنوات الأربع الماضية."
      },
    ]
  },
  contact: {
    title: 'دعنا نبقى على اتصال',
    description: 'نحب أن نسمع منك. اتصل بنا أو راسلنا عبر البريد الإلكتروني وسنقوم بالرد عليك في أقرب وقت ممكن!'
  }
};

export default (dir) => {
    if (dir === 'rtl') return ar
    else return en
}