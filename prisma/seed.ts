// ===== ARQUIVO DE SEED PARA BANCO DE DADOS - NOOTROWORLD =====
// Popula o banco com dados iniciais para desenvolvimento e produção
// Implementado em 30/05/2024 com dados reais de suplementos
// Inclui: categorias, benefícios, suplementos, produtos e guias de uso

import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // ===== CRIAÇÃO DE CATEGORIAS PRINCIPAIS =====
  // Define as 6 categorias principais de suplementos da NootroWorld
  const categories = [
    { name: 'Minerals', description: 'Essential minerals for body functions' },
    { name: 'Vitamins', description: 'Essential vitamins for health' },
    { name: 'Fatty Acids', description: 'Essential fatty acids for cardiovascular and brain health' },
    { name: 'Proteins', description: 'Protein supplements for muscle building' },
    { name: 'Digestive', description: 'Supplements for digestive health' },
    { name: 'Performance', description: 'Supplements for physical performance' },
    { name: 'Nootropics', description: 'Cognitive enhancers and brain health supplements' },
    { name: 'Herbal', description: 'Natural plant-based supplements and adaptogens' }
  ]

  console.log('Creating categories...')
  // Usa upsert para evitar duplicatas em re-execuções do seed
  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category
    })
  }

  // ===== CRIAÇÃO DE BENEFÍCIOS =====
  // Lista completa de benefícios que os suplementos podem proporcionar
  // Separados em entidade própria para reutilização entre suplementos
  const benefitsData = [
    { name: 'Immune System', description: 'Essential for immune system and overall health maintenance.' },
    { name: 'Wound Healing', description: 'Essential for wound healing and overall health maintenance.' },
    { name: 'Hair & Nails', description: 'Essential for hair & nails and overall health maintenance.' },
    { name: 'Bone Health', description: 'Essential for bone health and overall health maintenance.' },
    { name: 'Mood', description: 'Essential for mood and overall health maintenance.' },
    { name: 'Antioxidant', description: 'Essential for antioxidant and overall health maintenance.' },
    { name: 'Collagen', description: 'Essential for collagen and overall health maintenance.' },
    { name: 'Immunity', description: 'Essential for immunity and overall health maintenance.' },
    { name: 'Heart', description: 'Essential for heart and overall health maintenance.' },
    { name: 'Brain', description: 'Essential for brain and overall health maintenance.' },
    { name: 'Anti-inflammatory', description: 'Essential for anti-inflammatory and overall health maintenance.' },
    { name: 'Muscles', description: 'Essential for muscles and overall health maintenance.' },
    { name: 'Sleep', description: 'Essential for sleep and overall health maintenance.' },
    { name: 'Energy', description: 'Essential for energy and overall health maintenance.' },
    { name: 'Nervous System', description: 'Essential for nervous system and overall health maintenance.' },
    { name: 'Blood', description: 'Essential for blood and overall health maintenance.' },
    { name: 'Oxygenation', description: 'Essential for oxygenation and overall health maintenance.' },
    { name: 'Anti-anemia', description: 'Essential for anti-anemia and overall health maintenance.' },
    { name: 'Bones', description: 'Essential for bones and overall health maintenance.' },
    { name: 'Teeth', description: 'Essential for teeth and overall health maintenance.' },
    { name: 'Skin', description: 'Essential for skin and overall health maintenance.' },
    { name: 'Joints', description: 'Essential for joints and overall health maintenance.' },
    { name: 'Hair', description: 'Essential for hair and overall health maintenance.' },
    { name: 'Digestion', description: 'Essential for digestion and overall health maintenance.' },
    { name: 'Gut', description: 'Essential for gut and overall health maintenance.' },
    { name: 'Strength', description: 'Essential for strength and overall health maintenance.' },
    { name: 'Performance', description: 'Essential for performance and overall health maintenance.' },
    { name: 'Recovery', description: 'Essential for recovery and overall health maintenance.' },
    { name: 'Muscle Mass', description: 'Essential for muscle mass and overall health maintenance.' },
    { name: 'Protein', description: 'Essential for protein and overall health maintenance.' },
    { name: 'Metabolism', description: 'Participates in more than 300 enzymatic reactions in the body.' },
    { name: 'Muscle Function', description: 'Essential for muscle strength and fall prevention.' },
    { name: 'Iron Absorption', description: 'Improves iron absorption, preventing anemia.' },
    { name: 'Memory', description: 'Essential for memory formation and cognitive function.' },
    { name: 'Focus', description: 'Improves concentration and mental clarity.' },
    { name: 'Stress Relief', description: 'Helps reduce stress and promotes relaxation.' },
    { name: 'Adaptogenic', description: 'Helps body adapt to stress and maintain balance.' },
    { name: 'Neuroprotective', description: 'Protects brain cells and supports nerve health.' },
    { name: 'Weight Management', description: 'Supports healthy weight management and metabolism.' }
  ]

  console.log('Creating benefits...')
  // Cria todos os benefícios disponíveis no sistema
  for (const benefitData of benefitsData) {
    await prisma.benefit.upsert({
      where: { name: benefitData.name },
      update: { description: benefitData.description },
      create: benefitData
    })
  }

  // ===== BUSCA IDs DAS CATEGORIAS =====
  // Recupera os IDs das categorias criadas para usar nos suplementos
  const mineralsCategory = await prisma.category.findUnique({ where: { name: 'Minerals' } })
  const vitaminsCategory = await prisma.category.findUnique({ where: { name: 'Vitamins' } })
  const fattyAcidsCategory = await prisma.category.findUnique({ where: { name: 'Fatty Acids' } })
  const proteinsCategory = await prisma.category.findUnique({ where: { name: 'Proteins' } })
  const digestiveCategory = await prisma.category.findUnique({ where: { name: 'Digestive' } })
  const performanceCategory = await prisma.category.findUnique({ where: { name: 'Performance' } })
  const nootropicsCategory = await prisma.category.findUnique({ where: { name: 'Nootropics' } })
  const herbalCategory = await prisma.category.findUnique({ where: { name: 'Herbal' } })

  // ===== CRIAÇÃO DOS SUPLEMENTOS PRINCIPAIS =====
  // 12 suplementos mais populares e bem pesquisados
  // Inclui dados reais: avaliações, preços, benefícios e badges especiais
  const supplementsData = [
    // SUPLEMENTOS PRIORITÁRIOS (com páginas detalhadas)
    {
      name: "Zinc",
      description: "Essential for immune system and wound healing. Helps maintain healthy skin and hair.",
      categoryId: mineralsCategory!.id,
      rating: 4.8,
      reviews: 1247,
      topPrice: "$29.90",
      benefits: ["Immune System", "Wound Healing", "Hair & Nails", "Metabolism"],
      link: "/supplements/zinc",
      badge: "Most Searched",
    },
    {
      name: "Vitamin D3",
      description: "Fundamental for bone and muscle health. Strengthens the immune system and improves mood.",
      categoryId: vitaminsCategory!.id,
      rating: 4.9,
      reviews: 1456,
      topPrice: "$29.90",
      benefits: ["Bone Health", "Immune System", "Mood", "Muscle Function"],
      link: "/supplements/vitamin-d3",
      badge: "Recommended",
    },
    {
      name: "Vitamin C",
      description: "Powerful antioxidant that strengthens immunity. Essential for collagen production.",
      categoryId: vitaminsCategory!.id,
      rating: 4.8,
      reviews: 1678,
      topPrice: "$24.90",
      benefits: ["Antioxidant", "Collagen", "Immunity", "Iron Absorption"],
      link: "/supplements/vitamin-c",
      badge: "Best Price",
    },
    
    // SUPLEMENTOS SECUNDÁRIOS (em desenvolvimento)
    {
      name: "Omega 3",
      description: "Essential fatty acids for cardiovascular, brain health and inflammation reduction.",
      categoryId: fattyAcidsCategory!.id,
      rating: 4.7,
      reviews: 1123,
      topPrice: "$45.90",
      benefits: ["Heart", "Brain", "Anti-inflammatory"],
      link: "#",
      badge: "Popular",
    },
    {
      name: "Magnesium",
      description: "Vital mineral for muscle, nerve function and energy production. Helps with relaxation.",
      categoryId: mineralsCategory!.id,
      rating: 4.6,
      reviews: 892,
      topPrice: "$32.90",
      benefits: ["Muscles", "Sleep", "Energy"],
      link: "#",
    },
    {
      name: "Vitamin B12",
      description: "Essential for red blood cell formation, neurological function and energy metabolism.",
      categoryId: vitaminsCategory!.id,
      rating: 4.7,
      reviews: 756,
      topPrice: "$28.90",
      benefits: ["Energy", "Nervous System", "Blood"],
      link: "#",
    },
    {
      name: "Iron",
      description: "Fundamental mineral for oxygen transport and anemia prevention.",
      categoryId: mineralsCategory!.id,
      rating: 4.5,
      reviews: 634,
      topPrice: "$26.90",
      benefits: ["Oxygenation", "Energy", "Anti-anemia"],
      link: "#",
    },
    {
      name: "Calcium",
      description: "Essential for strong bones and teeth. Important for muscle contraction and clotting.",
      categoryId: mineralsCategory!.id,
      rating: 4.4,
      reviews: 523,
      topPrice: "$31.90",
      benefits: ["Bones", "Teeth", "Muscles"],
      link: "#",
    },
    {
      name: "Collagen",
      description: "Structural protein that maintains youthful skin, healthy joints and strong hair.",
      categoryId: proteinsCategory!.id,
      rating: 4.6,
      reviews: 945,
      topPrice: "$89.90",
      benefits: ["Skin", "Joints", "Hair"],
      link: "#",
    },
    {
      name: "Probiotics",
      description: "Beneficial bacteria that improve gut health, digestion and immunity.",
      categoryId: digestiveCategory!.id,
      rating: 4.5,
      reviews: 712,
      topPrice: "$67.90",
      benefits: ["Digestion", "Gut", "Immunity"],
      link: "#",
    },
    {
      name: "Creatine",
      description: "Improves physical performance, muscle strength and post-workout recovery.",
      categoryId: performanceCategory!.id,
      rating: 4.8,
      reviews: 1334,
      topPrice: "$54.90",
      benefits: ["Strength", "Performance", "Recovery"],
      link: "#",
    },
    {
      name: "Whey Protein",
      description: "High-quality protein for muscle mass gain and recovery.",
      categoryId: proteinsCategory!.id,
      rating: 4.7,
      reviews: 2156,
      topPrice: "$129.90",
      benefits: ["Muscle Mass", "Recovery", "Protein"],
      link: "#",
    },
    
    // NOVOS SUPLEMENTOS ADICIONADOS
    {
      name: "Ashwagandha",
      description: "Adaptogenic herb that reduces stress, anxiety and supports adrenal function. Improves sleep quality.",
      categoryId: herbalCategory!.id,
      rating: 4.6,
      reviews: 834,
      topPrice: "$39.90",
      benefits: ["Mood", "Sleep", "Energy", "Anti-inflammatory"],
      link: "#",
      badge: "Trending",
    },
    {
      name: "Turmeric Curcumin",
      description: "Powerful anti-inflammatory compound with antioxidant properties. Supports joint health.",
      categoryId: herbalCategory!.id,
      rating: 4.7,
      reviews: 1089,
      topPrice: "$34.90",
      benefits: ["Anti-inflammatory", "Joints", "Antioxidant"],
      link: "#",
      badge: "Natural",
    },
    {
      name: "Coenzyme Q10",
      description: "Essential for cellular energy production and heart health. Powerful antioxidant properties.",
      categoryId: vitaminsCategory!.id,
      rating: 4.5,
      reviews: 667,
      topPrice: "$79.90",
      benefits: ["Heart", "Energy", "Antioxidant"],
      link: "#",
    },
    {
      name: "Melatonin",
      description: "Natural hormone that regulates sleep-wake cycles. Improves sleep quality and duration.",
      categoryId: nootropicsCategory!.id,
      rating: 4.4,
      reviews: 923,
      topPrice: "$22.90",
      benefits: ["Sleep", "Mood", "Antioxidant"],
      link: "#",
    },
    {
      name: "Rhodiola Rosea",
      description: "Adaptogenic herb that enhances mental performance, reduces fatigue and stress.",
      categoryId: herbalCategory!.id,
      rating: 4.3,
      reviews: 445,
      topPrice: "$42.90",
      benefits: ["Energy", "Mood", "Brain", "Performance"],
      link: "#",
    },
    {
      name: "Spirulina",
      description: "Nutrient-dense blue-green algae rich in protein, vitamins and minerals. Boosts immunity.",
      categoryId: proteinsCategory!.id,
      rating: 4.5,
      reviews: 756,
      topPrice: "$48.90",
      benefits: ["Immunity", "Protein", "Energy", "Antioxidant"],
      link: "#",
      badge: "Superfood",
    },
    {
      name: "Biotin",
      description: "B-vitamin essential for healthy hair, skin and nails. Supports metabolism and nerve function.",
      categoryId: vitaminsCategory!.id,
      rating: 4.6,
      reviews: 1234,
      topPrice: "$19.90",
      benefits: ["Hair", "Skin", "Metabolism", "Nervous System"],
      link: "#",
    },
    {
      name: "Vitamin K2",
      description: "Works synergistically with Vitamin D3 for optimal calcium utilization and bone health.",
      categoryId: vitaminsCategory!.id,
      rating: 4.4,
      reviews: 567,
      topPrice: "$36.90",
      benefits: ["Bone Health", "Heart", "Teeth"],
      link: "#",
    },
    {
      name: "L-Theanine",
      description: "Amino acid that promotes relaxation without drowsiness. Improves focus and reduces anxiety.",
      categoryId: nootropicsCategory!.id,
      rating: 4.5,
      reviews: 689,
      topPrice: "$29.90",
      benefits: ["Mood", "Brain", "Sleep"],
      link: "#",
    },
    {
      name: "Glucosamine Chondroitin",
      description: "Supports joint health, cartilage repair and reduces joint pain and stiffness.",
      categoryId: mineralsCategory!.id,
      rating: 4.3,
      reviews: 812,
      topPrice: "$52.90",
      benefits: ["Joints", "Bones", "Anti-inflammatory"],
      link: "#",
    },
    {
      name: "Green Tea Extract",
      description: "Rich in EGCG and antioxidants. Supports metabolism, weight management and brain health.",
      categoryId: herbalCategory!.id,
      rating: 4.4,
      reviews: 743,
      topPrice: "$31.90",
      benefits: ["Antioxidant", "Metabolism", "Brain", "Heart"],
      link: "#",
    },
    {
      name: "Vitamin E",
      description: "Fat-soluble antioxidant that protects cells from oxidative damage. Supports skin health.",
      categoryId: vitaminsCategory!.id,
      rating: 4.2,
      reviews: 456,
      topPrice: "$25.90",
      benefits: ["Antioxidant", "Skin", "Heart", "Immunity"],
      link: "#",
    },
    {
      name: "Folic Acid",
      description: "B-vitamin essential for DNA synthesis, red blood cell formation and preventing birth defects.",
      categoryId: vitaminsCategory!.id,
      rating: 4.5,
      reviews: 634,
      topPrice: "$18.90",
      benefits: ["Blood", "Nervous System", "Energy"],
      link: "#",
    },
    {
      name: "Lion's Mane",
      description: "Medicinal mushroom that supports cognitive function, memory and nerve regeneration.",
      categoryId: nootropicsCategory!.id,
      rating: 4.6,
      reviews: 578,
      topPrice: "$44.90",
      benefits: ["Brain", "Nervous System", "Memory"],
      link: "#",
      badge: "Nootropic",
    },
    {
      name: "Alpha-Lipoic Acid",
      description: "Universal antioxidant that supports cellular energy and helps maintain healthy blood sugar levels.",
      categoryId: vitaminsCategory!.id,
      rating: 4.3,
      reviews: 389,
      topPrice: "$41.90",
      benefits: ["Antioxidant", "Energy", "Metabolism"],
      link: "#",
    },
    
    // SUPLEMENTOS NOOTROPICOS AVANÇADOS
    {
      name: "Bacopa Monnieri",
      description: "Ancient Ayurvedic herb that enhances memory, learning capacity and reduces anxiety.",
      categoryId: nootropicsCategory!.id,
      rating: 4.4,
      reviews: 445,
      topPrice: "$33.90",
      benefits: ["Memory", "Brain", "Focus", "Mood"],
      link: "#",
    },
    {
      name: "Ginkgo Biloba",
      description: "Improves blood circulation to the brain, enhances cognitive function and memory.",
      categoryId: nootropicsCategory!.id,
      rating: 4.2,
      reviews: 623,
      topPrice: "$27.90",
      benefits: ["Brain", "Memory", "Focus", "Heart"],
      link: "#",
    },
    {
      name: "Phosphatidylserine",
      description: "Phospholipid essential for brain cell membrane health and cognitive function.",
      categoryId: nootropicsCategory!.id,
      rating: 4.3,
      reviews: 234,
      topPrice: "$67.90",
      benefits: ["Memory", "Brain", "Focus"],
      link: "#",
    },
    {
      name: "N-Acetyl Cysteine",
      description: "Powerful antioxidant that supports liver health, respiratory function and mental clarity.",
      categoryId: vitaminsCategory!.id,
      rating: 4.5,
      reviews: 567,
      topPrice: "$38.90",
      benefits: ["Antioxidant", "Brain", "Immunity"],
      link: "#",
    },
    {
      name: "Milk Thistle",
      description: "Supports liver health and detoxification. Protects liver cells from damage.",
      categoryId: herbalCategory!.id,
      rating: 4.3,
      reviews: 478,
      topPrice: "$26.90",
      benefits: ["Antioxidant", "Digestion"],
      link: "#",
    },
    {
      name: "Elderberry",
      description: "Immune-boosting berry rich in antioxidants and vitamins. Supports respiratory health.",
      categoryId: herbalCategory!.id,
      rating: 4.6,
      reviews: 789,
      topPrice: "$32.90",
      benefits: ["Immunity", "Antioxidant"],
      link: "#",
      badge: "Immune Support",
    },
    {
      name: "Saw Palmetto",
      description: "Supports prostate health and hormonal balance in men. Anti-inflammatory properties.",
      categoryId: herbalCategory!.id,
      rating: 4.2,
      reviews: 356,
      topPrice: "$29.90",
      benefits: ["Anti-inflammatory", "Mood"],
      link: "#",
    },
    {
      name: "Quercetin",
      description: "Powerful bioflavonoid with anti-inflammatory and antioxidant properties. Supports immunity.",
      categoryId: vitaminsCategory!.id,
      rating: 4.4,
      reviews: 445,
      topPrice: "$34.90",
      benefits: ["Anti-inflammatory", "Antioxidant", "Immunity"],
      link: "#",
    },
  ]

  console.log('Creating supplements...')
  for (const supplementData of supplementsData) {
    const { benefits, ...supplementInfo } = supplementData
    
    // Check if supplement already exists
    const existingSupplement = await prisma.supplement.findFirst({
      where: { name: supplementData.name }
    })
    
    let supplement
    if (existingSupplement) {
      supplement = existingSupplement
      console.log(`Supplement ${supplementData.name} already exists, skipping...`)
    } else {
      // Create supplement
      supplement = await prisma.supplement.create({
        data: supplementInfo
      })
      console.log(`Created supplement: ${supplementData.name}`)
    }

    // Add benefits
    for (const benefitName of benefits) {
      const benefit = await prisma.benefit.findUnique({
        where: { name: benefitName }
      })
      
      if (benefit) {
        // Check if relationship already exists
        const existingRelation = await prisma.supplementBenefit.findUnique({
          where: {
            supplementId_benefitId: {
              supplementId: supplement.id,
              benefitId: benefit.id
            }
          }
        })
        
        if (!existingRelation) {
          await prisma.supplementBenefit.create({
            data: {
              supplementId: supplement.id,
              benefitId: benefit.id
            }
          })
        }
      }
    }
  }

  // ===== CRIAR PRODUTOS EXISTENTES (ZINC, VITAMIN D3, VITAMIN C) =====
  const products = [
      {
        rank: 1,
        name: "Premium Zinc Chelate",
        brand: "VitaMax",
        price: "$45.90",
        rating: 4.8,
        reviews: 1247,
        dosage: "15mg",
        capsules: "60",
        badge: "Best Value",
      supplementId: 1
      },
      {
        rank: 2,
        name: "Zinc Picolinate",
        brand: "NutriLife",
        price: "$52.90",
        rating: 4.7,
        reviews: 892,
        dosage: "22mg",
        capsules: "90",
        badge: "Best Absorption",
      supplementId: 1
      },
      {
        rank: 3,
        name: "Zinc Bisglycinate",
        brand: "SupremeHealth",
        price: "$38.90",
        rating: 4.6,
        reviews: 634,
        dosage: "10mg",
        capsules: "120",
        badge: "Best Seller",
      supplementId: 1
      },
      {
        rank: 4,
        name: "Zinc Complex",
        brand: "BioActive",
        price: "$41.90",
        rating: 4.5,
        reviews: 523,
        dosage: "15mg",
        capsules: "60",
      supplementId: 1
      },
      {
        rank: 5,
        name: "Organic Zinc",
        brand: "NaturalPlus",
        price: "$49.90",
        rating: 4.4,
        reviews: 445,
        dosage: "20mg",
        capsules: "90",
      supplementId: 1
      },
      {
        rank: 6,
        name: "Zinc Gluconate",
        brand: "HealthFirst",
        price: "$35.90",
        rating: 4.3,
        reviews: 378,
        dosage: "14mg",
        capsules: "100",
      badge: "Best Seller",
      supplementId: 1
      },
      {
        rank: 7,
        name: "Zinc + Vitamin C",
        brand: "ImunoBoost",
        price: "$44.90",
        rating: 4.2,
        reviews: 312,
        dosage: "12mg",
        capsules: "60",
      supplementId: 1
      },
      {
        rank: 8,
        name: "Pure Zinc",
        brand: "CleanSupps",
        price: "$39.90",
        rating: 4.1,
        reviews: 267,
        dosage: "18mg",
        capsules: "90",
      supplementId: 1
      },
      {
        rank: 9,
        name: "Liquid Zinc",
        brand: "LiquidHealth",
        price: "$56.90",
        rating: 4.0,
        reviews: 198,
        dosage: "15mg/ml",
        capsules: "250ml",
      supplementId: 1
      },
      {
        rank: 10,
        name: "Zinc Essential",
        brand: "BasicNutrition",
        price: "$29.90",
        rating: 3.9,
        reviews: 156,
        dosage: "10mg",
        capsules: "60",
      supplementId: 1
    },
      {
        rank: 1,
        name: "Vitamin D3 High Potency",
        brand: "SunVit",
        price: "$42.90",
        rating: 4.9,
        reviews: 1456,
        dosage: "5000 IU",
        capsules: "120",
        badge: "Best Choice",
      supplementId: 2
      },
      {
        rank: 2,
        name: "D3 + K2 Complex",
        brand: "BoneHealth",
        price: "$56.90",
        rating: 4.8,
        reviews: 1123,
        dosage: "4000 IU + 100mcg",
        capsules: "90",
        badge: "Enhanced Formula",
      supplementId: 2
      },
      {
        rank: 3,
        name: "Vitamin D3 Drops",
        brand: "LiquidSun",
        price: "$38.90",
        rating: 4.7,
        reviews: 892,
        dosage: "1000 IU/drop",
        capsules: "30ml",
        badge: "Easy Absorption",
      supplementId: 2
      },
      {
        rank: 4,
        name: "D3 Cholecalciferol",
        brand: "PureBone",
        price: "$35.90",
        rating: 4.6,
        reviews: 756,
        dosage: "2000 IU",
        capsules: "180",
      supplementId: 2
      },
      {
        rank: 5,
        name: "Vitamin D3 Gummies",
        brand: "TastyHealth",
        price: "$29.90",
        rating: 4.5,
        reviews: 634,
        dosage: "1000 IU",
        capsules: "60 gummies",
      supplementId: 2
      },
      {
        rank: 6,
        name: "D3 Mega Dose",
        brand: "StrengthVit",
        price: "$49.90",
        rating: 4.4,
        reviews: 523,
        dosage: "10000 IU",
        capsules: "90",
      supplementId: 2
      },
      {
        rank: 7,
        name: "Plant-Based D3",
        brand: "VeganSun",
        price: "$52.90",
        rating: 4.3,
        reviews: 445,
        dosage: "2500 IU",
        capsules: "120",
      supplementId: 2
      },
      {
        rank: 8,
        name: "D3 with Coconut Oil",
        brand: "AbsorbMax",
        price: "$41.90",
        rating: 4.2,
        reviews: 378,
        dosage: "3000 IU",
        capsules: "60",
      supplementId: 2
      },
      {
        rank: 9,
        name: "Vitamin D3 Spray",
        brand: "QuickAbsorb",
        price: "$33.90",
        rating: 4.1,
        reviews: 312,
        dosage: "800 IU/spray",
        capsules: "30ml",
      supplementId: 2
      },
      {
        rank: 10,
        name: "Basic D3",
        brand: "EssentialHealth",
        price: "$24.90",
        rating: 4.0,
        reviews: 267,
        dosage: "1000 IU",
        capsules: "100",
      supplementId: 2
    },
      {
        rank: 1,
        name: "Vitamin C 1000mg",
        brand: "ImmunePlus",
        price: "$35.90",
        rating: 4.8,
        reviews: 1678,
        dosage: "1000mg",
        capsules: "120",
        badge: "Best Potency",
      supplementId: 3
      },
      {
        rank: 2,
        name: "Buffered Vitamin C",
        brand: "GentleHealth",
        price: "$42.90",
        rating: 4.7,
        reviews: 1245,
        dosage: "750mg",
        capsules: "90",
        badge: "Stomach Friendly",
      supplementId: 3
      },
      {
        rank: 3,
        name: "Liposomal Vitamin C",
        brand: "BioAvailable",
        price: "$68.90",
        rating: 4.6,
        reviews: 934,
        dosage: "500mg",
        capsules: "60",
        badge: "Superior Absorption",
      supplementId: 3
      },
      {
        rank: 4,
        name: "Vitamin C + Bioflavonoids",
        brand: "SynergyHealth",
        price: "$38.90",
        rating: 4.5,
        reviews: 823,
        dosage: "500mg + 100mg",
        capsules: "180",
      supplementId: 3
      },
      {
        rank: 5,
        name: "Chewable Vitamin C",
        brand: "FruityHealth",
        price: "$29.90",
        rating: 4.4,
        reviews: 712,
        dosage: "250mg",
        capsules: "100 tablets",
      supplementId: 3
      },
      {
        rank: 6,
        name: "Time-Release Vitamin C",
        brand: "ExtendedHealth",
        price: "$45.90",
        rating: 4.3,
        reviews: 634,
        dosage: "1000mg",
        capsules: "120",
      supplementId: 3
      },
      {
        rank: 7,
        name: "Natural Acerola C",
        brand: "OrganicLife",
        price: "$52.90",
        rating: 4.2,
        reviews: 567,
        dosage: "800mg",
        capsules: "90",
      supplementId: 3
      },
      {
        rank: 8,
        name: "Vitamin C Powder",
        brand: "PureMix",
        price: "$24.90",
        rating: 4.1,
        reviews: 445,
        dosage: "1g/scoop",
        capsules: "250g",
      supplementId: 3
      },
      {
        rank: 9,
        name: "Effervescent Vitamin C",
        brand: "FizzyHealth",
        price: "$31.90",
        rating: 4.0,
        reviews: 378,
        dosage: "1000mg",
        capsules: "20 tablets",
      supplementId: 3
      },
      {
        rank: 10,
        name: "Basic Vitamin C",
        brand: "SimpleNutrition",
        price: "$19.90",
        rating: 3.9,
        reviews: 312,
        dosage: "500mg",
        capsules: "100",
      supplementId: 3
    }
  ]

  console.log('Creating products...')
  for (const product of products) {
    // Verificar se o produto já existe
    const existingProduct = await prisma.product.findFirst({
      where: {
        name: product.name,
        supplementId: product.supplementId
      }
    })
    
    if (existingProduct) {
      console.log(`Product ${product.name} already exists, skipping...`)
    } else {
      await prisma.product.create({
        data: product
      })
      console.log(`✅ Created product: ${product.name}`)
    }
  }

  // ===== CRIAR NOVOS PRODUTOS =====
  const newProducts = [
    // ===== ASHWAGANDHA PRODUCTS =====
    { rank: 1, name: "KSM-66 Ashwagandha", brand: "AdaptaMax", price: "$49.90", rating: 4.8, reviews: 1234, dosage: "600mg", capsules: "90", badge: "Clinical Grade", supplementId: 13 },
    { rank: 2, name: "Organic Ashwagandha Root", brand: "HerbalLife", price: "$39.90", rating: 4.7, reviews: 967, dosage: "500mg", capsules: "120", badge: "Organic", supplementId: 13 },
    { rank: 3, name: "Ashwagandha Extract", brand: "VitalAdapt", price: "$42.90", rating: 4.6, reviews: 834, dosage: "450mg", capsules: "60", badge: "High Potency", supplementId: 13 },
    { rank: 4, name: "Ashwagandha + Black Pepper", brand: "BioEnhance", price: "$45.90", rating: 4.5, reviews: 723, dosage: "500mg + 5mg", capsules: "90", badge: "Enhanced Absorption", supplementId: 13 },
    { rank: 5, name: "Ashwagandha Gummies", brand: "TastyAdapt", price: "$34.90", rating: 4.4, reviews: 612, dosage: "300mg", capsules: "60 gummies", badge: null, supplementId: 13 },
    { rank: 6, name: "Pure Ashwagandha Powder", brand: "TraditionalHealth", price: "$29.90", rating: 4.3, reviews: 545, dosage: "1g/serving", capsules: "200g", badge: null, supplementId: 13 },
    { rank: 7, name: "Ashwagandha + Rhodiola", brand: "StressShield", price: "$52.90", rating: 4.2, reviews: 456, dosage: "400mg + 200mg", capsules: "60", badge: null, supplementId: 13 },
    { rank: 8, name: "Liquid Ashwagandha", brand: "QuickAbsorb", price: "$39.90", rating: 4.1, reviews: 389, dosage: "500mg/ml", capsules: "60ml", badge: null, supplementId: 13 },
    { rank: 9, name: "Ashwagandha Capsules", brand: "BasicHerbs", price: "$26.90", rating: 4.0, reviews: 312, dosage: "450mg", capsules: "90", badge: null, supplementId: 13 },
    { rank: 10, name: "Standardized Ashwagandha", brand: "HerbMax", price: "$37.90", rating: 3.9, reviews: 278, dosage: "300mg", capsules: "120", badge: null, supplementId: 13 },

    // ===== TURMERIC CURCUMIN PRODUCTS =====
    { rank: 1, name: "Curcumin C3 Complex", brand: "InflammaShield", price: "$56.90", rating: 4.8, reviews: 1456, dosage: "500mg", capsules: "120", badge: "Patented Formula", supplementId: 14 },
    { rank: 2, name: "Turmeric + Bioperine", brand: "GoldenHealth", price: "$42.90", rating: 4.7, reviews: 1089, dosage: "1000mg + 10mg", capsules: "90", badge: "95% Curcuminoids", supplementId: 14 },
    { rank: 3, name: "Organic Turmeric Root", brand: "PureTurmeric", price: "$34.90", rating: 4.6, reviews: 923, dosage: "800mg", capsules: "180", badge: "Organic", supplementId: 14 },
    { rank: 4, name: "Liposomal Curcumin", brand: "BioAvailable", price: "$79.90", rating: 4.5, reviews: 734, dosage: "250mg", capsules: "60", badge: "Superior Absorption", supplementId: 14 },
    { rank: 5, name: "Turmeric Gummies", brand: "GoldenGummies", price: "$29.90", rating: 4.4, reviews: 656, dosage: "300mg", capsules: "60 gummies", badge: null, supplementId: 14 },
    { rank: 6, name: "Triple Strength Turmeric", brand: "MegaCurcumin", price: "$48.90", rating: 4.3, reviews: 567, dosage: "1500mg", capsules: "60", badge: null, supplementId: 14 },
    { rank: 7, name: "Turmeric + Ginger", brand: "SynergyHerbs", price: "$39.90", rating: 4.2, reviews: 489, dosage: "750mg + 250mg", capsules: "90", badge: null, supplementId: 14 },
    { rank: 8, name: "Turmeric Liquid Extract", brand: "LiquidGold", price: "$45.90", rating: 4.1, reviews: 423, dosage: "500mg/ml", capsules: "60ml", badge: null, supplementId: 14 },
    { rank: 9, name: "Standardized Curcumin", brand: "HerbStandard", price: "$36.90", rating: 4.0, reviews: 356, dosage: "400mg", capsules: "120", badge: null, supplementId: 14 },
    { rank: 10, name: "Basic Turmeric", brand: "SimpleSpice", price: "$24.90", rating: 3.9, reviews: 289, dosage: "500mg", capsules: "100", badge: null, supplementId: 14 },

    // ===== LION'S MANE PRODUCTS =====
    { rank: 1, name: "Organic Lion's Mane Extract", brand: "MushroomMind", price: "$67.90", rating: 4.7, reviews: 834, dosage: "500mg", capsules: "90", badge: "30% Beta-Glucans", supplementId: 26 },
    { rank: 2, name: "Lion's Mane 8:1 Extract", brand: "CogniShroom", price: "$54.90", rating: 4.6, reviews: 723, dosage: "400mg", capsules: "120", badge: "Concentrated", supplementId: 26 },
    { rank: 3, name: "Pure Lion's Mane Powder", brand: "NeuroMushroom", price: "$44.90", rating: 4.5, reviews: 578, dosage: "1g/serving", capsules: "200g", badge: "Pure Fruiting Body", supplementId: 26 },
    { rank: 4, name: "Lion's Mane + Reishi", brand: "MushroomBlend", price: "$52.90", rating: 4.4, reviews: 512, dosage: "400mg + 200mg", capsules: "90", badge: null, supplementId: 26 },
    { rank: 5, name: "Dual Extract Lion's Mane", brand: "BrainShroom", price: "$59.90", rating: 4.3, reviews: 456, dosage: "600mg", capsules: "60", badge: null, supplementId: 26 },
    { rank: 6, name: "Lion's Mane Gummies", brand: "FungiGummies", price: "$39.90", rating: 4.2, reviews: 389, dosage: "300mg", capsules: "60 gummies", badge: null, supplementId: 26 },
    { rank: 7, name: "Liquid Lion's Mane", brand: "MushroomTonic", price: "$49.90", rating: 4.1, reviews: 334, dosage: "500mg/ml", capsules: "60ml", badge: null, supplementId: 26 },
    { rank: 8, name: "Lion's Mane Capsules", brand: "NaturalCognition", price: "$42.90", rating: 4.0, reviews: 278, dosage: "450mg", capsules: "90", badge: null, supplementId: 26 },
    { rank: 9, name: "Standardized Lion's Mane", brand: "BrainBoost", price: "$47.90", rating: 3.9, reviews: 234, dosage: "350mg", capsules: "120", badge: null, supplementId: 26 },
    { rank: 10, name: "Basic Lion's Mane", brand: "MushroomBasics", price: "$34.90", rating: 3.8, reviews: 198, dosage: "300mg", capsules: "60", badge: null, supplementId: 26 },

    // ===== QUERCETIN PRODUCTS =====
    { rank: 1, name: "Quercetin + Bromelain", brand: "BioFlavonoid", price: "$45.90", rating: 4.6, reviews: 723, dosage: "500mg + 100mg", capsules: "120", badge: "Enhanced Absorption", supplementId: 35 },
    { rank: 2, name: "Pure Quercetin Extract", brand: "AntiOxMax", price: "$39.90", rating: 4.5, reviews: 612, dosage: "500mg", capsules: "90", badge: "98% Pure", supplementId: 35 },
    { rank: 3, name: "Quercetin + Vitamin C", brand: "ImmuneShield", price: "$34.90", rating: 4.4, reviews: 545, dosage: "400mg + 250mg", capsules: "120", badge: "Immune Support", supplementId: 35 },
    { rank: 4, name: "Liposomal Quercetin", brand: "BioAvailable", price: "$59.90", rating: 4.3, reviews: 456, dosage: "250mg", capsules: "60", badge: "Superior Absorption", supplementId: 35 },
    { rank: 5, name: "Quercetin Phytosome", brand: "PhytoMax", price: "$52.90", rating: 4.2, reviews: 389, dosage: "300mg", capsules: "90", badge: null, supplementId: 35 },
    { rank: 6, name: "Natural Quercetin", brand: "PlantPower", price: "$29.90", rating: 4.1, reviews: 334, dosage: "450mg", capsules: "120", badge: null, supplementId: 35 },
    { rank: 7, name: "Quercetin + Zinc", brand: "ImmunePlus", price: "$42.90", rating: 4.0, reviews: 278, dosage: "400mg + 15mg", capsules: "90", badge: null, supplementId: 35 },
    { rank: 8, name: "Standardized Quercetin", brand: "FlavorMax", price: "$37.90", rating: 3.9, reviews: 234, dosage: "350mg", capsules: "100", badge: null, supplementId: 35 },
    { rank: 9, name: "Quercetin Dihydrate", brand: "PureBioflavonoid", price: "$33.90", rating: 3.8, reviews: 198, dosage: "400mg", capsules: "60", badge: null, supplementId: 35 },
    { rank: 10, name: "Basic Quercetin", brand: "SimpleSupps", price: "$26.90", rating: 3.7, reviews: 156, dosage: "300mg", capsules: "90", badge: null, supplementId: 35 },

    // ===== SPIRULINA PRODUCTS =====
    { rank: 1, name: "Organic Spirulina Tablets", brand: "BlueGreenLife", price: "$56.90", rating: 4.7, reviews: 967, dosage: "500mg", capsules: "500 tablets", badge: "Certified Organic", supplementId: 18 },
    { rank: 2, name: "Pure Spirulina Powder", brand: "SuperAlgae", price: "$48.90", rating: 4.6, reviews: 834, dosage: "3g/serving", capsules: "250g", badge: "Raw", supplementId: 18 },
    { rank: 3, name: "Spirulina + Chlorella", brand: "GreenBlend", price: "$52.90", rating: 4.5, reviews: 756, dosage: "400mg + 200mg", capsules: "180", badge: "Dual Algae", supplementId: 18 },
    { rank: 4, name: "Spirulina Capsules", brand: "NutriAlgae", price: "$42.90", rating: 4.4, reviews: 678, dosage: "600mg", capsules: "120", badge: null, supplementId: 18 },
    { rank: 5, name: "Hawaiian Spirulina", brand: "PacificGreen", price: "$67.90", rating: 4.3, reviews: 589, dosage: "500mg", capsules: "180", badge: "Hawaiian Grown", supplementId: 18 },
    { rank: 6, name: "Spirulina + Moringa", brand: "SuperGreens", price: "$45.90", rating: 4.2, reviews: 512, dosage: "350mg + 150mg", capsules: "90", badge: null, supplementId: 18 },
    { rank: 7, name: "Liquid Spirulina", brand: "AlgaeTonic", price: "$38.90", rating: 4.1, reviews: 445, dosage: "500mg/ml", capsules: "500ml", badge: null, supplementId: 18 },
    { rank: 8, name: "Spirulina Extract", brand: "ConcentratedGreens", price: "$59.90", rating: 4.0, reviews: 378, dosage: "300mg", capsules: "60", badge: null, supplementId: 18 },
    { rank: 9, name: "Freeze-Dried Spirulina", brand: "PureAlgae", price: "$41.90", rating: 3.9, reviews: 312, dosage: "450mg", capsules: "100", badge: null, supplementId: 18 },
    { rank: 10, name: "Basic Spirulina", brand: "GreenBasics", price: "$34.90", rating: 3.8, reviews: 267, dosage: "400mg", capsules: "90", badge: null, supplementId: 18 },

    // ===== MELATONIN PRODUCTS =====
    { rank: 1, name: "Fast-Dissolve Melatonin", brand: "SleepFast", price: "$24.90", rating: 4.6, reviews: 1234, dosage: "3mg", capsules: "90 tablets", badge: "Quick Acting", supplementId: 16 },
    { rank: 2, name: "Time-Release Melatonin", brand: "ExtendedSleep", price: "$29.90", rating: 4.5, reviews: 1067, dosage: "5mg", capsules: "60", badge: "8-Hour Release", supplementId: 16 },
    { rank: 3, name: "Natural Melatonin", brand: "NightRest", price: "$22.90", rating: 4.4, reviews: 923, dosage: "1mg", capsules: "120", badge: "Low Dose", supplementId: 16 },
    { rank: 4, name: "Melatonin Gummies", brand: "SleepyGummies", price: "$26.90", rating: 4.3, reviews: 812, dosage: "2mg", capsules: "60 gummies", badge: "Great Taste", supplementId: 16 },
    { rank: 5, name: "Liquid Melatonin", brand: "LiquidSleep", price: "$19.90", rating: 4.2, reviews: 734, dosage: "1mg/drop", capsules: "60ml", badge: null, supplementId: 16 },
    { rank: 6, name: "Melatonin + L-Theanine", brand: "CalmSleep", price: "$34.90", rating: 4.1, reviews: 656, dosage: "3mg + 200mg", capsules: "90", badge: null, supplementId: 16 },
    { rank: 7, name: "High Potency Melatonin", brand: "DeepSleep", price: "$27.90", rating: 4.0, reviews: 578, dosage: "10mg", capsules: "60", badge: null, supplementId: 16 },
    { rank: 8, name: "Melatonin + Magnesium", brand: "RelaxSleep", price: "$31.90", rating: 3.9, reviews: 489, dosage: "3mg + 200mg", capsules: "90", badge: null, supplementId: 16 },
    { rank: 9, name: "Sublingual Melatonin", brand: "UnderTongue", price: "$21.90", rating: 3.8, reviews: 423, dosage: "2mg", capsules: "100 tablets", badge: null, supplementId: 16 },
    { rank: 10, name: "Basic Melatonin", brand: "SimpleSleep", price: "$16.90", rating: 3.7, reviews: 356, dosage: "3mg", capsules: "60", badge: null, supplementId: 16 },

    // ===== L-THEANINE PRODUCTS =====
    { rank: 1, name: "Suntheanine L-Theanine", brand: "CalmMind", price: "$42.90", rating: 4.6, reviews: 834, dosage: "200mg", capsules: "90", badge: "Patented Form", supplementId: 21 },
    { rank: 2, name: "Pure L-Theanine", brand: "ZenFocus", price: "$29.90", rating: 4.5, reviews: 723, dosage: "150mg", capsules: "120", badge: "Pharmaceutical Grade", supplementId: 21 },
    { rank: 3, name: "L-Theanine + GABA", brand: "RelaxBlend", price: "$36.90", rating: 4.4, reviews: 689, dosage: "200mg + 100mg", capsules: "60", badge: "Calm Focus", supplementId: 21 },
    { rank: 4, name: "Chewable L-Theanine", brand: "ChewCalm", price: "$26.90", rating: 4.3, reviews: 612, dosage: "100mg", capsules: "90 tablets", badge: "Cherry Flavor", supplementId: 21 },
    { rank: 5, name: "L-Theanine Powder", brand: "PurePowder", price: "$34.90", rating: 4.2, reviews: 545, dosage: "200mg/scoop", capsules: "50g", badge: null, supplementId: 21 },
    { rank: 6, name: "Double Strength L-Theanine", brand: "MegaCalm", price: "$48.90", rating: 4.1, reviews: 478, dosage: "400mg", capsules: "60", badge: null, supplementId: 21 },
    { rank: 7, name: "L-Theanine + B-Complex", brand: "CalmEnergy", price: "$39.90", rating: 4.0, reviews: 423, dosage: "150mg + complex", capsules: "90", badge: null, supplementId: 21 },
    { rank: 8, name: "Natural L-Theanine", brand: "TeaExtract", price: "$24.90", rating: 3.9, reviews: 367, dosage: "125mg", capsules: "100", badge: null, supplementId: 21 },
    { rank: 9, name: "L-Theanine Capsules", brand: "BasicCalm", price: "$21.90", rating: 3.8, reviews: 312, dosage: "100mg", capsules: "120", badge: null, supplementId: 21 },
    { rank: 10, name: "Economy L-Theanine", brand: "BudgetZen", price: "$18.90", rating: 3.7, reviews: 256, dosage: "100mg", capsules: "90", badge: null, supplementId: 21 },

    // ===== BACOPA MONNIERI PRODUCTS =====
    { rank: 1, name: "Bacognize Bacopa", brand: "CognitivePower", price: "$47.90", rating: 4.5, reviews: 612, dosage: "300mg", capsules: "90", badge: "Clinical Strength", supplementId: 28 },
    { rank: 2, name: "Standardized Bacopa Extract", brand: "MemoryMax", price: "$39.90", rating: 4.4, reviews: 545, dosage: "250mg", capsules: "120", badge: "50% Bacosides", supplementId: 28 },
    { rank: 3, name: "Organic Bacopa Powder", brand: "AyurvedicPure", price: "$33.90", rating: 4.3, reviews: 478, dosage: "500mg/serving", capsules: "100g", badge: "Organic", supplementId: 28 },
    { rank: 4, name: "Bacopa + Ginkgo", brand: "BrainBlend", price: "$42.90", rating: 4.2, reviews: 423, dosage: "200mg + 120mg", capsules: "90", badge: null, supplementId: 28 },
    { rank: 5, name: "Full Spectrum Bacopa", brand: "HolisticMind", price: "$36.90", rating: 4.1, reviews: 389, dosage: "350mg", capsules: "60", badge: null, supplementId: 28 },
    { rank: 6, name: "Bacopa Liquid Extract", brand: "LiquidMemory", price: "$44.90", rating: 4.0, reviews: 334, dosage: "200mg/ml", capsules: "60ml", badge: null, supplementId: 28 },
    { rank: 7, name: "Bacopa + Ashwagandha", brand: "AdaptoCognition", price: "$49.90", rating: 3.9, reviews: 289, dosage: "200mg + 200mg", capsules: "60", badge: null, supplementId: 28 },
    { rank: 8, name: "Traditional Bacopa", brand: "HerbalMemory", price: "$29.90", rating: 3.8, reviews: 245, dosage: "400mg", capsules: "90", badge: null, supplementId: 28 },
    { rank: 9, name: "Bacopa Capsules", brand: "BasicBrain", price: "$26.90", rating: 3.7, reviews: 198, dosage: "300mg", capsules: "120", badge: null, supplementId: 28 },
    { rank: 10, name: "Economy Bacopa", brand: "BudgetMemory", price: "$22.90", rating: 3.6, reviews: 167, dosage: "250mg", capsules: "60", badge: null, supplementId: 28 },

    // ===== GINKGO BILOBA PRODUCTS =====
    { rank: 1, name: "Ginkgo Biloba EGb 761", brand: "BrainFlow", price: "$52.90", rating: 4.4, reviews: 756, dosage: "120mg", capsules: "90", badge: "Standardized Extract", supplementId: 29 },
    { rank: 2, name: "Pure Ginkgo Extract", brand: "CogniFlow", price: "$34.90", rating: 4.3, reviews: 689, dosage: "100mg", capsules: "120", badge: "24% Flavonoids", supplementId: 29 },
    { rank: 3, name: "Ginkgo + Phosphatidylserine", brand: "MemoryBoost", price: "$49.90", rating: 4.2, reviews: 623, dosage: "80mg + 100mg", capsules: "60", badge: "Brain Health", supplementId: 29 },
    { rank: 4, name: "Liquid Ginkgo", brand: "FlowTonic", price: "$27.90", rating: 4.1, reviews: 567, dosage: "60mg/ml", capsules: "120ml", badge: null, supplementId: 29 },
    { rank: 5, name: "Double Strength Ginkgo", brand: "MegaFlow", price: "$42.90", rating: 4.0, reviews: 512, dosage: "240mg", capsules: "60", badge: null, supplementId: 29 },
    { rank: 6, name: "Ginkgo + Bacopa", brand: "CognitiveDuo", price: "$39.90", rating: 3.9, reviews: 456, dosage: "80mg + 150mg", capsules: "90", badge: null, supplementId: 29 },
    { rank: 7, name: "Organic Ginkgo Leaves", brand: "NaturalMemory", price: "$29.90", rating: 3.8, reviews: 389, dosage: "500mg", capsules: "100", badge: "Whole Leaf", supplementId: 29 },
    { rank: 8, name: "Ginkgo Capsules", brand: "BasicFlow", price: "$24.90", rating: 3.7, reviews: 334, dosage: "60mg", capsules: "120", badge: null, supplementId: 29 },
    { rank: 9, name: "Standardized Ginkgo", brand: "HerbalBrain", price: "$31.90", rating: 3.6, reviews: 278, dosage: "80mg", capsules: "90", badge: null, supplementId: 29 },
    { rank: 10, name: "Economy Ginkgo", brand: "BudgetBrain", price: "$19.90", rating: 3.5, reviews: 234, dosage: "40mg", capsules: "100", badge: null, supplementId: 29 },

    // ===== SAW PALMETTO PRODUCTS =====
    { rank: 1, name: "Super Saw Palmetto", brand: "ProstatePro", price: "$42.90", rating: 4.5, reviews: 567, dosage: "320mg", capsules: "90", badge: "Clinical Strength", supplementId: 34 },
    { rank: 2, name: "Saw Palmetto Extract", brand: "MenHealth", price: "$36.90", rating: 4.4, reviews: 445, dosage: "160mg", capsules: "120", badge: "Standardized", supplementId: 34 },
    { rank: 3, name: "Organic Saw Palmetto", brand: "HerbalMen", price: "$29.90", rating: 4.3, reviews: 389, dosage: "450mg", capsules: "60", badge: "Organic", supplementId: 34 },
    { rank: 4, name: "Saw Palmetto + Pumpkin Seed", brand: "ProstateCare", price: "$38.90", rating: 4.2, reviews: 334, dosage: "320mg + 200mg", capsules: "90", badge: "Enhanced Formula", supplementId: 34 },
    { rank: 5, name: "Liquid Saw Palmetto", brand: "HerbalTonic", price: "$44.90", rating: 4.1, reviews: 278, dosage: "300mg/ml", capsules: "60ml", badge: null, supplementId: 34 },
    { rank: 6, name: "Saw Palmetto Complex", brand: "VitalMen", price: "$35.90", rating: 4.0, reviews: 234, dosage: "250mg", capsules: "120", badge: null, supplementId: 34 },
    { rank: 7, name: "Pure Saw Palmetto", brand: "NaturalProstate", price: "$32.90", rating: 3.9, reviews: 198, dosage: "320mg", capsules: "60", badge: null, supplementId: 34 },
    { rank: 8, name: "Saw Palmetto + Zinc", brand: "MenSupport", price: "$39.90", rating: 3.8, reviews: 167, dosage: "300mg + 15mg", capsules: "90", badge: null, supplementId: 34 },
    { rank: 9, name: "Traditional Saw Palmetto", brand: "HerbalTradition", price: "$26.90", rating: 3.7, reviews: 134, dosage: "400mg", capsules: "100", badge: null, supplementId: 34 },
    { rank: 10, name: "Economy Saw Palmetto", brand: "BudgetHerbs", price: "$22.90", rating: 3.6, reviews: 98, dosage: "200mg", capsules: "60", badge: null, supplementId: 34 },

    // ===== ELDERBERRY PRODUCTS =====
    { rank: 1, name: "Black Elderberry Extract", brand: "ImmuneMax", price: "$39.90", rating: 4.6, reviews: 834, dosage: "1000mg", capsules: "60", badge: "10:1 Extract", supplementId: 33 },
    { rank: 2, name: "Elderberry Gummies", brand: "TastyImmune", price: "$32.90", rating: 4.5, reviews: 723, dosage: "150mg", capsules: "60 gummies", badge: "Great Taste", supplementId: 33 },
    { rank: 3, name: "Organic Elderberry", brand: "PureNature", price: "$28.90", rating: 4.4, reviews: 612, dosage: "500mg", capsules: "90", badge: "Organic", supplementId: 33 },
    { rank: 4, name: "Elderberry + Vitamin C", brand: "ImmuneShield", price: "$34.90", rating: 4.3, reviews: 545, dosage: "400mg + 250mg", capsules: "120", badge: "Immune Boost", supplementId: 33 },
    { rank: 5, name: "Liquid Elderberry", brand: "HerbalImmune", price: "$26.90", rating: 4.2, reviews: 456, dosage: "500mg/ml", capsules: "120ml", badge: null, supplementId: 33 },
    { rank: 6, name: "Elderberry + Zinc", brand: "DefenseMax", price: "$36.90", rating: 4.1, reviews: 389, dosage: "300mg + 10mg", capsules: "90", badge: null, supplementId: 33 },
    { rank: 7, name: "Standardized Elderberry", brand: "HerbalStandard", price: "$31.90", rating: 4.0, reviews: 334, dosage: "600mg", capsules: "60", badge: null, supplementId: 33 },
    { rank: 8, name: "Elderberry Capsules", brand: "NaturalDefense", price: "$24.90", rating: 3.9, reviews: 278, dosage: "450mg", capsules: "120", badge: null, supplementId: 33 },
    { rank: 9, name: "Elder Fruit Extract", brand: "BerryHealth", price: "$29.90", rating: 3.8, reviews: 234, dosage: "350mg", capsules: "90", badge: null, supplementId: 33 },
    { rank: 10, name: "Basic Elderberry", brand: "SimpleImmune", price: "$19.90", rating: 3.7, reviews: 167, dosage: "250mg", capsules: "60", badge: null, supplementId: 33 },

    // ===== MILK THISTLE PRODUCTS =====
    { rank: 1, name: "Silymarin Milk Thistle", brand: "LiverMax", price: "$45.90", rating: 4.5, reviews: 612, dosage: "150mg", capsules: "90", badge: "80% Silymarin", supplementId: 32 },
    { rank: 2, name: "Organic Milk Thistle", brand: "PureLiver", price: "$38.90", rating: 4.4, reviews: 545, dosage: "500mg", capsules: "120", badge: "Organic", supplementId: 32 },
    { rank: 3, name: "Milk Thistle Extract", brand: "HepatoHealth", price: "$32.90", rating: 4.3, reviews: 478, dosage: "300mg", capsules: "60", badge: "Standardized", supplementId: 32 },
    { rank: 4, name: "Milk Thistle + Dandelion", brand: "LiverCleanse", price: "$41.90", rating: 4.2, reviews: 423, dosage: "250mg + 150mg", capsules: "90", badge: "Liver Support", supplementId: 32 },
    { rank: 5, name: "Liquid Milk Thistle", brand: "HerbalDetox", price: "$36.90", rating: 4.1, reviews: 367, dosage: "200mg/ml", capsules: "60ml", badge: null, supplementId: 32 },
    { rank: 6, name: "Milk Thistle Complex", brand: "DetoxPro", price: "$34.90", rating: 4.0, reviews: 312, dosage: "400mg", capsules: "90", badge: null, supplementId: 32 },
    { rank: 7, name: "Pure Milk Thistle", brand: "NaturalLiver", price: "$28.90", rating: 3.9, reviews: 256, dosage: "350mg", capsules: "120", badge: null, supplementId: 32 },
    { rank: 8, name: "Milk Thistle Seed", brand: "HerbalPure", price: "$31.90", rating: 3.8, reviews: 234, dosage: "450mg", capsules: "60", badge: null, supplementId: 32 },
    { rank: 9, name: "Liver Support Thistle", brand: "BasicDetox", price: "$26.90", rating: 3.7, reviews: 189, dosage: "300mg", capsules: "90", badge: null, supplementId: 32 },
    { rank: 10, name: "Economy Milk Thistle", brand: "BudgetLiver", price: "$22.90", rating: 3.6, reviews: 145, dosage: "200mg", capsules: "60", badge: null, supplementId: 32 },

    // ===== N-ACETYL CYSTEINE PRODUCTS =====
    { rank: 1, name: "Pure NAC", brand: "AntioxidantMax", price: "$48.90", rating: 4.4, reviews: 567, dosage: "600mg", capsules: "90", badge: "Pharmaceutical Grade", supplementId: 31 },
    { rank: 2, name: "NAC + Selenium", brand: "CellularDefense", price: "$42.90", rating: 4.3, reviews: 489, dosage: "500mg + 50mcg", capsules: "120", badge: "Enhanced Formula", supplementId: 31 },
    { rank: 3, name: "Sustained Release NAC", brand: "ExtendedHealth", price: "$52.90", rating: 4.2, reviews: 423, dosage: "600mg", capsules: "60", badge: "12-Hour Release", supplementId: 31 },
    { rank: 4, name: "Organic NAC", brand: "PureDetox", price: "$45.90", rating: 4.1, reviews: 378, dosage: "500mg", capsules: "90", badge: "Organic", supplementId: 31 },
    { rank: 5, name: "NAC + Vitamin C", brand: "AntioxidantBlend", price: "$39.90", rating: 4.0, reviews: 334, dosage: "400mg + 200mg", capsules: "120", badge: null, supplementId: 31 },
    { rank: 6, name: "High Potency NAC", brand: "MegaDetox", price: "$56.90", rating: 3.9, reviews: 289, dosage: "1000mg", capsules: "60", badge: null, supplementId: 31 },
    { rank: 7, name: "NAC Capsules", brand: "RespiratorySupport", price: "$35.90", rating: 3.8, reviews: 245, dosage: "450mg", capsules: "90", badge: null, supplementId: 31 },
    { rank: 8, name: "Liver NAC", brand: "HepatoClean", price: "$41.90", rating: 3.7, reviews: 198, dosage: "500mg", capsules: "60", badge: null, supplementId: 31 },
    { rank: 9, name: "Basic NAC", brand: "SimpleDetox", price: "$32.90", rating: 3.6, reviews: 167, dosage: "400mg", capsules: "120", badge: null, supplementId: 31 },
    { rank: 10, name: "Economy NAC", brand: "BudgetDetox", price: "$28.90", rating: 3.5, reviews: 134, dosage: "300mg", capsules: "90", badge: null, supplementId: 31 },

    // ===== PHOSPHATIDYLSERINE PRODUCTS =====
    { rank: 1, name: "Sharp-PS Green", brand: "CognitivePeak", price: "$78.90", rating: 4.4, reviews: 445, dosage: "100mg", capsules: "60", badge: "Sunflower-Derived", supplementId: 30 },
    { rank: 2, name: "Phosphatidylserine Complex", brand: "BrainBoost", price: "$67.90", rating: 4.3, reviews: 389, dosage: "150mg", capsules: "90", badge: "Enhanced Absorption", supplementId: 30 },
    { rank: 3, name: "PS + DHA", brand: "NeuroMax", price: "$89.90", rating: 4.2, reviews: 334, dosage: "100mg + 200mg", capsules: "60", badge: "Brain Health", supplementId: 30 },
    { rank: 4, name: "Vegan Phosphatidylserine", brand: "PlantBrain", price: "$72.90", rating: 4.1, reviews: 289, dosage: "120mg", capsules: "90", badge: "Vegan", supplementId: 30 },
    { rank: 5, name: "PS Memory Support", brand: "CognitiveCare", price: "$64.90", rating: 4.0, reviews: 245, dosage: "100mg", capsules: "120", badge: null, supplementId: 30 },
    { rank: 6, name: "Liquid PS", brand: "BrainTonic", price: "$85.90", rating: 3.9, reviews: 198, dosage: "50mg/ml", capsules: "60ml", badge: null, supplementId: 30 },
    { rank: 7, name: "PS + Ginkgo", brand: "MemoryBlend", price: "$69.90", rating: 3.8, reviews: 167, dosage: "100mg + 60mg", capsules: "60", badge: null, supplementId: 30 },
    { rank: 8, name: "Pure PS", brand: "NeuroPure", price: "$59.90", rating: 3.7, reviews: 134, dosage: "100mg", capsules: "90", badge: null, supplementId: 30 },
    { rank: 9, name: "PS Capsules", brand: "BrainSupport", price: "$54.90", rating: 3.6, reviews: 112, dosage: "75mg", capsules: "120", badge: null, supplementId: 30 },
    { rank: 10, name: "Basic PS", brand: "SimpleBrain", price: "$48.90", rating: 3.5, reviews: 89, dosage: "50mg", capsules: "60", badge: null, supplementId: 30 },

    // ===== ALPHA-LIPOIC ACID PRODUCTS =====
    { rank: 1, name: "R-Alpha Lipoic Acid", brand: "AntioxidantPro", price: "$67.90", rating: 4.4, reviews: 512, dosage: "100mg", capsules: "60", badge: "R-Form", supplementId: 27 },
    { rank: 2, name: "Time-Release ALA", brand: "ExtendedAntioxidant", price: "$52.90", rating: 4.3, reviews: 445, dosage: "300mg", capsules: "90", badge: "12-Hour Release", supplementId: 27 },
    { rank: 3, name: "ALA + Acetyl-L-Carnitine", brand: "MetabolicMax", price: "$59.90", rating: 4.2, reviews: 389, dosage: "200mg + 500mg", capsules: "120", badge: "Energy Support", supplementId: 27 },
    { rank: 4, name: "Pure Alpha Lipoic Acid", brand: "CellularDefense", price: "$41.90", rating: 4.1, reviews: 334, dosage: "300mg", capsules: "60", badge: "Pharmaceutical Grade", supplementId: 27 },
    { rank: 5, name: "Stabilized ALA", brand: "BioStable", price: "$48.90", rating: 4.0, reviews: 289, dosage: "250mg", capsules: "90", badge: null, supplementId: 27 },
    { rank: 6, name: "ALA + Biotin", brand: "MetabolicSupport", price: "$44.90", rating: 3.9, reviews: 245, dosage: "200mg + 300mcg", capsules: "120", badge: null, supplementId: 27 },
    { rank: 7, name: "Liquid ALA", brand: "AntioxidantTonic", price: "$56.90", rating: 3.8, reviews: 198, dosage: "100mg/ml", capsules: "60ml", badge: null, supplementId: 27 },
    { rank: 8, name: "ALA Capsules", brand: "EnergyMax", price: "$36.90", rating: 3.7, reviews: 167, dosage: "200mg", capsules: "90", badge: null, supplementId: 27 },
    { rank: 9, name: "Basic ALA", brand: "SimpleAntioxidant", price: "$32.90", rating: 3.6, reviews: 134, dosage: "150mg", capsules: "120", badge: null, supplementId: 27 },
    { rank: 10, name: "Economy ALA", brand: "BudgetAntioxidant", price: "$28.90", rating: 3.5, reviews: 98, dosage: "100mg", capsules: "60", badge: null, supplementId: 27 },

    // ===== FOLIC ACID PRODUCTS =====
    { rank: 1, name: "Methylfolate", brand: "BioActive", price: "$32.90", rating: 4.6, reviews: 723, dosage: "800mcg", capsules: "90", badge: "Active Form", supplementId: 25 },
    { rank: 2, name: "Folic Acid + B12", brand: "BloodSupport", price: "$24.90", rating: 4.5, reviews: 634, dosage: "400mcg + 500mcg", capsules: "120", badge: "Blood Health", supplementId: 25 },
    { rank: 3, name: "Prenatal Folate", brand: "MaternalCare", price: "$28.90", rating: 4.4, reviews: 567, dosage: "600mcg", capsules: "90", badge: "Prenatal", supplementId: 25 },
    { rank: 4, name: "High Potency Folate", brand: "VitalB", price: "$26.90", rating: 4.3, reviews: 489, dosage: "1000mcg", capsules: "60", badge: null, supplementId: 25 },
    { rank: 5, name: "Natural Folate", brand: "FoodBased", price: "$36.90", rating: 4.2, reviews: 423, dosage: "400mcg", capsules: "120", badge: "Food-Based", supplementId: 25 },
    { rank: 6, name: "Liquid Folate", brand: "LiquidVitamins", price: "$22.90", rating: 4.1, reviews: 378, dosage: "400mcg/drop", capsules: "60ml", badge: null, supplementId: 25 },
    { rank: 7, name: "Folate Complex", brand: "B-Complex", price: "$29.90", rating: 4.0, reviews: 334, dosage: "600mcg", capsules: "90", badge: null, supplementId: 25 },
    { rank: 8, name: "Pure Folic Acid", brand: "PureVitamins", price: "$18.90", rating: 3.9, reviews: 289, dosage: "400mcg", capsules: "120", badge: null, supplementId: 25 },
    { rank: 9, name: "Folic Acid Tablets", brand: "BasicVitamins", price: "$16.90", rating: 3.8, reviews: 245, dosage: "400mcg", capsules: "100", badge: null, supplementId: 25 },
    { rank: 10, name: "Economy Folate", brand: "BudgetVitamins", price: "$14.90", rating: 3.7, reviews: 198, dosage: "400mcg", capsules: "60", badge: null, supplementId: 25 },

    // ===== VITAMIN E PRODUCTS =====
    { rank: 1, name: "Mixed Tocopherols E", brand: "AntioxidantMax", price: "$42.90", rating: 4.3, reviews: 567, dosage: "400 IU", capsules: "90", badge: "Natural Mixed", supplementId: 24 },
    { rank: 2, name: "Natural Vitamin E", brand: "PureAntioxidant", price: "$35.90", rating: 4.2, reviews: 489, dosage: "200 IU", capsules: "120", badge: "d-Alpha", supplementId: 24 },
    { rank: 3, name: "High Potency Vitamin E", brand: "VitaMax", price: "$48.90", rating: 4.1, reviews: 423, dosage: "800 IU", capsules: "60", badge: "High Potency", supplementId: 24 },
    { rank: 4, name: "Vitamin E + Selenium", brand: "CellProtect", price: "$39.90", rating: 4.0, reviews: 378, dosage: "200 IU + 50mcg", capsules: "90", badge: "Cellular Defense", supplementId: 24 },
    { rank: 5, name: "Liquid Vitamin E", brand: "LiquidHealth", price: "$32.90", rating: 3.9, reviews: 334, dosage: "100 IU/drop", capsules: "60ml", badge: null, supplementId: 24 },
    { rank: 6, name: "Sunflower Vitamin E", brand: "PlantBased", price: "$44.90", rating: 3.8, reviews: 289, dosage: "300 IU", capsules: "90", badge: "Plant-Based", supplementId: 24 },
    { rank: 7, name: "Vitamin E Complex", brand: "CompleteE", price: "$37.90", rating: 3.7, reviews: 245, dosage: "400 IU", capsules: "120", badge: null, supplementId: 24 },
    { rank: 8, name: "Pure Vitamin E", brand: "SimpleVitamins", price: "$25.90", rating: 3.6, reviews: 198, dosage: "200 IU", capsules: "100", badge: null, supplementId: 24 },
    { rank: 9, name: "Basic Vitamin E", brand: "EssentialVitamins", price: "$22.90", rating: 3.5, reviews: 167, dosage: "200 IU", capsules: "60", badge: null, supplementId: 24 },
    { rank: 10, name: "Economy Vitamin E", brand: "BudgetVitamins", price: "$19.90", rating: 3.4, reviews: 134, dosage: "100 IU", capsules: "90", badge: null, supplementId: 24 },

    // ===== GREEN TEA EXTRACT PRODUCTS =====
    { rank: 1, name: "EGCG Green Tea", brand: "AntioxidantPower", price: "$45.90", rating: 4.5, reviews: 834, dosage: "500mg", capsules: "90", badge: "50% EGCG", supplementId: 23 },
    { rank: 2, name: "Decaffeinated Green Tea", brand: "CalmEnergy", price: "$31.90", rating: 4.4, reviews: 723, dosage: "400mg", capsules: "120", badge: "Caffeine-Free", supplementId: 23 },
    { rank: 3, name: "Organic Green Tea Extract", brand: "PureNature", price: "$38.90", rating: 4.3, reviews: 612, dosage: "350mg", capsules: "60", badge: "Organic", supplementId: 23 },
    { rank: 4, name: "Green Tea + Resveratrol", brand: "LongevityMax", price: "$52.90", rating: 4.2, reviews: 545, dosage: "300mg + 100mg", capsules: "90", badge: "Anti-Aging", supplementId: 23 },
    { rank: 5, name: "Standardized Green Tea", brand: "HerbalStandard", price: "$29.90", rating: 4.1, reviews: 478, dosage: "250mg", capsules: "120", badge: null, supplementId: 23 },
    { rank: 6, name: "Green Tea Complex", brand: "MetabolicSupport", price: "$34.90", rating: 4.0, reviews: 423, dosage: "400mg", capsules: "60", badge: null, supplementId: 23 },
    { rank: 7, name: "Liquid Green Tea", brand: "HerbalTonic", price: "$42.90", rating: 3.9, reviews: 367, dosage: "200mg/ml", capsules: "60ml", badge: null, supplementId: 23 },
    { rank: 8, name: "Green Tea Capsules", brand: "NaturalHealth", price: "$26.90", rating: 3.8, reviews: 312, dosage: "300mg", capsules: "90", badge: null, supplementId: 23 },
    { rank: 9, name: "Basic Green Tea", brand: "SimpleHerbs", price: "$22.90", rating: 3.7, reviews: 256, dosage: "200mg", capsules: "120", badge: null, supplementId: 23 },
    { rank: 10, name: "Economy Green Tea", brand: "BudgetHerbs", price: "$18.90", rating: 3.6, reviews: 198, dosage: "150mg", capsules: "60", badge: null, supplementId: 23 },

    // ===== GLUCOSAMINE CHONDROITIN PRODUCTS =====
    { rank: 1, name: "Triple Strength Joint", brand: "JointMax", price: "$67.90", rating: 4.4, reviews: 923, dosage: "1500mg + 1200mg", capsules: "120", badge: "Maximum Strength", supplementId: 22 },
    { rank: 2, name: "Glucosamine + MSM", brand: "FlexibilityPro", price: "$52.90", rating: 4.3, reviews: 812, dosage: "1000mg + 800mg + 500mg", capsules: "90", badge: "Triple Action", supplementId: 22 },
    { rank: 3, name: "Shellfish-Free Glucosamine", brand: "VeganJoint", price: "$59.90", rating: 4.2, reviews: 734, dosage: "750mg + 600mg", capsules: "120", badge: "Vegan", supplementId: 22 },
    { rank: 4, name: "Liquid Joint Support", brand: "FlexTonic", price: "$48.90", rating: 4.1, reviews: 656, dosage: "1000mg + 800mg/serving", capsules: "500ml", badge: "Liquid", supplementId: 22 },
    { rank: 5, name: "Advanced Joint Formula", brand: "MobilityMax", price: "$74.90", rating: 4.0, reviews: 578, dosage: "1200mg + 900mg + HA", capsules: "60", badge: "with Hyaluronic Acid", supplementId: 22 },
    { rank: 6, name: "Joint Health Complex", brand: "ActiveLife", price: "$45.90", rating: 3.9, reviews: 512, dosage: "800mg + 600mg", capsules: "90", badge: null, supplementId: 22 },
    { rank: 7, name: "Pure Joint Support", brand: "NaturalMobility", price: "$41.90", rating: 3.8, reviews: 445, dosage: "750mg + 600mg", capsules: "120", badge: null, supplementId: 22 },
    { rank: 8, name: "Glucosamine Chondroitin", brand: "BasicJoint", price: "$36.90", rating: 3.7, reviews: 389, dosage: "500mg + 400mg", capsules: "90", badge: null, supplementId: 22 },
    { rank: 9, name: "Joint Essentials", brand: "SimpleJoint", price: "$32.90", rating: 3.6, reviews: 334, dosage: "600mg + 500mg", capsules: "60", badge: null, supplementId: 22 },
    { rank: 10, name: "Economy Joint Support", brand: "BudgetJoint", price: "$28.90", rating: 3.5, reviews: 278, dosage: "400mg + 300mg", capsules: "90", badge: null, supplementId: 22 },

    // ===== VITAMIN K2 PRODUCTS =====
    { rank: 1, name: "K2 MK-7", brand: "BoneHealth", price: "$48.90", rating: 4.5, reviews: 634, dosage: "100mcg", capsules: "60", badge: "MK-7 Form", supplementId: 20 },
    { rank: 2, name: "Vitamin K2 + D3", brand: "CalciumBalance", price: "$42.90", rating: 4.4, reviews: 567, dosage: "120mcg + 5000 IU", capsules: "90", badge: "Bone Support", supplementId: 20 },
    { rank: 3, name: "High Potency K2", brand: "VitaMax", price: "$52.90", rating: 4.3, reviews: 489, dosage: "200mcg", capsules: "60", badge: "High Potency", supplementId: 20 },
    { rank: 4, name: "Natural K2", brand: "FermentedHealth", price: "$36.90", rating: 4.2, reviews: 423, dosage: "100mcg", capsules: "120", badge: "Fermented", supplementId: 20 },
    { rank: 5, name: "K2 Complex", brand: "BoneSupport", price: "$39.90", rating: 4.1, reviews: 378, dosage: "150mcg", capsules: "90", badge: null, supplementId: 20 },
    { rank: 6, name: "Liquid K2", brand: "LiquidBone", price: "$45.90", rating: 4.0, reviews: 334, dosage: "50mcg/drop", capsules: "30ml", badge: null, supplementId: 20 },
    { rank: 7, name: "Menaquinone K2", brand: "PureBone", price: "$41.90", rating: 3.9, reviews: 289, dosage: "100mcg", capsules: "60", badge: null, supplementId: 20 },
    { rank: 8, name: "K2 Capsules", brand: "VitaminK", price: "$32.90", rating: 3.8, reviews: 245, dosage: "75mcg", capsules: "90", badge: null, supplementId: 20 },
    { rank: 9, name: "Basic K2", brand: "SimpleVitamins", price: "$28.90", rating: 3.7, reviews: 198, dosage: "50mcg", capsules: "120", badge: null, supplementId: 20 },
    { rank: 10, name: "Economy K2", brand: "BudgetVitamins", price: "$24.90", rating: 3.6, reviews: 167, dosage: "45mcg", capsules: "60", badge: null, supplementId: 20 },

    // ===== BIOTIN PRODUCTS =====
    { rank: 1, name: "High Potency Biotin", brand: "HairMax", price: "$28.90", rating: 4.7, reviews: 1456, dosage: "10000mcg", capsules: "120", badge: "Maximum Strength", supplementId: 19 },
    { rank: 2, name: "Biotin + Collagen", brand: "BeautySupport", price: "$35.90", rating: 4.6, reviews: 1234, dosage: "5000mcg + 500mg", capsules: "90", badge: "Beauty Formula", supplementId: 19 },
    { rank: 3, name: "Natural Biotin", brand: "HairSkin", price: "$22.90", rating: 4.5, reviews: 1089, dosage: "5000mcg", capsules: "120", badge: "Natural", supplementId: 19 },
    { rank: 4, name: "Biotin Gummies", brand: "TastyBeauty", price: "$24.90", rating: 4.4, reviews: 967, dosage: "2500mcg", capsules: "60 gummies", badge: "Great Taste", supplementId: 19 },
    { rank: 5, name: "Biotin + B-Complex", brand: "VitaminB", price: "$26.90", rating: 4.3, reviews: 834, dosage: "1000mcg + complex", capsules: "90", badge: null, supplementId: 19 },
    { rank: 6, name: "Liquid Biotin", brand: "LiquidBeauty", price: "$19.90", rating: 4.2, reviews: 723, dosage: "1000mcg/drop", capsules: "60ml", badge: null, supplementId: 19 },
    { rank: 7, name: "Biotin + Keratin", brand: "HairStrength", price: "$32.90", rating: 4.1, reviews: 612, dosage: "3000mcg + 250mg", capsules: "60", badge: null, supplementId: 19 },
    { rank: 8, name: "Pure Biotin", brand: "SimpleBeauty", price: "$18.90", rating: 4.0, reviews: 545, dosage: "1000mcg", capsules: "120", badge: null, supplementId: 19 },
    { rank: 9, name: "Biotin Capsules", brand: "BasicBeauty", price: "$16.90", rating: 3.9, reviews: 478, dosage: "800mcg", capsules: "100", badge: null, supplementId: 19 },
    { rank: 10, name: "Economy Biotin", brand: "BudgetBeauty", price: "$14.90", rating: 3.8, reviews: 389, dosage: "500mcg", capsules: "60", badge: null, supplementId: 19 },

    // ===== RHODIOLA ROSEA PRODUCTS =====
    { rank: 1, name: "Rhodiola 3% Extract", brand: "AdaptogenMax", price: "$52.90", rating: 4.4, reviews: 612, dosage: "500mg", capsules: "90", badge: "3% Rosavins", supplementId: 17 },
    { rank: 2, name: "Organic Rhodiola", brand: "PureAdaptogen", price: "$45.90", rating: 4.3, reviews: 545, dosage: "400mg", capsules: "120", badge: "Organic", supplementId: 17 },
    { rank: 3, name: "Rhodiola + Ashwagandha", brand: "StressShield", price: "$48.90", rating: 4.2, reviews: 489, dosage: "300mg + 300mg", capsules: "60", badge: "Stress Support", supplementId: 17 },
    { rank: 4, name: "High Potency Rhodiola", brand: "EnergyMax", price: "$56.90", rating: 4.1, reviews: 423, dosage: "600mg", capsules: "90", badge: "High Potency", supplementId: 17 },
    { rank: 5, name: "Rhodiola Complex", brand: "AdaptogenBlend", price: "$42.90", rating: 4.0, reviews: 378, dosage: "350mg", capsules: "60", badge: null, supplementId: 17 },
    { rank: 6, name: "Liquid Rhodiola", brand: "HerbalTonic", price: "$49.90", rating: 3.9, reviews: 334, dosage: "250mg/ml", capsules: "60ml", badge: null, supplementId: 17 },
    { rank: 7, name: "Rhodiola Root", brand: "TraditionalHerbs", price: "$36.90", rating: 3.8, reviews: 289, dosage: "450mg", capsules: "90", badge: null, supplementId: 17 },
    { rank: 8, name: "Standardized Rhodiola", brand: "HerbalStandard", price: "$39.90", rating: 3.7, reviews: 245, dosage: "300mg", capsules: "120", badge: null, supplementId: 17 },
    { rank: 9, name: "Pure Rhodiola", brand: "SimpleAdaptogen", price: "$32.90", rating: 3.6, reviews: 198, dosage: "250mg", capsules: "60", badge: null, supplementId: 17 },
    { rank: 10, name: "Economy Rhodiola", brand: "BudgetAdaptogen", price: "$28.90", rating: 3.5, reviews: 167, dosage: "200mg", capsules: "90", badge: null, supplementId: 17 },

    // ===== COENZYME Q10 PRODUCTS =====
    { rank: 1, name: "Ubiquinol CoQ10", brand: "HeartMax", price: "$89.90", rating: 4.6, reviews: 834, dosage: "100mg", capsules: "60", badge: "Active Form", supplementId: 15 },
    { rank: 2, name: "High Absorption CoQ10", brand: "CardioSupport", price: "$79.90", rating: 4.5, reviews: 723, dosage: "200mg", capsules: "90", badge: "Enhanced Absorption", supplementId: 15 },
    { rank: 3, name: "Fermented CoQ10", brand: "PureEnergy", price: "$67.90", rating: 4.4, reviews: 612, dosage: "100mg", capsules: "120", badge: "Fermented", supplementId: 15 },
    { rank: 4, name: "CoQ10 + PQQ", brand: "MitochondrialMax", price: "$94.90", rating: 4.3, reviews: 545, dosage: "100mg + 10mg", capsules: "60", badge: "Cellular Energy", supplementId: 15 },
    { rank: 5, name: "Liquid CoQ10", brand: "LiquidHeart", price: "$72.90", rating: 4.2, reviews: 489, dosage: "50mg/ml", capsules: "60ml", badge: null, supplementId: 15 },
    { rank: 6, name: "CoQ10 + Vitamin E", brand: "AntioxidantHeart", price: "$65.90", rating: 4.1, reviews: 423, dosage: "100mg + 200 IU", capsules: "90", badge: null, supplementId: 15 },
    { rank: 7, name: "Natural CoQ10", brand: "HeartHealth", price: "$58.90", rating: 4.0, reviews: 378, dosage: "100mg", capsules: "60", badge: null, supplementId: 15 },
    { rank: 8, name: "CoQ10 Capsules", brand: "CardioBasic", price: "$52.90", rating: 3.9, reviews: 334, dosage: "60mg", capsules: "120", badge: null, supplementId: 15 },
    { rank: 9, name: "Basic CoQ10", brand: "SimpleHeart", price: "$46.90", rating: 3.8, reviews: 289, dosage: "50mg", capsules: "90", badge: null, supplementId: 15 },
    { rank: 10, name: "Economy CoQ10", brand: "BudgetHeart", price: "$39.90", rating: 3.7, reviews: 245, dosage: "30mg", capsules: "60", badge: null, supplementId: 15 },

    // ===== WHEY PROTEIN PRODUCTS =====
    { rank: 1, name: "Whey Isolate Pro", brand: "MuscleTech", price: "$149.90", rating: 4.8, reviews: 2567, dosage: "25g protein", capsules: "2kg", badge: "Isolate", supplementId: 12 },
    { rank: 2, name: "Grass-Fed Whey", brand: "CleanProtein", price: "$129.90", rating: 4.7, reviews: 2234, dosage: "24g protein", capsules: "1.8kg", badge: "Grass-Fed", supplementId: 12 },
    { rank: 3, name: "Chocolate Whey", brand: "TastyGains", price: "$119.90", rating: 4.6, reviews: 1987, dosage: "22g protein", capsules: "2.3kg", badge: "Best Taste", supplementId: 12 },
    { rank: 4, name: "Vanilla Whey Protein", brand: "PureGains", price: "$109.90", rating: 4.5, reviews: 1743, dosage: "23g protein", capsules: "2kg", badge: null, supplementId: 12 },
    { rank: 5, name: "Unflavored Whey", brand: "NaturalProtein", price: "$99.90", rating: 4.4, reviews: 1534, dosage: "24g protein", capsules: "1.5kg", badge: null, supplementId: 12 },
    { rank: 6, name: "Hydrolyzed Whey", brand: "FastAbsorb", price: "$169.90", rating: 4.3, reviews: 1345, dosage: "25g protein", capsules: "1.8kg", badge: "Fast Absorbing", supplementId: 12 },
    { rank: 7, name: "Strawberry Whey", brand: "FlavorMax", price: "$114.90", rating: 4.2, reviews: 1198, dosage: "21g protein", capsules: "2kg", badge: null, supplementId: 12 },
    { rank: 8, name: "Concentrate Whey", brand: "BasicGains", price: "$89.90", rating: 4.1, reviews: 1067, dosage: "20g protein", capsules: "2.2kg", badge: null, supplementId: 12 },
    { rank: 9, name: "Budget Whey", brand: "SimpleProtein", price: "$79.90", rating: 4.0, reviews: 923, dosage: "18g protein", capsules: "1.8kg", badge: null, supplementId: 12 },
    { rank: 10, name: "Economy Whey", brand: "BudgetProtein", price: "$69.90", rating: 3.9, reviews: 812, dosage: "16g protein", capsules: "1.5kg", badge: null, supplementId: 12 },

    // ===== CREATINE PRODUCTS =====
    { rank: 1, name: "Creatine Monohydrate", brand: "StrengthMax", price: "$54.90", rating: 4.9, reviews: 1678, dosage: "5g", capsules: "500g", badge: "Pure Monohydrate", supplementId: 11 },
    { rank: 2, name: "Micronized Creatine", brand: "PowerLift", price: "$49.90", rating: 4.8, reviews: 1456, dosage: "5g", capsules: "600g", badge: "Micronized", supplementId: 11 },
    { rank: 3, name: "Creatine HCL", brand: "AbsorbMax", price: "$67.90", rating: 4.7, reviews: 1234, dosage: "3g", capsules: "300g", badge: "Better Absorption", supplementId: 11 },
    { rank: 4, name: "Creapure Creatine", brand: "GermanQuality", price: "$62.90", rating: 4.6, reviews: 1089, dosage: "5g", capsules: "500g", badge: "Creapure", supplementId: 11 },
    { rank: 5, name: "Buffered Creatine", brand: "StablePower", price: "$58.90", rating: 4.5, reviews: 967, dosage: "4g", capsules: "400g", badge: "pH Buffered", supplementId: 11 },
    { rank: 6, name: "Creatine + Beta-Alanine", brand: "WorkoutMax", price: "$72.90", rating: 4.4, reviews: 834, dosage: "5g + 2g", capsules: "600g", badge: "Pre-Workout", supplementId: 11 },
    { rank: 7, name: "Liquid Creatine", brand: "LiquidPower", price: "$44.90", rating: 4.3, reviews: 723, dosage: "2.5g/serving", capsules: "500ml", badge: null, supplementId: 11 },
    { rank: 8, name: "Creatine Capsules", brand: "ConvenientPower", price: "$39.90", rating: 4.2, reviews: 612, dosage: "750mg", capsules: "200", badge: null, supplementId: 11 },
    { rank: 9, name: "Basic Creatine", brand: "SimplePower", price: "$34.90", rating: 4.1, reviews: 545, dosage: "5g", capsules: "300g", badge: null, supplementId: 11 },
    { rank: 10, name: "Economy Creatine", brand: "BudgetPower", price: "$29.90", rating: 4.0, reviews: 478, dosage: "5g", capsules: "250g", badge: null, supplementId: 11 },

    // ===== PROBIOTICS PRODUCTS =====
    { rank: 1, name: "50 Billion CFU Probiotics", brand: "GutMax", price: "$79.90", rating: 4.6, reviews: 923, dosage: "50 billion CFU", capsules: "60", badge: "Maximum Potency", supplementId: 10 },
    { rank: 2, name: "Daily Probiotics", brand: "DigestiveHealth", price: "$67.90", rating: 4.5, reviews: 812, dosage: "25 billion CFU", capsules: "90", badge: "Daily Support", supplementId: 10 },
    { rank: 3, name: "Women's Probiotics", brand: "FemaleHealth", price: "$72.90", rating: 4.4, reviews: 734, dosage: "20 billion CFU", capsules: "60", badge: "Women's Formula", supplementId: 10 },
    { rank: 4, name: "Shelf-Stable Probiotics", brand: "StableGut", price: "$59.90", rating: 4.3, reviews: 656, dosage: "15 billion CFU", capsules: "90", badge: "No Refrigeration", supplementId: 10 },
    { rank: 5, name: "Acidophilus Complex", brand: "BeneficialBacteria", price: "$52.90", rating: 4.2, reviews: 578, dosage: "10 billion CFU", capsules: "120", badge: null, supplementId: 10 },
    { rank: 6, name: "Probiotic + Prebiotic", brand: "GutBalance", price: "$64.90", rating: 4.1, reviews: 512, dosage: "30 billion CFU + 500mg", capsules: "60", badge: "Synbiotic", supplementId: 10 },
    { rank: 7, name: "Liquid Probiotics", brand: "LiquidGut", price: "$56.90", rating: 4.0, reviews: 445, dosage: "5 billion CFU/ml", capsules: "500ml", badge: null, supplementId: 10 },
    { rank: 8, name: "Multi-Strain Probiotics", brand: "DiverseGut", price: "$48.90", rating: 3.9, reviews: 389, dosage: "12 billion CFU", capsules: "90", badge: null, supplementId: 10 },
    { rank: 9, name: "Basic Probiotics", brand: "SimpleGut", price: "$42.90", rating: 3.8, reviews: 334, dosage: "8 billion CFU", capsules: "60", badge: null, supplementId: 10 },
    { rank: 10, name: "Economy Probiotics", brand: "BudgetGut", price: "$36.90", rating: 3.7, reviews: 278, dosage: "5 billion CFU", capsules: "90", badge: null, supplementId: 10 },

    // ===== COLLAGEN PRODUCTS =====
    { rank: 1, name: "Hydrolyzed Collagen", brand: "BeautyMax", price: "$99.90", rating: 4.7, reviews: 1234, dosage: "10g", capsules: "450g", badge: "Hydrolyzed", supplementId: 9 },
    { rank: 2, name: "Marine Collagen", brand: "OceanBeauty", price: "$89.90", rating: 4.6, reviews: 1089, dosage: "5g", capsules: "300g", badge: "Marine Source", supplementId: 9 },
    { rank: 3, name: "Collagen + Biotin", brand: "SkinHairNails", price: "$79.90", rating: 4.5, reviews: 967, dosage: "8g + 1000mcg", capsules: "400g", badge: "Beauty Formula", supplementId: 9 },
    { rank: 4, name: "Grass-Fed Collagen", brand: "PureBeauty", price: "$94.90", rating: 4.4, reviews: 834, dosage: "12g", capsules: "500g", badge: "Grass-Fed", supplementId: 9 },
    { rank: 5, name: "Multi-Collagen Complex", brand: "CompleteBeauty", price: "$109.90", rating: 4.3, reviews: 723, dosage: "10g", capsules: "450g", badge: "5 Types", supplementId: 9 },
    { rank: 6, name: "Liquid Collagen", brand: "LiquidBeauty", price: "$67.90", rating: 4.2, reviews: 612, dosage: "5g/serving", capsules: "500ml", badge: null, supplementId: 9 },
    { rank: 7, name: "Collagen Capsules", brand: "ConvenientBeauty", price: "$52.90", rating: 4.1, reviews: 545, dosage: "500mg", capsules: "180", badge: null, supplementId: 9 },
    { rank: 8, name: "Unflavored Collagen", brand: "NaturalBeauty", price: "$74.90", rating: 4.0, reviews: 478, dosage: "10g", capsules: "350g", badge: null, supplementId: 9 },
    { rank: 9, name: "Basic Collagen", brand: "SimpleBeauty", price: "$59.90", rating: 3.9, reviews: 423, dosage: "8g", capsules: "300g", badge: null, supplementId: 9 },
    { rank: 10, name: "Economy Collagen", brand: "BudgetBeauty", price: "$49.90", rating: 3.8, reviews: 367, dosage: "6g", capsules: "250g", badge: null, supplementId: 9 },

    // ===== CALCIUM PRODUCTS =====
    { rank: 1, name: "Calcium + D3 + K2", brand: "BoneComplete", price: "$42.90", rating: 4.5, reviews: 723, dosage: "500mg + 1000 IU + 50mcg", capsules: "120", badge: "Complete Formula", supplementId: 8 },
    { rank: 2, name: "Calcium Citrate", brand: "AbsorbMax", price: "$31.90", rating: 4.4, reviews: 634, dosage: "630mg", capsules: "90", badge: "Better Absorption", supplementId: 8 },
    { rank: 3, name: "Calcium + Magnesium", brand: "BoneBalance", price: "$36.90", rating: 4.3, reviews: 567, dosage: "500mg + 250mg", capsules: "120", badge: "Balanced Ratio", supplementId: 8 },
    { rank: 4, name: "Coral Calcium", brand: "OceanMinerals", price: "$48.90", rating: 4.2, reviews: 489, dosage: "1000mg", capsules: "90", badge: "Marine Source", supplementId: 8 },
    { rank: 5, name: "Liquid Calcium", brand: "LiquidBone", price: "$28.90", rating: 4.1, reviews: 423, dosage: "600mg/serving", capsules: "500ml", badge: null, supplementId: 8 },
    { rank: 6, name: "Calcium Carbonate", brand: "TraditionalBone", price: "$24.90", rating: 4.0, reviews: 378, dosage: "1200mg", capsules: "100", badge: null, supplementId: 8 },
    { rank: 7, name: "Chewable Calcium", brand: "TastyBone", price: "$26.90", rating: 3.9, reviews: 334, dosage: "500mg", capsules: "60 tablets", badge: "Cherry Flavor", supplementId: 8 },
    { rank: 8, name: "Calcium Complex", brand: "BoneSupport", price: "$33.90", rating: 3.8, reviews: 289, dosage: "600mg", capsules: "90", badge: null, supplementId: 8 },
    { rank: 9, name: "Basic Calcium", brand: "SimpleBone", price: "$21.90", rating: 3.7, reviews: 245, dosage: "500mg", capsules: "120", badge: null, supplementId: 8 },
    { rank: 10, name: "Economy Calcium", brand: "BudgetBone", price: "$18.90", rating: 3.6, reviews: 198, dosage: "400mg", capsules: "100", badge: null, supplementId: 8 },

    // ===== IRON PRODUCTS =====
    { rank: 1, name: "Chelated Iron", brand: "BloodMax", price: "$32.90", rating: 4.4, reviews: 723, dosage: "28mg", capsules: "90", badge: "Gentle on Stomach", supplementId: 7 },
    { rank: 2, name: "Iron + Vitamin C", brand: "AbsorptionMax", price: "$26.90", rating: 4.3, reviews: 634, dosage: "18mg + 100mg", capsules: "120", badge: "Enhanced Absorption", supplementId: 7 },
    { rank: 3, name: "Heme Iron", brand: "NaturalBlood", price: "$42.90", rating: 4.2, reviews: 567, dosage: "11mg", capsules: "60", badge: "Animal Source", supplementId: 7 },
    { rank: 4, name: "Liquid Iron", brand: "LiquidBlood", price: "$24.90", rating: 4.1, reviews: 489, dosage: "15mg/serving", capsules: "240ml", badge: "Great Taste", supplementId: 7 },
    { rank: 5, name: "Iron Bisglycinate", brand: "GentleIron", price: "$28.90", rating: 4.0, reviews: 423, dosage: "25mg", capsules: "90", badge: null, supplementId: 7 },
    { rank: 6, name: "Women's Iron", brand: "FemaleHealth", price: "$29.90", rating: 3.9, reviews: 378, dosage: "18mg", capsules: "120", badge: "Women's Formula", supplementId: 7 },
    { rank: 7, name: "Iron + B-Complex", brand: "EnergyBlood", price: "$34.90", rating: 3.8, reviews: 334, dosage: "14mg + complex", capsules: "90", badge: null, supplementId: 7 },
    { rank: 8, name: "Carbonyl Iron", brand: "PureBlood", price: "$22.90", rating: 3.7, reviews: 289, dosage: "18mg", capsules: "100", badge: null, supplementId: 7 },
    { rank: 9, name: "Basic Iron", brand: "SimpleBlood", price: "$19.90", rating: 3.6, reviews: 245, dosage: "14mg", capsules: "90", badge: null, supplementId: 7 },
    { rank: 10, name: "Economy Iron", brand: "BudgetBlood", price: "$16.90", rating: 3.5, reviews: 198, dosage: "10mg", capsules: "120", badge: null, supplementId: 7 },

    // ===== VITAMIN B12 PRODUCTS =====
    { rank: 1, name: "Methylcobalamin B12", brand: "EnergyMax", price: "$28.90", rating: 4.6, reviews: 834, dosage: "1000mcg", capsules: "90", badge: "Active Form", supplementId: 6 },
    { rank: 2, name: "Sublingual B12", brand: "FastAbsorb", price: "$24.90", rating: 4.5, reviews: 756, dosage: "2500mcg", capsules: "60 tablets", badge: "Under Tongue", supplementId: 6 },
    { rank: 3, name: "B12 + Folate", brand: "BloodSupport", price: "$26.90", rating: 4.4, reviews: 678, dosage: "1000mcg + 400mcg", capsules: "120", badge: "Blood Health", supplementId: 6 },
    { rank: 4, name: "Liquid B12", brand: "LiquidEnergy", price: "$22.90", rating: 4.3, reviews: 612, dosage: "1000mcg/drop", capsules: "60ml", badge: "Great Taste", supplementId: 6 },
    { rank: 5, name: "High Potency B12", brand: "VitaMax", price: "$32.90", rating: 4.2, reviews: 545, dosage: "5000mcg", capsules: "60", badge: "High Potency", supplementId: 6 },
    { rank: 6, name: "B12 Complex", brand: "B-Vitamins", price: "$31.90", rating: 4.1, reviews: 489, dosage: "1500mcg + complex", capsules: "90", badge: null, supplementId: 6 },
    { rank: 7, name: "Cyanocobalamin B12", brand: "TraditionalB", price: "$19.90", rating: 4.0, reviews: 423, dosage: "1000mcg", capsules: "120", badge: null, supplementId: 6 },
    { rank: 8, name: "B12 Gummies", brand: "TastyEnergy", price: "$21.90", rating: 3.9, reviews: 378, dosage: "500mcg", capsules: "60 gummies", badge: "Cherry Flavor", supplementId: 6 },
    { rank: 9, name: "Basic B12", brand: "SimpleEnergy", price: "$16.90", rating: 3.8, reviews: 334, dosage: "500mcg", capsules: "100", badge: null, supplementId: 6 },
    { rank: 10, name: "Economy B12", brand: "BudgetEnergy", price: "$14.90", rating: 3.7, reviews: 289, dosage: "250mcg", capsules: "120", badge: null, supplementId: 6 },

    // ===== MAGNESIUM PRODUCTS =====
    { rank: 1, name: "Magnesium Glycinate", brand: "SleepMax", price: "$36.90", rating: 4.5, reviews: 967, dosage: "400mg", capsules: "90", badge: "Gentle on Stomach", supplementId: 5 },
    { rank: 2, name: "Magnesium + Calcium", brand: "MineralBalance", price: "$32.90", rating: 4.4, reviews: 834, dosage: "200mg + 400mg", capsules: "120", badge: "Balanced Ratio", supplementId: 5 },
    { rank: 3, name: "Magnesium Citrate", brand: "AbsorbMax", price: "$28.90", rating: 4.3, reviews: 723, dosage: "315mg", capsules: "90", badge: "Better Absorption", supplementId: 5 },
    { rank: 4, name: "Liquid Magnesium", brand: "LiquidMinerals", price: "$24.90", rating: 4.2, reviews: 612, dosage: "250mg/serving", capsules: "480ml", badge: "Great Taste", supplementId: 5 },
    { rank: 5, name: "Magnesium Malate", brand: "EnergySupport", price: "$34.90", rating: 4.1, reviews: 545, dosage: "425mg", capsules: "120", badge: null, supplementId: 5 },
    { rank: 6, name: "Magnesium Complex", brand: "MagMax", price: "$39.90", rating: 4.0, reviews: 489, dosage: "400mg", capsules: "60", badge: "4 Forms", supplementId: 5 },
    { rank: 7, name: "Magnesium Oxide", brand: "TraditionalMinerals", price: "$21.90", rating: 3.9, reviews: 423, dosage: "400mg", capsules: "100", badge: null, supplementId: 5 },
    { rank: 8, name: "Chelated Magnesium", brand: "PureMinerals", price: "$29.90", rating: 3.8, reviews: 378, dosage: "200mg", capsules: "90", badge: null, supplementId: 5 },
    { rank: 9, name: "Basic Magnesium", brand: "SimpleMinerals", price: "$18.90", rating: 3.7, reviews: 334, dosage: "250mg", capsules: "120", badge: null, supplementId: 5 },
    { rank: 10, name: "Economy Magnesium", brand: "BudgetMinerals", price: "$16.90", rating: 3.6, reviews: 289, dosage: "200mg", capsules: "100", badge: null, supplementId: 5 },

    // ===== OMEGA 3 PRODUCTS =====
    { rank: 1, name: "Triple Strength Omega-3", brand: "HeartMax", price: "$67.90", rating: 4.7, reviews: 1234, dosage: "1400mg EPA/DHA", capsules: "60", badge: "Maximum Potency", supplementId: 4 },
    { rank: 2, name: "Wild Alaskan Fish Oil", brand: "PureMarine", price: "$45.90", rating: 4.6, reviews: 1089, dosage: "1000mg EPA/DHA", capsules: "120", badge: "Wild Caught", supplementId: 4 },
    { rank: 3, name: "Molecularly Distilled Omega-3", brand: "UltraPure", price: "$52.90", rating: 4.5, reviews: 967, dosage: "720mg EPA/DHA", capsules: "90", badge: "Ultra Pure", supplementId: 4 },
    { rank: 4, name: "Krill Oil", brand: "AntarcticPure", price: "$59.90", rating: 4.4, reviews: 834, dosage: "500mg", capsules: "60", badge: "Krill Source", supplementId: 4 },
    { rank: 5, name: "Algae Omega-3", brand: "VeganMarine", price: "$62.90", rating: 4.3, reviews: 723, dosage: "450mg EPA/DHA", capsules: "90", badge: "Vegan", supplementId: 4 },
    { rank: 6, name: "Liquid Fish Oil", brand: "LiquidMarine", price: "$39.90", rating: 4.2, reviews: 612, dosage: "1200mg/serving", capsules: "240ml", badge: "Lemon Flavor", supplementId: 4 },
    { rank: 7, name: "Omega-3 + CoQ10", brand: "HeartSupport", price: "$54.90", rating: 4.1, reviews: 545, dosage: "1000mg + 30mg", capsules: "90", badge: null, supplementId: 4 },
    { rank: 8, name: "Concentrated EPA", brand: "BrainMarine", price: "$49.90", rating: 4.0, reviews: 489, dosage: "800mg EPA", capsules: "60", badge: null, supplementId: 4 },
    { rank: 9, name: "Basic Fish Oil", brand: "SimpleMarine", price: "$32.90", rating: 3.9, reviews: 423, dosage: "600mg EPA/DHA", capsules: "120", badge: null, supplementId: 4 },
    { rank: 10, name: "Economy Omega-3", brand: "BudgetMarine", price: "$26.90", rating: 3.8, reviews: 378, dosage: "300mg EPA/DHA", capsules: "100", badge: null, supplementId: 4 }
  ]

  for (const product of newProducts) {
    // Verificar se o produto já existe
    const existingProduct = await prisma.product.findFirst({
      where: {
        name: product.name,
        supplementId: product.supplementId
      }
    })
    
    if (existingProduct) {
      console.log(`Product ${product.name} already exists, skipping...`)
    } else {
      await prisma.product.create({
        data: product
      })
      console.log(`✅ Created product: ${product.name}`)
    }
  }

  // ===== CRIAR GUIAS DE USO =====
  const usageGuides = [
    // Guias existentes
    {
      supplementId: 1, // Zinc
      timing: "Morning or evening",
      timingDesc: "Preferably 1-2 hours before meals for better absorption.",
      withFood: "Empty stomach",
      withFoodDesc: "Avoid taking with dairy, coffee or high-fiber foods that may reduce absorption.",
      timeToEffect: "2-4 weeks",
      effectDesc: "First benefits may be noticed after 2-4 weeks of regular use."
    },
    {
      supplementId: 2, // Vitamin D3
      timing: "Morning with breakfast",
      timingDesc: "Best absorbed when taken with a meal containing healthy fats.",
      withFood: "With food",
      withFoodDesc: "Take with meals that contain healthy fats for optimal absorption.",
      timeToEffect: "4-6 weeks",
      effectDesc: "Benefits may be noticed after 4-6 weeks, with peak blood levels reached in 2-3 months."
    },
    {
      supplementId: 3, // Vitamin C
          timing: "Morning and evening",
          timingDesc: "Split doses throughout the day for better absorption and sustained levels.",
          withFood: "With or without food",
          withFoodDesc: "Can be taken on empty stomach, but with food may reduce potential stomach irritation.",
          timeToEffect: "1-2 weeks",
          effectDesc: "Initial benefits may be noticed within 1-2 weeks of consistent use."
    },
    
    // ===== NOVOS GUIAS DE USO =====
    {
      supplementId: 13, // Ashwagandha
      timing: "Evening with dinner",
      timingDesc: "Best taken in the evening as it may promote relaxation and better sleep.",
      withFood: "With food",
      withFoodDesc: "Take with meals to improve absorption and reduce stomach irritation.",
      timeToEffect: "2-4 weeks",
      effectDesc: "Stress reduction and sleep benefits typically noticed within 2-4 weeks."
    },
    {
      supplementId: 14, // Turmeric Curcumin
      timing: "With meals",
      timingDesc: "Take with main meals to enhance absorption and reduce stomach irritation.",
      withFood: "With fatty foods",
      withFoodDesc: "Best absorbed when taken with meals containing healthy fats or black pepper.",
      timeToEffect: "2-6 weeks",
      effectDesc: "Anti-inflammatory benefits may be noticed after 2-6 weeks of consistent use."
    },
    {
      supplementId: 26, // Lion's Mane
      timing: "Morning or afternoon",
      timingDesc: "Take during active hours when you need cognitive support most.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken on empty stomach, but with food may improve tolerance.",
      timeToEffect: "4-8 weeks",
      effectDesc: "Cognitive benefits typically develop over 4-8 weeks of regular use."
    },
    {
      supplementId: 35, // Quercetin
      timing: "Before meals",
      timingDesc: "Take 15-30 minutes before meals for optimal absorption.",
      withFood: "Empty stomach",
      withFoodDesc: "Best absorbed on empty stomach, but can take with food if stomach upset occurs.",
      timeToEffect: "2-4 weeks",
      effectDesc: "Anti-inflammatory and immune benefits may be noticed after 2-4 weeks."
    },
    {
      supplementId: 18, // Spirulina
      timing: "Morning or afternoon",
      timingDesc: "Take during active hours to benefit from energy-boosting properties.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken any time, but with food may improve taste and tolerance.",
      timeToEffect: "1-3 weeks",
      effectDesc: "Energy and nutritional benefits typically noticed within 1-3 weeks."
    },
    {
      supplementId: 16, // Melatonin
      timing: "30-60 minutes before bed",
      timingDesc: "Take consistently at the same time each night for best sleep regulation.",
      withFood: "Empty stomach",
      withFoodDesc: "Best absorbed on empty stomach. Avoid large meals 2 hours before taking.",
      timeToEffect: "1-3 days",
      effectDesc: "Sleep improvements typically noticed within 1-3 days of use."
    },
    {
      supplementId: 21, // L-Theanine
      timing: "Morning or as needed",
      timingDesc: "Take in morning for daily calm focus, or 30 minutes before stressful situations.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken any time, absorption not significantly affected by food.",
      timeToEffect: "30-60 minutes",
      effectDesc: "Calming effects typically felt within 30-60 minutes of taking."
    },
    {
      supplementId: 28, // Bacopa Monnieri
      timing: "Morning with breakfast",
      timingDesc: "Take consistently each morning for sustained cognitive benefits.",
      withFood: "With fatty foods",
      withFoodDesc: "Best absorbed when taken with meals containing healthy fats.",
      timeToEffect: "6-12 weeks",
      effectDesc: "Memory and cognitive benefits develop gradually over 6-12 weeks."
    },
    {
      supplementId: 29, // Ginkgo Biloba
      timing: "Morning and afternoon",
      timingDesc: "Split doses during active hours for sustained cognitive support.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken with or without food, but consistency is more important.",
      timeToEffect: "4-6 weeks",
      effectDesc: "Cognitive and circulation benefits typically noticed after 4-6 weeks."
    }
  ]

  for (const guide of usageGuides) {
    // Verificar se o guia já existe
    const existingGuide = await prisma.usageGuide.findUnique({
      where: { supplementId: guide.supplementId }
    })
    
    if (existingGuide) {
      console.log(`Usage guide for supplement ID ${guide.supplementId} already exists, skipping...`)
    } else {
      await prisma.usageGuide.create({
        data: guide
      })
      console.log(`✅ Created usage guide for supplement ID: ${guide.supplementId}`)
    }
  }

  // ===== ADICIONAR NOVOS GUIAS DE USO PARA OS 23 SUPLEMENTOS =====
  const additionalUsageGuides = [
    // SAW PALMETTO
    {
      supplementId: 34,
      timing: "With meals",
      timingDesc: "Take with breakfast or dinner for better absorption and reduced stomach irritation.",
      withFood: "With food",
      withFoodDesc: "Best taken with meals to improve tolerance and absorption.",
      timeToEffect: "6-12 weeks",
      effectDesc: "Prostate health benefits typically noticed after 6-12 weeks of consistent use."
    },
    // ELDERBERRY  
    {
      supplementId: 33,
      timing: "Morning or at first signs",
      timingDesc: "Take daily for prevention or at first signs of immune challenge.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken any time, but with food may improve taste.",
      timeToEffect: "3-7 days",
      effectDesc: "Immune support benefits typically noticed within 3-7 days."
    },
    // MILK THISTLE
    {
      supplementId: 32,
      timing: "Between meals",
      timingDesc: "Take 30 minutes before meals for optimal liver support.",
      withFood: "Empty stomach",
      withFoodDesc: "Best absorbed on empty stomach, but can take with food if upset occurs.",
      timeToEffect: "4-8 weeks",
      effectDesc: "Liver support benefits typically noticed after 4-8 weeks."
    },
    // N-ACETYL CYSTEINE
    {
      supplementId: 31,
      timing: "Empty stomach",
      timingDesc: "Take between meals for best absorption and effectiveness.",
      withFood: "Empty stomach",
      withFoodDesc: "Best absorbed away from food, especially protein.",
      timeToEffect: "2-4 weeks",
      effectDesc: "Respiratory and antioxidant benefits typically noticed after 2-4 weeks."
    },
    // PHOSPHATIDYLSERINE
    {
      supplementId: 30,
      timing: "With meals",
      timingDesc: "Take with fat-containing meals for optimal absorption.",
      withFood: "With fatty foods",
      withFoodDesc: "Best absorbed when taken with meals containing healthy fats.",
      timeToEffect: "4-12 weeks",
      effectDesc: "Cognitive benefits develop gradually over 4-12 weeks."
    },
    // ALPHA-LIPOIC ACID
    {
      supplementId: 27,
      timing: "Empty stomach",
      timingDesc: "Take 30-60 minutes before meals for best absorption.",
      withFood: "Empty stomach",
      withFoodDesc: "Food can reduce absorption, take away from meals when possible.",
      timeToEffect: "2-6 weeks",
      effectDesc: "Antioxidant and energy benefits typically noticed after 2-6 weeks."
    },
    // FOLIC ACID
    {
      supplementId: 25,
      timing: "Morning with breakfast",
      timingDesc: "Take in the morning for consistent daily support.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken with or without food, absorption not significantly affected.",
      timeToEffect: "2-4 weeks",
      effectDesc: "Blood health benefits typically noticed after 2-4 weeks."
    },
    // VITAMIN E
    {
      supplementId: 24,
      timing: "With meals",
      timingDesc: "Take with fat-containing meals for optimal absorption.",
      withFood: "With fatty foods",
      withFoodDesc: "Requires dietary fat for proper absorption.",
      timeToEffect: "4-8 weeks",
      effectDesc: "Antioxidant and skin benefits typically noticed after 4-8 weeks."
    },
    // GREEN TEA EXTRACT
    {
      supplementId: 23,
      timing: "Between meals",
      timingDesc: "Take between meals to avoid iron absorption interference.",
      withFood: "Empty stomach",
      withFoodDesc: "Best taken away from iron-rich foods to avoid interaction.",
      timeToEffect: "2-4 weeks",
      effectDesc: "Antioxidant and metabolic benefits typically noticed after 2-4 weeks."
    },
    // GLUCOSAMINE CHONDROITIN
    {
      supplementId: 22,
      timing: "With meals",
      timingDesc: "Take with food to reduce potential stomach upset.",
      withFood: "With food",
      withFoodDesc: "Take with meals to improve tolerance and absorption.",
      timeToEffect: "8-12 weeks",
      effectDesc: "Joint health benefits typically noticed after 8-12 weeks of consistent use."
    },
    // VITAMIN K2
    {
      supplementId: 20,
      timing: "With fatty meals",
      timingDesc: "Take with meals containing healthy fats for optimal absorption.",
      withFood: "With fatty foods",
      withFoodDesc: "Requires dietary fat for proper absorption.",
      timeToEffect: "4-12 weeks",
      effectDesc: "Bone and cardiovascular benefits develop over 4-12 weeks."
    },
    // BIOTIN
    {
      supplementId: 19,
      timing: "Morning with breakfast",
      timingDesc: "Take in the morning for consistent daily support.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken with or without food, absorption not significantly affected.",
      timeToEffect: "6-12 weeks",
      effectDesc: "Hair, skin, and nail benefits typically noticed after 6-12 weeks."
    },
    // RHODIOLA ROSEA
    {
      supplementId: 17,
      timing: "Morning on empty stomach",
      timingDesc: "Take in the morning for energy support throughout the day.",
      withFood: "Empty stomach",
      withFoodDesc: "Best absorbed on empty stomach, at least 30 minutes before breakfast.",
      timeToEffect: "1-4 weeks",
      effectDesc: "Stress adaptation and energy benefits typically noticed within 1-4 weeks."
    },
    // COENZYME Q10
    {
      supplementId: 15,
      timing: "With fatty meals",
      timingDesc: "Take with meals containing healthy fats for optimal absorption.",
      withFood: "With fatty foods",
      withFoodDesc: "Requires dietary fat for proper absorption.",
      timeToEffect: "4-12 weeks",
      effectDesc: "Heart health and energy benefits typically noticed after 4-12 weeks."
    },
    // WHEY PROTEIN
    {
      supplementId: 12,
      timing: "Post-workout or breakfast",
      timingDesc: "Take within 30 minutes after workout or as meal replacement.",
      withFood: "As meal or snack",
      withFoodDesc: "Can be mixed with water, milk, or blended into smoothies.",
      timeToEffect: "2-4 weeks",
      effectDesc: "Muscle building and recovery benefits typically noticed after 2-4 weeks."
    },
    // CREATINE
    {
      supplementId: 11,
      timing: "Post-workout or anytime",
      timingDesc: "Take consistently at the same time daily, timing less important than consistency.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken with water, juice, or protein shake.",
      timeToEffect: "1-2 weeks",
      effectDesc: "Strength and power benefits typically noticed within 1-2 weeks."
    },
    // PROBIOTICS
    {
      supplementId: 10,
      timing: "Empty stomach or with meals",
      timingDesc: "Take consistently at the same time daily, preferably with or after meals.",
      withFood: "With or after food",
      withFoodDesc: "Food can help protect bacteria from stomach acid.",
      timeToEffect: "1-4 weeks",
      effectDesc: "Digestive health benefits typically noticed within 1-4 weeks."
    },
    // COLLAGEN
    {
      supplementId: 9,
      timing: "Empty stomach",
      timingDesc: "Take between meals for optimal absorption and utilization.",
      withFood: "Empty stomach",
      withFoodDesc: "Best absorbed away from other proteins and amino acids.",
      timeToEffect: "4-12 weeks",
      effectDesc: "Skin, joint, and hair benefits typically noticed after 4-12 weeks."
    },
    // CALCIUM
    {
      supplementId: 8,
      timing: "With meals, split doses",
      timingDesc: "Split doses throughout the day with meals for better absorption.",
      withFood: "With food",
      withFoodDesc: "Take with meals to improve absorption and reduce stomach upset.",
      timeToEffect: "8-12 weeks",
      effectDesc: "Bone health benefits develop gradually over 8-12 weeks."
    },
    // IRON
    {
      supplementId: 7,
      timing: "Empty stomach",
      timingDesc: "Take between meals for best absorption, unless stomach upset occurs.",
      withFood: "Empty stomach preferred",
      withFoodDesc: "Food can reduce absorption, but take with food if stomach upset occurs.",
      timeToEffect: "4-8 weeks",
      effectDesc: "Energy and blood health benefits typically noticed after 4-8 weeks."
    },
    // VITAMIN B12
    {
      supplementId: 6,
      timing: "Morning",
      timingDesc: "Take in the morning for energy support throughout the day.",
      withFood: "With or without food",
      withFoodDesc: "Can be taken with or without food, absorption not significantly affected.",
      timeToEffect: "1-4 weeks",
      effectDesc: "Energy and neurological benefits typically noticed within 1-4 weeks."
    },
    // MAGNESIUM
    {
      supplementId: 5,
      timing: "Evening with dinner",
      timingDesc: "Take in the evening as it may promote relaxation and better sleep.",
      withFood: "With food",
      withFoodDesc: "Take with meals to improve absorption and reduce stomach upset.",
      timeToEffect: "1-4 weeks",
      effectDesc: "Sleep, muscle, and stress benefits typically noticed within 1-4 weeks."
    },
    // OMEGA 3
    {
      supplementId: 4,
      timing: "With meals",
      timingDesc: "Take with fatty meals for optimal absorption and to reduce fishy aftertaste.",
      withFood: "With fatty foods",
      withFoodDesc: "Requires dietary fat for proper absorption.",
      timeToEffect: "4-12 weeks",
      effectDesc: "Heart, brain, and anti-inflammatory benefits typically noticed after 4-12 weeks."
    }
  ]

  for (const guide of additionalUsageGuides) {
    // Verificar se o guia já existe
    const existingGuide = await prisma.usageGuide.findUnique({
      where: { supplementId: guide.supplementId }
    })
    
    if (existingGuide) {
      console.log(`Usage guide for supplement ID ${guide.supplementId} already exists, skipping...`)
    } else {
      await prisma.usageGuide.create({
        data: guide
      })
      console.log(`✅ Created usage guide for supplement ID: ${guide.supplementId}`)
    }
  }

  console.log('✅ Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 