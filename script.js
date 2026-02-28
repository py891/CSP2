// script.js
// Fully embedded content from your docs (Physics, Chemistry, Biology, ESS) + CS write-up.

// ---------- UI ----------
function toggleMenu(){
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

function openTab(section){
  document.querySelectorAll(".tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === section);
  });
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("show"));
  const panel = document.getElementById(`panel-${section}`);
  if (panel) panel.classList.add("show");

  const nav = document.getElementById("nav");
  if (nav.classList.contains("open")) nav.classList.remove("open");

  // Re-typeset MathJax after tab switch
  if (window.MathJax?.typeset) window.MathJax.typeset();
}

// ---------- Content (FULL) ----------
const CONTENT = {
  physics: `How Material Choice Influences Heat Absorption and Retention in Urban Settings
1. Introduction
Urban surfaces such as roofs and pavements receive solar radiation throughout the day. The way different materials absorb, store, and release that energy affects surface temperature and contributes to the Urban Heat Island (UHI) effect — the tendency for built environments to be warmer than surrounding rural areas.
The physics of this process involves energy balance, surface reflectivity (albedo), heat capacity, thermal conductivity, and thermal emission. This document explains each component with appropriate formulas and sources you can cite in your CSP.
2. Solar Radiation and Surface Energy Balance
2.1 Incoming Solar Radiation
Solar radiation that reaches a surface is partitioned into:
I = R + A + T
Where:
· I = incoming solar radiation (W/m²)
· R = reflected radiation (W/m²)
· A = absorbed radiation (W/m²)
· T = transmitted radiation (W/m²)
For opaque urban materials (e.g., asphalt, concrete, metal roofing), transmission is negligible:
T ≈ 0
So the energy balance simplifies to:
I = R + A
2.2 Albedo and Absorption
Albedo  is the fraction of incoming radiation that a surface reflects:
Thus, the absorbed radiation is:
A = I(1 − α)
This is a key formula: materials with low albedo absorb more energy and heat up more. For example:
Material — Typical Albedo Range
Asphalt — 0.04–0.15
Concrete — 0.20–0.35
Metal (light colored) — 0.30–0.60
White cool roof — 0.60–0.85
Source: Urban Green-blue Grids, “Heat and albedo values of urban materials.”
↳ https://urbangreenbluegrids.com/thema/heat/?utm_source=chatgpt.com
3. Heat Absorption and Temperature Change
3.1 Fundamental Heat Equation
When a material absorbs energy, its temperature rises according to:
Where:
· Q = heat energy absorbed (J)
· m = mass of the material (kg)
· c = specific heat capacity (J·kg⁻¹·K⁻¹)
·  = change in temperature (K or °C)
Rearranging:
This relationship shows that for the same amount of absorbed energy, a material with higher specific heat capacity will have a smaller temperature increase.
3.2 Relating Absorption to Rate of Heating
Instead of total energy (Q), we often work with power (rate of energy transfer). The absorbed power is:
Where:
· (A) = surface area (m²)
If energy is absorbed over time (t), then:
Substituting into the heat equation:
Or:
This shows:
· Lower albedo → faster heating
· Greater mass or higher specific heat → slower heating
4. Heat Retention and Cooling
4.1 Radiative Cooling
All surfaces emit thermal (infrared) radiation. The Stefan–Boltzmann law describes the power emitted by a surface at temperature (T):
Where:
ε = emissivity (range 0–1)
σ =   (Stefan–Boltzmann constant)
T = absolute temperature (K)
When cooling in an environment at temperature  the net radiative loss is:
This formula is useful when analyzing cooling after the heat source is removed.
4.2 Conduction Inside the Material
Heat may also spread through the material by conduction:
Where:
· q = heat flux (W·m⁻²)
· k = thermal conductivity (W·m⁻¹·K⁻¹)
·  = temperature gradient within the material
Higher conductivity (e.g., in metals) means faster internal heat transfer, which can affect how quickly the surface temperature changes.
5. Real-World Material Behaviors
5.1 Low-Albedo Surfaces
Dark materials like asphalt absorb most incoming radiation due to low reflectivity. Field studies have demonstrated that surfaces with low albedo achieve significantly higher surface temperatures than high-albedo alternatives under identical conditions.
Example: An MDPI study found that high-albedo materials had surface temperatures up to ~21% lower than dark materials under equivalent solar irradiation.
Source: “Correlation between albedo and aging… Urban Heat Island Effects”, Buildings 15(20):3765.
↳ https://www.mdpi.com/2075-5309/15/20/3765?utm_source=chatgpt.com
5.2 Cool Roofs and UHI mitigation
Cool roofs are engineered with high reflectivity and emissivity to reduce absorption and increase outward radiation. Research shows that implementing cool roof materials can reduce surface temperatures by up to 20–30°C compared with dark roofs, significantly lowering heat accumulation.
Source: “Super cool roofs: Mitigating the Urban Heat Island effect…” Results in Engineering.
↳ https://www.sciencedirect.com/science/article/pii/S2590123023003961?utm_source=chatgpt.com
6. The Urban Heat Island Effect
The UHI effect arises because cities replace natural landscapes with materials that:
· Have lower albedo (absorb more solar energy)
· Possess greater thermal mass (store and release heat slowly)
· Limit evapotranspiration from vegetation
These factors cause urban surfaces and the air above to remain warmer, especially at night, than rural surroundings.
A review of UHI mitigation strategies confirms that increasing surface albedo and reducing heat retention are effective ways to reduce urban temperatures.
Source: “Increasing solar reflectivity of building envelope materials…” Buildings (MDPI).
↳ https://www.mdpi.com/2075-5309/13/11/2868?utm_source=chatgpt.com
7. Summary of Key Physics Principles
Concept — Formula — Physical Meaning
Albedo & absorption — (A = I(1 − α)) — Lower reflectivity → higher absorption
Heat absorption — (Q = mcΔT) — More energy increases temperature
Rate of heating — depends on albedo, mass, and specific heat — Heating depends on albedo, mass, and specific heat
Radiative emission — Stefan–Boltzmann — Hotter surfaces emit more IR
Net radiative loss — depends on environment — Cooling depends on environment
8. References
1. Correlation Between Albedo and Aging… Urban Heat Island Effects. Buildings 15(20):3765.
https://www.mdpi.com/2075-5309/15/20/3765?utm_source=chatgpt.com
2. Super cool roofs: Mitigating the Urban Heat Island Effect…
https://www.sciencedirect.com/science/article/pii/S2590123023003961?utm_source=chatgpt.com
3. Urban Green-blue Grids — “Heat and albedo values of urban materials.”
https://urbangreenbluegrids.com/thema/heat/?utm_source=chatgpt.com
4. Increasing Solar Reflectivity of Building Envelope Materials… Buildings (MDPI).
https://www.mdpi.com/2075-5309/13/11/2868?utm_source=chatgpt.com
5. U.S. DOE Cool Roofs overview:
https://www.energy.gov/energysaver/articles/cool-roofs?utm_source=chatgpt.com

https://www.sciencedirect.com/science/article/abs/pii/S036054421501703X`,

  chem: `The Chemistry of Urban Heat: Why the Ground Breathes Heat
IB Chemistry HL — Coordinated Science Project
If you’ve ever walked through a city at 10:00 PM and felt a wave of heat rising from the sidewalk, you’ve experienced the Urban Heat Island (UHI) effect. While it feels like a weather phenomenon, it’s actually a city-wide chemical reaction. Our cities are built out of materials that are chemically programmed to soak up the sun and hold onto it. Here is the molecular breakdown of why our streets stay hot.
1. The Electron Trap: Why Asphalt is So Dark
The black surface of a road is a result of complex organic chemistry. Asphalt is held together by bitumen, which is loaded with Asphaltenes.
The $\\pi$-System Explanation
Asphaltenes are made of huge, flat sheets of fused benzene rings (known as Polycyclic Aromatic Hydrocarbons).
· Small HOMO-LUMO Gaps: As conjugation increases, the energy gap between the Highest Occupied Molecular Orbital (HOMO) and the Lowest Unoccupied Molecular Orbital (LUMO) shrinks.
· The Result: Because this gap is so tiny, asphalt can absorb almost any photon that hits it—visible light, UV, and near-infrared.
· Internal Conversion: Instead of reflecting that light, the electrons trap the energy and convert it into molecular vibrations. Those vibrations are what we feel as heat.
2. The Thermal Battery: Concrete’s Silicate Secret
Concrete doesn't just get hot; it stays hot for hours after the sun goes down. This is due to the way it’s chemically bonded during the Hydration Reaction. When cement is mixed with water, it forms Calcium Silicate Hydrate (C–S–H) gel:
2 Ca3SiO5(s) + 7 H2O(l) → Ca3Si2O7 · 4H2O(s) + 3 Ca(OH)2(aq)
Why it Holds Heat
The C–S–H gel is a disordered molecular structure full of polar covalent Si-O bonds. These bonds act like tiny springs that store vibrational energy. Because the structure is so dense, the energy (phonons) can’t escape quickly. The city essentially becomes a massive thermal battery, charging up all day and slowly discharging its chemical energy into the night air.
3. The Solution: Chemistry That Fights Back
If the chemistry of our buildings is the problem, the chemistry of new materials is the solution.
Titanium Dioxide (TiO2): The Mirror Molecule
"Cool roofs" use TiO2 coatings. Unlike asphalt, TiO2 has a wide bandgap (~ 3.2 eV). This means visible light photons don't have enough energy to excite its electrons, so the light just bounces off.
· Bonus Chemistry: TiO2 is also a photocatalyst. It uses UV light to create radicals that eat away organic dirt, keeping the surface bright white and reflective for years.
Pervious Pavements: The "Sweating" Reaction
By engineering pavements with gaps to hold water, we trigger an endothermic phase change. As the sun hits the wet pavement, the water absorbs the energy to break its hydrogen bonds. It takes 2.45 MJ/kg of energy to turn that water into vapor (Enthalpy of Vaporization). This energy is pulled out of the pavement, effectively allowing the city to "sweat" to stay cool.
At a Glance: Chemistry in the City
Material — The Chemical "Culprit" — IB Link
Asphalt — Conjugated $\\pi$-systems — Delocalization & Absorption
Concrete — Silicate Hydrate Gel — Polar Covalent Bonding
Cool Roofs — TiO2 (Transition Metal Oxide) — Bandgap Theory & Redox
Eco-Paving — H2O Phase Changes — Enthalpy of Vaporization (ΔHvap)
Conclusion
Urban heat is a consequence of the molecular architecture of our cities. By understanding the $\\pi$-bonds in our roads and the silicate chains in our walls, we can start to "re-chemistize" our environment—turning our heat sponges back into cool, livable spaces.`,

  bio: `DRIVING QUESTION:How does material choice influence heat retention and absorption in urban settings?
Biology:
The Urban Organism: A Bioclimatic Perspective on Climate and Biodiversity
1. The Displacement of the Living Landscape
From the perspective of a bioclimatic information architect, the Urban Heat Island (UHI) is far more than a localized meteorological anomaly; it is a fundamental biophysical rupture. This crisis emerges as we systematically replace the "non-built-up" metabolic layers of the landscape—vegetation, soil, and water bodies—with abiotic, man-made surfaces. By stripping away these living components, we disable the city's natural thermal regulation, transitioning from a self-cooling system to a high-capacity heat storage engine. Restoring urban thermal balance requires a strategic understanding of how Land Surface Temperatures (LST) deviate from atmospheric averages, often reaching lethal extremes of 50–60°C on conventional materials.
The primary factors instigating UHI are rooted in the loss of biological functionality. While green areas sequester heat through shading and evapotranspiration, tightly packed buildings and layers of pavement/concrete act as thermal batteries. The following table maps the thermodynamic roles of these surfaces:
Surface Attribute — Material Components — Thermodynamic Function — Thermal Consequence
Natural Surface — Vegetation, Soil, Water Bodies, Rocks — High moisture retention; facilitates latent heat flux via evaporation; water acts as a high-heat-capacity thermal buffer. — Maintains lower LST; moisture-driven cooling regulates local microclimate.
Urban Surface — Asphalt, Concrete, Roof Tops, Building Walls — Low-albedo absorption; lacks porosity; prevents moisture-based metabolic cooling. — Surface temperatures escalate to 50–60°C, radiating sensible heat into the urban canyon.
2. The Biophysics of Urban Surfaces: Albedo and Emittance
In the metabolic mapping of an urban organism, thermal performance variables—albedo, emittance, and heat capacity—act as the primary regulators of the city’s temperature. Albedo (solar reflectance) represents the ratio of reflected to absorbed solar radiation, and is dictated by surface color and texture. Darker, rougher materials absorb energy across the ultraviolet, visible, and infrared spectrums, while brighter, smoother materials reflect this flux back into the atmosphere.
As a bioclimatic architect, one must utilize the specific reflectance values of city materials to simulate thermal outcomes:
· Biological Surfaces: Grass (0.25–0.30) and Trees (0.15–0.18).
· Infrastructure Hardscapes: Asphalt (0.05–0.20), Concrete (0.10–0.35), and Tar & Gravel (0.08–0.18).
· Building Envelopes: Corrugated Roofs (0.10–0.16), Colored Paint (0.15–0.35), and Brick/Stone (0.20–0.40).
· Cool Mitigation Layers: Highly Reflective Roofs (0.60–0.70) and White Paint (0.50–0.90).
Thermal emittance provides the critical "So What?" of this equation. It measures an object's efficiency in releasing stored energy. A surface with high emittance reaches thermal equilibrium at a lower temperature because it sheds energy faster than it can accumulate. To prevent nighttime heat release (the "storage" effect), materials must be evaluated for their volumetric heat capacity—the product of a material’s specific heat constant and its density. Materials like concrete and brick possess high volumetric heat capacity, storing immense energy during the day that permeates the urban environment long after sunset.
3. From Impermeable Barriers to Living Pavements
Traditional urban ground cover functions as a thermal barrier. To mitigate UHI, we must transition to "living pavements" that mimic the porosity and liquid permeability of natural soil. Modern systems differentiate between various modes of hydrological activity:
· Cool and Reflective Pavements: These utilize pigments or additives (e.g., thin bitumen sealants or resin-bound aggregate layers) to raise surface albedo, reflecting radiation rather than sequestering it.
· Porous Pavers: These utilize a cellular grid system typically infused with vegetation. By substituting sand with grass, the system leverages high albedo and plant transpiration to create a net cooling effect.
· Permeable and Pervious Pavements: These feature less dense structures with internal cavities, allowing water to pass through to the sub-base, which reduces heat storage compared to smooth surfaces.
· Water Retaining Pavements: Developed as a strategic response to fast-draining systems, these materials retain moisture to promote sustained vaporization. Unlike standard pervious layers that can suffer from "negative cooling" if they dry too rapidly, water-retaining pavements ensure a persistent cooling effect.
4. The Elevated Ecosystem: Green vs. Cool Roofs
The roof is the city’s primary interface for solar flux, making it the most strategic site for reducing the building’s energy "diet."
· Green Roofs (Extensive vs. Intensive): These operate via biological mechanisms—shading and evapotranspiration. Extensive systems use lightweight sedum, while intensive systems mimic conventional parks. They provide habitat biodiversity and filter pollutants.
· Cool Roofs: These utilize physical mechanisms, specifically high-albedo coatings and infrared reflective pigments. Advanced technologies now include Phase Change Material (PCM) coatings and thermochromic paints that adapt to ambient temperature shifts.
In humid tropical climates, the efficiency of green roofs is significantly constrained. High ambient humidity limits the rate of evaporative cooling, and the complexity of maintenance in these zones often makes high-albedo cool roofs a more resilient choice. These "living skins" effectively manage the relationship between solar radiation and the internal thermal mass of the structure.
5. The Hydrological Cooling Mechanism: Rain and Soil
Water is the ultimate thermal regulator, but its efficacy depends on the material's ability to store and evaporate it over time. Analysis by Kubilay, Derome, and Carmeliet highlights the moisture-thermal link through a 48-hour case study:
· Case A (Concrete): Concrete has limited moisture absorption. While it experiences initial cooling during rain, the temperature difference between wet and dry cases decreases almost immediately after the rain stops. Its low liquid permeability causes it to dry rapidly, returning to high LST levels.
· Case B (Bare Soil): Soil exhibits significantly higher liquid permeability. Following a rain event, solar radiation enhances evaporation from the soil's surface, causing the temperature difference between wet and dry cases to increase. Soil can maintain temperatures up to 15°C lower than dry cases due to sustained evaporative cooling.
Furthermore, the spatial distribution of Wind-Driven Rain (WDR) creates thermal gradients across building facades. Eulerian multiphase modeling shows that upper and side edges of facades receive higher WDR intensities due to wind speed patterns. Porous materials like clay brick sequester this moisture, influencing long-term microclimatic cooling through gradual release.
6. Designing for Bioclimatic Coexistence
Sustainable urban design requires a fundamental integration of Urban Geometry and Urban Canyons. The shadowing of solid surfaces—whether by trees or building orientation—mimics natural canopy cooling, reducing the total solar flux incident on urban materials. Crucially, these geometries influence wind patterns, which dictate convection—the process by which airflow removes heat from surfaces.
Strategic Recommendations for Urban Planning:
· Tropical Zone Priority: Deploy high-albedo coatings and cool-roof pigments to maximize reflectance where humidity limits evaporative cooling.
· Traffic-Specific Materiality: Utilize permeable and porous pavements for low-traffic areas (parking, trails). Avoid highly reflective surfaces in high-traffic zones to prevent glare-related safety hazards.
· Active Hydrological Management: Implement "sprinkling" or moistening of road surfaces during peak hours, utilizing reclaimed water to sustain evaporative cooling in water-retentive materials.
· Surface Roughness Regulation: Balance smooth reflective surfaces with porous textures to optimize the relationship between albedo and heat storage.
Mitigating the threat of UHI requires a return to the "thermal performance" of materials. We must value biological cooling, moisture retention, and solar reflectance as the core tenets of a modern, biodiverse, and resilient urban organism.
7. References and Data Grounding
· United States Environmental Protection Agency (EPA): Compendium of Strategies for Reducing Urban Heat Islands.
· A. Kubilay, D. Derome, & J. Carmeliet: Coupled CFD, radiation, and WDR modeling in building materials.
· Sri Novianthi Pratiwi: Analysis of thermal performance and material cover features for UHI mitigation.
· M. Santamouris: Reviews of cool pavements and reflective mitigation technologies.
· H. Akbari & R. Levinson: Standards for cool-roof materials and global albedo updates.
· Abbas Mohajerani: Thermal properties of asphalt concrete and mitigation strategies.
· Yoshioka & Yamagata: Studies on water-retentive pavements and reclaimed water sprinkling.`,

  ess: `CSP - ESS
How does material choice influence heat retention and absorption in urban settings?
Albedo and Urban Energy Balance :
Albedo is a fundamental principle in environmental systems that describes the proportion of incoming solar radiation reflected by a surface. Albedo, expressed as a decimal between 0 and 1, determines how much solar energy is immediately returned to the atmosphere versus how much is absorbed and converted to heat. This property is critically important in urban environments where human development has systematically replaced natural vegetation with constructed surfaces of vastly different reflective properties.
The albedo values of common urban materials reveal why cities tend to accumulate heat. Fresh asphalt, which dominates urban road networks, possesses an albedo of merely 0.04 to 0.16, meaning it absorbs between 84 and 96 percent of incoming solar radiation. Standard concrete performs somewhat better with an albedo range of 0.18 to 0.35, reflecting roughly 18 to 35 percent of solar energy. In stark contrast, white Portland cement can achieve albedo values of 0.70 to 0.80 when new, reflecting the majority of solar radiation rather than absorbing it. Vegetation typically falls in the middle range with albedo values of 0.15 to 0.25, but as we shall see, plants cool the environment through entirely different mechanisms than simple reflection.
These albedo differences translate directly into the urban energy budget, which environmental scientists analyze using the surface energy balance equation. This equation states that net radiation equals the sum of sensible heat flux, latent heat flux, and ground heat flux. In practical terms, this means that the total energy available at a surface must be partitioned between warming the air, evaporating water, and heating the material itself. Dark urban materials create a problematic energy partition where most incoming solar radiation becomes sensible heat that warms the surrounding air, while simultaneously storing significant amounts of heat in the material mass through ground flux. Natural vegetated surfaces, by contrast, channel much more energy into latent heat through evapotranspiration, which actually cools the environment rather than warming it.
Urban Heat Island Phenomenon :
The systematic replacement of moderate-albedo vegetation with low-albedo impermeable surfaces creates what environmental scientists term the Urban Heat Island effect. This phenomenon describes the consistent pattern where urban areas experience temperatures 2 to 10 degrees Celsius higher than their rural surroundings.
The Surface Urban Heat Island represents the most extreme temperature differences, measurable through thermal remote sensing and satellite imagery. Surface temperatures on dark asphalt can reach 70 to 80 degrees Celsius during peak solar hours, creating differences of 10 to 15 degrees compared to vegetated areas. The Canopy Layer Urban Heat Island occurs at a standard meteorological height of two meters above ground, representing the thermal environment that humans actually experience. This layer typically peaks 2 to 4 hours after sunset because the heat stored in urban materials during the day continues to warm the air through the night. Finally, the Boundary Layer Urban Heat Island extends vertically through the lowest portion of the atmosphere, potentially influencing local weather patterns including cloud formation and precipitation distribution.
The chain connecting material choice to urban warming follows a clear physical pathway. Dark impermeable surfaces absorb the majority of incoming solar radiation due to their low albedo. This absorption increases the net radiation available at the surface, which must then be partitioned according to the surface energy balance equation. Because materials like asphalt and concrete cannot evaporate water, they channel virtually all available energy into sensible heat that warms the air and ground heat flux that stores thermal energy in the material mass. This stored heat releases gradually through the night, preventing the cooling that occurs in rural areas and creating the distinctive nighttime peak of the canopy layer heat island.
Material Performance and Empirical Evidence :
Understanding how specific materials perform in urban environments requires examining both their physical properties and empirical measurements from real-world applications. Asphalt, the dominant paving material in most cities, presents particularly challenging thermal characteristics. Its dark coloration results in peak summer surface temperatures of 70 to 80 degrees Celsius, while its significant thermal mass allows it to store substantial quantities of heat during daylight hours for gradual release at night. While asphalt does experience slight albedo increases as it weathers and oxidizes, this effect remains modest and does not substantially improve its thermal performance over its typical 20 to 30 year lifecycle.
Concrete offers somewhat better performance characteristics, with standard formulations achieving albedo values of 0.18 to 0.35. However, concrete possesses higher thermal conductivity than asphalt, meaning it transfers heat to subsurface layers more efficiently. White Portland cement concrete represents a significant improvement, achieving albedo values of 0.70 to 0.80 when newly installed. The challenge with white concrete lies in its degradation over time, as dirt accumulation, biological growth, and weathering typically reduce its albedo to 0.40 or 0.60 within five to ten years. Recent innovations incorporating titanium dioxide show promise for maintaining higher albedo values around 0.54 through photocatalytic self-cleaning properties.
Cool roofs represent one of the most extensively studied interventions for urban heat mitigation. These systems employ white or light-colored coatings with high solar reflectance indices to minimize heat absorption. Research from Stanford University published in 2021 demonstrated dramatic results, with cool roof surfaces reaching maximum temperatures of only 49 degrees Celsius compared to 80 degrees Celsius for conventional dark roofs. This surface temperature reduction translated into building electricity savings of 18 to 63 percent depending on building type and climate zone. The Lawrence Berkeley National Laboratory conducted simulation studies as early as 1988 showing that urban-wide implementation of high-albedo surfaces could achieve total energy savings of 35 to 62 percent, far exceeding the benefits of individual building interventions.
Green roofs operate through fundamentally different mechanisms than high-albedo surfaces. While vegetation offers only moderate albedo values of 0.15 to 0.25, plants cool the environment primarily through evapotranspiration, which channels solar energy into latent heat rather than sensible heat. Studies consistently show that green roofs reduce peak surface temperatures by 20 to 45 degrees Celsius compared to conventional roofs while reducing heat flux through the roof assembly by 70 to 90 percent. However, green roofs present higher initial costs of 10 to 25 dollars per square foot compared to 3 to 5 dollars for conventional roofing, along with structural loading requirements of 15 to 30 additional pounds per square foot and ongoing maintenance needs for irrigation and vegetation management.
Secondary Data and Research Findings :
Multiple research studies provide quantitative evidence for the effectiveness of material-based heat mitigation strategies. A study conducted in Athens, Greece in 2011 examined reflective pavements with albedo values of approximately 0.40 compared to standard asphalt at 0.15. The results showed peak surface temperature reductions of 11.5 degrees Celsius, with summer average reductions of 6.3 degrees and mean radiant temperature reductions of 8.3 degrees Celsius. These measurements demonstrate that relatively modest improvements in albedo can generate substantial thermal benefits.
The United States Environmental Protection Agency compiled data in 2024 indicating that 41 million Americans currently reside in census tracts experiencing urban heat island intensity of 8 degrees Fahrenheit or greater. Their research confirms that cool roofs consistently reduce peak temperatures by 2 to 9 degrees Fahrenheit, while strategic tree canopy implementation can reduce air conditioning demand by 20 to 25 percent. A 2024 study from Durham, North Carolina provided important comparative data, finding that street tree lining, cool roof implementation, and parking lot conversion to green space each produced equivalent cooling effects of 0.7 to 0.9 degrees Celsius during evening hours. This finding suggests that multiple strategies can achieve similar thermal outcomes, allowing cities to select approaches based on local constraints and co-benefits rather than seeking a single optimal solution.
Research from Indonesia published in 2024 highlights the importance of considering urban morphology alongside material choices. Comparing vertical mass configurations, where buildings are arranged in clusters with vertical orientation, against horizontal grid configurations revealed dramatic differences in thermal performance. The vertical arrangement achieved a solar heating index of 21.7 with a convective cooling index of 0.62, while the horizontal arrangement showed a solar heating index of 55.9 with convective cooling of only 0.09. This research demonstrates that how buildings are arranged fundamentally interacts with what materials they are made from, emphasizing the need for holistic urban planning approaches.
Systems and Feedback Loops :
Environmental systems analysis reveals that material choices in urban areas create feedback loops that either amplify or mitigate heat problems. A positive feedback loop, often termed a vicious cycle in environmental science, occurs when dark surfaces absorb heat, increasing the need for air conditioning, which releases waste heat into the environment, further elevating temperatures and increasing cooling demand. This cycle explains why densely developed urban cores often show the most intense heat island effects.
Conversely, strategic material selection can establish negative feedback loops that cool urban environments. When cool surfaces reflect rather than absorb solar radiation, interior temperatures decrease, reducing the need for mechanical cooling. Lower air conditioning usage means less waste heat released to the environment, which keeps ambient temperatures lower, further reducing cooling requirements.
Real World Applications and Policy Implementation :
Singapore, a tropical city-state with consistent high temperatures ranging from 27 to 32 degrees Celsius, implemented the Cool Singapore Program featuring mandatory cool roof standards for new construction and comprehensive urban greenery initiatives. The program targets a 1.5 degree Celsius reduction in average urban temperatures and has achieved documented building energy savings of 10 to 15 percent along with peak demand reductions of 5 to 8 percent during the hottest periods. This case represents adaptive management, using scientific understanding of urban energy budgets to develop regulatory interventions that address the collective action challenges of urban heat.
Los Angeles provides a complementary example through its Cool Roofs Ordinance, which mandated high-albedo roofing for all new residential construction and re-roofing projects between 2014 and 2020. The policy resulted in over 90,000 cool roof installations, generating 50 million dollars in annual energy savings and reducing peak electricity demand by 100 megawatts, equivalent to the output of a small power plant. Temperature monitoring in implementing neighborhoods showed reductions of 0.5 to 1.0 degrees Celsius, confirming that widespread adoption creates measurable ambient cooling beyond individual building benefits.
Evaluation and Limitations :
Assessing material choices for sustainable urban cooling requires balancing multiple criteria across environmental, social, and economic dimensions. From an environmental perspective, high-albedo surfaces offer low to moderate initial costs and provide strong cooling effects through reflection, but require maintenance to prevent albedo degradation from dirt accumulation. Vegetation-based solutions provide evaporative cooling and biodiversity benefits but demand higher initial investment and ongoing maintenance for irrigation and plant care. Traditional dark materials like asphalt offer low initial cost and 20 to 30 year durability but create significant thermal problems that increase energy consumption and heat stress.
Geographic and climatic factors substantially influence the effectiveness of these strategies. High-latitude cities may experience winter heating penalties with highly reflective surfaces, while tropical and arid regions see year-round benefits. Water availability constrains the viability of green infrastructure in drought-prone areas, while humid climates experience less pronounced urban heat island effects due to greater cloud cover. Temporal dynamics also matter significantly, as the albedo of white concrete can degrade from 0.70 when new to 0.30 or 0.40 after ten years without cleaning, substantially reducing its effectiveness over time.
Conclusion :
Material choice fundamentally determines urban thermal environments through the physical mechanisms of albedo and energy partitioning. Strategic selection of high-albedo surfaces and vegetation can reduce urban temperatures by 1 to 5 degrees Celsius, decrease building energy consumption by 15 to 60 percent, and establish positive feedback loops that benefit entire urban systems. However, the effectiveness of these interventions varies significantly by climate, requires ongoing maintenance for sustained performance, and must be evaluated within comprehensive urban planning frameworks that account for morphology, ventilation patterns, and resource availability. The empirical evidence from cities like Singapore and Los Angeles demonstrates that policy-driven material selection represents a viable strategy for climate adaptation and sustainable urban development.`,

  cs: `Computer Science (CS) — Website & Project Communication (Vetrivel Karthikeyan)

Role in the CSP:
• Build a clean website to present the CSP work in one place (subject tabs, team roles, sources).
• Ensure the structure is easy for teachers to navigate and mark.
• Format long write-ups so headings and bullet points remain readable.
• Support data presentation (tables/graphs) if the group adds measurements later.

What was implemented:
1) Single-page responsive website (mobile + desktop)
   • Sections: Overview, Team, Subject Content, Sources
   • Tabs: Physics, Chemistry, Biology, ESS, CS

2) Content rendering
   • The site automatically formats headings, paragraphs, and bullet points from the raw document text.
   • MathJax is included so equations and symbols render properly.

3) Sources compilation
   • References embedded inside each write-up are also listed in a compiled Sources view.

Hosting plan (free):
• Upload these files (index.html, styles.css, script.js) to GitHub Pages to publish for free at username.github.io.`,

  // compiled later
  sources: ""
};

