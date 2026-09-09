import type { Guitar } from "../types/guitar";

export const guitars: Guitar[] = [
  {
    id: "strat",
    slug: "fender-stratocaster",
    name: "Fender Stratocaster",
    subtitle: "Classic solid-body electric guitar",
    price: { amount: 1299, currency: "USD" },
    status: "available",
    img: "https://cdn.mos.cms.futurecdn.net/9exiaJq5Sii684VPiEcwB8-1920-80.jpg",
    gallery: [
      "https://cdn.mos.cms.futurecdn.net/9exiaJq5Sii684VPiEcwB8-1920-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/nVwc9AeKGYKWMRh7PJWRRk-650-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/fD9zrHMTVmzBzp8DjSdiFP-970-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/3b6c9aaERfMPgsvpfCJjmM-970-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/N43ypXRcZfzzPcxvG88Hf9-800-80.jpg",
    ],
    overview:
      "A versatile Stratocaster-style electric with the familiar contoured body, three single-coil pickup layout and broad tonal range. Dummy content for layout review.",
    specification: [
      { label: "Maker", value: "Fender" },
      { label: "Model", value: "Stratocaster" },
      { label: "Type", value: "Solid-body electric guitar" },
      { label: "Body", value: "Alder" },
      { label: "Neck", value: "Maple" },
      { label: "Pickups", value: "3 × single-coil" },
      { label: "Controls", value: "Volume, tone, tone, 5-way selector" },
      { label: "Bridge", value: "Synchronized tremolo" },
    ],
    condition:
      "Dummy condition text: generally very good used condition with light cosmetic wear consistent with normal use. No major structural issues noted in this test record.",
    playingCondition:
      "Dummy playing-condition text: neck feels straight, frets show light wear, controls operate correctly and the guitar is presented as ready to play.",
    notes:
      "Demo record only. Final factual content should replace this text before publication.",
  },
  {
    id: "lespaul",
    slug: "gibson-les-paul",
    name: "Gibson Les Paul",
    subtitle: "Single-cut electric with dual humbuckers",
    price: { amount: 1799, currency: "USD" },
    status: "available",
    img: "https://cdn.mos.cms.futurecdn.net/ksJN7VBaRFadudkqNmN5uR-650-80.jpg",
    gallery: [
      "https://cdn.mos.cms.futurecdn.net/ksJN7VBaRFadudkqNmN5uR-650-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/8aB2zLpKzLF7rMhz6x4Eyd.jpg",
      "https://cdn.mos.cms.futurecdn.net/2shDkQx9rnbx8XhC9YvZCd.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/1916/5799/LesPaulStandard__70436.1602099624.jpg",
      "https://cdn.shopify.com/s/files/1/0320/9514/8023/articles/gibson-les-paul-guitar-history.jpg",
    ],
    overview:
      "A classic Les Paul-style instrument centred on sustain, dual-humbucker output and traditional single-cut construction. Dummy content for layout review.",
    specification: [
      { label: "Maker", value: "Gibson" },
      { label: "Model", value: "Les Paul" },
      { label: "Type", value: "Solid-body electric guitar" },
      { label: "Body", value: "Mahogany with maple cap" },
      { label: "Neck", value: "Mahogany" },
      { label: "Pickups", value: "2 × humbucker" },
      { label: "Controls", value: "2 × volume, 2 × tone, 3-way selector" },
      { label: "Bridge", value: "Tune-o-matic style" },
    ],
    condition:
      "Dummy condition text: attractive used condition with light marks and handling wear. No major damage represented in this test record.",
    playingCondition:
      "Dummy playing-condition text: comfortable action, functional controls and typical medium-weight feel. Final setup details to be added for the actual instrument.",
  },
  {
    id: "telecaster",
    slug: "telecaster-custom",
    name: "Telecaster Custom",
    subtitle: "Classic bolt-on electric with distinctive Tele character",
    price: { amount: 1199, currency: "USD" },
    status: "available",
    img: "https://cdn.mos.cms.futurecdn.net/PfGEsLmBxhRFS8kPJvhHU4-650-80.jpg",
    gallery: [
      "https://cdn.mos.cms.futurecdn.net/PfGEsLmBxhRFS8kPJvhHU4-650-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/2kG6TUKV2dUHoJZ8guPTU5.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/1479/4311/TelecasterCustom__54321.1597342132.jpg",
      "https://guitar.com/wp-content/uploads/2021/04/Fender-Telecaster-Custom-1@1400x1050.jpg",
      "https://www.pmtonline.co.uk/blog/wp-content/uploads/2017/04/telecaster-body-shot.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/1480/4312/Fender_Telecaster_Black__10234.1597342135.jpg",
    ],
    overview:
      "A Telecaster Custom-style guitar combining familiar bolt-on construction with a broader pickup palette. Dummy content for layout review.",
    specification: [
      { label: "Maker", value: "Fender" },
      { label: "Model", value: "Telecaster Custom" },
      { label: "Type", value: "Solid-body electric guitar" },
      { label: "Body", value: "Alder" },
      { label: "Neck", value: "Maple" },
      { label: "Pickups", value: "Single-coil / humbucker combination" },
      { label: "Controls", value: "Independent volume and tone controls" },
      { label: "Bridge", value: "Fixed Tele-style bridge" },
    ],
    condition:
      "Dummy condition text: good overall used presentation with minor cosmetic wear and no obvious structural damage in this test record.",
    playingCondition:
      "Dummy playing-condition text: responsive neck, clean switching and stable hardware. Final setup and fret assessment to be added later.",
  },
  {
    id: "sg",
    slug: "sg-vintage",
    name: "SG Vintage",
    subtitle: "Lightweight double-cut electric",
    price: { amount: 2099, currency: "USD" },
    status: "sold",
    img: "https://truevintageguitar.com/cdn/shop/files/1963GibsonLesPaulStandardSG-18.jpg",
    gallery: [
      "https://truevintageguitar.com/cdn/shop/files/1963GibsonLesPaulStandardSG-18.jpg",
      "https://cdn.mos.cms.futurecdn.net/xnLZszb2WvJtyz4BAtUULG.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/1950/5888/SGStandard__60443.1605102145.jpg",
      "https://www.pmtonline.co.uk/blog/wp-content/uploads/2019/01/gibson-sg-closeup.jpg",
      "https://cdn.mos.cms.futurecdn.net/yY2r3bJ8P6dVj4QmPKAY7C.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/1951/5889/SGBody__60443.1605102145.jpg",
    ],
    overview:
      "A lightweight SG-style electric with deep double cutaways and a direct, lively character. Dummy content for layout review.",
    specification: [
      { label: "Maker", value: "Gibson" },
      { label: "Model", value: "SG" },
      { label: "Type", value: "Solid-body electric guitar" },
      { label: "Body", value: "Mahogany" },
      { label: "Neck", value: "Mahogany" },
      { label: "Pickups", value: "2 × humbucker" },
      { label: "Controls", value: "2 × volume, 2 × tone, 3-way selector" },
      { label: "Bridge", value: "Tune-o-matic style" },
    ],
    condition:
      "Dummy condition text: honest used condition with light finish wear and marks consistent with age and use.",
    playingCondition:
      "Dummy playing-condition text: playable setup with functioning electronics and a comfortable neck. Exact fret and setup details to be verified.",
  },
  {
    id: "jazzmaster",
    slug: "jazzmaster",
    name: "Jazzmaster",
    subtitle: "Offset electric with floating tremolo",
    price: { amount: 1499, currency: "USD" },
    status: "reserved",
    img: "https://guitar.com/wp-content/uploads/2022/11/Fender-American-Vintage-Jazzmaster-HERO@2560x1625-1068x678.jpg",
    gallery: [
      "https://guitar.com/wp-content/uploads/2022/11/Fender-American-Vintage-Jazzmaster-HERO@2560x1625-1068x678.jpg",
      "https://cdn.mos.cms.futurecdn.net/XsPmtUFANe9ffz4S3vB6Fb.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/1650/5111/JazzmasterBody__80422.1595941742.jpg",
      "https://www.pmtonline.co.uk/blog/wp-content/uploads/2020/02/fender-jazzmaster-closeup.jpg",
      "https://cdn.mos.cms.futurecdn.net/QBGHhs2o8m6WCBRkZ3N5s9.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/1651/5112/Fender_Jazzmaster_Headstock__80422.1595941742.jpg",
    ],
    overview:
      "A Jazzmaster-style offset electric with the familiar wide single-coil pickup format and floating tremolo system. Dummy content for layout review.",
    specification: [
      { label: "Maker", value: "Fender" },
      { label: "Model", value: "Jazzmaster" },
      { label: "Type", value: "Offset solid-body electric guitar" },
      { label: "Body", value: "Alder" },
      { label: "Neck", value: "Maple" },
      { label: "Pickups", value: "2 × Jazzmaster single-coil" },
      { label: "Controls", value: "Lead and rhythm circuits" },
      { label: "Bridge", value: "Floating tremolo" },
    ],
    condition:
      "Dummy condition text: very presentable used condition with light age-related handling marks.",
    playingCondition:
      "Dummy playing-condition text: stable setup with working tremolo and electronics. Final string height and fret measurements to be added later.",
  },
  {
    id: "flyingv",
    slug: "flying-v",
    name: "Flying V",
    subtitle: "Angular solid-body electric with dual humbuckers",
    price: { amount: 1899, currency: "USD" },
    status: "coming-soon",
    img: "https://www.gibson.com/cdn/shop/files/1959-Gibson-Flying-V-9-1707_44-1024x683.jpg",
    gallery: [
      "https://www.gibson.com/cdn/shop/files/1959-Gibson-Flying-V-9-1707_44-1024x683.jpg",
      "https://cdn.mos.cms.futurecdn.net/YZRVv35zvFXZZnbLZpC2KR.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/2051/6122/FlyingV__60443.1605102145.jpg",
      "https://www.pmtonline.co.uk/blog/wp-content/uploads/2019/04/gibson-flying-v-angle.jpg",
      "https://cdn.mos.cms.futurecdn.net/JYt6V3A8MyuPFLXbL7U3Gd.jpg",
      "https://cdn11.bigcommerce.com/s-1pxn4w/images/stencil/original/products/2052/6123/FlyingVBody__60443.1605102145.jpg",
    ],
    overview:
      "A Flying V-style electric with the instantly recognisable angular body and twin-humbucker layout. Dummy content for layout review.",
    specification: [
      { label: "Maker", value: "Gibson" },
      { label: "Model", value: "Flying V" },
      { label: "Type", value: "Solid-body electric guitar" },
      { label: "Body", value: "Mahogany" },
      { label: "Neck", value: "Mahogany" },
      { label: "Pickups", value: "2 × humbucker" },
      { label: "Controls", value: "Volume and tone controls" },
      { label: "Bridge", value: "Tune-o-matic style" },
    ],
    condition:
      "Dummy condition text: clean used presentation with minor cosmetic signs of handling.",
    playingCondition:
      "Dummy playing-condition text: functional electronics, stable hardware and a usable setup. Final inspection details to follow.",
  },
];
