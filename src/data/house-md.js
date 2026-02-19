// BingeLearn — House M.D., Season 1 Content Data

export const houseMd = {
  id: 'house-md',
  title: 'House M.D.',
  tagline: 'Everybody lies — but the body doesn\'t. A maverick diagnostician solves medical mysteries one episode at a time.',
  description: 'House M.D. follows Dr. Gregory House, a brilliant but misanthropic diagnostician at the fictional Princeton-Plainsboro Teaching Hospital. With his team of specialists, House tackles bizarre, seemingly unsolvable medical cases while battling his own Vicodin addiction and chronic leg pain. Season 1 introduces the core team and establishes the show\'s signature format: patient presents, everyone is wrong, House has a eureka moment, patient is saved (usually).',
  genre: 'Medical Drama',
  bannerImage: '/House-MD.webp',
  bannerGradient: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 40%, #263238 100%)',
  seasons: [
    {
      number: 1,
      episodes: [
        {
          number: 1,
          title: 'Everybody Lies',
          recap: 'A kindergarten teacher collapses during class with seizures and aphasia (loss of speech). House and his team — Cameron, Chase, and Foreman — investigate her mysterious symptoms, which baffle every standard diagnosis. House suspects the patient is hiding something and ultimately discovers she has a tapeworm larva (neurocysticercosis) lodged in her brain — contracted from her secret ham sandwich habit (she claimed to be vegetarian).',
          nuggets: [
            {
              id: 'house-s1e1-01',
              title: 'Neurocysticercosis: The Brain Parasite That\'s More Common Than You Think',
              epistemicTag: 'accurate',
              topicTags: ['Parasitology', 'Neurology'],
              content: `
                <p>The pilot's diagnosis — neurocysticercosis — is a real and significant medical condition. It occurs when the larval form of the pork tapeworm (Taenia solium) migrates to the brain, forming cysts that can cause seizures, headaches, cognitive problems, and sometimes death. It is the leading cause of acquired epilepsy worldwide, particularly in developing countries where sanitation is poor and pigs have access to human feces.</p>
                <p>The show's basic premise — that eating undercooked pork can lead to brain parasites — is simplified but not wrong. In reality, neurocysticercosis is contracted by ingesting tapeworm eggs (usually from fecal contamination), not from eating pork directly. Eating undercooked pork gives you an intestinal tapeworm; the dangerous brain form comes from ingesting the eggs, which can happen through contaminated food or water or contact with an infected person. This distinction matters medically but the show's broader point — that the patient's diet was the key clue — is valid.</p>
                <p>Neurocysticercosis is treatable with anti-parasitic drugs (albendazole or praziquantel) combined with anti-inflammatory steroids and anti-seizure medications. In some cases, surgery to remove the cyst is necessary. The show's depiction of successful treatment after correct diagnosis reflects real clinical outcomes — the challenge is usually getting the diagnosis right, not the treatment itself.</p>
              `,
              sources: [
                { label: 'Neurocysticercosis', url: 'https://en.wikipedia.org/wiki/Neurocysticercosis' },
                { label: 'Taenia Solium', url: 'https://en.wikipedia.org/wiki/Taenia_solium' }
              ]
            },
            {
              id: 'house-s1e1-02',
              title: 'Differential Diagnosis: The Whiteboard Method',
              epistemicTag: 'inspired-by',
              topicTags: ['Medicine', 'Diagnostics'],
              content: `
                <p>House's signature whiteboard — where he lists symptoms and possible diagnoses, crossing them off as tests come back — is a dramatized version of a real medical process called differential diagnosis. In real medicine, physicians generate a list of possible conditions that could explain a patient's symptoms, then systematically eliminate them through testing, history-taking, and observation.</p>
                <p>Real differential diagnosis is far less dramatic than the show depicts. It usually doesn't involve a single genius making connections in a eureka moment but rather a methodical process taught in every medical school. The mnemonic "VINDICATE" helps doctors organize their differentials: Vascular, Infectious, Neoplastic (cancer), Degenerative, Iatrogenic (doctor-caused), Congenital, Autoimmune, Traumatic, Endocrine/metabolic.</p>
                <p>What the show gets right is the fundamental insight that diagnosis is often harder than treatment. In modern medicine, most diseases can be treated effectively once identified — the bottleneck is figuring out what's wrong. House's approach of combining clinical observation with aggressive testing and a willingness to consider rare diagnoses is, philosophically, sound medical practice — even if his methods (breaking into patients' homes, ignoring consent) are ethically horrifying.</p>
              `,
              sources: [
                { label: 'Differential Diagnosis', url: 'https://en.wikipedia.org/wiki/Differential_diagnosis' },
                { label: 'Medical Diagnosis', url: 'https://en.wikipedia.org/wiki/Medical_diagnosis' }
              ]
            }
          ]
        },
        {
          number: 2,
          title: 'Paternity',
          recap: 'A 16-year-old lacrosse player experiences night terrors, hallucinations, and double vision. House suspects that the boy\'s symptoms are caused by a genetic condition inherited from his biological father — leading to the revelation that the patient was adopted. The diagnosis ultimately involves a rare genetic abnormality.',
          nuggets: [
            {
              id: 'house-s1e2-01',
              title: 'Chimerism: When One Person Has Two Sets of DNA',
              epistemicTag: 'accurate',
              topicTags: ['Genetics', 'Biology'],
              content: `
                <p>The episode touches on chimerism — a rare condition where a single person has cells with two different sets of DNA, usually because they absorbed a twin in utero. This is a real phenomenon, and it's more common than most people realize. Estimates suggest that about 1 in 8 single births began as twins (a phenomenon called "vanishing twin syndrome"), and some of these result in chimeric individuals who carry genetic material from both embryos.</p>
                <p>Human chimeras can have striking features: different colored eyes, patches of differently pigmented skin, or even internal organs with different genetic profiles. In one famous case, a woman named Lydia Fairchild nearly lost custody of her children because DNA tests showed she wasn't their genetic mother — her ovaries had different DNA than her blood cells. She was a chimera, and the DNA test had been taken from the "wrong" set of cells.</p>
                <p>The medical implications are real: chimeric individuals can have immune system complications, and genetic testing can produce misleading results. The show uses chimerism as a diagnostic tool — House deduces that the patient's symptoms are caused by a genetic condition that only appears in one of his two cell lines — which is a plausible, if extremely rare, medical scenario.</p>
              `,
              sources: [
                { label: 'Chimera (genetics)', url: 'https://en.wikipedia.org/wiki/Chimera_(genetics)' },
                { label: 'Lydia Fairchild Case', url: 'https://en.wikipedia.org/wiki/Lydia_Fairchild' }
              ]
            }
          ]
        },
        {
          number: 3,
          title: "Occam's Razor",
          recap: 'A college student collapses during sex, presenting with a baffling array of symptoms that seem to point to multiple unrelated conditions. House and the team debate whether a single diagnosis can explain everything (Occam\'s Razor) or whether the patient is simply unlucky enough to have multiple conditions simultaneously. The episode becomes a meditation on diagnostic philosophy.',
          nuggets: [
            {
              id: 'house-s1e3-01',
              title: 'Occam\'s Razor in Medicine: The Simplest Explanation',
              epistemicTag: 'accurate',
              topicTags: ['Philosophy', 'Diagnostics'],
              content: `
                <p>Occam's Razor — the principle that the simplest explanation is usually the correct one — is a genuine cornerstone of medical diagnostic thinking. In medicine, it's expressed as: "When you hear hoofbeats, think horses, not zebras." Doctors are trained to look for a single diagnosis that explains all of a patient's symptoms before considering multiple simultaneous conditions.</p>
                <p>However, the episode correctly points out that Occam's Razor has limitations. In real medicine, patients sometimes do have more than one thing wrong with them — especially elderly patients, who frequently present with multiple co-existing conditions (comorbidities). A competing principle, sometimes called Hickam's Dictum, states: "A patient can have as many diseases as they damn well please." The tension between these two approaches drives real diagnostic debates.</p>
                <p>The episode's resolution — that the patient's multiple symptoms were caused by a pharmacy error (receiving the wrong medication) — illustrates another important medical reality. Iatrogenic illness (harm caused by medical treatment itself) is one of the leading causes of death in the United States, with medication errors alone causing an estimated 7,000-9,000 deaths annually. Sometimes the simplest explanation isn't a disease at all — it's human error.</p>
              `,
              sources: [
                { label: 'Occam\'s Razor', url: 'https://en.wikipedia.org/wiki/Occam%27s_razor' },
                { label: 'Hickam\'s Dictum', url: 'https://en.wikipedia.org/wiki/Hickam%27s_dictum' }
              ]
            }
          ]
        },
        {
          number: 4,
          title: 'Maternity',
          recap: 'Two newborns in the hospital fall critically ill with similar symptoms, suggesting an infection outbreak. The team suspects a virus spreading through the maternity ward — a medical emergency that threatens every baby in the hospital. House must balance his usual focus on puzzling individual cases with the public health urgency of containing an epidemic.',
          nuggets: [
            {
              id: 'house-s1e4-01',
              title: 'Hospital-Acquired Infections: The Hidden Epidemic',
              epistemicTag: 'accurate',
              topicTags: ['Epidemiology', 'Public Health'],
              content: `
                <p>The episode's premise — a dangerous infection spreading through a hospital — reflects one of modern medicine's most serious ongoing challenges. Hospital-acquired infections (HAIs), also called nosocomial infections, affect approximately 1 in 31 hospital patients on any given day in the United States. They cause an estimated 99,000 deaths per year in the US alone, making them one of the leading causes of preventable death.</p>
                <p>Neonatal wards are particularly vulnerable because newborns have immature immune systems. Common neonatal HAIs include Group B Streptococcus, E. coli, and Staphylococcus infections. The show's tension — should they close the maternity ward, potentially causing panic? — reflects real hospital infection control dilemmas. Closing a ward prevents new transmissions but disrupts care for existing patients; staying open risks spreading the infection further.</p>
                <p>The show correctly depicts the infection control protocols: isolating affected patients, tracing contacts, environmental sampling, and hand hygiene enforcement. In real hospitals, dedicated infection control teams monitor pathogen surveillance data and can implement "outbreak protocols" that restrict movement, increase cleaning, and mandate protective equipment. These decisions carry enormous medical, legal, and financial consequences.</p>
              `,
              sources: [
                { label: 'Hospital-Acquired Infection', url: 'https://en.wikipedia.org/wiki/Hospital-acquired_infection' },
                { label: 'Infection Prevention', url: 'https://en.wikipedia.org/wiki/Infection_control' }
              ]
            }
          ]
        },
        {
          number: 5,
          title: 'Damned If You Do',
          recap: 'A nun presents with allergic symptoms that suddenly escalate to hallucinations and dangerous heart irregularities. House suspects the nun is hiding a sinful secret, consistent with his "everybody lies" philosophy. The case explores the intersection of medicine and religious faith as the team investigates whether her symptoms have a physical or psychological origin.',
          nuggets: [
            {
              id: 'house-s1e5-01',
              title: 'Copper Allergy and IUD Complications: A Real Medical Puzzle',
              epistemicTag: 'inspired-by',
              topicTags: ['Medicine', 'Immunology'],
              content: `
                <p>The episode's diagnosis involves a copper IUD (intrauterine device) that the nun had inserted before taking her vows — its copper was causing an allergic hypersensitivity reaction years later. While copper IUDs are extremely safe and widely used (over 150 million worldwide), copper allergies are real and can develop over time. True copper hypersensitivity is rare but documented in medical literature, and it can cause dermatitis, systemic inflammation, and in severe cases, anaphylaxis-like reactions.</p>
                <p>The concept of a foreign body causing delayed immunological reactions is medically sound. The immune system can sometimes develop sensitivity to materials that were initially tolerated — a phenomenon called sensitization. This is why some people develop allergies to metal jewelry after years of wearing it without problems. In the case of an implanted device, the continuous low-level exposure can eventually trigger an immune response.</p>
              `,
              sources: [
                { label: 'Copper IUD', url: 'https://en.wikipedia.org/wiki/Copper_IUDs' },
                { label: 'Contact Dermatitis', url: 'https://en.wikipedia.org/wiki/Contact_dermatitis' }
              ]
            }
          ]
        },
        {
          number: 6,
          title: 'The Socratic Method',
          recap: 'A woman with schizophrenia is brought to the hospital after a blood clot is found in her leg. House suspects that her psychiatric symptoms may actually be caused by an underlying physical condition rather than true schizophrenia — challenging the assumptions that her son, her doctors, and society have made about her for years.',
          nuggets: [
            {
              id: 'house-s1e6-01',
              title: 'Wilson\'s Disease: The Treatable Condition Mistaken for Madness',
              epistemicTag: 'accurate',
              topicTags: ['Neurology', 'Genetics'],
              content: `
                <p>The episode's diagnosis — Wilson's disease masquerading as schizophrenia — represents one of medicine's most important cautionary tales. Wilson's disease is a rare genetic disorder (affecting about 1 in 30,000 people) where the body cannot properly excrete copper, leading to toxic accumulation in the liver, brain, and other organs. When copper builds up in the brain, it can cause psychiatric symptoms that are virtually indistinguishable from schizophrenia: paranoia, hallucinations, personality changes, and cognitive decline.</p>
                <p>The tragedy is that Wilson's disease is treatable. Chelation therapy (drugs that bind to copper and help the body excrete it) and zinc supplements can halt progression and often reverse symptoms, including psychiatric ones. But if it's misdiagnosed as schizophrenia and treated only with antipsychotics, the underlying copper accumulation continues unchecked, causing progressive and eventually fatal organ damage.</p>
                <p>This episode illustrates a broader medical principle: always rule out organic (physical) causes before accepting a psychiatric diagnosis. Numerous conditions can mimic psychiatric illness — thyroid disorders, autoimmune encephalitis, vitamin deficiencies, and neurosyphilis among them. House's insistence on looking for physical explanations isn't just his contrarian personality — it's sound diagnostic practice.</p>
              `,
              sources: [
                { label: 'Wilson\'s Disease', url: 'https://en.wikipedia.org/wiki/Wilson%27s_disease' },
                { label: 'Organic Causes of Psychosis', url: 'https://en.wikipedia.org/wiki/Organic_psychosis' }
              ]
            }
          ]
        },
        {
          number: 7,
          title: 'Fidelity',
          recap: 'A woman is diagnosed with African sleeping sickness despite never having traveled to Africa. House suspects infidelity — that she contracted the disease from her husband, who may have had an affair during a business trip. The team must navigate the ethical minefield of revealing private information that could save the patient but destroy her marriage.',
          nuggets: [
            {
              id: 'house-s1e7-01',
              title: 'African Sleeping Sickness: A Forgotten Tropical Disease',
              epistemicTag: 'accurate',
              topicTags: ['Parasitology', 'Epidemiology'],
              content: `
                <p>African trypanosomiasis (sleeping sickness) is a real and devastating disease caused by Trypanosoma brucei parasites transmitted by the tsetse fly. The disease occurs in sub-Saharan Africa, where the tsetse fly lives, and kills thousands of people annually. It progresses through two stages: the first involves fever, headaches, and joint pain; the second occurs when the parasite crosses the blood-brain barrier, causing confusion, disrupted sleep-wake cycles (hence "sleeping sickness"), and eventually death if untreated.</p>
                <p>The show's premise — contracting sleeping sickness through sexual transmission rather than a tsetse fly bite — is creative but not fully supported by evidence. Trypanosoma brucei is primarily vector-borne (transmitted by flies), and sexual transmission between humans has not been well-documented. However, the parasites do circulate in blood and bodily fluids, so the concept isn't entirely implausible — it's in the gray zone between "inspired by" and "inaccurate." The show uses this ambiguity to serve its plot about marital infidelity.</p>
              `,
              sources: [
                { label: 'African Trypanosomiasis', url: 'https://en.wikipedia.org/wiki/African_trypanosomiasis' },
                { label: 'Tsetse Fly', url: 'https://en.wikipedia.org/wiki/Tsetse_fly' }
              ]
            }
          ]
        },
        {
          number: 8,
          title: 'Poison',
          recap: 'A teenage boy collapses with symptoms that mimic several types of poisoning. Meanwhile, a second patient — a toddler — arrives with similar symptoms. House realizes the cases might be connected and traces both illnesses to a common environmental source. The episode becomes a medical detective story about toxicology and environmental exposure.',
          nuggets: [
            {
              id: 'house-s1e8-01',
              title: 'Pesticide Poisoning: The Chemistry in Your Backyard',
              epistemicTag: 'accurate',
              topicTags: ['Toxicology', 'Chemistry'],
              content: `
                <p>The episode's focus on pesticide poisoning reflects a genuine and widespread public health concern. Organophosphate pesticides — the most commonly implicated class in accidental poisoning — work by inhibiting the enzyme acetylcholinesterase, which is responsible for breaking down the neurotransmitter acetylcholine. When this enzyme is blocked, acetylcholine accumulates at nerve synapses, causing overstimulation of muscles and glands.</p>
                <p>The resulting symptoms follow the memorable mnemonic "SLUDGE": Salivation, Lacrimation (tearing), Urination, Defecation, GI distress, and Emesis (vomiting). In severe cases, the same mechanism affects respiratory muscles, causing breathing failure and death. These same organophosphate compounds are the basis for nerve agents like sarin and VX — chemical weapons that work by the identical mechanism, just at much higher potency.</p>
                <p>Treatment for organophosphate poisoning involves atropine (which blocks acetylcholine receptors, counteracting the excess) and pralidoxime (which can reactivate the inhibited enzyme if given early enough). The show correctly identifies these treatments. The real-world significance is substantial: the WHO estimates that pesticide poisoning causes approximately 200,000 deaths annually worldwide, mostly in agricultural communities in developing countries.</p>
              `,
              sources: [
                { label: 'Organophosphate Poisoning', url: 'https://en.wikipedia.org/wiki/Organophosphate_poisoning' },
                { label: 'Acetylcholinesterase', url: 'https://en.wikipedia.org/wiki/Acetylcholinesterase' }
              ]
            }
          ]
        },
        {
          number: 9,
          title: 'DNR',
          recap: 'A famous jazz musician is admitted with ALS-like symptoms and has signed a DNR (Do Not Resuscitate) order. When he goes into cardiac arrest, House must decide whether to honor the patient\'s wishes or intervene because he believes the diagnosis is wrong. The episode forces a direct confrontation between patient autonomy and medical judgment.',
          nuggets: [
            {
              id: 'house-s1e9-01',
              title: 'DNR Orders: The Ethics of Choosing Death',
              epistemicTag: 'accurate',
              topicTags: ['Ethics', 'Law'],
              content: `
                <p>The DNR (Do Not Resuscitate) order at the center of this episode represents one of the most important and emotionally charged concepts in medical ethics. A DNR is a legal document that instructs medical providers not to perform CPR or other life-saving measures if a patient's heart stops beating. It is an expression of patient autonomy — the principle that competent adults have the right to refuse medical treatment, even life-saving treatment.</p>
                <p>The legal and ethical framework around DNR orders is well-established. In the United States, the Patient Self-Determination Act of 1990 requires hospitals to inform patients of their right to make advance directives, including DNR orders. A doctor who performs CPR on a patient with a valid DNR can face legal consequences, including civil liability and professional sanctions. House's decision to override the DNR — because he believes the diagnosis is wrong — raises a genuinely debated ethical question: should a physician override a patient's wishes if new medical information changes the situation?</p>
                <p>Most medical ethicists would say no — the patient's right to refuse treatment is paramount, even if the doctor disagrees. But the show raises the uncomfortable counter-argument: what if the patient made the DNR decision based on a wrong diagnosis? If the patient thought he had terminal ALS but actually has something treatable, his "informed" consent wasn't truly informed. This is the kind of ethical dilemma that has no clean answer, which is exactly what makes it good television and good moral philosophy.</p>
              `,
              sources: [
                { label: 'Do Not Resuscitate', url: 'https://en.wikipedia.org/wiki/Do_not_resuscitate' },
                { label: 'Medical Ethics: Autonomy', url: 'https://en.wikipedia.org/wiki/Autonomy#In_medicine' }
              ]
            }
          ]
        },
        {
          number: 10,
          title: 'Histories',
          recap: 'A homeless woman has a seizure and is brought to the ER. Foreman is assigned the case but dismisses her symptoms as drug-related. House insists on investigating and discovers that she is a former lawyer who suffered a mental breakdown after a family tragedy. The episode explores cognitive biases in medicine — how a doctor\'s assumptions about a patient\'s social class can affect their medical care.',
          nuggets: [
            {
              id: 'house-s1e10-01',
              title: 'Diagnostic Bias: When Doctors Judge the Patient, Not the Symptoms',
              epistemicTag: 'accurate',
              topicTags: ['Ethics', 'Psychology'],
              content: `
                <p>This episode tackles one of the most well-documented problems in medicine: diagnostic bias based on patient demographics. Research consistently shows that a patient's race, gender, socioeconomic status, and appearance influence the diagnoses and treatments they receive — often unconsciously. Homeless patients, in particular, receive systematically worse care: studies show they are more likely to be dismissed as drug-seeking, less likely to receive diagnostic workups, and more likely to be discharged prematurely.</p>
                <p>The cognitive bias at work is called anchoring bias — the tendency to rely too heavily on the first piece of information encountered (in this case, "homeless = drugs"). Once a doctor anchors on a diagnosis, they tend to seek information that confirms it and dismiss information that contradicts it. This confirmation bias can delay correct diagnosis by hours, days, or longer — sometimes with fatal consequences.</p>
                <p>Medical schools increasingly teach "diagnostic humility" and bias awareness to combat these tendencies. Studies have shown that structured diagnostic checklists, "diagnostic timeouts" (deliberately pausing to reconsider initial impressions), and diverse medical teams can all reduce bias. House's insistence on investigating the case despite Foreman's dismissal illustrates the principle, though his motivation is more intellectual curiosity than social justice.</p>
              `,
              sources: [
                { label: 'Cognitive Biases in Medicine', url: 'https://en.wikipedia.org/wiki/Cognitive_bias#In_medicine' },
                { label: 'Anchoring Bias', url: 'https://en.wikipedia.org/wiki/Anchoring_(cognitive_bias)' }
              ]
            }
          ]
        },
        {
          number: 11,
          title: 'Detox',
          recap: 'Cuddy challenges House to go a week without Vicodin, betting that his diagnostic abilities won\'t suffer. Meanwhile, a teenage girl presents with unexplained liver failure. As House goes through withdrawal, his pain and irritability escalate, but he insists he can function. The episode forces the question: is House a better doctor on drugs or off?',
          nuggets: [
            {
              id: 'house-s1e11-01',
              title: 'Vicodin and Opioid Dependence: The Science of House\'s Addiction',
              epistemicTag: 'accurate',
              topicTags: ['Pharmacology', 'Neuroscience'],
              content: `
                <p>House's Vicodin addiction is one of the show's most medically realistic elements. Vicodin (hydrocodone + acetaminophen) is a prescription opioid painkiller that works by binding to mu-opioid receptors in the brain and spinal cord, mimicking the body's natural endorphins. It effectively reduces pain, but long-term use inevitably leads to tolerance (needing more to achieve the same effect) and physical dependence (experiencing withdrawal symptoms when stopping).</p>
                <p>The withdrawal symptoms House experiences — muscle aches, sweating, agitation, insomnia, nausea — are accurately depicted. Opioid withdrawal isn't typically life-threatening (unlike alcohol or benzodiazepine withdrawal, which can be fatal), but it's extraordinarily unpleasant and can last 5-10 days for the acute phase, with psychological symptoms persisting for months. The show correctly shows that House's pain also intensifies during withdrawal — this is a real phenomenon called opioid-induced hyperalgesia, where chronic opioid use actually increases pain sensitivity.</p>
                <p>House's situation illustrates a genuine medical dilemma: he has a real, painful condition (muscle death in his thigh from an infarcted leg) that legitimately requires pain management, but he has also become dependent on his medication. This overlap between legitimate pain treatment and addiction is at the heart of the opioid crisis, and there is no easy solution — the show is honest about this complexity.</p>
              `,
              sources: [
                { label: 'Hydrocodone', url: 'https://en.wikipedia.org/wiki/Hydrocodone' },
                { label: 'Opioid Use Disorder', url: 'https://en.wikipedia.org/wiki/Opioid_use_disorder' }
              ]
            }
          ]
        },
        {
          number: 12,
          title: 'Sports Medicine',
          recap: 'A star high school baseball pitcher collapses on the mound. The team discovers he\'s been using performance-enhancing drugs, but House suspects the drugs are masking a more serious underlying condition. The episode explores the culture of competitive sports, performance pressure, and the medical risks athletes take to compete.',
          nuggets: [
            {
              id: 'house-s1e12-01',
              title: 'Performance-Enhancing Drugs: The Real Medical Risks',
              epistemicTag: 'accurate',
              topicTags: ['Pharmacology', 'Sports Medicine'],
              content: `
                <p>The episode's exploration of performance-enhancing drug (PED) use in young athletes reflects a genuine and growing concern. Anabolic steroids — synthetic versions of testosterone — are the most commonly abused PEDs. They increase muscle mass and strength but carry serious side effects: liver damage, cardiovascular disease, hormonal disruption, mood disorders ("roid rage"), and in adolescents, premature closure of growth plates that can permanently stunt height.</p>
                <p>The show correctly identifies a key medical problem with PED use: the drugs can mask symptoms of underlying conditions. Steroids suppress inflammation and pain, which can allow an athlete to compete through injuries that would otherwise force them to seek medical attention. This masking effect means that by the time symptoms finally break through, the underlying condition may have progressed significantly — exactly the scenario the episode depicts.</p>
                <p>Studies suggest that 4-12% of high school boys have used anabolic steroids, driven by competitive pressure, body image issues, and the visibility of PED-enhanced physiques in professional sports and social media. The medical community considers adolescent PED use particularly dangerous because it disrupts the already complex hormonal changes of puberty, potentially causing permanent damage to the endocrine system.</p>
              `,
              sources: [
                { label: 'Anabolic Steroids', url: 'https://en.wikipedia.org/wiki/Anabolic_steroid' },
                { label: 'Doping in Sports', url: 'https://en.wikipedia.org/wiki/Doping_in_sport' }
              ]
            }
          ]
        },
        {
          number: 13,
          title: 'Cursed',
          recap: 'A 12-year-old boy falls gravely ill after visiting what he believes to be a haunted house. His superstitious father becomes convinced the boy is cursed. House must contend with the father\'s irrationality while investigating a genuine medical mystery. The tension between superstition and science runs throughout the episode.',
          nuggets: [
            {
              id: 'house-s1e13-01',
              title: 'The Nocebo Effect: When Belief Makes You Sick',
              epistemicTag: 'bonus-insight',
              topicTags: ['Psychology', 'Neuroscience'],
              content: `
                <p>The father's conviction that his son is "cursed" touches on a clinically documented phenomenon: the nocebo effect. While the better-known placebo effect describes improvement from believing a treatment will help, the nocebo effect is its dark mirror — measurable harm caused by the belief that something will hurt you. Studies have documented patients experiencing real physical symptoms — pain, nausea, even measurable changes in blood chemistry — purely from negative expectations.</p>
                <p>In one famous study, patients told that a harmless injection might cause headaches were significantly more likely to develop headaches than a control group who received the same injection without the warning. In extreme cases, the nocebo effect can contribute to death — a phenomenon documented in cultures where "voodoo death" or "bone-pointing" is practiced. Physiological mechanisms include stress-induced cortisol spikes, elevated heart rate, and immune suppression triggered by psychological distress.</p>
                <p>While the episode's actual diagnosis is a physical one (not psychosomatic), the subplot about the father's belief affecting his own health illustrates how powerful the nocebo effect can be. Modern medicine increasingly recognizes that separating "real" physical illness from "psychological" influence is far more difficult than traditionally assumed — the mind and body are not separate systems but deeply interconnected ones.</p>
              `,
              sources: [
                { label: 'Nocebo Effect', url: 'https://en.wikipedia.org/wiki/Nocebo' },
                { label: 'Psychosomatic Medicine', url: 'https://en.wikipedia.org/wiki/Psychosomatic_medicine' }
              ]
            }
          ]
        },
        {
          number: 14,
          title: 'Control',
          recap: 'A powerful female CEO collapses with heart failure. House suspects her ruthless business persona masks a history of bulimia, which may be causing her cardiac problems. The patient fiercely resists investigation into her personal history, creating a power struggle between two control-obsessed personalities. The case explores how eating disorders can cause long-term organ damage.',
          nuggets: [
            {
              id: 'house-s1e14-01',
              title: 'Bulimia and the Heart: Hidden Long-Term Damage',
              epistemicTag: 'accurate',
              topicTags: ['Medicine', 'Cardiology'],
              content: `
                <p>The episode's connection between bulimia and heart failure is based on well-documented medical evidence. Bulimia nervosa causes repeated cycles of binge eating and purging (vomiting, laxative abuse, or excessive exercise), which create dangerous electrolyte imbalances — particularly low potassium (hypokalemia). Potassium is essential for normal heart rhythm, and chronic depletion can cause cardiac arrhythmias, heart muscle weakness (cardiomyopathy), and ultimately heart failure.</p>
                <p>The insidious danger of bulimia-related cardiac damage is that it can develop silently over years. Many patients with bulimia maintain a normal or near-normal weight (unlike anorexia, which causes visible emaciation), making the condition harder to detect. By the time cardiac symptoms appear, the damage may be severe and partially irreversible. The show accurately portrays this — the CEO appears healthy and successful on the outside while her heart is failing from years of hidden purging.</p>
                <p>Eating disorders have the highest mortality rate of any mental illness — higher than depression, schizophrenia, or substance abuse. Cardiac complications are the leading cause of death in eating disorder patients. The show's depiction of a high-functioning professional hiding an eating disorder reflects clinical reality: bulimia is often called the "secret epidemic" because it disproportionately affects high-achieving individuals and is easily concealed.</p>
              `,
              sources: [
                { label: 'Bulimia and Cardiac Effects', url: 'https://en.wikipedia.org/wiki/Bulimia_nervosa#Health_effects' },
                { label: 'Eating Disorder Mortality', url: 'https://en.wikipedia.org/wiki/Eating_disorder#Mortality' }
              ]
            }
          ]
        },
        {
          number: 15,
          title: 'Mob Rules',
          recap: 'A young mobster is brought in with liver failure after being shot. His brother wants House to save him so he can testify in a trial — but the patient doesn\'t want to testify. House faces an unusual ethical situation where the "right" medical decision depends on who is asking and why. The case involves liver transplant ethics and organized crime.',
          nuggets: [
            {
              id: 'house-s1e15-01',
              title: 'Organ Transplant Allocation: Who Gets the Liver?',
              epistemicTag: 'bonus-insight',
              topicTags: ['Ethics', 'Surgery'],
              content: `
                <p>The episode touches on one of medicine's most ethically fraught areas: organ transplant allocation. In the United States, the United Network for Organ Sharing (UNOS) manages the transplant waiting list using a scoring system called MELD (Model for End-Stage Liver Disease) that prioritizes patients based on medical urgency, not social worth. The system is deliberately designed to prevent judgments about who "deserves" an organ.</p>
                <p>But the principle is more complicated in practice than in theory. Should a criminal receive the same priority as a law-abiding citizen? What about an alcoholic who destroyed their own liver? What about a wealthy person who can afford to register at multiple transplant centers? These questions have no universally agreed-upon answers, and transplant ethics committees at hospitals regularly face agonizing decisions.</p>
                <p>The numbers make the problem acute: in the US, there are roughly 10,000 people waiting for a liver transplant at any given time, but only about 8,000 liver transplants are performed annually. This means that every transplant given to one patient is effectively denied to another. The show uses the mob setting to dramatize this ethical tension, but the underlying dilemma is one that transplant teams face every day with ordinary patients.</p>
              `,
              sources: [
                { label: 'Organ Transplant Ethics', url: 'https://en.wikipedia.org/wiki/Organ_transplantation#Ethics' },
                { label: 'MELD Score', url: 'https://en.wikipedia.org/wiki/Model_for_End-Stage_Liver_Disease' }
              ]
            }
          ]
        },
        {
          number: 16,
          title: 'Heavy',
          recap: 'A morbidly obese woman is admitted with a heart attack, but House suspects her weight is a symptom, not the cause, of her illness. While the team assumes her problems are weight-related, House investigates whether an underlying condition is driving both her obesity and her cardiac symptoms. The episode challenges assumptions about weight and health.',
          nuggets: [
            {
              id: 'house-s1e16-01',
              title: 'Cushing\'s Syndrome: When Obesity Is a Symptom',
              epistemicTag: 'accurate',
              topicTags: ['Endocrinology', 'Diagnostics'],
              content: `
                <p>The episode's diagnostic approach — investigating whether obesity might be caused by a hormonal disorder rather than simply overeating — introduces Cushing's syndrome, a condition caused by prolonged exposure to excess cortisol. Cortisol is the body's primary stress hormone, and when produced in excess (either by an adrenal tumor or a pituitary tumor), it causes a distinctive pattern of symptoms: central obesity (weight gain concentrated in the trunk and face), muscle wasting in the limbs, thin skin that bruises easily, high blood pressure, diabetes, and mood disturbances.</p>
                <p>Cushing's syndrome affects about 10-15 people per million per year, making it rare but important because it's treatable. If the excess cortisol comes from a tumor, surgical removal often cures the condition — including reversing the weight gain. The tragedy of missed Cushing's diagnoses is that patients may spend years being told to "just lose weight" when their obesity has a specific, treatable medical cause.</p>
                <p>The broader medical lesson — that obesity can be a symptom rather than a cause — challenges a widespread bias in medicine. Research on weight stigma in healthcare shows that obese patients receive shorter appointments, fewer diagnostic tests, and less empathetic communication from doctors. Like the homelessness bias in Episode 10, weight bias can lead to anchoring on "the obvious" explanation and missing the actual diagnosis.</p>
              `,
              sources: [
                { label: 'Cushing\'s Syndrome', url: 'https://en.wikipedia.org/wiki/Cushing%27s_syndrome' },
                { label: 'Weight Stigma in Healthcare', url: 'https://en.wikipedia.org/wiki/Weight_stigma#Healthcare' }
              ]
            }
          ]
        },
        {
          number: 17,
          title: 'Role Model',
          recap: 'A senator collapses during a campaign event. House discovers the politician is HIV-positive, raising questions about medical confidentiality, public disclosure, and the intersection of health and politics. Meanwhile, Vogler — the hospital\'s new billionaire chairman — pressures House to endorse a pharmaceutical product.',
          nuggets: [
            {
              id: 'house-s1e17-01',
              title: 'HIV/AIDS in the 2000s: A Changed Landscape',
              epistemicTag: 'bonus-insight',
              topicTags: ['Immunology', 'Public Health'],
              content: `
                <p>The episode's treatment of HIV as a career-ending secret reflects attitudes that were already changing when the show aired in 2005 but still carried enormous social weight. By the mid-2000s, antiretroviral therapy (ART) had transformed HIV from a death sentence into a manageable chronic condition. Patients on effective ART can have near-normal life expectancy and, crucially, achieve "undetectable" viral loads — meaning they cannot transmit the virus sexually (a principle now summarized as U=U: Undetectable = Untransmittable).</p>
                <p>The medical confidentiality issue the episode raises is legally straightforward but socially complicated. Under HIPAA (Health Insurance Portability and Accountability Act), a patient's HIV status is protected health information that cannot be disclosed without consent. However, public figures face intense pressure to disclose health conditions, and the tension between personal medical privacy and public interest is a genuine ongoing debate — particularly for political leaders.</p>
              `,
              sources: [
                { label: 'HIV/AIDS Treatment', url: 'https://en.wikipedia.org/wiki/Management_of_HIV/AIDS' },
                { label: 'Medical Confidentiality', url: 'https://en.wikipedia.org/wiki/Medical_privacy' }
              ]
            }
          ]
        },
        {
          number: 18,
          title: 'Babies & Bathwater',
          recap: 'A pregnant woman develops dangerous blood clots, and the team must determine whether to treat the mother at the risk of harming the fetus, or protect the fetus at the risk of the mother\'s life. Meanwhile, Vogler forces a vote to fire House, putting the entire diagnostics department\'s existence at stake.',
          nuggets: [
            {
              id: 'house-s1e18-01',
              title: 'Maternal-Fetal Conflict: Medicine\'s Hardest Dilemma',
              epistemicTag: 'accurate',
              topicTags: ['Ethics', 'Obstetrics'],
              content: `
                <p>The episode presents one of medicine's most genuinely agonizing ethical dilemmas: when treating the mother threatens the fetus, and protecting the fetus threatens the mother. This maternal-fetal conflict arises in real clinical practice with conditions like cancer during pregnancy, severe preeclampsia, and blood clotting disorders. Doctors and patients face impossible trade-offs where no option is risk-free.</p>
                <p>Blood-thinning medications (anticoagulants) like warfarin are effective against blood clots but can cause birth defects and fetal bleeding. Alternatives like heparin are safer for the fetus but less effective for certain conditions. The decision involves balancing probability vs. severity of harm to two patients simultaneously — a calculation that no algorithm can fully resolve because it involves value judgments about acceptable risk.</p>
                <p>Legally and ethically, the pregnant woman's autonomy over her own body is generally prioritized in Western medicine — she can refuse treatment even if it risks the fetus. But the practical reality is that most mothers are willing to accept significant personal risk to protect their baby, which can pressure doctors into under-treating the mother. The show captures this tension authentically, without pretending there's an easy answer.</p>
              `,
              sources: [
                { label: 'Maternal-Fetal Conflict', url: 'https://en.wikipedia.org/wiki/Maternal-fetal_conflict' },
                { label: 'Anticoagulation in Pregnancy', url: 'https://en.wikipedia.org/wiki/Anticoagulation_in_pregnancy' }
              ]
            }
          ]
        },
        {
          number: 19,
          title: 'Kids',
          recap: 'During a swimming competition at the hospital\'s charity event, a diver becomes critically ill, and several other children at the event develop symptoms of meningitis. House must manage a potential meningitis outbreak while simultaneously diagnosing the diver\'s separate, mysterious condition — splitting his attention between a public health emergency and an individual medical puzzle.',
          nuggets: [
            {
              id: 'house-s1e19-01',
              title: 'Meningitis: Why It Terrifies Every Doctor',
              epistemicTag: 'accurate',
              topicTags: ['Epidemiology', 'Neurology'],
              content: `
                <p>The episode's meningitis outbreak scenario reflects one of infectious disease's most feared scenarios. Bacterial meningitis — inflammation of the membranes surrounding the brain and spinal cord — can kill within hours of symptom onset. Even with treatment, the mortality rate for bacterial meningitis is 10-15%, and 10-20% of survivors suffer permanent complications including hearing loss, brain damage, and limb amputation (due to septicemia causing tissue death).</p>
                <p>The show accurately depicts the urgency of meningitis management: immediate antibiotic treatment, lumbar puncture for diagnosis, contact tracing, and prophylactic antibiotics for anyone exposed. The speed of onset is not exaggerated — Neisseria meningitidis (meningococcal meningitis) can progress from initial symptoms to death in under 24 hours. This is why any suspected case triggers an immediate public health response.</p>
                <p>Meningococcal meningitis spreads through respiratory droplets and close contact, which is why outbreaks often occur in settings where people are in close proximity — dormitories, military barracks, and, as the episode depicts, sporting events. Vaccination has dramatically reduced meningitis incidence in developed countries, but outbreaks still occur, and the disease remains a major killer in sub-Saharan Africa's "meningitis belt."</p>
              `,
              sources: [
                { label: 'Meningitis', url: 'https://en.wikipedia.org/wiki/Meningitis' },
                { label: 'Meningococcal Disease', url: 'https://en.wikipedia.org/wiki/Meningococcal_disease' }
              ]
            }
          ]
        },
        {
          number: 20,
          title: 'Love Hurts',
          recap: 'A man collapses during a date, and his unusual symptoms suggest a rare condition. The case becomes complicated when it emerges that the patient is in a BDSM relationship, introducing questions about lifestyle, consent, and medical judgment. House must set aside personal reactions to focus on the medicine.',
          nuggets: [
            {
              id: 'house-s1e20-01',
              title: 'Erdheim-Chester Disease: The Rarest of the Rare',
              epistemicTag: 'accurate',
              topicTags: ['Hematology', 'Diagnostics'],
              content: `
                <p>The episode features a diagnosis of Erdheim-Chester disease (ECD) — one of the rarest diseases in medical literature, with fewer than 1,000 cases reported worldwide since its discovery in 1930. ECD is a form of non-Langerhans cell histiocytosis — a condition where certain immune cells (histiocytes) proliferate abnormally and infiltrate various organs, including bones, lungs, kidneys, heart, and brain.</p>
                <p>House's diagnosis of such an extraordinarily rare condition reflects the show's broader philosophy: when common diagnoses don't fit, consider rare ones. In medical education, this is sometimes framed as "when you've excluded the horses, start looking for zebras." ECD is the ultimate zebra — so rare that most doctors will never see a case in their entire career. Its symptoms mimic many other conditions, making diagnosis extremely difficult without knowing to look for it.</p>
                <p>Since the show aired, treatment for ECD has actually improved significantly. The discovery that most ECD cases involve BRAF V600E mutations (the same mutation found in some melanomas) has led to targeted therapies like vemurafenib that can dramatically improve outcomes. House M.D. occasionally highlighted conditions that later saw real treatment breakthroughs — a testament to how rare disease awareness can drive research funding and attention.</p>
              `,
              sources: [
                { label: 'Erdheim-Chester Disease', url: 'https://en.wikipedia.org/wiki/Erdheim%E2%80%93Chester_disease' },
                { label: 'Histiocytosis', url: 'https://en.wikipedia.org/wiki/Histiocytosis' }
              ]
            }
          ]
        },
        {
          number: 21,
          title: 'Three Stories',
          recap: 'In a flashback-structured episode widely considered one of the best in the series, House lectures a medical school class using three patient stories involving leg pain. The stories gradually reveal the truth about House\'s own leg injury — the muscle infarction that led to his chronic pain and Vicodin dependency. We learn that House chose a risky middle-ground treatment that preserved his leg but left him in permanent agony.',
          nuggets: [
            {
              id: 'house-s1e21-01',
              title: 'Muscle Infarction: The Injury That Created House',
              epistemicTag: 'accurate',
              topicTags: ['Medicine', 'Vascular'],
              content: `
                <p>House's backstory — a blood clot in his thigh that caused muscle death (infarction) — is based on a real medical condition. Muscle infarction occurs when blood supply to a muscle is blocked, causing the tissue to die (necrosis). In the leg, this typically involves the quadriceps or other large thigh muscles and can be caused by deep vein thrombosis, arterial embolism, or compartment syndrome.</p>
                <p>The three treatment options House describes in his lecture are medically accurate. Conservative treatment (blood thinners and monitoring) risks muscle death spreading; amputation eliminates the problem but costs the leg; the middle option House chose — removing only the dead muscle while preserving the leg — saves the limb but leaves a large deficit in the thigh muscle, resulting in chronic pain, weakness, and disability. This is exactly what real patients with significant muscle infarction face.</p>
                <p>House's choice to keep his leg at the cost of chronic pain is a fascinating medical decision. Most patients make the same choice — the psychological trauma of amputation is severe, and people tend to overestimate their ability to cope with chronic pain. Research on chronic pain patients shows that many would make a different choice if they could go back, because chronic pain is uniquely debilitating in ways that are hard to anticipate. House's bitterness, addiction, and personality are all shaped by living with pain that never stops — a psychologically realistic portrait.</p>
              `,
              sources: [
                { label: 'Muscle Infarction', url: 'https://en.wikipedia.org/wiki/Infarction' },
                { label: 'Chronic Pain', url: 'https://en.wikipedia.org/wiki/Chronic_pain' }
              ]
            },
            {
              id: 'house-s1e21-02',
              title: 'Medical Decision-Making Under Uncertainty',
              epistemicTag: 'bonus-insight',
              topicTags: ['Ethics', 'Psychology'],
              content: `
                <p>House's lecture about three leg cases is, underneath its dramatic structure, a masterclass in medical decision-making under uncertainty. Each case presents the same symptom (leg pain) with dramatically different causes and outcomes, illustrating a core lesson: the same presentation can require radically different treatments, and the wrong choice can be catastrophic.</p>
                <p>This concept — that identical symptoms can have wildly different causes — is the fundamental challenge of medicine. A headache could be stress, dehydration, a brain tumor, or meningitis. Choosing the right investigation and treatment requires combining probability (what's most likely?), severity (what's most dangerous if missed?), and patient factors (age, history, risk tolerance). Bayesian reasoning — updating your probability estimates as new information arrives — is the mathematical framework for this process, and it's increasingly taught in medical schools.</p>
                <p>The episode also illustrates the psychology of regret in medical decisions. House chose a middle path that left him in chronic pain; he might have been better off with amputation, and he'll never know. This "counterfactual thinking" — endlessly replaying what might have been — is a known source of psychological suffering. Research shows that people regret inaction (things they didn't do) more than action (things they did) over the long term, which adds another layer to House's torment: he chose to act but might wonder if doing nothing would have been better.</p>
              `,
              sources: [
                { label: 'Medical Decision-Making', url: 'https://en.wikipedia.org/wiki/Medical_decision-making' },
                { label: 'Bayesian Inference in Medicine', url: 'https://en.wikipedia.org/wiki/Bayesian_inference' }
              ]
            }
          ]
        },
        {
          number: 22,
          title: 'Honeymoon',
          recap: 'House\'s ex-girlfriend Stacy brings her husband Mark to the hospital with mysterious abdominal pain. As House investigates, he discovers that Mark\'s condition is eerily similar to his own leg injury years ago — presenting House with the agonizing choice of whether to intervene against the patient\'s wishes, potentially saving his life but causing the same chronic pain that House himself endures. The season finale forces House to confront his own history and ask: would he make the same choice again?',
          nuggets: [
            {
              id: 'house-s1e22-01',
              title: 'Acute Intermittent Porphyria: The Royal Disease\'s Cousin',
              epistemicTag: 'accurate',
              topicTags: ['Genetics', 'Medicine'],
              content: `
                <p>The season finale's diagnosis — porphyria — belongs to a family of rare genetic disorders that affect the production of heme, the iron-containing molecule in hemoglobin that carries oxygen in red blood cells. Acute intermittent porphyria (AIP) causes episodes of severe abdominal pain, nausea, psychiatric symptoms, and neurological problems that can mimic many other conditions, making it notoriously difficult to diagnose.</p>
                <p>Porphyria has fascinating historical connections. A related form — variegate porphyria — has been proposed as the cause of King George III's famous "madness," and porphyria patients' sensitivity to sunlight may have contributed to vampire legends in folklore. The disease can cause skin that blisters in sunlight, receding gums (making teeth appear fang-like), and psychiatric episodes — all features of classic vampire mythology.</p>
                <p>The medical irony that drives the episode — porphyria causing a vascular crisis similar to House's own injury — is clinically plausible. Porphyria can cause vasospasm (blood vessel constriction) that mimics thrombotic events, potentially leading to tissue ischemia (oxygen deprivation) and infarction. This sets up the finale's devastating parallel: House must watch another person face the same impossible choice he faced, knowing how the chronic aftermath will feel.</p>
              `,
              sources: [
                { label: 'Acute Intermittent Porphyria', url: 'https://en.wikipedia.org/wiki/Acute_intermittent_porphyria' },
                { label: 'Porphyria and Vampires', url: 'https://en.wikipedia.org/wiki/Porphyria#Vampire_legend' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