// ---------- Renderer: turns plain text into clean HTML ----------
function escapeHTML(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function renderTextToHTML(raw){
  const lines = raw.split(/\r?\n/);
  let html = "";
  let inList = false;

  const flushList = () => { if (inList) { html += "</ul>"; inList = false; } };

  for (let line of lines){
    const l = line.trim();
    if (!l){
      flushList();
      continue;
    }

    // headings: "1.", "2.1", "Conclusion", "References", etc.
    const isNumberHeading = /^\d+(\.\d+)*\.\s+/.test(l) || /^\d+(\.\d+)*\s+/.test(l);
    const isAllCapsish = (l.length <= 60 && /^[A-Z][A-Za-z0-9\s&:()\-—]+$/.test(l) && /:|\bConclusion\b|\bReferences\b|\bIntroduction\b/.test(l));

    // bullet lines
    const isBullet = /^[-•·]\s*/.test(l);

    if (isBullet){
      if (!inList){ html += "<ul>"; inList = true; }
      const item = escapeHTML(l.replace(/^[-•·]\s*/, ""));
      html += `<li>${item}</li>`;
      continue;
    }

    flushList();

    if (isNumberHeading || isAllCapsish){
      html += `<h4>${escapeHTML(l)}</h4>`;
      continue;
    }

    // normal paragraph
    html += `<p>${escapeHTML(l)}</p>`;
  }

  flushList();

  // allow MathJax after escaping: we kept $...$ sequences intact.
  return html.replace(/\$\\pi\$/g, "$\\pi$");
}

// ---------- Sources extractor (simple URL grab) ----------
function extractURLs(text){
  const urlRegex = /(https?:\/\/[^\s)]+|www\.[^\s)]+)/g;
  const found = text.match(urlRegex) || [];
  // de-dup while preserving order
  const seen = new Set();
  const out = [];
  for (const u of found){
    const clean = u.replace(/[.,;]+$/,"");
    if (!seen.has(clean)){
      seen.add(clean);
      out.push(clean);
    }
  }
  return out;
}

