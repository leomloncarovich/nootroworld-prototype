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
    { name: 'Performance', description: 'Supplements for physical performance' }
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
    { name: 'Iron Absorption', description: 'Improves iron absorption, preventing anemia.' }
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

  // Add detailed products for Zinc
  const zincSupplement = await prisma.supplement.findFirst({
    where: { name: 'Zinc' }
  })

  if (zincSupplement) {
    const zincProducts = [
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
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
        supplementId: zincSupplement.id
      }
    ]

    console.log('Creating Zinc products...')
    for (const product of zincProducts) {
      // Check if product already exists
      const existingProduct = await prisma.product.findFirst({
        where: {
          supplementId: product.supplementId,
          rank: product.rank
        }
      })
      
      if (!existingProduct) {
        await prisma.product.create({
          data: product
        })
      }
    }

    // Add usage guide for Zinc
    const existingUsageGuide = await prisma.usageGuide.findUnique({
      where: { supplementId: zincSupplement.id }
    })
    
    if (!existingUsageGuide) {
      await prisma.usageGuide.create({
        data: {
          supplementId: zincSupplement.id,
          timing: "Morning or evening",
          timingDesc: "Preferably 1-2 hours before meals for better absorption.",
          withFood: "Empty stomach",
          withFoodDesc: "Avoid taking with dairy, coffee or high-fiber foods that may reduce absorption.",
          timeToEffect: "2-4 weeks",
          effectDesc: "First benefits may be noticed after 2-4 weeks of regular use."
        }
      })
    }
  }

  // Add detailed products for Vitamin D3
  const vitaminD3Supplement = await prisma.supplement.findFirst({
    where: { name: 'Vitamin D3' }
  })

  if (vitaminD3Supplement) {
    const vitaminD3Products = [
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
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
        supplementId: vitaminD3Supplement.id
      }
    ]

    console.log('Creating Vitamin D3 products...')
    for (const product of vitaminD3Products) {
      // Check if product already exists
      const existingProduct = await prisma.product.findFirst({
        where: {
          supplementId: product.supplementId,
          rank: product.rank
        }
      })
      
      if (!existingProduct) {
        await prisma.product.create({
          data: product
        })
      }
    }

    // Add usage guide for Vitamin D3
    const existingUsageGuide = await prisma.usageGuide.findUnique({
      where: { supplementId: vitaminD3Supplement.id }
    })
    
    if (!existingUsageGuide) {
      await prisma.usageGuide.create({
        data: {
          supplementId: vitaminD3Supplement.id,
          timing: "Morning with breakfast",
          timingDesc: "Best absorbed when taken with a meal containing healthy fats.",
          withFood: "With food",
          withFoodDesc: "Take with meals that contain healthy fats for optimal absorption.",
          timeToEffect: "4-6 weeks",
          effectDesc: "Benefits may be noticed after 4-6 weeks, with peak blood levels reached in 2-3 months."
        }
      })
    }
  }

  // Add detailed products for Vitamin C
  const vitaminCSupplement = await prisma.supplement.findFirst({
    where: { name: 'Vitamin C' }
  })

  if (vitaminCSupplement) {
    const vitaminCProducts = [
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
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
        supplementId: vitaminCSupplement.id
      }
    ]

    console.log('Creating Vitamin C products...')
    for (const product of vitaminCProducts) {
      // Check if product already exists
      const existingProduct = await prisma.product.findFirst({
        where: {
          supplementId: product.supplementId,
          rank: product.rank
        }
      })
      
      if (!existingProduct) {
        await prisma.product.create({
          data: product
        })
      }
    }

    // Add usage guide for Vitamin C
    const existingUsageGuide = await prisma.usageGuide.findUnique({
      where: { supplementId: vitaminCSupplement.id }
    })
    
    if (!existingUsageGuide) {
      await prisma.usageGuide.create({
        data: {
          supplementId: vitaminCSupplement.id,
          timing: "Morning and evening",
          timingDesc: "Split doses throughout the day for better absorption and sustained levels.",
          withFood: "With or without food",
          withFoodDesc: "Can be taken on empty stomach, but with food may reduce potential stomach irritation.",
          timeToEffect: "1-2 weeks",
          effectDesc: "Initial benefits may be noticed within 1-2 weeks of consistent use."
        }
      })
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