function render(){
  document.getElementById("year").textContent = new Date().getFullYear();

  // render each subject
  const ids = ["physics","chem","bio","ess","cs"];
  for (const k of ids){
    const el = document.getElementById(`content-${k}`);
    el.innerHTML = renderTextToHTML(CONTENT[k]);
  }

  // compile sources (URLs + any "References" style lines)
  const allText = [CONTENT.physics, CONTENT.chem, CONTENT.bio, CONTENT.ess].join("\n\n");
  const urls = extractURLs(allText);

  let srcHTML = "<h4>Links cited inside the write-ups</h4>";
  if (urls.length){
    srcHTML += "<ul>";
    for (const u of urls){
      const href = u.startsWith("http") ? u : `https://${u}`;
      srcHTML += `<li><a href="${href}" target="_blank" rel="noreferrer">${escapeHTML(u)}</a></li>`;
    }
    srcHTML += "</ul>";
  } else {
    srcHTML += "<p>No URLs detected in the embedded text.</p>";
  }

  document.getElementById("content-sources").innerHTML = srcHTML;

  // MathJax typeset once after initial render
  if (window.MathJax?.typeset) window.MathJax.typeset();
}

render();
// ---------- Simulation logic (cool version) ----------
let simChart = null;
let selectedMat = "asphalt";

const matProfiles = {
  asphalt: { name:"Asphalt", albedo:0.08, emiss:0.95, mass:40, c:920,  h:12, evap:0.0 },
  concrete:{ name:"Concrete",albedo:0.25, emiss:0.90, mass:50, c:880,  h:10, evap:0.0 },
  white:   { name:"Cool / White Roof", albedo:0.70, emiss:0.90, mass:25, c:900,  h:10, evap:0.0 },
  green:   { name:"Green / Wet", albedo:0.20, emiss:0.95, mass:35, c:4200, h:10, evap:80.0 }
};

const roastLines = {
  asphalt: [
    "Asphalt selected. This one **absorbs** sunlight like it’s charging for a boss fight.",
    "Asphalt: turning photons into pain since forever 💀",
    "Congrats, you picked the *air-fryer* setting."
  ],
  concrete: [
    "Concrete selected. Not as bad as asphalt, but it still stores heat like a savings account.",
    "Concrete: medium reflectance, high ‘I’ll stay warm at night’ energy.",
    "Concrete: the ‘I’m responsible but still problematic’ surface."
  ],
  white: [
    "Cool roof selected. This surface said: ‘No thanks’ to solar radiation.",
    "White roof: the NPC of energy savings (and it works).",
    "White roof: reflect mode ON ✨"
  ],
  green: [
    "Green/wet surface selected. Nature’s AC: evapotranspiration doing the heavy lifting.",
    "Green surface: the only one that *sweats* for the team.",
    "Green surface: biodiversity + cooling. Massive W."
  ]
};

function setBadge(text){
  const b = document.getElementById("badge");
  if (b) b.textContent = text;
}

function selectSurface(key){
  selectedMat = key;

  document.querySelectorAll(".surfaceCard").forEach(card=>{
    card.classList.toggle("active", card.dataset.mat === key);
  });

  const msg = roastLines[key][Math.floor(Math.random() * roastLines[key].length)];
  const msgEl = document.getElementById("surfaceMsg");
  if (msgEl) msgEl.innerHTML = msg;

  setBadge(matProfiles[key].name);
  runSim();
}

function randomSurface(){
  const keys = Object.keys(matProfiles);
  const pick = keys[Math.floor(Math.random()*keys.length)];
  selectSurface(pick);
}

function funFact(){
  const facts = [
    "Fun fact: Dark surfaces can hit **70–80°C** in peak sun (UHI studies). 🔥",
    "Fun fact: ‘Cooling degree-hours’ is basically how long + how far you’re above comfort temp.",
    "Fun fact: High albedo helps in hot climates, but can cause glare if overdone.",
    "Fun fact: Green roofs cool using latent heat (evaporation), not just reflection."
  ];
  const msgEl = document.getElementById("surfaceMsg");
  msgEl.innerHTML = facts[Math.floor(Math.random()*facts.length)];
}

function runSim(){
  const p = matProfiles[selectedMat];

  const peakI = Number(document.getElementById("peakI").value);
  const airT  = Number(document.getElementById("airT").value);
  const wind  = Number(document.getElementById("wind").value);
  const thresh = Number(document.getElementById("thresh").value);

  const dt = 60;                 // 1 min
  const steps = 24*60;
  const sigma = 5.670374419e-8;
  const area = 1.0;

  let T = airT;
  let peakT = -1e9;
  let cdh = 0;

  const times = [];
  const temps = [];

  for (let i=0; i<steps; i++){
    const hour = i/60;

    // smooth solar curve: sunrise 6, sunset 18
    let I = 0;
    if (hour >= 6 && hour <= 18){
      const x = (hour - 6) / 12;
      I = peakI * Math.sin(Math.PI * x);
    }

    const Qin = (1 - p.albedo) * I;
    const hEff = p.h * wind;
    const Qconv = hEff * (T - airT);

    const Tk = T + 273.15;
    const Tak = airT + 273.15;
    const Qrad = p.emiss * sigma * (Math.pow(Tk,4) - Math.pow(Tak,4));

    const Qevap = p.evap;
    const Qnet = Qin - Qconv - Qrad - Qevap;

    T = T + (Qnet * area * dt) / (p.mass * p.c);

    if (T > peakT) peakT = T;
    if (T > thresh) cdh += (T - thresh) * (dt/3600);

    times.push(hour);
    temps.push(T);
  }

  document.getElementById("peakT").textContent = peakT.toFixed(1);
  document.getElementById("cdh").textContent = cdh.toFixed(1);

  // verdict line (fun + informative)
  const v = document.getElementById("verdict");
  if (peakT >= 65) v.textContent = "Verdict: This surface is basically a frying pan. Expect higher AC demand.";
  else if (peakT >= 50) v.textContent = "Verdict: Warm-to-hot. Better than asphalt, but still pushes cooling demand.";
  else v.textContent = "Verdict: Pretty chill. Lower peak temps → lower cooling demand.";

  // plot
  const ctx = document.getElementById("chart").getContext("2d");
  if (simChart) simChart.destroy();

  simChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: times.map(h => h.toFixed(0)),
      datasets: [{
        label: `${p.name} — Surface Temperature (°C)`,
        data: temps,
        tension: 0.25,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: {
        x: { title: { display: true, text: "Hour of day" } },
        y: { title: { display: true, text: "Temperature (°C)" } }
      }
    }
  });
}

// Auto-run once when page loads (nice first impression)
window.addEventListener("load", () => {
  // Only run if the simulation elements exist on the page
  if (document.getElementById("chart")) selectSurface("asphalt");
});
