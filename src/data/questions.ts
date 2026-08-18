/**
 * Mulwa Clinical Exam Portal
 * Examination Repository & Question Bank
 *
 * Contains standardized clinical nursing examination papers with detailed
 * rationales, option breakdowns, and set partitioning.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { Question, PastPaper } from '../types';

/** Master collection of curated past examination papers */
export const PAST_PAPERS: PastPaper[] = [
  {
    "id": "eoy1-anatomy-physiology-2023",
    "year": "2023",
    "title": "End of Year 1 Exam (1)",
    "totalQuestions": 70,
    "totalSets": 4,
    "questions": [
      {
        "id": "eoy1-anatomy-physiology-2023_q1",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "What is the basic unit of life?",
        "options": {
          "A": "Tissue",
          "B": "Organ",
          "C": "Cell",
          "D": "System"
        },
        "correctAnswer": "C",
        "explanation": "The cell (C) is correct because it is the smallest structural and functional unit capable of independently carrying out all life processes. Tissue (A) is incorrect because a tissue is a group of similar cells working together, one level above the cell. Organ (B) is incorrect because an organ is made of multiple tissue types combined, an even higher level of organization. System (D) is incorrect because a system is a group of organs working together, the highest level below the whole organism."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q2",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which of the following is NOT a function of the skeletal system?",
        "options": {
          "A": "Support",
          "B": "Protection",
          "C": "Movement",
          "D": "Digestion"
        },
        "correctAnswer": "D",
        "explanation": "Digestion (D) is correct as the answer because breaking down food is carried out by the digestive system, not the skeleton. Support (A) is incorrect as an answer because bones do provide the structural framework that holds the body upright. Protection (B) is incorrect as an answer because bones such as the skull and ribs shield vital organs. Movement (C) is incorrect as an answer because bones act as levers that muscles pull on to produce movement."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q3",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The muscular system is responsible for:",
        "options": {
          "A": "Protection of organs",
          "B": "Movement of the body",
          "C": "Production of blood cells",
          "D": "Storage of minerals"
        },
        "correctAnswer": "B",
        "explanation": "Movement of the body (B) is correct because muscle contraction pulling on bones is what generates body movement and posture. Protection of organs (A) is incorrect because that is primarily a skeletal function (e.g., ribs, skull). Production of blood cells (C) is incorrect because hematopoiesis occurs in bone marrow, part of the skeletal system. Storage of minerals (D) is incorrect because bones, not muscles, store calcium and phosphorus."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q4",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which type of muscle is found in the heart?",
        "options": {
          "A": "Skeletal muscle",
          "B": "Smooth muscle",
          "C": "Cardiac muscle",
          "D": "Voluntary muscle"
        },
        "correctAnswer": "C",
        "explanation": "Cardiac muscle (C) is correct because it is the specialized, striated, involuntary muscle type unique to the heart wall. Skeletal muscle (A) is incorrect because it attaches to bones and is under voluntary control, not found in the heart. Smooth muscle (B) is incorrect because it lines hollow organs like the intestines and blood vessels, not the heart. Voluntary muscle (D) is incorrect because it is simply another name for skeletal muscle, which does not make up the heart."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q5",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The nervous system is divided into:",
        "options": {
          "A": "Sensory and motor systems",
          "B": "Central and peripheral nervous systems",
          "C": "Sympathetic and parasympathetic systems",
          "D": "Somatic and autonomic systems"
        },
        "correctAnswer": "B",
        "explanation": "Central and peripheral nervous systems (B) is correct because this is the primary anatomical division: the CNS (brain and spinal cord) and the PNS (all nerves outside it). Sensory and motor systems (A) is incorrect because these describe functional pathways within the nervous system, not its main structural division. Sympathetic and parasympathetic systems (C) is incorrect because these are subdivisions of the autonomic nervous system, itself a branch of the PNS. Somatic and autonomic systems (D) is incorrect because these are subdivisions of the peripheral nervous system, not the top-level division."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q6",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which organ is part of the digestive system?",
        "options": {
          "A": "Kidney",
          "B": "Liver",
          "C": "Lung",
          "D": "Heart"
        },
        "correctAnswer": "B",
        "explanation": "Liver (B) is correct because it is an accessory digestive organ that produces bile for fat digestion. Kidney (A) is incorrect because it belongs to the urinary system, filtering blood to form urine. Lung (C) is incorrect because it belongs to the respiratory system, handling gas exchange. Heart (D) is incorrect because it belongs to the cardiovascular system, pumping blood."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q7",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The respiratory system is responsible for:",
        "options": {
          "A": "Pumping blood",
          "B": "Gas exchange",
          "C": "Filtering waste",
          "D": "Producing hormones"
        },
        "correctAnswer": "B",
        "explanation": "Gas exchange (B) is correct because the respiratory system's core role is bringing oxygen into the blood and removing carbon dioxide. Pumping blood (A) is incorrect because that is the heart's function within the cardiovascular system. Filtering waste (C) is incorrect because that is performed by the kidneys in the urinary system. Producing hormones (D) is incorrect because that is the role of endocrine glands, not the lungs."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q8",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which of the following is a component of blood?",
        "options": {
          "A": "Neurons",
          "B": "Nephrons",
          "C": "Platelets",
          "D": "Alveoli"
        },
        "correctAnswer": "C",
        "explanation": "Platelets (C) is correct because they are one of the formed elements of blood, essential for clotting. Neurons (A) is incorrect because these are nerve cells belonging to nervous tissue, not blood. Nephrons (B) is incorrect because these are the functional units of the kidney, not blood components. Alveoli (D) is incorrect because these are the tiny air sacs of the lungs, not blood components."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q9",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The cardiovascular system consists of:",
        "options": {
          "A": "Heart and blood vessels",
          "B": "Lungs and airways",
          "C": "Kidneys and bladder",
          "D": "Stomach and intestines"
        },
        "correctAnswer": "A",
        "explanation": "Heart and blood vessels (A) is correct because these together form the pump and pipeline network that circulates blood. Lungs and airways (B) is incorrect because these make up the respiratory system. Kidneys and bladder (C) is incorrect because these make up the urinary system. Stomach and intestines (D) is incorrect because these make up the digestive system."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q10",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which gland is known as the \"master gland\"?",
        "options": {
          "A": "Thyroid gland",
          "B": "Adrenal gland",
          "C": "Pituitary gland",
          "D": "Pineal gland"
        },
        "correctAnswer": "C",
        "explanation": "Pituitary gland (C) is correct because it secretes hormones that regulate the activity of most other endocrine glands, earning its 'master gland' title. Thyroid gland (A) is incorrect because it is itself regulated by the pituitary, not the controller of other glands. Adrenal gland (B) is incorrect because it too is regulated by pituitary hormones (ACTH) rather than regulating others. Pineal gland (D) is incorrect because it mainly secretes melatonin for circadian rhythm and does not control other endocrine glands."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q11",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The integumentary system includes:",
        "options": {
          "A": "Bones and joints",
          "B": "Skin, hair, and nails",
          "C": "Muscles and tendons",
          "D": "Nerves and brain"
        },
        "correctAnswer": "B",
        "explanation": "Skin, hair, and nails (B) is correct because these structures together make up the integumentary system, protecting the body and regulating temperature. Bones and joints (A) is incorrect because these belong to the skeletal system. Muscles and tendons (C) is incorrect because these belong to the muscular system. Nerves and brain (D) is incorrect because these belong to the nervous system."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q12",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which organ filters blood and produces urine?",
        "options": {
          "A": "Liver",
          "B": "Pancreas",
          "C": "Kidney",
          "D": "Spleen"
        },
        "correctAnswer": "C",
        "explanation": "Kidney (C) is correct because its nephrons filter blood and form urine as a means of waste removal. Liver (A) is incorrect because it metabolizes nutrients and detoxifies substances but does not produce urine. Pancreas (B) is incorrect because it produces digestive enzymes and hormones like insulin, not urine. Spleen (D) is incorrect because it filters blood cells and supports immunity, not urine production."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q13",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The lymphatic system is involved in:",
        "options": {
          "A": "Digestion",
          "B": "Immunity",
          "C": "Reproduction",
          "D": "Respiration"
        },
        "correctAnswer": "B",
        "explanation": "Immunity (B) is correct because the lymphatic system drains excess fluid and houses lymphocytes and lymph nodes central to immune defense. Digestion (A) is incorrect because that is the role of the digestive system. Reproduction (C) is incorrect because that is the role of the reproductive system. Respiration (D) is incorrect because that is the role of the respiratory system."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q14",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which bone protects the brain?",
        "options": {
          "A": "Vertebrae",
          "B": "Skull",
          "C": "Ribs",
          "D": "Pelvis"
        },
        "correctAnswer": "B",
        "explanation": "Skull (B) is correct because the cranium forms a rigid bony case enclosing and protecting the brain. Vertebrae (A) is incorrect because these protect the spinal cord, not the brain directly. Ribs (C) is incorrect because these protect thoracic organs like the heart and lungs. Pelvis (D) is incorrect because this protects lower abdominal and reproductive organs."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q15",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The functional unit of the nervous system is:",
        "options": {
          "A": "Nephron",
          "B": "Neuron",
          "C": "Alveolus",
          "D": "Sarcomere"
        },
        "correctAnswer": "B",
        "explanation": "Neuron (B) is correct because it is the basic structural and functional unit specialized for transmitting nerve impulses. Nephron (A) is incorrect because that is the functional unit of the kidney. Alveolus (C) is incorrect because that is the functional gas-exchange unit of the lung. Sarcomere (D) is incorrect because that is the functional contractile unit of muscle."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q16",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which type of joint allows the most movement?",
        "options": {
          "A": "Fibrous joint",
          "B": "Cartilaginous joint",
          "C": "Synovial joint",
          "D": "Fixed joint"
        },
        "correctAnswer": "C",
        "explanation": "Synovial joint (C) is correct because it contains a fluid-filled cavity that permits free, wide-ranging movement, as seen in the knee and shoulder. Fibrous joint (A) is incorrect because it is largely immobile, joined by dense connective tissue (e.g., skull sutures). Cartilaginous joint (B) is incorrect because it allows only slight movement, cushioned by cartilage (e.g., between vertebrae). Fixed joint (D) is incorrect because, as the name implies, it permits little to no movement at all."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q17",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The main function of red blood cells is to:",
        "options": {
          "A": "Fight infection",
          "B": "Clot blood",
          "C": "Transport oxygen",
          "D": "Produce antibodies"
        },
        "correctAnswer": "C",
        "explanation": "Transport oxygen (C) is correct because red blood cells contain hemoglobin, which binds and carries oxygen from the lungs to body tissues. Fight infection (A) is incorrect because that is the role of white blood cells. Clot blood (B) is incorrect because clotting is primarily driven by platelets and clotting factors, not red blood cells. Produce antibodies (D) is incorrect because antibody production is carried out by lymphocytes (a type of white blood cell), not red blood cells."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q18",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which structure connects muscle to bone?",
        "options": {
          "A": "Ligament",
          "B": "Tendon",
          "C": "Cartilage",
          "D": "Fascia"
        },
        "correctAnswer": "B",
        "explanation": "Tendon (B) is correct because it is the tough connective tissue band that anchors muscle to bone, transmitting the force of contraction. Ligament (A) is incorrect because it connects bone to bone at joints, not muscle to bone. Cartilage (C) is incorrect because it cushions joints and provides flexible support, not a muscle-bone connection. Fascia (D) is incorrect because it is a connective tissue sheath that wraps and separates muscles, not the specific structure linking muscle to bone."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q19",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "The smallest blood vessels are called:",
        "options": {
          "A": "Arteries",
          "B": "Veins",
          "C": "Capillaries",
          "D": "Venules"
        },
        "correctAnswer": "C",
        "explanation": "Capillaries (C) is correct because they are the smallest, thinnest-walled vessels, allowing exchange of oxygen, nutrients, and waste with tissues. Arteries (A) is incorrect because these are relatively large, thick-walled vessels carrying blood away from the heart. Veins (B) is incorrect because these are larger vessels that return blood to the heart. Venules (D) is incorrect because, while smaller than veins, they are still larger than capillaries and simply drain into veins."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q20",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 1,
        "text": "Which part of the brain controls balance and coordination?",
        "options": {
          "A": "Cerebrum",
          "B": "Cerebellum",
          "C": "Medulla oblongata",
          "D": "Hypothalamus"
        },
        "correctAnswer": "B",
        "explanation": "Cerebellum (B) is correct because it coordinates voluntary movements, posture, and balance. Cerebrum (A) is incorrect because it governs higher cognitive functions like thought, sensory interpretation, and voluntary motor initiation, not fine balance control. Medulla oblongata (C) is incorrect because it regulates vital autonomic functions like breathing and heart rate, not balance. Hypothalamus (D) is incorrect because it regulates homeostatic functions like temperature and hunger, not coordination."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q21",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The trachea is part of which system?",
        "options": {
          "A": "Digestive system",
          "B": "Respiratory system",
          "C": "Circulatory system",
          "D": "Nervous system"
        },
        "correctAnswer": "B",
        "explanation": "Respiratory system (B) is correct because the trachea is the windpipe that conducts air to the lungs. Digestive system (A) is incorrect because the trachea does not carry food; the esophagus does. Circulatory system (C) is incorrect because the trachea has no role in blood transport. Nervous system (D) is incorrect because the trachea is an airway structure, not a nerve pathway."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q22",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which hormone regulates blood sugar levels?",
        "options": {
          "A": "Thyroxine",
          "B": "Adrenaline",
          "C": "Insulin",
          "D": "Cortisol"
        },
        "correctAnswer": "C",
        "explanation": "Insulin (C) is correct because it is secreted by the pancreas to lower blood glucose by promoting its uptake into cells. Thyroxine (A) is incorrect because it regulates metabolic rate, not blood sugar directly. Adrenaline (B) is incorrect because it raises blood sugar during stress but is not the primary regulatory hormone. Cortisol (D) is incorrect because, while it can raise blood sugar under stress, it is not the main hormone responsible for everyday glucose regulation."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q23",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The largest organ in the human body is:",
        "options": {
          "A": "Liver",
          "B": "Brain",
          "C": "Skin",
          "D": "Heart"
        },
        "correctAnswer": "C",
        "explanation": "Skin (C) is correct because it covers the entire external surface of the body, making it the largest organ by surface area and weight. Liver (A) is incorrect because, although it is the largest internal organ, it is smaller than the skin overall. Brain (B) is incorrect because it is a relatively compact organ compared to the skin. Heart (D) is incorrect because it is a small, fist-sized muscular organ, far smaller than the skin."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q24",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which chamber of the heart pumps oxygenated blood to the body?",
        "options": {
          "A": "Right atrium",
          "B": "Right ventricle",
          "C": "Left atrium",
          "D": "Left ventricle"
        },
        "correctAnswer": "D",
        "explanation": "Left ventricle (D) is correct because it has the thickest muscular wall and generates the force needed to pump oxygenated blood through the aorta to the entire body. Right atrium (A) is incorrect because it only receives deoxygenated blood from the body. Right ventricle (B) is incorrect because it pumps deoxygenated blood to the lungs, not the body. Left atrium (C) is incorrect because it only receives oxygenated blood from the lungs and passes it to the left ventricle, without pumping it to the body."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q25",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The process by which the body maintains a stable internal environment is called:",
        "options": {
          "A": "Metabolism",
          "B": "Homeostasis",
          "C": "Adaptation",
          "D": "Evolution"
        },
        "correctAnswer": "B",
        "explanation": "Homeostasis (B) is correct because it specifically refers to the body's regulatory processes that keep internal conditions (temperature, pH, glucose, etc.) stable. Metabolism (A) is incorrect because it refers to the chemical reactions that convert food into energy, not internal stability. Adaptation (C) is incorrect because it refers to changes organisms undergo over time to survive in their environment, not moment-to-moment internal regulation. Evolution (D) is incorrect because it refers to genetic change in populations over generations, unrelated to internal stability of an individual."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q26",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which cells are responsible for immune response?",
        "options": {
          "A": "Red blood cells",
          "B": "White blood cells",
          "C": "Platelets",
          "D": "Plasma cells"
        },
        "correctAnswer": "B",
        "explanation": "White blood cells (B) is correct because leukocytes are the primary cells that detect and fight infections and foreign invaders. Red blood cells (A) is incorrect because their role is oxygen transport, not immunity. Platelets (C) is incorrect because their role is blood clotting, not immune defense. Plasma cells (D) is incorrect because, while they do produce antibodies, they are actually a specialized type of white blood cell (differentiated B lymphocyte), making 'white blood cells' the broader and correct category."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q27",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The esophagus connects the:",
        "options": {
          "A": "Mouth to the stomach",
          "B": "Stomach to the small intestine",
          "C": "Small intestine to the large intestine",
          "D": "Pharynx to the trachea"
        },
        "correctAnswer": "A",
        "explanation": "Mouth to the stomach (A) is correct because the esophagus is the muscular tube that transports swallowed food from the pharynx down to the stomach. Stomach to the small intestine (B) is incorrect because that connection is made by the pyloric sphincter, not the esophagus. Small intestine to the large intestine (C) is incorrect because that connection is made by the ileocecal valve. Pharynx to the trachea (D) is incorrect because the pharynx connects to the trachea via the larynx for air, a separate airway pathway from the esophagus."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q28",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which part of the neuron receives signals?",
        "options": {
          "A": "Axon",
          "B": "Dendrite",
          "C": "Cell body",
          "D": "Synapse"
        },
        "correctAnswer": "B",
        "explanation": "Dendrite (B) is correct because dendrites are branch-like extensions specialized to receive signals from other neurons. Axon (A) is incorrect because the axon transmits signals away from the cell body toward other neurons, rather than receiving them. Cell body (C) is incorrect because, while it integrates signals and contains the nucleus, it is not the primary receiving structure. Synapse (D) is incorrect because the synapse is the junction where signals pass between neurons, not a receiving structure of a single neuron itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q29",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The functional unit of the kidney is:",
        "options": {
          "A": "Alveolus",
          "B": "Nephron",
          "C": "Neuron",
          "D": "Hepatocyte"
        },
        "correctAnswer": "B",
        "explanation": "Nephron (B) is correct because it is the microscopic structure within the kidney that filters blood and forms urine. Alveolus (A) is incorrect because that is the functional gas-exchange unit of the lung. Neuron (C) is incorrect because that is the functional unit of the nervous system. Hepatocyte (D) is incorrect because that is a functional liver cell, not a kidney structure."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q30",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which valve prevents backflow of blood from the left ventricle to the left atrium?",
        "options": {
          "A": "Tricuspid valve",
          "B": "Pulmonary valve",
          "C": "Mitral valve",
          "D": "Aortic valve"
        },
        "correctAnswer": "C",
        "explanation": "Mitral valve (C) is correct because this bicuspid valve sits between the left atrium and left ventricle and closes to prevent backflow into the atrium during ventricular contraction. Tricuspid valve (A) is incorrect because it is located between the right atrium and right ventricle, not the left side. Pulmonary valve (B) is incorrect because it prevents backflow from the pulmonary artery into the right ventricle, unrelated to the left atrium. Aortic valve (D) is incorrect because it prevents backflow from the aorta into the left ventricle, not from the ventricle into the atrium."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q31",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The hormone produced by the thyroid gland is:",
        "options": {
          "A": "Insulin",
          "B": "Thyroxine",
          "C": "Cortisol",
          "D": "Testosterone"
        },
        "correctAnswer": "B",
        "explanation": "Thyroxine (B) is correct because it is the primary hormone secreted by the thyroid gland to regulate metabolic rate. Insulin (A) is incorrect because it is produced by the pancreas, not the thyroid. Cortisol (C) is incorrect because it is produced by the adrenal cortex. Testosterone (D) is incorrect because it is produced mainly by the testes (and in smaller amounts by the ovaries and adrenal glands), not the thyroid."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q32",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which structure in the eye focuses light?",
        "options": {
          "A": "Cornea",
          "B": "Retina",
          "C": "Lens",
          "D": "Pupil"
        },
        "correctAnswer": "C",
        "explanation": "Lens (C) is correct because it changes shape to fine-tune the focusing of light onto the retina, enabling clear vision at different distances. Cornea (A) is incorrect because, while it does the majority of initial light bending, it has a fixed shape and cannot adjust focus like the lens. Retina (B) is incorrect because it is the light-sensitive layer that receives the focused image, not the structure that does the focusing. Pupil (D) is incorrect because it merely controls the amount of light entering the eye, not the focusing of that light."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q33",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The diaphragm is primarily involved in:",
        "options": {
          "A": "Digestion",
          "B": "Circulation",
          "C": "Breathing",
          "D": "Urination"
        },
        "correctAnswer": "C",
        "explanation": "Breathing (C) is correct because the diaphragm is the primary muscle of respiration, contracting to expand the thoracic cavity during inhalation. Digestion (A) is incorrect because the diaphragm does not break down food. Circulation (B) is incorrect because blood movement is driven by the heart, not the diaphragm. Urination (D) is incorrect because that process is controlled by the urinary bladder and associated sphincters, not the diaphragm."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q34",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which type of tissue covers body surfaces?",
        "options": {
          "A": "Connective tissue",
          "B": "Epithelial tissue",
          "C": "Muscle tissue",
          "D": "Nervous tissue"
        },
        "correctAnswer": "B",
        "explanation": "Epithelial tissue (B) is correct because it forms the covering of body surfaces and lines cavities and organs. Connective tissue (A) is incorrect because its role is to support, bind, and connect other tissues, not to cover surfaces. Muscle tissue (C) is incorrect because it is specialized for contraction and movement, not surface covering. Nervous tissue (D) is incorrect because it is specialized for transmitting electrical signals, not covering surfaces."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q35",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The spinal cord is protected by:",
        "options": {
          "A": "Skull",
          "B": "Ribs",
          "C": "Vertebrae",
          "D": "Pelvis"
        },
        "correctAnswer": "C",
        "explanation": "Vertebrae (C) is correct because the bony vertebral column encases and protects the spinal cord along its entire length. Skull (A) is incorrect because it protects the brain, not the spinal cord. Ribs (B) is incorrect because they protect thoracic organs like the heart and lungs. Pelvis (D) is incorrect because it protects lower abdominal and reproductive organs, not the spinal cord."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q36",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which blood type is considered the universal donor?",
        "options": {
          "A": "A",
          "B": "B",
          "C": "AB",
          "D": "O"
        },
        "correctAnswer": "D",
        "explanation": "O (D) is correct because type O red blood cells lack A and B antigens, allowing them to be given to recipients of any ABO blood type without triggering an antibody reaction. A (A) is incorrect because it carries A antigens, which would react with anti-A antibodies in type B or O recipients. B (B) is incorrect because it carries B antigens, which would react with anti-B antibodies in type A or O recipients. AB (C) is incorrect because it carries both A and B antigens, making it compatible only with AB recipients, not universal for donation (though AB is the universal plasma donor, it is not the universal red cell donor)."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q37",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The pancreas produces:",
        "options": {
          "A": "Bile",
          "B": "Insulin",
          "C": "Pepsin",
          "D": "Mucus"
        },
        "correctAnswer": "B",
        "explanation": "Insulin (B) is correct because the pancreas contains islet cells that secrete insulin to regulate blood glucose. Bile (A) is incorrect because bile is produced by the liver and stored in the gallbladder, not the pancreas. Pepsin (C) is incorrect because pepsin is a digestive enzyme produced by the stomach lining, not the pancreas. Mucus (D) is incorrect because mucus is secreted by various epithelial linings (e.g., stomach, intestines), not specifically identified as a pancreatic secretion in this context."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q38",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which structure prevents food from entering the trachea?",
        "options": {
          "A": "Uvula",
          "B": "Epiglottis",
          "C": "Pharynx",
          "D": "Larynx"
        },
        "correctAnswer": "B",
        "explanation": "Epiglottis (B) is correct because this flap of cartilage folds down over the trachea during swallowing, directing food into the esophagus instead. Uvula (A) is incorrect because it helps prevent food from entering the nasal cavity, not the trachea. Pharynx (C) is incorrect because it is the shared passageway for food and air, not the structure that blocks the trachea. Larynx (D) is incorrect because it is the voice box structure housing the vocal cords, not the flap that covers the tracheal opening."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q39",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "The main function of the large intestine is:",
        "options": {
          "A": "Nutrient absorption",
          "B": "Water absorption",
          "C": "Protein digestion",
          "D": "Fat emulsification"
        },
        "correctAnswer": "B",
        "explanation": "Water absorption (B) is correct because the large intestine's chief role is reabsorbing water and electrolytes from indigestible food matter, forming solid stool. Nutrient absorption (A) is incorrect because most nutrient absorption occurs in the small intestine. Protein digestion (C) is incorrect because protein breakdown primarily occurs in the stomach and small intestine via enzymes like pepsin and trypsin. Fat emulsification (D) is incorrect because that process is carried out by bile in the small intestine, not the large intestine."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q40",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 2,
        "text": "Which bone is commonly known as the collarbone?",
        "options": {
          "A": "Scapula",
          "B": "Clavicle",
          "C": "Humerus",
          "D": "Sternum"
        },
        "correctAnswer": "B",
        "explanation": "Clavicle (B) is correct because this is the anatomical name for the collarbone, connecting the sternum to the scapula. Scapula (A) is incorrect because this is the shoulder blade, a separate bone from the collarbone. Humerus (C) is incorrect because this is the long bone of the upper arm, not the collarbone. Sternum (D) is incorrect because this is the breastbone in the center of the chest, not the collarbone."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q41",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The medulla oblongata controls:",
        "options": {
          "A": "Voluntary movements",
          "B": "Memory",
          "C": "Vital functions like breathing and heart rate",
          "D": "Vision"
        },
        "correctAnswer": "C",
        "explanation": "Vital functions like breathing and heart rate (C) is correct because the medulla oblongata houses the autonomic centers that regulate these life-sustaining processes. Voluntary movements (A) is incorrect because these are controlled by the motor cortex in the cerebrum. Memory (B) is incorrect because that is primarily associated with the hippocampus and cerebral cortex. Vision (D) is incorrect because that is processed in the occipital lobe of the cerebrum."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q42",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which organ stores bile?",
        "options": {
          "A": "Liver",
          "B": "Pancreas",
          "C": "Gallbladder",
          "D": "Spleen"
        },
        "correctAnswer": "C",
        "explanation": "Gallbladder (C) is correct because it stores and concentrates bile produced by the liver until it is needed for fat digestion. Liver (A) is incorrect because, although it produces bile, it does not store it long-term. Pancreas (B) is incorrect because it produces digestive enzymes and insulin, not bile. Spleen (D) is incorrect because it filters blood and recycles red blood cells, playing no role in bile storage."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q43",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The functional unit of muscle contraction is:",
        "options": {
          "A": "Nephron",
          "B": "Neuron",
          "C": "Sarcomere",
          "D": "Alveolus"
        },
        "correctAnswer": "C",
        "explanation": "Sarcomere (C) is correct because it is the basic contractile unit of skeletal muscle, containing the actin and myosin filaments that slide to produce contraction. Nephron (A) is incorrect because that is the functional unit of the kidney. Neuron (B) is incorrect because that is the functional unit of the nervous system. Alveolus (D) is incorrect because that is the functional gas-exchange unit of the lung."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q44",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which artery carries deoxygenated blood?",
        "options": {
          "A": "Aorta",
          "B": "Pulmonary artery",
          "C": "Carotid artery",
          "D": "Coronary artery"
        },
        "correctAnswer": "B",
        "explanation": "Pulmonary artery (B) is correct because it is the unique artery that carries deoxygenated blood from the right ventricle to the lungs for oxygenation. Aorta (A) is incorrect because it carries oxygenated blood from the left ventricle to the body. Carotid artery (C) is incorrect because it carries oxygenated blood to the head and neck. Coronary artery (D) is incorrect because it carries oxygenated blood to supply the heart muscle itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q45",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The hormone that stimulates milk production is:",
        "options": {
          "A": "Oxytocin",
          "B": "Prolactin",
          "C": "Estrogen",
          "D": "Progesterone"
        },
        "correctAnswer": "B",
        "explanation": "Prolactin (B) is correct because it is secreted by the pituitary gland specifically to stimulate milk production in mammary glands. Oxytocin (A) is incorrect because it triggers milk ejection (let-down), not production. Estrogen (C) is incorrect because it supports breast tissue development but does not directly stimulate milk production. Progesterone (D) is incorrect because it primarily supports pregnancy maintenance and mammary gland development, not milk synthesis itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q46",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which part of the ear is responsible for hearing?",
        "options": {
          "A": "Outer ear",
          "B": "Middle ear",
          "C": "Inner ear (cochlea)",
          "D": "Eustachian tube"
        },
        "correctAnswer": "C",
        "explanation": "Inner ear (cochlea) (C) is correct because the cochlea converts sound vibrations into nerve impulses that the brain interprets as hearing. Outer ear (A) is incorrect because it only collects and channels sound waves into the ear canal. Middle ear (B) is incorrect because it amplifies and transmits vibrations via the ossicles but does not perform the actual sensory conversion. Eustachian tube (D) is incorrect because it equalizes air pressure in the middle ear and has no direct role in the hearing process itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q47",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The appendix is attached to the:",
        "options": {
          "A": "Stomach",
          "B": "Small intestine",
          "C": "Large intestine (cecum)",
          "D": "Liver"
        },
        "correctAnswer": "C",
        "explanation": "Large intestine (cecum) (C) is correct because the appendix is a small pouch attached to the cecum, the first part of the large intestine. Stomach (A) is incorrect because the appendix has no anatomical connection to the stomach. Small intestine (B) is incorrect because the appendix branches off the large intestine, not the small intestine. Liver (D) is incorrect because the liver is an entirely separate organ with no direct attachment to the appendix."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q48",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which gland regulates metabolism?",
        "options": {
          "A": "Pituitary gland",
          "B": "Thyroid gland",
          "C": "Adrenal gland",
          "D": "Parathyroid gland"
        },
        "correctAnswer": "B",
        "explanation": "Thyroid gland (B) is correct because it secretes thyroxine, the hormone that directly regulates the body's metabolic rate. Pituitary gland (A) is incorrect because, while it stimulates the thyroid via TSH, it does not directly regulate metabolism itself. Adrenal gland (C) is incorrect because it primarily manages stress response and electrolyte balance, not baseline metabolic rate. Parathyroid gland (D) is incorrect because it regulates calcium levels, not overall metabolism."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q49",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The production of red blood cells is called:",
        "options": {
          "A": "Hematopoiesis",
          "B": "Erythropoiesis",
          "C": "Leukocytosis",
          "D": "Hemostasis"
        },
        "correctAnswer": "B",
        "explanation": "Erythropoiesis (B) is correct because this term specifically refers to the formation of red blood cells (erythrocytes). Hematopoiesis (A) is incorrect because it is the broader term for the formation of all blood cell types, not specifically red blood cells. Leukocytosis (C) is incorrect because it refers to an increased number of white blood cells, not red blood cell production. Hemostasis (D) is incorrect because it refers to the process of stopping bleeding through clotting, unrelated to red blood cell formation."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q50",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which muscle is responsible for breathing?",
        "options": {
          "A": "Intercostal muscles",
          "B": "Diaphragm",
          "C": "Abdominal muscles",
          "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Both A and B (D) is correct because normal quiet breathing relies on the coordinated action of the diaphragm and the intercostal muscles between the ribs to expand and contract the thoracic cavity. Intercostal muscles (A) alone is incorrect because it omits the diaphragm, the primary muscle of respiration. Diaphragm (B) alone is incorrect because it omits the intercostal muscles, which also assist in expanding the rib cage. Abdominal muscles (C) is incorrect because these mainly assist forced exhalation rather than driving normal breathing."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q51",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The sinoatrial (SA) node is located in the:",
        "options": {
          "A": "Left atrium",
          "B": "Right atrium",
          "C": "Left ventricle",
          "D": "Right ventricle"
        },
        "correctAnswer": "B",
        "explanation": "Right atrium (B) is correct because the SA node, the heart's natural pacemaker, is located in the wall of the right atrium. Left atrium (A) is incorrect because the SA node is not located on the left side of the heart. Left ventricle (C) is incorrect because the SA node is not in the ventricles at all. Right ventricle (D) is incorrect because, although on the right side, the SA node is specifically in the atrium, not the ventricle."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q52",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which vitamin is produced in the skin?",
        "options": {
          "A": "Vitamin A",
          "B": "Vitamin C",
          "C": "Vitamin D",
          "D": "Vitamin K"
        },
        "correctAnswer": "C",
        "explanation": "Vitamin D (C) is correct because skin cells synthesize this vitamin when exposed to ultraviolet (UV) sunlight. Vitamin A (A) is incorrect because it is obtained mainly through diet, not synthesized in the skin. Vitamin C (B) is incorrect because it must be obtained from dietary sources like fruits and vegetables. Vitamin K (D) is incorrect because it is primarily produced by gut bacteria and obtained from diet, not synthesized in skin."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q53",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The plasma protein involved in blood clotting is:",
        "options": {
          "A": "Albumin",
          "B": "Globulin",
          "C": "Fibrinogen",
          "D": "Hemoglobin"
        },
        "correctAnswer": "C",
        "explanation": "Fibrinogen (C) is correct because this plasma protein is converted into fibrin threads that form the structural mesh of a blood clot. Albumin (A) is incorrect because its main role is maintaining blood osmotic pressure, not clotting. Globulin (B) is incorrect because these proteins are mainly involved in immune defense (antibodies) and transport, not clot formation. Hemoglobin (D) is incorrect because it is found inside red blood cells for oxygen transport, not a plasma clotting protein."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q54",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which structure connects the two cerebral hemispheres?",
        "options": {
          "A": "Corpus callosum",
          "B": "Cerebellum",
          "C": "Thalamus",
          "D": "Hypothalamus"
        },
        "correctAnswer": "A",
        "explanation": "Corpus callosum (A) is correct because this thick bundle of nerve fibers connects and allows communication between the left and right cerebral hemispheres. Cerebellum (B) is incorrect because it is a separate structure below the cerebrum that coordinates movement and balance. Thalamus (C) is incorrect because it acts as a relay station for sensory information, not a hemisphere connector. Hypothalamus (D) is incorrect because it regulates homeostatic functions and does not link the two hemispheres."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q55",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The urinary bladder stores:",
        "options": {
          "A": "Blood",
          "B": "Bile",
          "C": "Urine",
          "D": "Lymph"
        },
        "correctAnswer": "C",
        "explanation": "Urine (C) is correct because the urinary bladder is a muscular sac that temporarily stores urine produced by the kidneys until excretion. Blood (A) is incorrect because blood is circulated through the cardiovascular system, not stored in the bladder. Bile (B) is incorrect because bile is stored in the gallbladder, not the urinary bladder. Lymph (D) is incorrect because lymph is carried through the lymphatic system, unrelated to the urinary bladder."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q56",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which type of immunity is acquired through vaccination?",
        "options": {
          "A": "Natural active immunity",
          "B": "Natural passive immunity",
          "C": "Artificial active immunity",
          "D": "Artificial passive immunity"
        },
        "correctAnswer": "C",
        "explanation": "Artificial active immunity (C) is correct because vaccination deliberately introduces an antigen to stimulate the body's own immune system to produce antibodies. Natural active immunity (A) is incorrect because that arises from actually contracting a disease, not from a deliberately administered vaccine. Natural passive immunity (B) is incorrect because that comes from antibodies transferred naturally, such as from mother to infant. Artificial passive immunity (D) is incorrect because that involves injecting pre-formed antibodies (e.g., antivenom), not stimulating the person's own immune response as vaccines do."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q57",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The glomerulus is found in the:",
        "options": {
          "A": "Heart",
          "B": "Liver",
          "C": "Kidney",
          "D": "Spleen"
        },
        "correctAnswer": "C",
        "explanation": "Kidney (C) is correct because the glomerulus is a tuft of capillaries within the nephron that performs the initial filtration of blood to form urine. Heart (A) is incorrect because the glomerulus is not a cardiac structure. Liver (B) is incorrect because the liver's functional units are lobules and hepatocytes, not glomeruli. Spleen (D) is incorrect because the spleen filters blood cells through a different structural mechanism, not a glomerulus."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q58",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which cranial nerve is responsible for vision?",
        "options": {
          "A": "Optic nerve (II)",
          "B": "Oculomotor nerve (III)",
          "C": "Trigeminal nerve (V)",
          "D": "Facial nerve (VII)"
        },
        "correctAnswer": "A",
        "explanation": "Optic nerve (II) (A) is correct because this cranial nerve directly transmits visual information from the retina to the brain. Oculomotor nerve (III) (B) is incorrect because it controls most eye muscle movements and pupil constriction, not the transmission of visual images. Trigeminal nerve (V) (C) is incorrect because it handles facial sensation and chewing muscles, unrelated to vision. Facial nerve (VII) (D) is incorrect because it controls facial expression muscles and some taste sensation, not visual signal transmission."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q59",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "The hormone epinephrine is produced by the:",
        "options": {
          "A": "Thyroid gland",
          "B": "Pituitary gland",
          "C": "Adrenal gland",
          "D": "Pancreas"
        },
        "correctAnswer": "C",
        "explanation": "Adrenal gland (C) is correct because the adrenal medulla secretes epinephrine (adrenaline) in response to stress, triggering the fight-or-flight response. Thyroid gland (A) is incorrect because it produces thyroxine, not epinephrine. Pituitary gland (B) is incorrect because it produces regulatory hormones like ACTH and TSH, not epinephrine itself. Pancreas (D) is incorrect because it produces insulin and glucagon for blood sugar regulation, not epinephrine."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q60",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 3,
        "text": "Which layer of the heart wall is responsible for contraction?",
        "options": {
          "A": "Endocardium",
          "B": "Myocardium",
          "C": "Epicardium",
          "D": "Pericardium"
        },
        "correctAnswer": "B",
        "explanation": "Myocardium (B) is correct because this is the thick, muscular middle layer of the heart wall that contracts to pump blood. Endocardium (A) is incorrect because it is the thin inner lining of the heart chambers, not a contractile muscle layer. Epicardium (C) is incorrect because it is the thin outer layer covering the heart, providing protection rather than contraction. Pericardium (D) is incorrect because it is the protective sac surrounding the entire heart, external to the heart wall itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q61",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "The process of breaking down food into nutrients is called:",
        "options": {
          "A": "Absorption",
          "B": "Digestion",
          "C": "Metabolism",
          "D": "Excretion"
        },
        "correctAnswer": "B",
        "explanation": "Digestion (B) is correct because this term specifically describes the mechanical and chemical breakdown of food into absorbable nutrients. Absorption (A) is incorrect because that refers to the uptake of already-broken-down nutrients into the bloodstream, a separate later step. Metabolism (C) is incorrect because that refers to the chemical reactions using absorbed nutrients for energy or building blocks, not the breakdown of food itself. Excretion (D) is incorrect because that refers to the elimination of waste products, not the breakdown of food."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q62",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "Which bone forms the forehead?",
        "options": {
          "A": "Parietal bone",
          "B": "Temporal bone",
          "C": "Frontal bone",
          "D": "Occipital bone"
        },
        "correctAnswer": "C",
        "explanation": "Frontal bone (C) is correct because this cranial bone forms the forehead and the upper portion of the eye sockets. Parietal bone (A) is incorrect because these paired bones form the sides and roof of the skull, behind the forehead. Temporal bone (B) is incorrect because these bones form the sides of the skull near the ears. Occipital bone (D) is incorrect because this bone forms the back and base of the skull, opposite the forehead."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q63",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "The primary function of hemoglobin is to:",
        "options": {
          "A": "Fight infection",
          "B": "Transport oxygen",
          "C": "Clot blood",
          "D": "Regulate pH"
        },
        "correctAnswer": "B",
        "explanation": "Transport oxygen (B) is correct because hemoglobin is the iron-containing protein in red blood cells that binds oxygen for delivery to tissues. Fight infection (A) is incorrect because that is the role of white blood cells and antibodies, not hemoglobin. Clot blood (C) is incorrect because clotting relies on platelets and clotting factors like fibrinogen, not hemoglobin. Regulate pH (D) is incorrect because, while hemoglobin has a minor buffering role, its primary and defining function is oxygen transport."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q64",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "Which structure produces cerebrospinal fluid?",
        "options": {
          "A": "Ventricles",
          "B": "Choroid plexus",
          "C": "Meninges",
          "D": "Cerebellum"
        },
        "correctAnswer": "B",
        "explanation": "Choroid plexus (B) is correct because this specialized tissue within the brain's ventricles is responsible for producing cerebrospinal fluid. Ventricles (A) is incorrect because these are the fluid-filled cavities where CSF collects and circulates, not the structure that produces it. Meninges (C) is incorrect because these are the protective membranes covering the brain and spinal cord, not CSF producers. Cerebellum (D) is incorrect because it coordinates movement and balance, playing no role in CSF production."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q65",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "The vocal cords are located in the:",
        "options": {
          "A": "Pharynx",
          "B": "Larynx",
          "C": "Trachea",
          "D": "Bronchi"
        },
        "correctAnswer": "B",
        "explanation": "Larynx (B) is correct because this structure, also called the voice box, houses the vocal cords that vibrate to produce sound. Pharynx (A) is incorrect because this is the shared passage for air and food located above the larynx, not containing the vocal cords. Trachea (C) is incorrect because this windpipe lies below the larynx and simply conducts air, without vocal cords. Bronchi (D) is incorrect because these are airway branches deep in the chest, far from the vocal cords."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q66",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "Which hormone is responsible for the fight-or-flight response?",
        "options": {
          "A": "Insulin",
          "B": "Cortisol",
          "C": "Adrenaline (epinephrine)",
          "D": "Thyroxine"
        },
        "correctAnswer": "C",
        "explanation": "Adrenaline (epinephrine) (C) is correct because this hormone is rapidly released by the adrenal medulla to trigger the immediate fight-or-flight response, increasing heart rate and energy availability. Insulin (A) is incorrect because it regulates blood glucose uptake, unrelated to the acute stress response. Cortisol (B) is incorrect because, while also a stress hormone, it acts more slowly and manages longer-term stress response rather than the immediate fight-or-flight reaction. Thyroxine (D) is incorrect because it regulates baseline metabolic rate, not the acute stress response."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q67",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "The longest bone in the human body is:",
        "options": {
          "A": "Tibia",
          "B": "Fibula",
          "C": "Femur",
          "D": "Humerus"
        },
        "correctAnswer": "C",
        "explanation": "Femur (C) is correct because the thigh bone is the longest and strongest bone in the human body. Tibia (A) is incorrect because, while it is the second-longest bone (shin bone), it is shorter than the femur. Fibula (B) is incorrect because this thin lower leg bone is shorter than both the tibia and femur. Humerus (D) is incorrect because this upper arm bone, while long, is significantly shorter than the femur."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q68",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "Which part of the digestive system absorbs most nutrients?",
        "options": {
          "A": "Stomach",
          "B": "Small intestine",
          "C": "Large intestine",
          "D": "Esophagus"
        },
        "correctAnswer": "B",
        "explanation": "Small intestine (B) is correct because its large surface area, created by villi and microvilli, makes it the primary site for absorbing the majority of nutrients. Stomach (A) is incorrect because it mainly performs mechanical and chemical digestion, with only minimal absorption. Large intestine (C) is incorrect because it mainly absorbs water and electrolytes, not the bulk of nutrients. Esophagus (D) is incorrect because it only transports food and performs no absorption function."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q69",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "The autonomic nervous system is divided into:",
        "options": {
          "A": "Somatic and sympathetic",
          "B": "Sympathetic and parasympathetic",
          "C": "Central and peripheral",
          "D": "Sensory and motor"
        },
        "correctAnswer": "B",
        "explanation": "Sympathetic and parasympathetic (B) is correct because these are the two functional branches of the autonomic nervous system, generally responsible for the fight-or-flight and rest-and-digest responses respectively. Somatic and sympathetic (A) is incorrect because the somatic system is a separate voluntary division of the peripheral nervous system, not a subdivision of the autonomic system alongside the sympathetic branch. Central and peripheral (C) is incorrect because this is the primary division of the entire nervous system, not specifically the autonomic branch. Sensory and motor (D) is incorrect because these describe general signal-direction pathways, not the specific subdivisions of the autonomic nervous system."
      },
      {
        "id": "eoy1-anatomy-physiology-2023_q70",
        "paperId": "eoy1-anatomy-physiology-2023",
        "setNumber": 4,
        "text": "Which type of blood vessel carries blood away from the heart?",
        "options": {
          "A": "Veins",
          "B": "Capillaries",
          "C": "Arteries",
          "D": "Venules"
        },
        "correctAnswer": "C",
        "explanation": "Arteries (C) is correct because these thick-walled vessels are defined by their role in carrying blood away from the heart. Veins (A) is incorrect because these vessels carry blood back toward the heart, the opposite direction. Capillaries (B) is incorrect because these are tiny vessels where exchange occurs between blood and tissues, neither carrying blood away from nor toward the heart directly. Venules (D) is incorrect because these small vessels collect blood from capillaries and feed into veins, moving blood toward the heart, not away from it."
      }
    ]
  },
  {
    "id": "eoy1-anatomy-physiology-2023-2",
    "year": "2023",
    "title": "End of Year 1 Exam (2)",
    "totalQuestions": 70,
    "totalSets": 4,
    "questions": [
      {
        "id": "eoy1-anatomy-physiology-2023-2_q1",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "In which of the following bone structures do osteocytes live:",
        "options": {
          "A": "osteons",
          "B": "canaliculi",
          "C": "lacunae",
          "D": "lamellae"
        },
        "correctAnswer": "C",
        "explanation": "Lacunae (C) is correct because these are the small cavities within bone matrix where mature bone cells (osteocytes) sit. Osteons (A) is incorrect because an osteon is the whole cylindrical structural unit of compact bone, not the specific space an osteocyte occupies. Canaliculi (B) is incorrect because these are the tiny channels that connect lacunae to each other, allowing nutrient exchange, not the cell's resting place. Lamellae (D) is incorrect because these are the concentric rings of mineralized matrix that make up an osteon, not a cell space."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q2",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "During muscle cell contraction, what happens because of Ca++ binding to troponin:",
        "options": {
          "A": "The binding site on actin is uncovered",
          "B": "Acetylcholine (ACh) is released",
          "C": "The cross-bridge disengages from the thin filament",
          "D": "ATP hydrolyses to ADP"
        },
        "correctAnswer": "A",
        "explanation": "The binding site on actin is uncovered (A) is correct because Ca++ binding to troponin causes a conformational shift that pulls tropomyosin away from the myosin-binding sites on actin, allowing cross-bridge formation. Acetylcholine (ACh) is released (B) is incorrect because ACh release happens earlier, at the neuromuscular junction, triggering the action potential that leads to Ca++ release, not as a result of Ca++-troponin binding. The cross-bridge disengages from the thin filament (C) is incorrect because cross-bridge detachment is driven by ATP binding to myosin, occurring after binding, not because of the calcium-troponin interaction itself. ATP hydrolyses to ADP (D) is incorrect because this occurs on the myosin head to re-cock it for the power stroke and is a separate step in the cross-bridge cycle, not a direct consequence of Ca++ binding troponin."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q3",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "What does the term \"electrolyte\" refer to:",
        "options": {
          "A": "an uncharged dissolved particle",
          "B": "the smallest particle of an element",
          "C": "a substance that will conduct electricity when dissolved in water",
          "D": "negatively charged sub-atomic particles"
        },
        "correctAnswer": "C",
        "explanation": "A substance that will conduct electricity when dissolved in water (C) is correct because electrolytes dissociate into ions in solution, and these free ions carry electrical current. An uncharged dissolved particle (A) is incorrect because electrolytes are, by definition, charged particles (ions), not neutral ones. The smallest particle of an element (B) is incorrect because that describes an atom, an unrelated concept. Negatively charged sub-atomic particles (D) is incorrect because that describes electrons, whereas electrolytes are whole ions (which can be positive or negative), not subatomic particles."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q4",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Fluid and electrolyte balance in the body is maintained by which of the following:",
        "options": {
          "A": "the hormone aldosterone",
          "B": "keeping accurate account of the patient's fluid balance chart",
          "C": "the nephron of the kidney",
          "D": "the hypothalamus of the brain"
        },
        "correctAnswer": "C",
        "explanation": "The nephron of the kidney (C) is correct because the nephron is the functional structure that actually filters blood and reabsorbs or excretes water and electrolytes to keep the body's internal balance, making it the direct physiological regulator. The hormone aldosterone (A) is incorrect because it is only one signal that influences the nephron's sodium and water handling, not the structure that carries out the balancing itself. Keeping accurate account of the patient's fluid balance chart (B) is incorrect because this is a nursing documentation practice for monitoring balance, not a physiological mechanism that maintains it. The hypothalamus of the brain (D) is incorrect because it senses osmolality and triggers thirst and ADH release but does not itself perform the filtration and reabsorption that maintains balance."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q5",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Where are blood vessels in compact bone found:",
        "options": {
          "A": "In the canaliculi",
          "B": "in the periosteum",
          "C": "in the lacunae",
          "D": "in the central canal"
        },
        "correctAnswer": "D",
        "explanation": "In the central canal (D) is correct because the central (Haversian) canal running through the core of each osteon houses the blood vessels and nerves that supply the bone tissue. In the canaliculi (A) is incorrect because these tiny channels carry nutrients between cells by diffusion, not blood vessels themselves. In the periosteum (B) is incorrect because, while the periosteum does contain blood vessels that supply the bone's outer surface, the question specifically concerns vessels within compact bone tissue, which run through the central canal. In the lacunae (C) is incorrect because these small spaces house osteocytes, not blood vessels."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q6",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Smooth muscle cells may be described by which of the following:",
        "options": {
          "A": "striated, voluntary, multinucleate",
          "B": "not striated, voluntary, multinucleate",
          "C": "striated, involuntary, uninucleate",
          "D": "not striated, involuntary, uninucleate"
        },
        "correctAnswer": "D",
        "explanation": "Not striated, involuntary, uninucleate (D) is correct because smooth muscle lacks the visible banding pattern of skeletal muscle, is controlled involuntarily by the autonomic nervous system, and each cell has a single nucleus. Striated, voluntary, multinucleate (A) is incorrect because that combination describes skeletal muscle, not smooth muscle. Not striated, voluntary, multinucleate (B) is incorrect because smooth muscle is involuntary and uninucleate, not voluntary and multinucleate. Striated, involuntary, uninucleate (C) is incorrect because smooth muscle is not striated at all, even though it shares the involuntary and uninucleate traits with cardiac muscle."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q7",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Which of the following best describes a molecule:",
        "options": {
          "A": "The simplest structure in an ionic compound",
          "B": "One thousandth of a mole",
          "C": "The particles of which covalent compounds are composed",
          "D": "The smallest particle of an element"
        },
        "correctAnswer": "C",
        "explanation": "The particles of which covalent compounds are composed (C) is correct because a molecule forms when two or more atoms are held together by covalent bonds sharing electrons. The simplest structure in an ionic compound (A) is incorrect because ionic compounds are described in terms of formula units, not molecules, since they form lattices of ions rather than discrete covalently bonded units. One thousandth of a mole (B) is incorrect because this confuses the term with a unit prefix (milli-) rather than describing a chemical structure. The smallest particle of an element (D) is incorrect because that describes an atom, not a molecule, which is composed of multiple atoms."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q8",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "What is found in blood serum that is also in blood plasma:",
        "options": {
          "A": "blood cells",
          "B": "platelets",
          "C": "plasma proteins",
          "D": "clotting factors"
        },
        "correctAnswer": "C",
        "explanation": "Plasma proteins (C) is correct because proteins such as albumin and globulins remain present in serum after clotting has removed the fibrinogen, so they are shared by both plasma and serum. Blood cells (A) is incorrect because both plasma and serum are, by definition, the cell-free liquid portion of blood, so cells are absent from either. Platelets (B) is incorrect because platelets, like other cells, are removed along with the clot or by centrifugation and are not present in either plasma or serum as a fluid sample. Clotting factors (D) is incorrect because serum is specifically defined as plasma with the clotting factors (especially fibrinogen) consumed during clot formation, so this is the key difference between the two, not a shared component."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q9",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "All but one of the following are sensory receptors in the skin. Which one is NOT:",
        "options": {
          "A": "Reticular dermal receptors",
          "B": "Merkel discs",
          "C": "Nociceptors",
          "D": "Pacinian corpuscles"
        },
        "correctAnswer": "A",
        "explanation": "Reticular dermal receptors (A) is correct as the exception because the reticular layer is a region of the dermis, not a named sensory receptor itself. Merkel discs (B) is incorrect as the answer because these are genuine receptors that detect light touch and texture. Nociceptors (C) is incorrect as the answer because these are the real receptors responsible for detecting pain. Pacinian corpuscles (D) is incorrect as the answer because these are true receptors that detect deep pressure and vibration."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q10",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "What does the term \"haversian canal\" refer to in bone:",
        "options": {
          "A": "the larger examples of foramina",
          "B": "a groove that receives a muscle's tendon",
          "C": "the centre of an osteon that contains blood capillaries",
          "D": "the space within a long bone that contains marrow"
        },
        "correctAnswer": "C",
        "explanation": "The centre of an osteon that contains blood capillaries (C) is correct because the Haversian (central) canal runs through the core of each osteon and houses the blood vessels and nerves supplying that unit of bone. The larger examples of foramina (A) is incorrect because foramina are openings that allow nerves or vessels to pass through a whole bone, an anatomically different structure from the microscopic Haversian canal. A groove that receives a muscle's tendon (B) is incorrect because that describes a sulcus, not the Haversian canal. The space within a long bone that contains marrow (D) is incorrect because that describes the medullary cavity, a much larger structure than the microscopic Haversian canal."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q11",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "What is the innermost layer of the heart wall known as:",
        "options": {
          "A": "epicardium",
          "B": "pericardium",
          "C": "visceral pericardium",
          "D": "endocardium"
        },
        "correctAnswer": "D",
        "explanation": "Endocardium (D) is correct because this thin layer of endothelium and connective tissue lines the inside of the heart chambers and valves, making it the innermost layer of the heart wall. Epicardium (A) is incorrect because this is the outermost layer of the heart wall, sitting directly on the heart's surface. Pericardium (B) is incorrect because this is the protective sac surrounding the entire heart, external to the heart wall itself. Visceral pericardium (C) is incorrect because this is another name for the epicardium, the outer layer, not the inner one."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q12",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "In the condition known as acidosis, the blood pH would be:",
        "options": {
          "A": "greater than 7.45",
          "B": "less than 7.45",
          "C": "less than 7.35",
          "D": "less than 7.00"
        },
        "correctAnswer": "C",
        "explanation": "Less than 7.35 (C) is correct because normal arterial blood pH ranges from 7.35 to 7.45, and acidosis is defined as a pH falling below this lower limit. Greater than 7.45 (A) is incorrect because that range describes alkalosis, the opposite condition. Less than 7.45 (B) is incorrect because this threshold is too broad and would include normal pH values within the 7.35-7.45 range, not just acidotic ones. Less than 7.00 (D) is incorrect because, while this would certainly be severe acidosis, it sets the threshold far below the actual clinical definition of acidosis, which begins at 7.35."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q13",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Which stratum of the epidermis protects the body against water loss and abrasion:",
        "options": {
          "A": "stratum germinativum",
          "B": "stratum basale",
          "C": "stratum lucidum",
          "D": "stratum corneum"
        },
        "correctAnswer": "D",
        "explanation": "Stratum corneum (D) is correct because this outermost layer is composed of many layers of dead, keratin-filled cells that form a tough, water-resistant barrier against abrasion and moisture loss. Stratum germinativum (A) is incorrect because this is another name for the deepest layer (stratum basale), where new cells are actively produced, not the protective outer barrier. Stratum basale (B) is incorrect for the same reason, being the innermost, actively dividing layer rather than the outer protective one. Stratum lucidum (C) is incorrect because, although it does add some protection, it is only present in thick skin (palms and soles) and lies beneath the stratum corneum, which is the true outermost protective barrier."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q14",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Choose the correct statement about hydrogen bonds:",
        "options": {
          "A": "are stronger than covalent bonds",
          "B": "act between the H in one –OH or –NH group, and the O or N in another",
          "C": "operate within molecules",
          "D": "act between the H in one –OH or –NH group, and the H in another"
        },
        "correctAnswer": "B",
        "explanation": "Act between the H in one -OH or -NH group, and the O or N in another (B) is correct because a hydrogen bond forms when a slightly positive hydrogen attached to an electronegative atom is attracted to a lone pair on an electronegative atom (oxygen or nitrogen) in a neighbouring group. Are stronger than covalent bonds (A) is incorrect because hydrogen bonds are considerably weaker than covalent bonds. Operate within molecules (C) is incorrect because hydrogen bonds are most significant as intermolecular forces acting between separate molecules, not primarily within a single molecule. Act between the H in one -OH or -NH group, and the H in another (D) is incorrect because hydrogen bonding requires attraction to an electronegative atom's lone pair, not to another hydrogen atom."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q15",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "The three functions of the skin are to:",
        "options": {
          "A": "Store fat, produce sweat, receive stimuli",
          "B": "synthesise vitamin D, excrete bile, and provide a barrier to the entry of bacteria",
          "C": "produce keratin, assist in the immune response, and produce lymphocytes",
          "D": "produce melanin, secrete sebum, minimise water loss"
        },
        "correctAnswer": "D",
        "explanation": "Produce melanin, secrete sebum, minimise water loss (D) is correct because these are three genuine, well-established skin functions: melanin production protects against UV damage, sebum secretion lubricates and has antimicrobial properties, and the keratinized layers minimise water loss. Store fat, produce sweat, receive stimuli (A) is incorrect because fat storage is a role of the underlying hypodermis rather than the skin proper, making this combination less precise than option D. Synthesise vitamin D, excrete bile, and provide a barrier to the entry of bacteria (B) is incorrect because bile excretion is a liver and biliary system function, not something the skin does. Produce keratin, assist in the immune response, and produce lymphocytes (C) is incorrect because, while the skin does produce keratin and has immune roles (Langerhans cells), lymphocyte production occurs in bone marrow and lymphoid organs, not the skin."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q16",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Which type of white blood cell is responsible for engulfing pathogens during phagocytosis:",
        "options": {
          "A": "lymphocyte",
          "B": "neutrophil",
          "C": "Eosinophil",
          "D": "basophil"
        },
        "correctAnswer": "B",
        "explanation": "Neutrophil (B) is correct because neutrophils are the most abundant white blood cells and act as first-responder phagocytes that engulf and destroy bacteria and other pathogens. Lymphocyte (A) is incorrect because lymphocytes (T cells, B cells) mediate specific immune responses and antibody production rather than acting as the primary phagocytic cell. Eosinophil (C) is incorrect because eosinophils mainly combat parasitic infections and participate in allergic reactions rather than general phagocytosis. Basophil (D) is incorrect because basophils primarily release histamine and other mediators in allergic and inflammatory responses, not phagocytosis."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q17",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Which of the following describes what an \"epiphysis\" is:",
        "options": {
          "A": "The shaft of a long bone",
          "B": "The line that separates the shaft from the end of a long bone",
          "C": "The membrane that surrounds a bone",
          "D": "The end of a long bone"
        },
        "correctAnswer": "D",
        "explanation": "The end of a long bone (D) is correct because the epiphysis refers to the rounded ends of a long bone, which are typically involved in joint formation. The shaft of a long bone (A) is incorrect because that describes the diaphysis, a different region of the bone. The line that separates the shaft from the end of a long bone (B) is incorrect because that describes the epiphyseal line or plate, a distinct structure from the epiphysis itself. The membrane that surrounds a bone (C) is incorrect because that describes the periosteum, an outer covering rather than the bone's end region."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q18",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "When listening to the \"lub-dup\" sound of the heart with a stethoscope, what is the cause of the \"dup\" sound:",
        "options": {
          "A": "The blood flowing through the open semilunar valves",
          "B": "The blood flowing through the open atrioventricular valves",
          "C": "The turbulent blood flow through closing atrioventricular valves",
          "D": "The turbulent blood flow through closing semilunar valves"
        },
        "correctAnswer": "D",
        "explanation": "The turbulent blood flow through closing semilunar valves (D) is correct because the second heart sound (\"dup\") is produced by the closure of the aortic and pulmonary (semilunar) valves at the end of ventricular systole. The blood flowing through the open semilunar valves (A) is incorrect because open valves during ejection do not generate the characteristic snap heard as the second sound. The blood flowing through the open atrioventricular valves (B) is incorrect because open valves allowing filling do not produce a distinct closing sound either. The turbulent blood flow through closing atrioventricular valves (C) is incorrect because that describes the mechanism of the first heart sound (\"lub\"), not the second."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q19",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "What is one difference between the dermis and the epidermis:",
        "options": {
          "A": "epidermis is composed of fibrous connective tissue while the dermis is composed of epithelial cells",
          "B": "dermis is the most exterior layer",
          "C": "dermis is not part of the skin while the epidermis is",
          "D": "dermis is vascularised while the epidermis is not"
        },
        "correctAnswer": "D",
        "explanation": "Dermis is vascularised while the epidermis is not (D) is correct because the dermis contains blood vessels that nourish the skin, while the avascular epidermis relies on diffusion from below for nutrients. Epidermis is composed of fibrous connective tissue while the dermis is composed of epithelial cells (A) is incorrect because this reverses the actual tissue types: the epidermis is epithelial tissue and the dermis is fibrous connective tissue. Dermis is the most exterior layer (B) is incorrect because the epidermis, not the dermis, forms the outermost layer of skin. Dermis is not part of the skin while the epidermis is (C) is incorrect because both the dermis and epidermis are integral layers of the skin itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q20",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 1,
        "text": "Pacemaker cells, unlike myocardial cells:",
        "options": {
          "A": "require a stimulus from the vagus nerve in order to reach threshold, myocardial cells do not",
          "B": "reach threshold with much weaker stimuli than myocardial cells",
          "C": "have gap junctions, while myocardial cells do not",
          "D": "spontaneously generate action potentials, while myocardial cells do not"
        },
        "correctAnswer": "D",
        "explanation": "Spontaneously generate action potentials, while myocardial cells do not (D) is correct because pacemaker cells have an unstable resting potential that drifts to threshold on its own (autorhythmicity), whereas ordinary myocardial (contractile) cells depend on a stimulus spreading to them from the pacemaker cells. Require a stimulus from the vagus nerve in order to reach threshold, myocardial cells do not (A) is incorrect because pacemaker cells reach threshold spontaneously without needing an external nerve stimulus; the vagus nerve only modulates the rate. Reach threshold with much weaker stimuli than myocardial cells (B) is incorrect because this mischaracterises the distinguishing feature, which is spontaneous depolarisation, not simply a lower stimulus threshold. Have gap junctions, while myocardial cells do not (C) is incorrect because both pacemaker and myocardial cells possess gap junctions, which allow the electrical signal to spread throughout the heart."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q21",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "By what means does an electrical signal travel from the atria to the ventricles:",
        "options": {
          "A": "gap junctions",
          "B": "Purkinje fibres",
          "C": "intercalated discs",
          "D": "atrioventricular bundle"
        },
        "correctAnswer": "D",
        "explanation": "Atrioventricular bundle (D) is correct because the fibrous skeleton of the heart electrically insulates the atria from the ventricles everywhere except at the AV bundle (bundle of His), which is the sole conduction pathway connecting the two. Gap junctions (A) is incorrect because, while gap junctions allow signal spread within atrial or ventricular tissue, they do not bridge the fibrous insulation separating the atria from the ventricles. Purkinje fibres (B) is incorrect because these carry the signal onward within the ventricular walls after it has already crossed from the atria via the AV bundle. Intercalated discs (C) is incorrect because these are the specialised junctions between adjacent cardiac cells that help conduction spread locally, not the specific structure that crosses the atrioventricular boundary."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q22",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Which of the following is NOT epithelial tissue:",
        "options": {
          "A": "the epidermis",
          "B": "glandular tissue",
          "C": "the internal lining of blood vessels",
          "D": "the dermis"
        },
        "correctAnswer": "D",
        "explanation": "The dermis (D) is correct as the exception because it is a layer of fibrous connective tissue, not epithelium. The epidermis (A) is incorrect as the answer because it is a classic example of stratified epithelial tissue. Glandular tissue (B) is incorrect as the answer because glands are formed from epithelial cells specialised for secretion. The internal lining of blood vessels (C) is incorrect as the answer because this endothelial lining is a simple squamous epithelium."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q23",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Which of the following bone markings forms part of an articulation:",
        "options": {
          "A": "the deltoid tuberosity of the humerus",
          "B": "the lateral condyle of the femur",
          "C": "the greater trochanter of the femur",
          "D": "the greater tubercule of the humerus"
        },
        "correctAnswer": "B",
        "explanation": "The lateral condyle of the femur (B) is correct because condyles are smooth, rounded surfaces specifically shaped to articulate with an adjacent bone, in this case forming part of the knee joint. The deltoid tuberosity of the humerus (A) is incorrect because a tuberosity is a rough projection for muscle attachment (here, the deltoid), not a joint surface. The greater trochanter of the femur (C) is incorrect because trochanters are large projections that serve as muscle attachment sites, not articulating surfaces. The greater tubercule of the humerus (D) is incorrect because a tubercle is likewise a projection for muscle or ligament attachment, not a surface that articulates with another bone."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q24",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "One of the following is NOT part of the integumentary system:",
        "options": {
          "A": "The hypodermis",
          "B": "Sebaceous glands",
          "C": "finger nails",
          "D": "the stratum corneum"
        },
        "correctAnswer": "A",
        "explanation": "The hypodermis (A) is correct as the exception because it is the subcutaneous layer of fat and connective tissue lying beneath the skin, and it is generally classified as connecting the skin to underlying structures rather than being one of the integumentary system's own layers. Sebaceous glands (B) is incorrect as the answer because these oil-producing glands are accessory structures of the skin. Finger nails (C) is incorrect as the answer because nails are classic accessory structures of the integumentary system. The stratum corneum (D) is incorrect as the answer because this is the outermost layer of the epidermis itself, clearly part of the integumentary system."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q25",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Which of the following chemicals would cause blood pressure to decrease when they appear in blood:",
        "options": {
          "A": "anti-diuretic hormone",
          "B": "angiotensin II",
          "C": "aldosterone",
          "D": "atrial natriuretic peptide"
        },
        "correctAnswer": "D",
        "explanation": "Atrial natriuretic peptide (D) is correct because it is released by the atria in response to stretch and promotes sodium and water excretion along with vasodilation, both of which lower blood pressure. Anti-diuretic hormone (A) is incorrect because it promotes water retention, which increases blood volume and pressure. Angiotensin II (B) is incorrect because it is a potent vasoconstrictor that raises blood pressure. Aldosterone (C) is incorrect because it promotes sodium and water retention by the kidneys, increasing blood volume and pressure."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q26",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Why do arteries have more elastic and muscular tissue than veins:",
        "options": {
          "A": "arteries need to expand and contract as blood flows through them",
          "B": "arteries need carry a greater volume of blood than do veins",
          "C": "to ensure that blood flows only in the direction away from the heart",
          "D": "in order to support the larger diameter of arteries compared to veins"
        },
        "correctAnswer": "A",
        "explanation": "Arteries need to expand and contract as blood flows through them (A) is correct because the elastic and muscular walls allow arteries to stretch under the high pressure of each heartbeat and recoil between beats, helping maintain continuous forward flow. Arteries need carry a greater volume of blood than do veins (B) is incorrect because, at any given time, veins actually hold a larger overall volume of blood than arteries. To ensure that blood flows only in the direction away from the heart (C) is incorrect because unidirectional flow away from the heart is simply a consequence of arterial anatomy and pressure, not something the elastic/muscular tissue itself is there to enforce (that role, where needed, belongs to valves in veins). In order to support the larger diameter of arteries compared to veins (D) is incorrect because arteries are not generally larger in diameter than their corresponding veins, and vessel diameter is not the primary reason for the extra elastic and muscular tissue."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q27",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "What is the first process that occurs after a blood vessel is damaged:",
        "options": {
          "A": "coagulation",
          "B": "platelet plug formation",
          "C": "vasoconstriction",
          "D": "haemolysis"
        },
        "correctAnswer": "C",
        "explanation": "Vasoconstriction (C) is correct because the immediate response to vessel injury is a reflexive narrowing of the damaged vessel to reduce blood loss, occurring before the other haemostatic steps. Coagulation (A) is incorrect because the clotting cascade occurs after vasoconstriction and platelet plug formation, forming the more stable fibrin clot. Platelet plug formation (B) is incorrect because platelets adhere to the exposed collagen only after the initial vasoconstriction has already begun to limit blood flow to the area. Haemolysis (D) is incorrect because this refers to the destruction of red blood cells, an unrelated process rather than a normal step in the haemostatic response to injury."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q28",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Which of the following is a correct definition of \"positive feedback\":",
        "options": {
          "A": "The process by which the body maintains homeostasis",
          "B": "A mechanism in which the body's response to a stimulus, opposes the stimulus",
          "C": "A mechanism whereby the body responds to a stimulus by acting to enhance the stimulus",
          "D": "The dynamic equilibrium maintained by an integrating centre which causes an effector to respond to the stimulus received by the receptor"
        },
        "correctAnswer": "C",
        "explanation": "A mechanism whereby the body responds to a stimulus by acting to enhance the stimulus (C) is correct because positive feedback loops amplify the original change rather than reversing it, as seen in processes like labour contractions or blood clotting. The process by which the body maintains homeostasis (A) is incorrect because homeostasis is maintained primarily through negative feedback, not positive feedback. A mechanism in which the body's response to a stimulus opposes the stimulus (B) is incorrect because this describes negative feedback, the opposite of positive feedback. The dynamic equilibrium maintained by an integrating centre which causes an effector to respond to the stimulus received by the receptor (D) is incorrect because this is a general description of a feedback loop's components rather than the specific defining feature of a positive feedback mechanism."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q29",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Two atoms have the same mass number but different atomic numbers. Which of the following statements concerning these atoms is TRUE:",
        "options": {
          "A": "Each has the same number of neutrons in its nucleus",
          "B": "They are isotopes",
          "C": "They are atoms of different elements",
          "D": "Each has the same number of protons in its nucleus"
        },
        "correctAnswer": "C",
        "explanation": "They are atoms of different elements (C) is correct because an atom's identity as a particular element is determined by its atomic number (number of protons), so atoms with different atomic numbers must be different elements, even if their mass numbers happen to coincide (these are called isobars). Each has the same number of neutrons in its nucleus (A) is incorrect because, with different atomic numbers but the same mass number, the neutron counts must differ to compensate for the differing proton counts. They are isotopes (B) is incorrect because isotopes share the same atomic number but differ in mass number, which is the opposite situation described here. Each has the same number of protons in its nucleus (D) is incorrect because atomic number is defined by the number of protons, and the question states the atomic numbers differ."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q30",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Which is the deepest layer of the integument:",
        "options": {
          "A": "the epidermis",
          "B": "the dermis",
          "C": "the stratum corneum",
          "D": "the papillary dermal layer"
        },
        "correctAnswer": "B",
        "explanation": "The dermis (B) is correct because, of the layers considered part of the skin proper, the dermis lies beneath the epidermis and is the deeper of the two. The epidermis (A) is incorrect because it is the outer, more superficial layer of the skin. The stratum corneum (C) is incorrect because this is the outermost sublayer of the epidermis, making it the most superficial layer rather than the deepest. The papillary dermal layer (D) is incorrect because, within the dermis itself, the papillary layer is the more superficial sublayer, sitting above the deeper reticular layer."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q31",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "One of the functions of integral proteins in cell membranes is to:",
        "options": {
          "A": "maintain the rigid structure of the cell",
          "B": "support mechanically the phospholipids",
          "C": "interact with the cytoplasm",
          "D": "form channels for transport function"
        },
        "correctAnswer": "D",
        "explanation": "Form channels for transport function (D) is correct because many integral proteins span the entire membrane and create passageways that allow specific ions or molecules to cross the otherwise impermeable lipid bilayer. Maintain the rigid structure of the cell (A) is incorrect because that role is more associated with the cytoskeleton and structural proteins, not primarily integral membrane proteins. Support mechanically the phospholipids (B) is incorrect because phospholipids form the structural bilayer themselves and are not mechanically dependent on integral proteins for their arrangement. Interact with the cytoplasm (C) is incorrect because this describes only peripheral proteins on the cytoplasmic face, not the defining transport function of integral proteins."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q32",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "What is the name given to the remnant of the opening in the foetal heart that allowed the foetal lungs to be bypassed:",
        "options": {
          "A": "coronary sinus",
          "B": "foramen ovale",
          "C": "interatrial septum",
          "D": "fossa ovalis"
        },
        "correctAnswer": "D",
        "explanation": "Fossa ovalis (D) is correct because after birth the foramen ovale normally closes, leaving behind a shallow depression in the interatrial septum called the fossa ovalis as its remnant. Coronary sinus (A) is incorrect because this is a separate structure that collects venous blood from the heart muscle itself, unrelated to the foetal shunt. Foramen ovale (B) is incorrect because this term names the original foetal opening itself, not its postnatal remnant. Interatrial septum (C) is incorrect because this is the wall between the atria in which the opening (and later its remnant) is located, not the remnant itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q33",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "What is the pulse that we feel at the anterior medial part of the elbow (when in anatomical position) called:",
        "options": {
          "A": "Radial pulse",
          "B": "Ulnar pulse",
          "C": "Carotid pulse",
          "D": "Brachial pulse"
        },
        "correctAnswer": "D",
        "explanation": "Brachial pulse (D) is correct because the brachial artery is palpable at the antecubital fossa, on the anterior medial aspect of the elbow, and this is the classic site used for taking blood pressure. Radial pulse (A) is incorrect because this is felt at the wrist on the thumb side, not at the elbow. Ulnar pulse (B) is incorrect because this is felt at the wrist on the little-finger side, not at the elbow. Carotid pulse (C) is incorrect because this is palpated in the neck, an entirely different location from the elbow."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q34",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "What purpose is vitamin D (calcitriol) used for:",
        "options": {
          "A": "required for several stages of haemostasis",
          "B": "required for uptake of calcium from the intestines",
          "C": "required for erythropoiesis",
          "D": "required for uptake of intrinsic factor"
        },
        "correctAnswer": "B",
        "explanation": "Required for uptake of calcium from the intestines (B) is correct because active vitamin D (calcitriol) promotes the absorption of dietary calcium across the intestinal wall, which is essential for maintaining calcium balance and bone health. Required for several stages of haemostasis (A) is incorrect because clotting depends mainly on vitamin K and clotting factors, not vitamin D. Required for erythropoiesis (C) is incorrect because red blood cell production depends primarily on erythropoietin, iron, and vitamin B12/folate, not vitamin D. Required for uptake of intrinsic factor (D) is incorrect because intrinsic factor is a protein made by the stomach for vitamin B12 absorption, a process unrelated to vitamin D."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q35",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "When cardiac ejection ceases during diastole, what is the most important factor maintaining blood flow in arteries of the body:",
        "options": {
          "A": "Contraction of skeletal muscle",
          "B": "Closing the venous valves",
          "C": "Elastic recoil of the arteries close to heart",
          "D": "Contraction of the atria"
        },
        "correctAnswer": "C",
        "explanation": "Elastic recoil of the arteries close to the heart (C) is correct because the large elastic arteries stretch during systole and then recoil during diastole, continuing to push blood forward even while the ventricles are relaxed. Contraction of skeletal muscle (A) is incorrect because this mechanism, the skeletal muscle pump, assists venous return toward the heart, not arterial flow away from it. Closing the venous valves (B) is incorrect because venous valves prevent backflow in the low-pressure venous system, playing no role in maintaining arterial flow. Contraction of the atria (D) is incorrect because atrial contraction contributes to ventricular filling before systole, not to sustaining flow within the arteries during diastole."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q36",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "The functions of bones may be stated as:",
        "options": {
          "A": "fat storage, movement, mineral storage, protection, blood cell formation",
          "B": "mineral storage, haemopoiesis, movement, leverage, protection",
          "C": "blood cell formation, hormone production, movement, support, protection",
          "D": "support, storage, movement, haemopoiesis, protection"
        },
        "correctAnswer": "D",
        "explanation": "Support, storage, movement, haemopoiesis, protection (D) is correct because this concisely captures the five classic, non-overlapping functions of the skeletal system: providing a structural framework, storing minerals and fat, enabling movement via muscle leverage, producing blood cells, and protecting internal organs. Fat storage, movement, mineral storage, protection, blood cell formation (A) is incorrect because, while accurate, it omits the fundamental support function that is central to how bones are usually categorised. Mineral storage, haemopoiesis, movement, leverage, protection (B) is incorrect because it lists both movement and leverage as if they were separate distinct functions, when leverage is simply the mechanism behind movement, making the list redundant. Blood cell formation, hormone production, movement, support, protection (C) is incorrect because hormone production is not one of the traditionally taught core functions of bone in this context, while mineral and fat storage are omitted."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q37",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Which is the most superficial layer of the integument that also has capillaries, lymphatics and sensory neurons:",
        "options": {
          "A": "reticular dermal layer",
          "B": "papillary dermal layer",
          "C": "stratum granulosum",
          "D": "stratum lucidum"
        },
        "correctAnswer": "B",
        "explanation": "Papillary dermal layer (B) is correct because this thin, superficial layer of the dermis directly beneath the epidermis contains capillary loops, lymphatic vessels, and sensory nerve endings (like Meissner's corpuscles) within its finger-like papillae. Reticular dermal layer (A) is incorrect because this is the deeper, thicker sublayer of the dermis, not the more superficial one. Stratum granulosum (C) is incorrect because this is a layer of the avascular epidermis and cannot contain capillaries. Stratum lucidum (D) is incorrect because this too is an epidermal layer, found only in thick skin, and is likewise avascular."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q38",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "The \"afferent pathway\" in the description of a feedback loop in homeostasis, refers to the:",
        "options": {
          "A": "Circulating blood",
          "B": "pathway from the integrating centre to the effector",
          "C": "outgoing signal",
          "D": "path taken by the signal produced by a stimulus"
        },
        "correctAnswer": "D",
        "explanation": "Path taken by the signal produced by a stimulus (D) is correct because the afferent pathway carries information from the receptor toward the integrating centre, in the same direction as an incoming (afferent) sensory signal. Circulating blood (A) is incorrect because this is a general transport medium, not the specific signalling pathway defined in a feedback loop. Pathway from the integrating centre to the effector (B) is incorrect because this describes the efferent pathway, the outgoing route, not the afferent one. Outgoing signal (C) is incorrect because \"afferent\" specifically means incoming, toward the integrating centre, the opposite of outgoing."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q39",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "Which protein(s) are found in thin myofilaments:",
        "options": {
          "A": "actin",
          "B": "actin and tropomyosin",
          "C": "actin, tropomyosin, and troponin",
          "D": "actin, myosin, tropomyosin and troponin"
        },
        "correctAnswer": "C",
        "explanation": "Actin, tropomyosin, and troponin (C) is correct because the thin filament is composed of the actin backbone along with the two regulatory proteins, tropomyosin and troponin, that control access to the myosin-binding sites. Actin (A) is incorrect because it names only the main structural protein while omitting the regulatory proteins also present in the thin filament. Actin and tropomyosin (B) is incorrect because it leaves out troponin, the calcium-sensing protein essential to the regulation of contraction. Actin, myosin, tropomyosin and troponin (D) is incorrect because myosin is the protein that makes up the thick filament, not the thin filament."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q40",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 2,
        "text": "A patient with blood type \"B+\" should be infused with blood that is:",
        "options": {
          "A": "positive for rhesus antigen D",
          "B": "negative for rhesus antigen D",
          "C": "negative for antigen B",
          "D": "negative for antigen A"
        },
        "correctAnswer": "D",
        "explanation": "Negative for antigen A (D) is correct because a type B patient naturally carries anti-A antibodies in their plasma, so transfused blood must not carry the A antigen or it will trigger a transfusion reaction. Positive for rhesus antigen D (A) is incorrect as the required condition because, while a Rh-positive patient can safely receive Rh-positive blood, they can equally well receive Rh-negative blood, so this is not a strict requirement. Negative for rhesus antigen D (B) is incorrect because a Rh-positive patient does not need Rh-negative blood specifically; either Rh type is compatible with respect to the D antigen. Negative for antigen B (C) is incorrect because the patient's own red cells carry the B antigen and their plasma contains no anti-B antibodies, so B-antigen-positive blood is perfectly compatible."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q41",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "What is the structure that attaches one bone to another:",
        "options": {
          "A": "ligament",
          "B": "cartilage",
          "C": "tendon",
          "D": "diaphysis"
        },
        "correctAnswer": "A",
        "explanation": "Ligament (A) is correct because ligaments are the tough bands of fibrous connective tissue that connect bone to bone across joints, stabilising them. Cartilage (B) is incorrect because, although cartilage is found at many joints, its role is to cushion and provide smooth articulating surfaces rather than to anchor one bone to another. Tendon (C) is incorrect because tendons connect muscle to bone, not bone to bone. Diaphysis (D) is incorrect because this refers to the shaft of a long bone, a bone region rather than a connective structure between bones."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q42",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Colloid osmotic pressure:",
        "options": {
          "A": "is due to all of the dissolved particles in blood",
          "B": "is the difference in pressure between the arterial end and the venous end of a capillary",
          "C": "is the difference in pressure between the inside of a capillary and the interstitial fluid",
          "D": "is due to the plasma proteins in the blood"
        },
        "correctAnswer": "D",
        "explanation": "Is due to the plasma proteins in the blood (D) is correct because colloid osmotic (oncotic) pressure is specifically generated by large plasma proteins, mainly albumin, that do not readily cross the capillary wall and therefore draw water back into the vessel. Is due to all of the dissolved particles in blood (A) is incorrect because small dissolved solutes like electrolytes and glucose move freely across capillary walls and do not contribute to this particular pressure. Is the difference in pressure between the arterial end and the venous end of a capillary (B) is incorrect because that describes a change in hydrostatic pressure along the capillary, not colloid osmotic pressure. Is the difference in pressure between the inside of a capillary and the interstitial fluid (C) is incorrect because that is a general description comparing two locations rather than identifying what specifically generates the osmotic force, which is the plasma proteins."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q43",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Which cell type produces a pigment that affords the skin some protection against ultraviolet radiation:",
        "options": {
          "A": "keratinocytes",
          "B": "melanocytes",
          "C": "dendrocytes",
          "D": "merkel cells"
        },
        "correctAnswer": "B",
        "explanation": "Melanocytes (B) is correct because these specialised epidermal cells produce melanin, the pigment that absorbs and scatters UV radiation to help protect underlying skin structures from damage. Keratinocytes (A) is incorrect because these are the most abundant epidermal cells, producing keratin for structural protection, but they do not themselves manufacture melanin. Dendrocytes (C) is incorrect because dendritic (Langerhans) cells function in immune surveillance within the skin, not pigment production. Merkel cells (D) is incorrect because these are associated with light-touch sensation, not pigment production."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q44",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "In the haemostasis process, what forms as a result of the extrinsic and intrinsic pathways:",
        "options": {
          "A": "fibrin",
          "B": "thrombin",
          "C": "a platelet plug",
          "D": "prothrombinase"
        },
        "correctAnswer": "D",
        "explanation": "Prothrombinase (D) is correct because both the extrinsic and intrinsic pathways converge on the common pathway to generate this enzyme complex (also called prothrombin activator), which is their shared end product. Fibrin (A) is incorrect because fibrin is formed later, when thrombin acts on fibrinogen, a step that comes after prothrombinase has already been produced. Thrombin (B) is incorrect because thrombin is generated when prothrombinase converts prothrombin, meaning thrombin is a downstream product rather than the direct convergence point of the two pathways. A platelet plug (C) is incorrect because platelet plug formation is an earlier, separate step in haemostasis (primary haemostasis) that precedes activation of the clotting cascade pathways."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q45",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "What is the \"cribriform plate\":",
        "options": {
          "A": "That part of the nose with three folds of tissue called conchae",
          "B": "The structure that separates the nose from the nasopharynx",
          "C": "Part of the ethmoid bone through which olfactory nerves pass",
          "D": "The nose structure through which air is warmed and humidified as it passes"
        },
        "correctAnswer": "C",
        "explanation": "Part of the ethmoid bone through which olfactory nerves pass (C) is correct because the cribriform plate is the perforated horizontal portion of the ethmoid bone that allows the olfactory nerve fibres to travel from the nasal cavity up into the cranial cavity. That part of the nose with three folds of tissue called conchae (A) is incorrect because the conchae are separate ridged structures within the nasal cavity, not part of the cribriform plate. The structure that separates the nose from the nasopharynx (B) is incorrect because that boundary is formed by the choanae, not the cribriform plate. The nose structure through which air is warmed and humidified as it passes (D) is incorrect because this describes the general function of the nasal conchae and mucosa, not the cribriform plate, which serves a purely olfactory-nerve passage role."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q46",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "What happens when a sodium atom reacts to form a compound? The atom will:",
        "options": {
          "A": "gain one electron",
          "B": "lose one electron",
          "C": "gain two electrons",
          "D": "lose two electrons"
        },
        "correctAnswer": "B",
        "explanation": "Lose one electron (B) is correct because sodium has a single valence electron in its outer shell, and it readily loses this one electron to achieve a stable, full outer shell, forming a Na+ ion. Gain one electron (A) is incorrect because gaining an electron would leave sodium with an unstable outer shell configuration rather than a stable one. Gain two electrons (C) is incorrect because this does not reflect sodium's single valence electron and would not produce a stable electron configuration. Lose two electrons (D) is incorrect because sodium only has one electron in its outermost shell to lose; losing a second electron would require breaking into a much more stable, lower-energy shell, which does not happen under normal reactive conditions."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q47",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "In homeostasis, what is it that produces the response that moves the physiological variable back towards the middle of its healthy range:",
        "options": {
          "A": "the effector",
          "B": "the receptor",
          "C": "the integrating centre",
          "D": "the efferent pathway"
        },
        "correctAnswer": "A",
        "explanation": "The effector (A) is correct because this is the structure, such as a muscle or gland, that actually carries out the physiological response that corrects the deviation and restores the variable toward its normal range. The receptor (B) is incorrect because its role is to detect the change in the variable, not to produce the corrective response itself. The integrating centre (C) is incorrect because it processes the information and decides on an appropriate response but does not itself carry out that response. The efferent pathway (D) is incorrect because it merely carries the command signal from the integrating centre to the effector, without producing the actual physiological response."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q48",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Leucocytes may be correctly described as:",
        "options": {
          "A": "cells with nuclei that do not contain haemoglobin",
          "B": "cells without nuclei, that contain haemoglobin",
          "C": "white blood cells with granules in their cytoplasm",
          "D": "neutrophilic"
        },
        "correctAnswer": "A",
        "explanation": "Cells with nuclei that do not contain haemoglobin (A) is correct because leucocytes (white blood cells), unlike red blood cells, retain a nucleus and do not carry the oxygen-transporting pigment haemoglobin. Cells without nuclei, that contain haemoglobin (B) is incorrect because this description actually fits red blood cells, not leucocytes. White blood cells with granules in their cytoplasm (C) is incorrect because this only describes the granulocyte subtype of leucocytes (neutrophils, eosinophils, basophils), not all white blood cells, since lymphocytes and monocytes are agranulocytes. Neutrophilic (D) is incorrect because this describes only one specific type of leucocyte, not the whole category."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q49",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "What do sudiferous glands do:",
        "options": {
          "A": "Secrete sebum into a hair follicle",
          "B": "Secrete sweat through a duct to the skin",
          "C": "Secrete sweat through a duct to the skin or into a hair follicle",
          "D": "Secrete cerumen through a duct to the skin or into a hair follicle"
        },
        "correctAnswer": "C",
        "explanation": "Secrete sweat through a duct to the skin or into a hair follicle (C) is correct because sudoriferous (sweat) glands include eccrine glands, which release sweat directly onto the skin surface, and apocrine glands, which release their secretion into hair follicles, together covering both routes. Secrete sebum into a hair follicle (A) is incorrect because sebum is produced by sebaceous glands, not sudoriferous (sweat) glands. Secrete sweat through a duct to the skin (B) is incorrect because it only describes the eccrine route and leaves out the apocrine glands that empty into hair follicles. Secrete cerumen through a duct to the skin or into a hair follicle (D) is incorrect because cerumen (earwax) is produced by specialised ceruminous glands in the ear canal, not general sudoriferous glands."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q50",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "What is the advantage of having a wide lumen in veins:",
        "options": {
          "A": "It provides less resistance to the blood on its way to heart",
          "B": "It controls the opening and closing of the valves",
          "C": "It produces high pressure on the blood on its way to heart",
          "D": "It helps the pre-capillary sphincters to stay open for a longer time"
        },
        "correctAnswer": "A",
        "explanation": "It provides less resistance to the blood on its way to heart (A) is correct because the wide lumen of veins offers minimal resistance to flow, which helps compensate for the low pressure remaining in venous blood as it returns to the heart. It controls the opening and closing of the valves (B) is incorrect because venous valves are opened and closed by the direction of blood flow and surrounding muscle contraction, not by lumen width. It produces high pressure on the blood on its way to heart (C) is incorrect because venous pressure is characteristically low, and a wide lumen actually reduces rather than increases resistance-driven pressure. It helps the pre-capillary sphincters to stay open for a longer time (D) is incorrect because pre-capillary sphincters are located at the arteriolar-capillary junction, an entirely different part of the vascular system from veins."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q51",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Which of the following is an example of a synovial joint. The joint between the:",
        "options": {
          "A": "tibia and fibula",
          "B": "sternum and rib number 1",
          "C": "thoracic vertebrae 4 and 5",
          "D": "proximal ends of the radius and ulna"
        },
        "correctAnswer": "D",
        "explanation": "Proximal ends of the radius and ulna (D) is correct because the proximal radioulnar joint is a classic pivot-type synovial joint, allowing the rotational movement of pronation and supination. Tibia and fibula (A) is incorrect because the more commonly referenced tibiofibular joint at the ankle (distal) is a fibrous syndesmosis rather than a freely movable synovial joint. Sternum and rib number 1 (B) is incorrect because the first sternocostal joint is a cartilaginous synchondrosis, essentially immovable, unlike the synovial joints of ribs 2-7. Thoracic vertebrae 4 and 5 (C) is incorrect because the joint between vertebral bodies is a cartilaginous symphysis formed by the intervertebral disc, not a synovial joint."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q52",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Which strategy would be most effective in dealing with a severe case of dehydration:",
        "options": {
          "A": "Oral administration of a hypertonic solution",
          "B": "Intravenous administration of distilled water",
          "C": "Intravenous administration of isotonic glucose",
          "D": "Intravenous administration of hypotonic sodium chloride"
        },
        "correctAnswer": "C",
        "explanation": "Intravenous administration of isotonic glucose (C) is correct because an isotonic dextrose solution can be given safely into the bloodstream without causing an immediate osmotic shift, and once the glucose is metabolised it effectively delivers free water to rehydrate the body. Oral administration of a hypertonic solution (A) is incorrect because a hypertonic solution draws water out of body tissues osmotically and can worsen dehydration rather than correct it. Intravenous administration of distilled water (B) is incorrect because pure water infused directly into the bloodstream is severely hypotonic to plasma and will cause red blood cells to swell and burst (haemolysis). Intravenous administration of hypotonic sodium chloride (D) is incorrect because, in severe dehydration, a hypotonic solution risks causing rapid fluid shifts into cells and is not the first-choice strategy compared to an isotonic option."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q53",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Careful blood matching is performed prior to transfusing blood in order to avoid which scenario:",
        "options": {
          "A": "newborn haemolytic disease",
          "B": "the recipient's antigens attacking the red blood cells in the transfusion",
          "C": "the recipient's antibodies attacking the red blood cells in the transfusion",
          "D": "the antigens on the recipient's red blood cells reacting with the antibodies in the transfused blood"
        },
        "correctAnswer": "C",
        "explanation": "The recipient's antibodies attacking the red blood cells in the transfusion (C) is correct because a transfusion reaction primarily occurs when pre-existing antibodies in the recipient's own plasma recognise and attack antigens present on the donor's red blood cells. Newborn haemolytic disease (A) is incorrect because this specific condition results from Rh incompatibility between a mother and her foetus, a different clinical scenario from adult blood transfusion matching. The recipient's antigens attacking the red blood cells in the transfusion (B) is incorrect because antigens themselves do not actively attack anything; it is antibodies that mount the immune attack. The antigens on the recipient's red blood cells reacting with the antibodies in the transfused blood (D) is incorrect because, while donor plasma antibodies can theoretically react with recipient cells, this is a much smaller concern given the dilution of donor plasma, so it is not the primary scenario blood matching aims to prevent."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q54",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "The heart rate can be increased by which of the following:",
        "options": {
          "A": "sympathetic stimulation of the SA node",
          "B": "sympathetic stimulation of the AV node",
          "C": "parasympathetic stimulation of the SA node",
          "D": "parasympathetic stimulation of the AV node"
        },
        "correctAnswer": "A",
        "explanation": "Sympathetic stimulation of the SA node (A) is correct because sympathetic input increases the rate of spontaneous depolarisation in the sinoatrial node, the heart's primary pacemaker, thereby speeding up heart rate. Sympathetic stimulation of the AV node (B) is incorrect because, while sympathetic input can affect conduction speed there too, it is stimulation of the SA node specifically that sets and increases the overall heart rate. Parasympathetic stimulation of the SA node (C) is incorrect because parasympathetic input via the vagus nerve slows the SA node's firing rate, decreasing heart rate rather than increasing it. Parasympathetic stimulation of the AV node (D) is incorrect because this similarly slows conduction, working to decrease heart rate, not increase it."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q55",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "What effect will increasing the concentration of red cells in blood have:",
        "options": {
          "A": "decrease blood viscosity and increase aortic pressure",
          "B": "increase blood viscosity and decrease aortic pressure",
          "C": "increase blood viscosity and increase aortic pressure",
          "D": "decrease blood viscosity and decrease aortic pressure"
        },
        "correctAnswer": "C",
        "explanation": "Increase blood viscosity and increase aortic pressure (C) is correct because a higher red cell concentration (haematocrit) makes blood thicker, raising its viscosity, which in turn increases resistance to flow and drives up arterial pressure. Decrease blood viscosity and increase aortic pressure (A) is incorrect because more red cells make blood thicker, not thinner, so viscosity rises rather than falls. Increase blood viscosity and decrease aortic pressure (B) is incorrect because increased viscosity raises resistance, which tends to raise, not lower, arterial pressure. Decrease blood viscosity and decrease aortic pressure (D) is incorrect because both effects described move in the wrong direction; more red cells increase, rather than decrease, both viscosity and pressure."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q56",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "What term is applied to moving the thigh laterally away from the midline of the body:",
        "options": {
          "A": "extension",
          "B": "adduction",
          "C": "abduction",
          "D": "flexion"
        },
        "correctAnswer": "C",
        "explanation": "Abduction (C) is correct because this term specifically describes movement of a limb away from the midline of the body. Extension (A) is incorrect because that describes straightening a joint to increase the angle between two body parts, not lateral movement away from the midline. Adduction (B) is incorrect because that describes movement toward the midline, the exact opposite of the motion described. Flexion (D) is incorrect because that describes bending a joint to decrease the angle between body parts, an unrelated type of movement."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q57",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "To what does the term \"cardiac output\" refer:",
        "options": {
          "A": "the speed of blood flow through the aorta",
          "B": "the volume of blood flowing through the aorta per minute",
          "C": "the volume of blood pumped by the heart with each beat",
          "D": "the number of heart beats per minute"
        },
        "correctAnswer": "B",
        "explanation": "The volume of blood flowing through the aorta per minute (B) is correct because cardiac output is defined as the total volume of blood the heart pumps out (via the aorta) in one minute, calculated as stroke volume multiplied by heart rate. The speed of blood flow through the aorta (A) is incorrect because cardiac output describes a volume over time, not a velocity. The volume of blood pumped by the heart with each beat (C) is incorrect because that describes stroke volume, one of the two components used to calculate cardiac output, not cardiac output itself. The number of heart beats per minute (D) is incorrect because that describes heart rate, the other component used in the cardiac output calculation, not the output itself."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q58",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Between which two anatomical structures does the Larynx lie:",
        "options": {
          "A": "The nares and the choanae",
          "B": "The epiglottis and the trachea",
          "C": "The choanae and the glottis",
          "D": "The glottis and the epiglottis"
        },
        "correctAnswer": "B",
        "explanation": "The epiglottis and the trachea (B) is correct because the larynx sits below the epiglottis, which guards its opening, and connects directly into the trachea below, positioning it clearly between these two structures. The nares and the choanae (A) is incorrect because these structures are both located within the nasal cavity, well above the larynx. The choanae and the glottis (C) is incorrect because the choanae mark the back of the nasal cavity, far superior to the larynx, making this an inaccurate boundary pairing. The glottis and the epiglottis (D) is incorrect because both the glottis and epiglottis are structures within the larynx itself, not landmarks bordering it from outside."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q59",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Which of the following would be a negative feedback response by the body to hyperthermia:",
        "options": {
          "A": "Shivering",
          "B": "Sweating",
          "C": "Vasoconstriction of blood vessels in the dermis",
          "D": "An increase in metabolic rate"
        },
        "correctAnswer": "B",
        "explanation": "Sweating (B) is correct because sweat evaporating from the skin cools the body, directly opposing and correcting the rise in temperature seen in hyperthermia, which is the hallmark of a negative feedback response. Shivering (A) is incorrect because this response generates heat through muscle activity and would be used to correct hypothermia, not hyperthermia. Vasoconstriction of blood vessels in the dermis (C) is incorrect because narrowing skin blood vessels conserves heat by reducing heat loss, which would worsen rather than correct hyperthermia. An increase in metabolic rate (D) is incorrect because raising metabolism generates additional heat, again working against the correction of an already elevated body temperature."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q60",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 3,
        "text": "Which of the following describes the movements known as pronation and supination:",
        "options": {
          "A": "The flexing of the arm with respect to the forearm around the elbow",
          "B": "The swivelling of the foot to the medial and lateral directions",
          "C": "The twisting of the wrist while the elbow is held motionless",
          "D": "The rotation at the shoulder that causes the arm to describe a cone shape"
        },
        "correctAnswer": "C",
        "explanation": "The twisting of the wrist while the elbow is held motionless (C) is correct because pronation and supination are produced by the radius rotating around the ulna at the forearm, which is commonly observed and described as a twisting of the hand/wrist with the upper arm and elbow held still. The flexing of the arm with respect to the forearm around the elbow (A) is incorrect because that describes elbow flexion, a hinge movement unrelated to the rotational nature of pronation/supination. The swivelling of the foot to the medial and lateral directions (B) is incorrect because that describes inversion and eversion of the foot, an entirely different joint and movement. The rotation at the shoulder that causes the arm to describe a cone shape (D) is incorrect because that describes circumduction at the shoulder, a different combined movement from forearm pronation/supination."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q61",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "Which anatomical structures does the \"conducting zone\" of the lower respiratory tract contain:",
        "options": {
          "A": "Eustachian tube, larynx and trachea",
          "B": "Primary, secondary and tertiary bronchi and intralobular bronchioles",
          "C": "Nares, conchae, olfactory mucosa and sinuses",
          "D": "Nasopharynx and larynx"
        },
        "correctAnswer": "B",
        "explanation": "Primary, secondary and tertiary bronchi and intralobular bronchioles (B) is correct because the conducting zone extends from the trachea down through the branching bronchi and bronchioles, right up to the terminal bronchioles, none of which participate in gas exchange. Eustachian tube, larynx and trachea (A) is incorrect because the Eustachian tube is an upper respiratory/middle ear structure unrelated to the lower respiratory tract's conducting airways. Nares, conchae, olfactory mucosa and sinuses (C) is incorrect because these are all structures of the upper respiratory tract (nasal cavity), not the lower respiratory tract. Nasopharynx and larynx (D) is incorrect because the nasopharynx belongs to the upper respiratory tract, and this pairing does not represent the branching airway structures that define the lower conducting zone."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q62",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "Freely moveable joints are also known as:",
        "options": {
          "A": "Fibrous joints",
          "B": "cartilaginous joints",
          "C": "amphiarthroses",
          "D": "synovial joints"
        },
        "correctAnswer": "D",
        "explanation": "Synovial joints (D) is correct because these joints, containing a fluid-filled joint cavity, are structurally built to allow free, wide-ranging movement, matching the description of freely moveable joints (diarthroses). Fibrous joints (A) is incorrect because these joints are generally immovable or only slightly movable, joined by dense connective tissue. Cartilaginous joints (B) is incorrect because these permit only limited movement, cushioned by cartilage between the bones. Amphiarthroses (C) is incorrect because this term specifically refers to slightly movable joints, an intermediate category, not the freely movable category described."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q63",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "Which of the following statements about platelets is INCORRECT:",
        "options": {
          "A": "adhere to collagen fibres of damaged tissue",
          "B": "release phospholipids which combine with \"clotting factors\" to produce prothrombin activator",
          "C": "are cell fragments derived from megakayoblasts",
          "D": "are part of the \"extrinsic pathway\" for the formation of prothrombin activator"
        },
        "correctAnswer": "D",
        "explanation": "Are part of the \"extrinsic pathway\" for the formation of prothrombin activator (D) is correct as the incorrect statement because platelets and their released phospholipids are characteristic of the intrinsic pathway, which is triggered by exposed collagen within the vessel, whereas the extrinsic pathway is triggered by tissue factor released from damaged tissue outside the vessel and does not depend on platelet phospholipids in the same way. Adhere to collagen fibres of damaged tissue (A) is incorrect as the answer because this is an accurate description of platelet adhesion, the first step in primary haemostasis. Release phospholipids which combine with \"clotting factors\" to produce prothrombin activator (B) is incorrect as the answer because this correctly describes the role of platelet factor (phospholipid) in helping form prothrombin activator via the intrinsic pathway. Are cell fragments derived from megakayoblasts (C) is incorrect as the answer because, in the broad developmental sense used in these questions, platelets are indeed fragments budded off from the megakaryocyte cell line."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q64",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "Starting at the APEX of the heart and moving superiorly, what is the correct order in which you would encounter the four anatomical structures below:",
        "options": {
          "A": "valves, chordae tendonae, papillary muscle, ventricle",
          "B": "ventricle, papillary muscle, chordae tendonae, valves",
          "C": "papillary muscle, chordae tendonae, ventricle, valves",
          "D": "chordae tendonae, valves, ventricle, papillary muscle"
        },
        "correctAnswer": "B",
        "explanation": "Ventricle, papillary muscle, chordae tendonae, valves (B) is correct because moving upward from the apex you first encounter ventricular muscle tissue, then the papillary muscles projecting from the ventricular wall, then the chordae tendineae extending up from them, and finally the atrioventricular valves near the base of the heart. Valves, chordae tendonae, papillary muscle, ventricle (A) is incorrect because this lists the structures in the reverse order, starting from the base rather than the apex. Papillary muscle, chordae tendonae, ventricle, valves (C) is incorrect because it places the ventricle after the papillary muscle and chordae tendineae, when the ventricular wall is actually the structure encountered first from the apex, since the papillary muscles arise from it. Chordae tendonae, valves, ventricle, papillary muscle (D) is incorrect because this order does not follow the actual superior progression from apex to base at all."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q65",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "Which of the following arteries do NOT arise from the arch of the aorta:",
        "options": {
          "A": "Brachiocephalic trunk",
          "B": "Left Brachiocephalic",
          "C": "Left Common Carotid",
          "D": "Left Subclavian"
        },
        "correctAnswer": "B",
        "explanation": "Left Brachiocephalic (B) is correct as the exception because there is no such artery; only a left brachiocephalic vein exists, while the three genuine branches of the aortic arch are the brachiocephalic trunk and the left common carotid and left subclavian arteries. Brachiocephalic trunk (A) is incorrect as the answer because this is a genuine first branch of the aortic arch, which goes on to supply the right arm and the right side of the head and neck. Left Common Carotid (C) is incorrect as the answer because this is a genuine second branch of the aortic arch, supplying the left side of the head and neck. Left Subclavian (D) is incorrect as the answer because this is a genuine third branch of the aortic arch, supplying the left arm."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q66",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "Which of the following events occur during late ventricular diastole:",
        "options": {
          "A": "the atria are relaxed, the ventricles are filling passively, the atrioventricular valves are open",
          "B": "the ventricles are starting to contract, the atrioventricular valves are closed, the semilunar valves are open",
          "C": "the atria contract, the ventricles are relaxed, the atrioventricular valves are open",
          "D": "the atria are relaxed, the ventricles are starting to relax, the atrioventricular valves are closed, the semilunar valves are closed"
        },
        "correctAnswer": "C",
        "explanation": "The atria contract, the ventricles are relaxed, the atrioventricular valves are open (C) is correct because late ventricular diastole is defined by the atrial \"kick\", where the atria contract to top off ventricular filling while the ventricles remain relaxed and the AV valves stay open to allow this final influx of blood. The atria are relaxed, the ventricles are filling passively, the atrioventricular valves are open (A) is incorrect because this describes the earlier, passive filling phase of diastole, before the atria actively contract. The ventricles are starting to contract, the atrioventricular valves are closed, the semilunar valves are open (B) is incorrect because this describes ventricular systole (the ejection phase), not diastole at all. The atria are relaxed, the ventricles are starting to relax, the atrioventricular valves are closed, the semilunar valves are closed (D) is incorrect because this describes the isovolumetric relaxation phase occurring right at the very start of diastole, not its late stage."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q67",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "Which of the following is an amphiarthrotic joint:",
        "options": {
          "A": "symphysis pubis",
          "B": "suture in the skull",
          "C": "elbow",
          "D": "shoulder"
        },
        "correctAnswer": "A",
        "explanation": "Symphysis pubis (A) is correct because this is a classic example of a symphysis, a cartilaginous joint that permits only slight movement, matching the definition of an amphiarthrosis. Suture in the skull (B) is incorrect because sutures are fibrous joints that are essentially immovable, classified as synarthroses rather than amphiarthroses. Elbow (C) is incorrect because this is a freely moveable synovial hinge joint, classified as a diarthrosis. Shoulder (D) is incorrect because this too is a freely moveable synovial ball-and-socket joint, also classified as a diarthrosis."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q68",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "What is the function of phospholipids in the plasma membrane:",
        "options": {
          "A": "to maintain the intracellular fluid at a similar composition to that of the interstitial fluid",
          "B": "to form channels to selectively allow passage of small molecules",
          "C": "to act as receptors for signalling chemicals",
          "D": "to present a barrier to the passage of water-soluble molecules"
        },
        "correctAnswer": "D",
        "explanation": "To present a barrier to the passage of water-soluble molecules (D) is correct because the hydrophobic fatty acid tails of the phospholipid bilayer form a core that blocks the free passage of polar, water-soluble substances, forcing them to use specific transport proteins instead. To maintain the intracellular fluid at a similar composition to that of the interstitial fluid (A) is incorrect because the membrane actually helps keep the intracellular fluid composition different from the interstitial fluid, and this regulatory role belongs more to transport proteins than phospholipids themselves. To form channels to selectively allow passage of small molecules (B) is incorrect because channel formation for selective transport is a function carried out by integral membrane proteins, not the phospholipids themselves. To act as receptors for signalling chemicals (C) is incorrect because receptor function for signalling molecules is likewise carried out by specific membrane proteins, not the phospholipid molecules."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q69",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "What is a \"trochanter\":",
        "options": {
          "A": "part of the femur bone",
          "B": "a feature of the pelvic bone",
          "C": "a projection that forms part of an articulation",
          "D": "a groove in which lies a tendon"
        },
        "correctAnswer": "A",
        "explanation": "Part of the femur bone (A) is correct because the greater and lesser trochanters are large, bony processes found specifically on the femur, distinguishing this bone marking from those found elsewhere in the skeleton. A feature of the pelvic bone (B) is incorrect because trochanters are specific to the femur, not the pelvis. A projection that forms part of an articulation (C) is incorrect because trochanters are rough projections that serve as sites for muscle attachment (such as the gluteal muscles), not smooth surfaces that articulate with another bone. A groove in which lies a tendon (D) is incorrect because a groove housing a tendon describes a sulcus, an entirely different type of bone marking from a trochanter, which is a projection rather than a depression."
      },
      {
        "id": "eoy1-anatomy-physiology-2023-2_q70",
        "paperId": "eoy1-anatomy-physiology-2023-2",
        "setNumber": 4,
        "text": "The \"afferent pathway\" in the description of a feedback loop in homeostasis, refers to the:",
        "options": {
          "A": "circulating blood",
          "B": "pathway from the integrating centre to the effector",
          "C": "outgoing signal",
          "D": "path taken by the signal produced by a stimulus"
        },
        "correctAnswer": "D",
        "explanation": "Path taken by the signal produced by a stimulus (D) is correct because the afferent pathway carries the sensory information detected by a receptor toward the integrating centre, matching the meaning of \"afferent\" as incoming. Circulating blood (A) is incorrect because this is a general transport medium in the body, not the specific route a feedback signal travels. Pathway from the integrating centre to the effector (B) is incorrect because that describes the efferent pathway, the outgoing route carrying the command signal, not the afferent one. Outgoing signal (C) is incorrect because \"afferent\" specifically denotes a signal moving inward toward the integrating centre, the opposite of an outgoing signal."
      }
    ]
  },
  {
    "id": "eoy1-comprehensive-medsurg-2023-3",
    "year": "2023",
    "title": "End of Year 1 Exam (3)",
    "totalQuestions": 118,
    "totalSets": 6,
    "questions": [
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q1",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "A patient with venous thrombo-embolism is initially treated with:",
        "options": {
          "A": "Heparin and warfarin",
          "B": "Heparin alone",
          "C": "Warfarin and Aspirin",
          "D": "Alteplase and Heparin"
        },
        "correctAnswer": "A",
        "explanation": "Heparin and warfarin (A) is correct because standard VTE management starts heparin for its immediate anticoagulant effect while overlapping it with warfarin, which takes several days to reach a therapeutic INR, and heparin is only discontinued once the warfarin becomes effective. Heparin alone (B) is incorrect because relying on heparin alone would not establish the long-term oral anticoagulation needed once the patient is discharged. Warfarin and Aspirin (C) is incorrect because warfarin alone takes days to become therapeutic and aspirin is not a standard component of initial VTE anticoagulation. Alteplase and Heparin (D) is incorrect because alteplase is a thrombolytic reserved for massive, life-threatening emboli, not the routine initial treatment for typical venous thromboembolism."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q2",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "Sympathetic stimulation of the cardiovascular system causes:",
        "options": {
          "A": "Increased heart rate and constriction of coronary arteries",
          "B": "Constriction of GIT secretory gland vessels with increased flow of digestive juices",
          "C": "Increased peripheral resistance and dilatation of coronary arteries",
          "D": "Increased force of heart contraction & reduced peripheral resistance"
        },
        "correctAnswer": "C",
        "explanation": "Increased peripheral resistance and dilatation of coronary arteries (C) is correct because sympathetic activation constricts most systemic vessels (raising peripheral resistance) while the increased myocardial workload triggers local metabolic and beta-receptor-mediated dilation of the coronary arteries to meet the heart's higher oxygen demand. Increased heart rate and constriction of coronary arteries (A) is incorrect because, although heart rate does rise, coronary vessels dilate rather than constrict to support the harder-working heart muscle. Constriction of GIT secretory gland vessels with increased flow of digestive juices (B) is incorrect because sympathetic stimulation reduces, not increases, digestive gland secretion as blood is redirected away from the gut. Increased force of heart contraction & reduced peripheral resistance (D) is incorrect because, while contractility does increase, overall peripheral resistance rises rather than falls under sympathetic stimulation."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q3",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "In myocardial infarction, Morphine is administered to:",
        "options": {
          "A": "Dilate coronary blood vessels",
          "B": "Prevent fibrillation of the ventricles",
          "C": "Decrease anxiety and restlessness",
          "D": "Prevent shock and relieve pain"
        },
        "correctAnswer": "D",
        "explanation": "Prevent shock and relieve pain (D) is correct because morphine relieves the severe pain of an MI, which in turn reduces sympathetic overstimulation and myocardial oxygen demand, helping to prevent the progression toward cardiogenic shock while also easing the patient's distress. Dilate coronary blood vessels (A) is incorrect because morphine is not a coronary vasodilator; nitrates serve that purpose. Prevent fibrillation of the ventricles (B) is incorrect because morphine has no direct antiarrhythmic action; that role belongs to drugs such as amiodarone or lidocaine. Decrease anxiety and restlessness (C) is incorrect as the complete answer because, while morphine does have a calming effect, this option omits its equally important role in pain relief and haemodynamic protection, which option D captures more fully."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q4",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "Treatment of megaloblastic anaemia includes:",
        "options": {
          "A": "Chemotherapy, radiotherapy, hydration",
          "B": "Oxygen therapy, hydration and iron supplements",
          "C": "Blood transfusion, iron supplements, splenectomy",
          "D": "Oxygen therapy, folate supplements, Alcohol restriction"
        },
        "correctAnswer": "D",
        "explanation": "Oxygen therapy, folate supplements, Alcohol restriction (D) is correct because megaloblastic anaemia is most often caused by folate (or B12) deficiency, so folate replacement is central to treatment, and restricting alcohol addresses a common underlying cause of folate deficiency, alongside supportive oxygen therapy as needed. Chemotherapy, radiotherapy, hydration (A) is incorrect because these describe cancer treatment, not the management of a nutritional anaemia. Oxygen therapy, hydration and iron supplements (B) is incorrect because iron supplementation treats iron-deficiency (microcytic) anaemia, not the macrocytic picture seen in megaloblastic anaemia. Blood transfusion, iron supplements, splenectomy (C) is incorrect because this combination reflects management of haemolytic anaemias, not a deficiency of folate or B12."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q5",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "Factors that can lead to myocardial ischemia include:",
        "options": {
          "A": "Anaemia, aortic valve stenosis, polycythaemia",
          "B": "Mitral valve stenosis, anaemia, left ventricular hypertrophy",
          "C": "Anaemia, aortic valve stenosis, mitral valve stenosis",
          "D": "Polycythaemia, mitral valve stenosis, left ventricular hypertrophy"
        },
        "correctAnswer": "A",
        "explanation": "Anaemia, aortic valve stenosis, polycythaemia (A) is correct because each of these directly disturbs the myocardial oxygen supply-demand balance: anaemia lowers oxygen-carrying capacity, aortic stenosis raises left ventricular workload and reduces coronary perfusion pressure, and polycythaemia raises blood viscosity, impairing microcirculatory flow. Mitral valve stenosis, anaemia, left ventricular hypertrophy (B) is incorrect because mitral stenosis mainly raises left atrial and pulmonary pressures rather than directly straining the left ventricle's own oxygen demand. Anaemia, aortic valve stenosis, mitral valve stenosis (C) is incorrect for the same reason, since mitral stenosis is not a classic direct cause of myocardial ischemia. Polycythaemia, mitral valve stenosis, left ventricular hypertrophy (D) is incorrect because it again includes mitral stenosis as though it were an equivalent ischemia-provoking lesion to aortic stenosis or LVH, which it is not."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q6",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "Which of the following statements is TRUE:",
        "options": {
          "A": "Colloids are administered in patients with cardiogenic shock to expand circulatory volume",
          "B": "Atherosclerosis is more common in males than females",
          "C": "Alcohol intake is a leading cause of aortic aneurism",
          "D": "Virchow's triad describes pathogenesis of leukemia"
        },
        "correctAnswer": "B",
        "explanation": "Atherosclerosis is more common in males than females (B) is correct because men, particularly before menopausal age differences even out somewhat, have a well-documented higher incidence of atherosclerotic disease than women. Colloids are administered in patients with cardiogenic shock to expand circulatory volume (A) is incorrect because cardiogenic shock results from pump failure, and adding volume can worsen pulmonary congestion rather than help, so fluid administration is generally cautious or avoided. Alcohol intake is a leading cause of aortic aneurism (C) is incorrect because the leading causes of aortic aneurysm are atherosclerosis, hypertension, smoking, and connective tissue disorders, not alcohol intake. Virchow's triad describes pathogenesis of leukemia (D) is incorrect because Virchow's triad (stasis, hypercoagulability, endothelial injury) explains the pathogenesis of thrombosis, not leukemia."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q7",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "How much exercise each week is advised to help prevent heart disease:",
        "options": {
          "A": "60 minutes on average",
          "B": "90 minutes on average",
          "C": "120 minutes on average",
          "D": "150 minutes on average"
        },
        "correctAnswer": "D",
        "explanation": "150 minutes on average (D) is correct because major health authorities recommend at least 150 minutes of moderate-intensity aerobic activity per week for cardiovascular health. 60 minutes on average (A) is incorrect because this falls well short of the recommended weekly total. 90 minutes on average (B) is incorrect for the same reason, still under the established guideline. 120 minutes on average (C) is incorrect because, while closer, it still does not meet the widely cited 150-minute weekly target."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q8",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "In a severely anemic patient, the nurse would expect to find:",
        "options": {
          "A": "Dyspnea and tachycardia",
          "B": "Cyanosis and pulmonary edema",
          "C": "Cardiomegaly and pulmonary fibrosis",
          "D": "Dysrhythmias and wheezing"
        },
        "correctAnswer": "A",
        "explanation": "Dyspnea and tachycardia (A) is correct because the body compensates for reduced oxygen-carrying capacity by increasing heart rate and respiratory effort to try to maintain adequate tissue oxygenation. Cyanosis and pulmonary edema (B) is incorrect because cyanosis requires a certain absolute amount of deoxygenated haemoglobin, which is less likely when total haemoglobin itself is low, making cyanosis an uncommon early anemia finding. Cardiomegaly and pulmonary fibrosis (C) is incorrect because these reflect chronic, longer-term structural changes rather than the immediate compensatory findings of severe anaemia. Dysrhythmias and wheezing (D) is incorrect because wheezing is a respiratory airway finding not typically associated with anaemia itself, even though severe cases can eventually strain the heart."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q9",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "When obtaining assessment data from a patient with a microcytic, hypochromic anemia, the nurse would question the patient about:",
        "options": {
          "A": "Folic acid intake",
          "B": "Dietary intake of iron",
          "C": "A history of gastric surgery",
          "D": "A history of sickle cell anemia"
        },
        "correctAnswer": "B",
        "explanation": "Dietary intake of iron (B) is correct because microcytic, hypochromic red cells are the classic laboratory picture of iron-deficiency anaemia, making dietary iron intake the most directly relevant assessment question. Folic acid intake (A) is incorrect because folate deficiency produces a macrocytic (megaloblastic), not microcytic, anaemia. A history of gastric surgery (C) is incorrect because gastric surgery more specifically raises concern for vitamin B12 deficiency (loss of intrinsic factor), which causes a macrocytic anaemia rather than a microcytic one. A history of sickle cell anemia (D) is incorrect because sickle cell disease produces a normocytic haemolytic anaemia with a distinct sickle cell morphology, not a microcytic, hypochromic picture."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q10",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "The most common type of leukemia in older adults is",
        "options": {
          "A": "Acute myelocytic leukemia",
          "B": "Acute lymphocytic leukemia",
          "C": "Chronic myelocytic leukemia",
          "D": "Chronic lymphocytic leukemia"
        },
        "correctAnswer": "D",
        "explanation": "Chronic lymphocytic leukemia (D) is correct because CLL is the most commonly diagnosed leukemia in older adults, typically presenting after age 60. Acute myelocytic leukemia (A) is incorrect because, while it can occur in older adults, it is not the single most common leukemia type in this age group. Acute lymphocytic leukemia (B) is incorrect because this form is far more characteristic of children than older adults. Chronic myelocytic leukemia (C) is incorrect because, although it also tends to occur in adults, it is less common overall in the elderly population than CLL."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q11",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "Which is a priority nursing intervention for a patient during the acute phase of rheumatic fever:",
        "options": {
          "A": "Administration of antibiotics as ordered",
          "B": "Management of pain with opioid analgesics",
          "C": "Encouragement of fluid intake for hydration",
          "D": "Performance of frequent active range-of-motion exercises"
        },
        "correctAnswer": "A",
        "explanation": "Administration of antibiotics as ordered (A) is correct because eradicating the underlying group A streptococcal infection and preventing further valve or joint damage is the top priority during the acute phase of rheumatic fever. Management of pain with opioid analgesics (B) is incorrect because rheumatic fever joint pain is typically managed with anti-inflammatory agents such as aspirin rather than opioids, which are not first-line. Encouragement of fluid intake for hydration (C) is incorrect because, while general supportive care matters, hydration is not the priority intervention that addresses the disease process itself. Performance of frequent active range-of-motion exercises (D) is incorrect because the acute phase calls for rest to reduce cardiac workload and joint strain, not vigorous activity."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q12",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "The appropriate medication to administer to a 14 days old baby weighing 4kgs who is convulsing will be:",
        "options": {
          "A": "Per rectal diazepam 2mg",
          "B": "IV Diazepam 1.2mg",
          "C": "IM Phenobarbital 10mg",
          "D": "IM Phenobarbitone 80mg"
        },
        "correctAnswer": "D",
        "explanation": "IM Phenobarbitone 80mg (D) is correct because neonatal seizures are first-line treated with phenobarbital at a loading dose of roughly 15-20mg/kg, and for a 4kg neonate this works out to about 60-80mg, matching this option, while phenobarbital is also generally preferred over diazepam in neonates due to the higher risk of apnoea with benzodiazepines in this age group. Per rectal diazepam 2mg (A) is incorrect because diazepam is not the preferred first-line agent for neonatal convulsions given the apnoea risk in newborns. IV Diazepam 1.2mg (B) is incorrect for the same reason, in addition to being an unusually low, non-standard dose. IM Phenobarbital 10mg (C) is incorrect because this dose (about 2.5mg/kg) is far too low to serve as an effective loading dose for neonatal seizure control."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q13",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "The most commonly used index for nutritional status is",
        "options": {
          "A": "Height for age",
          "B": "Weight for height",
          "C": "Weight for age",
          "D": "Mid upper arm circumference"
        },
        "correctAnswer": "C",
        "explanation": "Weight for age (C) is correct because it is the most widely and routinely used index on standard growth monitoring charts to track a child's overall nutritional status over time. Height for age (A) is incorrect because this index reflects chronic malnutrition (stunting) specifically, rather than serving as the general, most commonly used nutritional index. Weight for height (B) is incorrect because this index is used more specifically to detect acute malnutrition (wasting), rather than being the general default measure. Mid upper arm circumference (D) is incorrect because, while useful for rapid community screening of acute malnutrition, it is not the most commonly used index overall in routine growth monitoring."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q14",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "A developmental milestone at 10 months of age is",
        "options": {
          "A": "Pincer grasp",
          "B": "Arranging 3 cubes",
          "C": "Walks few steps without support",
          "D": "Says mama, Dada"
        },
        "correctAnswer": "A",
        "explanation": "Pincer grasp (A) is correct because the refined pincer grasp, using thumb and forefinger to pick up small objects, typically emerges around 9-10 months of age, matching this milestone. Arranging 3 cubes (B) is incorrect because this fine motor skill typically develops later, closer to 15-18 months. Walks few steps without support (C) is incorrect because independent walking usually emerges around 12-15 months, somewhat later than 10 months. Says mama, Dada (D) is incorrect as the best answer because, while babbling sounds resembling these words can appear around this age, they are not yet used meaningfully and specifically, making the fine motor pincer grasp the more clearly defined 10-month milestone."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q15",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "A ten-year child with history of asthma is diagnosed with status asthmaticus, this child has",
        "options": {
          "A": "Has severe wheezing",
          "B": "Hasn't responded to treatment",
          "C": "Requires emergency intubation",
          "D": "Has underlying pneumonia"
        },
        "correctAnswer": "B",
        "explanation": "Hasn't responded to treatment (B) is correct because status asthmaticus is specifically defined as a severe asthma exacerbation that fails to respond to the usual bronchodilator therapy, making treatment-resistance the defining feature. Has severe wheezing (A) is incorrect because, while wheezing is common in an asthma attack, severity of wheezing alone does not define status asthmaticus, and in fact very severe cases can have diminished wheeze from poor air movement. Requires emergency intubation (C) is incorrect because not every case of status asthmaticus necessarily reaches the point of requiring intubation, even though it is a serious emergency. Has underlying pneumonia (D) is incorrect because status asthmaticus is defined by the asthma exacerbation's response to treatment, not by the presence of a co-existing pneumonia."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q16",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "Which of the following statements is true about tetanus?",
        "options": {
          "A": "Spasms are common initially but do not cause significant pain",
          "B": "Risus sardonicus can be present",
          "C": "Neonatal transmission is through wounds from C-Sections",
          "D": "Ant-tetanospasmin immunoglobulin is worthless once the disease is clinically present"
        },
        "correctAnswer": "B",
        "explanation": "Risus sardonicus can be present (B) is correct because this characteristic sustained facial muscle spasm, producing a fixed, sardonic grin, is a well-recognised clinical sign of tetanus. Spasms are common initially but do not cause significant pain (A) is incorrect because tetanic muscle spasms are typically severe and extremely painful, not painless. Neonatal transmission is through wounds from C-Sections (C) is incorrect because neonatal tetanus is classically transmitted through unhygienic care of the umbilical cord stump, not through surgical caesarean wounds. Anti-tetanospasmin immunoglobulin is worthless once the disease is clinically present (D) is incorrect because tetanus immunoglobulin still has value even after symptoms begin, as it can neutralise any toxin that has not yet bound to nerve tissue."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q17",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "The most common congenital heart defect with a left right shunt causing congestive heart failure in pediatrics is?",
        "options": {
          "A": "Arterial septal defect",
          "B": "Atrioventricular canal",
          "C": "Ventricular septal defect",
          "D": "Patent ductus arteriosus"
        },
        "correctAnswer": "C",
        "explanation": "Ventricular septal defect (C) is correct because VSD is the most common congenital heart defect overall and a classic cause of a left-to-right shunt that can progress to congestive heart failure as pulmonary blood flow increases. Arterial septal defect (A) is incorrect because atrial septal defects, while also causing left-to-right shunting, are less common and typically produce heart failure much later in life than VSD. Atrioventricular canal (B) is incorrect because, although it causes significant shunting and is associated with heart failure, it is considerably less common than VSD. Patent ductus arteriosus (D) is incorrect because, while also a left-to-right shunt lesion, it occurs less frequently than VSD as the leading cause of shunt-related paediatric heart failure."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q18",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "An eighteen-month-old has been brought to the emergency room with irritability, lethargy over 2 days, dry skin and increased pulse. Based upon the evaluation of these initial findings, the nurse would assess the child for additional findings of:",
        "options": {
          "A": "Septicemia",
          "B": "Dehydration",
          "C": "Hypokalemia",
          "D": "Hypercalcemia"
        },
        "correctAnswer": "B",
        "explanation": "Dehydration (B) is correct because irritability, lethargy, dry skin, and tachycardia together form a classic clinical picture of dehydration in a young child, prompting the nurse to look for further supporting signs such as poor skin turgor and decreased urine output. Septicemia (A) is incorrect because, while it can also present with lethargy and tachycardia, the description here (dry skin, no mention of fever) points more specifically toward a fluid volume problem than a systemic infection. Hypokalemia (C) is incorrect because this electrolyte disturbance is not the primary condition suggested by this specific symptom cluster, though it can occur as a consequence of dehydration itself. Hypercalcemia (D) is incorrect because this presentation is not the classic picture associated with elevated calcium levels."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q19",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "Which of the following disorders leads to cyanosis from deoxygenated blood entering the systemic arterial circulation?",
        "options": {
          "A": "Aortic stenosis",
          "B": "Coarctation of aorta",
          "C": "Patent ductus arteriosus",
          "D": "Tetralogy of Fallot"
        },
        "correctAnswer": "D",
        "explanation": "Tetralogy of Fallot (D) is correct because its combination of defects, notably the ventricular septal defect and pulmonary stenosis, allows deoxygenated right-sided blood to shunt directly into the systemic (left-sided) circulation, producing classic cyanosis. Aortic stenosis (A) is incorrect because this lesion narrows the outflow from an already oxygenated left ventricle and does not mix deoxygenated blood into the systemic circulation. Coarctation of aorta (B) is incorrect because this is a narrowing of the aorta itself, causing pressure differences rather than a mixing of deoxygenated blood into the systemic flow. Patent ductus arteriosus (C) is incorrect because this defect typically causes a left-to-right shunt (oxygenated blood flowing into the pulmonary circulation), not a right-to-left shunt causing cyanosis, unless late complications like Eisenmenger syndrome develop."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q20",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 1,
        "text": "A child newly diagnosed with diabetes mellitus has been stabilized with insulin injections daily. A nurse prepares a discharge teaching plan regarding the insulin. The teaching plan should reinforce which of the following concepts?",
        "options": {
          "A": "Always keep insulin vials frozen",
          "B": "Increase the amount of insulin before exercise",
          "C": "Ketones in the urine signify a need for less insulin",
          "D": "Systematically rotate injection sites"
        },
        "correctAnswer": "D",
        "explanation": "Systematically rotate injection sites (D) is correct because rotating injection sites is standard teaching to prevent lipodystrophy and ensure consistent insulin absorption over time. Always keep insulin vials frozen (A) is incorrect because freezing damages insulin; vials should be refrigerated or kept at controlled room temperature, not frozen. Increase the amount of insulin before exercise (B) is incorrect because exercise generally increases insulin sensitivity and glucose uptake, so insulin doses are often reduced, not increased, around exercise to avoid hypoglycaemia. Ketones in the urine signify a need for less insulin (C) is incorrect because ketonuria in a diabetic child usually signals insufficient insulin and impending ketoacidosis, meaning more insulin (and medical attention) is typically needed, not less."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q21",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Which stage of development is most unstable and challenging regarding development of personal identity?",
        "options": {
          "A": "Adolescence",
          "B": "Toddler hood",
          "C": "Childhood",
          "D": "Infancy"
        },
        "correctAnswer": "A",
        "explanation": "Adolescence (A) is correct because this stage, corresponding to Erikson's identity versus role confusion crisis, is classically the most turbulent period for establishing a stable sense of personal identity. Toddler hood (B) is incorrect because this stage centres more on developing autonomy and independence in simple tasks, not the more complex construction of personal identity. Childhood (C) is incorrect because school-age children are primarily working through issues of competence and industry rather than the deeper identity questions faced in adolescence. Infancy (D) is incorrect because this earliest stage focuses on developing basic trust in caregivers, long before questions of personal identity become relevant."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q22",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "A 10-year-old is admitted to the hospital for acute appendicitis, and an appendectomy is performed. Which of the following nursing interventions is most appropriate to facilitate normal growth and development?",
        "options": {
          "A": "Allow the family to bring in the child's favorite computer games",
          "B": "Encourage the parents to room-in with the child",
          "C": "Encourage the child to rest and read",
          "D": "Allow the child to participate in activities with other individuals in the same age group when the condition permits"
        },
        "correctAnswer": "D",
        "explanation": "Allow the child to participate in activities with other individuals in the same age group when the condition permits (D) is correct because peer interaction and a sense of accomplishment among same-age companions are central developmental tasks for a school-age child (industry versus inferiority), making peer-group activity the intervention that most directly supports normal development. Allow the family to bring in the child's favorite computer games (A) is incorrect because, while comforting, solitary electronic play does not specifically foster the peer interaction that is developmentally important at this age. Encourage the parents to room-in with the child (B) is incorrect because rooming-in mainly addresses separation anxiety, a concern more central to younger children than to a 10-year-old's developmental needs. Encourage the child to rest and read (C) is incorrect because, although rest is appropriate post-operatively, quiet solitary reading does not specifically promote the peer-based developmental task most relevant at this age."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q23",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Dysentery is classified if:",
        "options": {
          "A": "There is Dehydration",
          "B": "Stools are watery",
          "C": "Fast breathing is present",
          "D": "There is blood in the stool"
        },
        "correctAnswer": "D",
        "explanation": "There is blood in the stool (D) is correct because dysentery is specifically defined by bloody diarrhoea, distinguishing it from other forms of diarrhoeal illness. There is Dehydration (A) is incorrect because dehydration can accompany any type of diarrhoea and is not the defining feature that classifies a case as dysentery specifically. Stools are watery (B) is incorrect because watery stools describe ordinary acute diarrhoea, the very picture dysentery is distinguished from by the presence of blood. Fast breathing is present (C) is incorrect because tachypnoea is a sign more associated with pneumonia or severe dehydration/acidosis, not the defining criterion for dysentery."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q24",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "One of the factors associated with congenital heart defects is:",
        "options": {
          "A": "Maternal hypertension",
          "B": "Maternal age under 18 years",
          "C": "Maternal insulin dependent diabetes",
          "D": "Maternal infection with malaria"
        },
        "correctAnswer": "C",
        "explanation": "Maternal insulin dependent diabetes (C) is correct because poorly controlled maternal diabetes during pregnancy, especially insulin-dependent diabetes, is a well-established risk factor for congenital heart defects in the offspring. Maternal hypertension (A) is incorrect because, while it carries other pregnancy risks such as pre-eclampsia and growth restriction, it is not as strongly or classically linked to congenital heart defects as maternal diabetes. Maternal age under 18 years (B) is incorrect because young maternal age is not a recognised specific risk factor for congenital heart disease in the way advanced maternal age or diabetes are. Maternal infection with malaria (D) is incorrect because malaria in pregnancy is more classically associated with low birth weight and maternal anaemia rather than being a leading cause of structural congenital heart defects."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q25",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "The following is true about Patent Ductus Arteriosus:",
        "options": {
          "A": "It occurs when the opening between the atria does not close immediately after birth",
          "B": "The ductus arteriosus closes completely at birth failure to which there is patent ductus arteriosus",
          "C": "The ductus arteriosus closes completely by three months",
          "D": "The child gains weight rapidly"
        },
        "correctAnswer": "B",
        "explanation": "The ductus arteriosus closes completely at birth failure to which there is patent ductus arteriosus (B) is correct because the ductus arteriosus normally closes functionally within the first days of life, and PDA is defined precisely by the failure of this vessel to close as expected. It occurs when the opening between the atria does not close immediately after birth (A) is incorrect because this describes an atrial septal defect or patent foramen ovale, not the ductus arteriosus, which connects the pulmonary artery and aorta, not the two atria. The ductus arteriosus closes completely by three months (C) is incorrect because normal functional closure occurs much sooner, typically within the first few days of life, not over a three-month timeframe. The child gains weight rapidly (D) is incorrect because a significant PDA shunt typically contributes to congestive heart failure and poor feeding, leading to poor weight gain rather than rapid weight gain."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q26",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Black water fever that occurs in malaria is due to:",
        "options": {
          "A": "Impaired microcirculation",
          "B": "Intravascular hemolysis",
          "C": "Tissue hypoxia",
          "D": "Adherence of red blood cells to blood vessels"
        },
        "correctAnswer": "B",
        "explanation": "Intravascular hemolysis (B) is correct because blackwater fever is characterised by massive intravascular breakdown of red blood cells, releasing free haemoglobin that darkens the urine, giving the condition its name. Impaired microcirculation (A) is incorrect because this describes a mechanism seen in severe/cerebral malaria generally, not the specific process that produces blackwater fever's haemoglobinuria. Tissue hypoxia (C) is incorrect because, while severe malaria can cause tissue hypoxia through various mechanisms, it is not the direct cause of the dark urine that defines blackwater fever. Adherence of red blood cells to blood vessels (D) is incorrect because this describes cytoadherence, a mechanism implicated in cerebral malaria's microvascular obstruction, not the haemolytic process behind blackwater fever."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q27",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Ethylene Oxide gas is used for sterilization of:",
        "options": {
          "A": "Bulky equipment which can withstand very high temperatures",
          "B": "Heat sensitive equipment and those that cannot be soaked in chemicals",
          "C": "Laparotomy packs and cardiac catheters",
          "D": "All surgical supplies and equipment"
        },
        "correctAnswer": "B",
        "explanation": "Heat sensitive equipment and those that cannot be soaked in chemicals (B) is correct because ethylene oxide sterilization was developed specifically for delicate, heat- and moisture-sensitive items such as certain plastics and electronic components that cannot tolerate autoclaving or liquid chemical immersion. Bulky equipment which can withstand very high temperatures (A) is incorrect because such heat-tolerant equipment is more efficiently and economically sterilized by steam autoclaving rather than the slower ethylene oxide process. Laparotomy packs and cardiac catheters (C) is incorrect because linen packs are generally autoclaved, and this option does not capture the defining rationale for choosing ethylene oxide. All surgical supplies and equipment (D) is incorrect because ethylene oxide is not universally used for every item; it is reserved specifically for heat- and moisture-sensitive equipment given its cost, toxicity, and long cycle/aeration time."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q28",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "The ideal suture material should be:",
        "options": {
          "A": "Cheap and easily cut",
          "B": "Small, strong and friendly to bacteria",
          "C": "Tear easily through tissues, rigid and flexible",
          "D": "Flexible, tear easily through tissue and unfriendly to bacteria"
        },
        "correctAnswer": "D",
        "explanation": "Flexible, tear easily through tissue and unfriendly to bacteria (D) is correct because ideal suture material should be flexible enough for easy handling and knot security, should pass through tissue with minimal trauma, and should resist harbouring bacteria that could seed a wound infection. Cheap and easily cut (A) is incorrect because cost and ease of cutting are not defining clinical properties of an ideal suture, and being too easily cut could compromise wound closure security. Small, strong and friendly to bacteria (B) is incorrect because a suture that is \"friendly to bacteria\", meaning it supports bacterial colonisation, is an undesirable property that increases infection risk. Tear easily through tissues, rigid and flexible (C) is incorrect because a rigid suture would be difficult to handle and tie securely, and \"rigid and flexible\" is also an internally contradictory combination."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q29",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Surgery done to relieve symptoms is:",
        "options": {
          "A": "Curative",
          "B": "Palliative",
          "C": "Emergency",
          "D": "Constructive"
        },
        "correctAnswer": "B",
        "explanation": "Palliative (B) is correct because palliative surgery aims to relieve symptoms and improve quality of life without necessarily curing the underlying disease. Curative (A) is incorrect because curative surgery aims to remove or resolve the disease process itself, not merely relieve symptoms. Emergency (C) is incorrect because this term describes the urgency with which surgery must be performed, not its intended purpose regarding symptom relief. Constructive (D) is incorrect because this term describes surgery performed to rebuild or repair a structure, such as reconstructive procedures, rather than symptom relief specifically."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q30",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Limb exercises after surgery, prevents:",
        "options": {
          "A": "Aspiration Pneumonia",
          "B": "Hypovolemic Shock",
          "C": "Urinary retention",
          "D": "Pulmonary embolism"
        },
        "correctAnswer": "D",
        "explanation": "Pulmonary embolism (D) is correct because postoperative limb exercises promote venous return and reduce blood stasis in the legs, lowering the risk of deep vein thrombosis and the pulmonary embolism that can follow. Aspiration Pneumonia (A) is incorrect because this complication is prevented mainly through measures like elevating the head of bed and deep breathing/coughing exercises, not limb movement specifically. Hypovolemic Shock (B) is incorrect because this complication relates to fluid or blood loss, which limb exercises do not directly address. Urinary retention (C) is incorrect because this is more related to anaesthesia effects, immobility of the bladder region, or opioid use, rather than something limb exercises specifically target."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q31",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "An example of disinfection method is:",
        "options": {
          "A": "Boiling",
          "B": "Autoclaving",
          "C": "Dry Heat",
          "D": "Moist Heat"
        },
        "correctAnswer": "A",
        "explanation": "Boiling (A) is correct because boiling is classified as a high-level disinfection method that kills most vegetative organisms but cannot reliably destroy all bacterial spores, unlike true sterilization. Autoclaving (B) is incorrect because this is a sterilization method, using pressurised steam to destroy all microorganisms including spores. Dry Heat (C) is incorrect because this too is a recognised sterilization method for certain heat-stable items, capable of killing spores given sufficient time and temperature. Moist Heat (D) is incorrect because, in this context, moist heat typically refers to autoclaving/steam sterilization rather than a mere disinfection technique."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q32",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "The most appropriate position for a patient undergoing abdominal surgery is:",
        "options": {
          "A": "Lithotomy",
          "B": "Supine",
          "C": "Trendlenburg",
          "D": "Prone"
        },
        "correctAnswer": "B",
        "explanation": "Supine (B) is correct because lying flat on the back provides the standard, accessible position for most general abdominal surgical procedures. Lithotomy (A) is incorrect because this position, with legs raised and supported in stirrups, is used for gynaecological, urological, or rectal procedures, not general abdominal surgery. Trendlenburg (C) is incorrect because this head-down tilted position is used for specific circumstances such as improving venous return or certain pelvic surgical exposure, not as the standard position for routine abdominal surgery. Prone (D) is incorrect because lying face-down is reserved for procedures on the back or posterior structures, not the abdomen."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q33",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Mrs. X 74 years old is 2 hours post-operative after repair of her fractured femur, the nurse meets her urine elimination needs by:",
        "options": {
          "A": "Giving a bedpan",
          "B": "Using a condom catheter",
          "C": "Giving a commode",
          "D": "Using indwelling catheter"
        },
        "correctAnswer": "A",
        "explanation": "Giving a bedpan (A) is correct because, only two hours after femur repair, this elderly patient must remain in bed and cannot yet safely mobilise to a commode, making a bedpan the appropriate way to meet her urinary elimination needs while maintaining bed rest. Using a condom catheter (B) is incorrect because this device is designed for male patients and would not be appropriate for a female patient. Giving a commode (C) is incorrect because a commode requires the patient to get out of bed, which is unsafe this soon after major lower-limb surgery. Using indwelling catheter (D) is incorrect because inserting an indwelling catheter is not routinely indicated simply for early postoperative immobility and carries unnecessary infection risk when a bedpan can meet the need instead."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q34",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Hypoxia is:",
        "options": {
          "A": "Decreased oxygen concentration in tissue",
          "B": "Infection caused by bacteria in the lungs",
          "C": "A bluish tinge to the skin or other tissues",
          "D": "Decreased oxygen concentration in blood"
        },
        "correctAnswer": "A",
        "explanation": "Decreased oxygen concentration in tissue (A) is correct because hypoxia specifically refers to inadequate oxygen delivery at the tissue level. Infection caused by bacteria in the lungs (B) is incorrect because this describes pneumonia, an entirely different condition. A bluish tinge to the skin or other tissues (C) is incorrect because this describes cyanosis, a possible clinical sign that can accompany hypoxia but is not the definition of hypoxia itself. Decreased oxygen concentration in blood (D) is incorrect because this describes hypoxemia, a related but distinct term referring specifically to blood oxygen levels rather than tissue oxygen levels."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q35",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "A method used to confirm proper endotracheal tube placement is:",
        "options": {
          "A": "Auscultation for breath sounds, inspection for bilateral chest rise",
          "B": "Mechanical ventilator functioning, Chest CT scan",
          "C": "Chest radiograph, SPO2 > 90%",
          "D": "Chest in-drawing, spontaneous breathing"
        },
        "correctAnswer": "A",
        "explanation": "Auscultation for breath sounds, inspection for bilateral chest rise (A) is correct because these are the standard immediate bedside clinical methods used right after intubation to confirm that the tube is correctly placed in the trachea and that both lungs are being ventilated equally. Mechanical ventilator functioning, Chest CT scan (B) is incorrect because ventilator function does not confirm tube position, and a CT scan is an impractical, delayed method not used for immediate confirmation. Chest radiograph, SPO2 > 90% (C) is incorrect because, while a chest x-ray does help confirm tube depth, it is not the first bedside method used, and oxygen saturation alone does not confirm correct tracheal placement. Chest in-drawing, spontaneous breathing (D) is incorrect because chest in-drawing suggests respiratory distress or obstruction, and spontaneous breathing is not expected or relevant in a freshly intubated, typically ventilated patient."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q36",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "The most common indication for orchiectomy is:",
        "options": {
          "A": "Cancer of prostate",
          "B": "To lower level of testosterone hormone",
          "C": "Tumors at the testis",
          "D": "Castration to lower sexual desire"
        },
        "correctAnswer": "C",
        "explanation": "Tumors at the testis (C) is correct because removal of a cancerous or tumour-bearing testis is the most common and direct surgical indication for orchiectomy. Cancer of prostate (A) is incorrect because, while bilateral orchiectomy was historically used as a form of surgical androgen deprivation for prostate cancer, medical (drug-based) castration with hormonal agents is now far more commonly used than surgery for this purpose. To lower level of testosterone hormone (B) is incorrect because lowering testosterone is a secondary effect used for specific hormone-sensitive conditions rather than the most common overall indication for the procedure. Castration to lower sexual desire (D) is incorrect because this is an uncommon and non-standard indication compared to direct treatment of a testicular tumour."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q37",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Separation of different types of waste at the point of generation in theatre and keeping them isolated from each other is called?",
        "options": {
          "A": "Waste management",
          "B": "Waste minimization",
          "C": "Waste segregation",
          "D": "Waste transportation"
        },
        "correctAnswer": "C",
        "explanation": "Waste segregation (C) is correct because this term specifically describes sorting and keeping different categories of waste separate right at the point where they are generated. Waste management (A) is incorrect because this is the broader overall system covering generation, segregation, storage, transport, and disposal, not the specific act of separating waste at its source. Waste minimization (B) is incorrect because this refers to reducing the overall amount of waste produced, a different goal from simply sorting waste that has already been generated. Waste transportation (D) is incorrect because this refers to moving waste from one location to another, a later step distinct from the initial act of separating it."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q38",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "A client is scheduled for surgery in the morning. Preoperative orders have been written. What is most important to do before surgery?",
        "options": {
          "A": "Remove all jewelry or tape wedding ring",
          "B": "Verify that all laboratory work is complete",
          "C": "Inform family or next of kin",
          "D": "Have all consent forms signed"
        },
        "correctAnswer": "D",
        "explanation": "Have all consent forms signed (D) is correct because valid, signed informed consent is a critical legal and ethical prerequisite that must be in place before any surgical procedure can proceed. Remove all jewelry or tape wedding ring (A) is incorrect because, although this is a standard preoperative safety step, it is a lower-priority physical preparation task compared to the legal necessity of consent. Verify that all laboratory work is complete (B) is incorrect because, while important for safety, incomplete labs are typically addressed by delaying or clarifying with the surgical team rather than representing the single most critical prerequisite like consent. Inform family or next of kin (C) is incorrect because, while good communication practice, this is not a mandatory legal requirement for the surgery to proceed in the way signed consent is."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q39",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "When performing instrument preparation process. The recommended concentration of sodium hypochlorite (Jik) solution is:",
        "options": {
          "A": "One part of sodium hypochlorite to six parts of water",
          "B": "One part of sodium hypochlorite to nine parts of water",
          "C": "Depends with manufacturer's instructions",
          "D": "Depends with workplace policies"
        },
        "correctAnswer": "B",
        "explanation": "One part of sodium hypochlorite to nine parts of water (B) is correct because standard infection-prevention guidelines for household-strength bleach recommend a 1:9 dilution to achieve the approximately 0.5% available chlorine concentration needed for effective high-level disinfection of instruments. One part of sodium hypochlorite to six parts of water (A) is incorrect because this stronger dilution does not match the standard recommended ratio for this purpose. Depends with manufacturer's instructions (C) is incorrect because, although product concentration can vary, the well-established standard guideline for typical household bleach is the 1:9 dilution described in option B. Depends with workplace policies (D) is incorrect because instrument preparation for infection prevention follows established evidence-based dilution standards rather than being left purely to local policy variation."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q40",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 2,
        "text": "Which of the following conditions would be managed by a medical-surgical nurse?",
        "options": {
          "A": "Type 2 diabetes",
          "B": "Urinary tract infection",
          "C": "Depression",
          "D": "Anxiety disorder"
        },
        "correctAnswer": "A",
        "explanation": "Type 2 diabetes (A) is correct because this chronic, complex medical condition, with its wide-ranging systemic complications, is a hallmark example of the kind of case comprehensively managed within medical-surgical nursing. Urinary tract infection (B) is incorrect as the best answer because, while it can be treated on a medical-surgical unit, it is a comparatively simple, acute condition rather than representative of the broad complex chronic disease management medical-surgical nursing is best known for among these options. Depression (C) is incorrect because this is a mental health condition primarily managed within psychiatric-mental health nursing. Anxiety disorder (D) is incorrect for the same reason, falling under psychiatric-mental health nursing rather than medical-surgical nursing."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q41",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "A patient is admitted with a fractured femur. What would be the priority nursing intervention?",
        "options": {
          "A": "Administering pain medication",
          "B": "Assessing neurovascular status",
          "C": "Initiating physical therapy",
          "D": "Providing emotional support"
        },
        "correctAnswer": "B",
        "explanation": "Assessing neurovascular status (B) is correct because a fractured femur carries a real risk of vascular or nerve compromise (such as compartment syndrome), so checking circulation, sensation, and movement distal to the fracture is the priority safety assessment before other interventions proceed. Administering pain medication (A) is incorrect because, although pain relief is important, it should follow a baseline neurovascular assessment so that changes in the limb are not masked. Initiating physical therapy (C) is incorrect because mobilising the injured limb is inappropriate in the acute stage before the fracture is stabilised and assessed. Providing emotional support (D) is incorrect because, while valuable, it is not the priority over ensuring the physical safety of the injured limb."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q42",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which of the following is a primary responsibility of a medical-surgical nurse?",
        "options": {
          "A": "Providing dietary counseling",
          "B": "Performing diagnostic tests",
          "C": "Administering anesthesia",
          "D": "Monitoring vital signs"
        },
        "correctAnswer": "D",
        "explanation": "Monitoring vital signs (D) is correct because ongoing assessment and monitoring of vital signs is a core, continuous responsibility of medical-surgical nursing across virtually all patients. Providing dietary counseling (A) is incorrect because detailed nutritional counselling is generally the primary responsibility of a registered dietitian, even though nurses reinforce this teaching. Performing diagnostic tests (B) is incorrect because most diagnostic testing is carried out by laboratory or radiology staff rather than being a defining nursing responsibility. Administering anesthesia (C) is incorrect because this is the specific role of an anaesthetist or anaesthesia provider, not a general medical-surgical nursing responsibility."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q43",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "During the postoperative phase, a patient exhibits signs of hemorrhage. What action should the nurse take first?",
        "options": {
          "A": "Notify the surgeon",
          "B": "Reassure the patient",
          "C": "Apply pressure to the site",
          "D": "Administer pain medication"
        },
        "correctAnswer": "C",
        "explanation": "Apply pressure to the site (C) is correct because controlling active bleeding is the immediate priority action the nurse can take at the bedside before anything else, since ongoing haemorrhage is the most time-critical threat to the patient. Notify the surgeon (A) is incorrect as the very first action because, although the surgeon must be informed promptly, direct control of the bleeding should not be delayed while making that call. Reassure the patient (B) is incorrect because, while communication and calm reassurance matter, it does not address the physical emergency of active bleeding. Administer pain medication (D) is incorrect because managing pain is not the priority when active haemorrhage is occurring and needs immediate physical control."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q44",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "When educating a patient with congestive heart failure about medication management, which instruction is most important?",
        "options": {
          "A": "\"Take your medications with grapefruit juice.\"",
          "B": "\"Skip your medication if you feel better.\"",
          "C": "\"Take your medications at the same time each day.\"",
          "D": "\"Double the dose if you forget to take it.\""
        },
        "correctAnswer": "C",
        "explanation": "\"Take your medications at the same time each day.\" (C) is correct because consistent daily timing supports stable drug levels and adherence, which is especially important for CHF medications like diuretics and ACE inhibitors that require regular dosing to control symptoms and prevent decompensation. \"Take your medications with grapefruit juice.\" (A) is incorrect because grapefruit juice interacts with many cardiovascular medications and can dangerously alter their blood levels, so patients are typically told to avoid it, not use it. \"Skip your medication if you feel better.\" (B) is incorrect because stopping heart failure medications once symptoms improve is unsafe and can lead to rapid clinical deterioration. \"Double the dose if you forget to take it.\" (D) is incorrect because doubling a missed dose risks overdose and adverse effects rather than being a safe way to make up for a missed dose."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q45",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "A patient with chronic obstructive pulmonary disease (COPD) is prescribed bronchodilator medication. Which assessment finding indicates a therapeutic response to the medication?",
        "options": {
          "A": "Increased respiratory rate",
          "B": "Decreased oxygen saturation",
          "C": "Improved dyspnea",
          "D": "Increased wheezing"
        },
        "correctAnswer": "C",
        "explanation": "Improved dyspnea (C) is correct because a bronchodilator's therapeutic goal is to open the airways and ease the work of breathing, so reduced breathlessness is the clearest sign the medication is working. Increased respiratory rate (A) is incorrect because a rising respiratory rate would suggest ongoing or worsening respiratory distress rather than improvement. Decreased oxygen saturation (B) is incorrect because a falling saturation indicates worsening oxygenation, the opposite of a therapeutic response. Increased wheezing (D) is incorrect because more wheezing suggests worsening airway narrowing, not the relief a bronchodilator is intended to provide."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q46",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which of the following actions should the nurse prioritize when caring for a patient with a nasogastric tube?",
        "options": {
          "A": "Providing oral hygiene",
          "B": "Securing the tube in place",
          "C": "Administering medication through the tube",
          "D": "Checking tube placement before feeding"
        },
        "correctAnswer": "D",
        "explanation": "Checking tube placement before feeding (D) is correct because confirming correct tube position before instilling anything is a critical safety step that prevents the serious complication of aspiration into the lungs if the tube has migrated. Providing oral hygiene (A) is incorrect because, although important for comfort and mucous membrane health, it is not the priority safety check tied directly to preventing a life-threatening complication. Securing the tube in place (B) is incorrect because, while it helps prevent dislodgement, it does not replace the need to actively verify placement each time before use. Administering medication through the tube (C) is incorrect because medication should only be given after placement has already been confirmed, making placement verification the higher priority step."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q47",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which of the following structures is responsible for storing and releasing urine from the body?",
        "options": {
          "A": "Urethra",
          "B": "Ureter",
          "C": "Bladder",
          "D": "Kidney"
        },
        "correctAnswer": "C",
        "explanation": "Bladder (C) is correct because this muscular organ is specifically designed to store urine until it is voluntarily released. Urethra (A) is incorrect because this tube simply carries urine out of the body from the bladder, without storing it. Ureter (B) is incorrect because these tubes transport urine from the kidneys down to the bladder, again without a storage function. Kidney (D) is incorrect because the kidney's role is to filter blood and produce urine, not to store it."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q48",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "What is the term for a procedure in which kidney stones are fragmented into smaller pieces using shock waves?",
        "options": {
          "A": "Lithotripsy",
          "B": "Nephrectomy",
          "C": "Cystoscopy",
          "D": "Ureteroscopy"
        },
        "correctAnswer": "A",
        "explanation": "Lithotripsy (A) is correct because this term specifically describes the use of shock waves (extracorporeal shock wave lithotripsy) to break kidney stones into smaller fragments that can pass more easily. Nephrectomy (B) is incorrect because this refers to surgical removal of a kidney, not fragmenting stones. Cystoscopy (C) is incorrect because this is a procedure to visualise the inside of the bladder using a scope, not a stone-fragmenting technique. Ureteroscopy (D) is incorrect because this describes direct visualisation and instrumentation of the ureter, a different approach from shock-wave stone fragmentation."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q49",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "The hormone responsible for regulating water reabsorption in the kidneys is:",
        "options": {
          "A": "Insulin",
          "B": "Aldosterone",
          "C": "Antidiuretic hormone (ADH)",
          "D": "Parathyroid hormone"
        },
        "correctAnswer": "C",
        "explanation": "Antidiuretic hormone (ADH) (C) is correct because ADH acts directly on the kidney's collecting ducts to increase water reabsorption, concentrating urine and conserving body water. Insulin (A) is incorrect because its main role is regulating blood glucose uptake into cells, not water balance. Aldosterone (B) is incorrect because this hormone primarily regulates sodium (and secondarily water) reabsorption through a different mechanism at the distal nephron, but ADH is the hormone specifically and primarily responsible for water reabsorption regulation. Parathyroid hormone (D) is incorrect because this hormone regulates calcium and phosphate balance, not water reabsorption."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q50",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which anatomical structure of the urinary tract is most commonly affected by urinary tract infections?",
        "options": {
          "A": "Urethra",
          "B": "Bladder",
          "C": "Kidneys",
          "D": "Ureters"
        },
        "correctAnswer": "B",
        "explanation": "Bladder (B) is correct because cystitis, infection of the bladder, is the most common form of urinary tract infection encountered clinically. Urethra (A) is incorrect because, while urethritis does occur, bladder infection is more commonly the structure implicated in typical UTIs. Kidneys (C) is incorrect because kidney infection (pyelonephritis) is a more serious but less common, usually ascending, complication rather than the most commonly affected site. Ureters (D) is incorrect because isolated ureteral infection is not a typical or common presentation of urinary tract infection."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q51",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which diagnostic test is commonly used to confirm urinary tract infections?",
        "options": {
          "A": "Electrocardiogram (ECG)",
          "B": "Urinalysis",
          "C": "MRI (Magnetic Resonance Imaging)",
          "D": "Complete Blood Count (CBC)"
        },
        "correctAnswer": "B",
        "explanation": "Urinalysis (B) is correct because examining the urine for white blood cells, nitrites, and bacteria (often followed by urine culture) is the standard and most direct way to confirm a urinary tract infection. Electrocardiogram (ECG) (A) is incorrect because this test assesses cardiac electrical activity and has no role in diagnosing a UTI. MRI (Magnetic Resonance Imaging) (C) is incorrect because this advanced imaging modality is not the routine or first-line test for a straightforward UTI. Complete Blood Count (CBC) (D) is incorrect because, while it may show signs of infection generally, it does not directly confirm a urinary tract source the way a urinalysis does."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q52",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which population group is at the highest risk for developing urinary tract infections?",
        "options": {
          "A": "Adolescents",
          "B": "Elderly individuals",
          "C": "Infants",
          "D": "Young adults"
        },
        "correctAnswer": "B",
        "explanation": "Elderly individuals (B) is correct because factors common in older age, such as incomplete bladder emptying, immobility, catheter use, and reduced immune function, place elderly individuals at particularly high risk for urinary tract infections. Adolescents (A) is incorrect because, while sexually active adolescents can develop UTIs, they are not the group at the very highest overall risk among these options. Infants (C) is incorrect because, although infants can develop UTIs (sometimes linked to congenital anomalies), the elderly population carries a higher overall risk burden. Young adults (D) is incorrect because, while young sexually active women do have elevated risk, the multiple compounding risk factors present in elderly individuals make them the higher-risk group among the choices given."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q53",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which type of kidney stone is most commonly associated with urinary tract infections?",
        "options": {
          "A": "Uric acid stones",
          "B": "Calcium oxalate stones",
          "C": "Struvite stones",
          "D": "Cystine stones"
        },
        "correctAnswer": "C",
        "explanation": "Struvite stones (C) is correct because these stones classically form in the presence of urease-producing bacteria (such as Proteus species) during chronic or recurrent urinary tract infections, directly linking them to infection. Uric acid stones (A) is incorrect because these form due to purine metabolism disturbances and acidic urine, unrelated to infection. Calcium oxalate stones (B) is incorrect because, although the most common kidney stone type overall, their formation is linked to dietary and metabolic factors rather than infection. Cystine stones (D) is incorrect because these result from a genetic defect in amino acid transport (cystinuria), not from infection."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q54",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which of the following is the most common causative agent of urinary tract infections?",
        "options": {
          "A": "Streptococcus pneumoniae",
          "B": "Escherichia coli (E. coli)",
          "C": "Staphylococcus aureus",
          "D": "Pseudomonas aeruginosa"
        },
        "correctAnswer": "B",
        "explanation": "Escherichia coli (E. coli) (B) is correct because this gut-derived bacterium accounts for the large majority of both community-acquired and many hospital-acquired urinary tract infections. Streptococcus pneumoniae (A) is incorrect because this organism is primarily associated with respiratory infections such as pneumonia, not UTIs. Staphylococcus aureus (C) is incorrect because, while it can occasionally cause UTIs, it is not the most common causative organism overall. Pseudomonas aeruginosa (D) is incorrect because this organism is more typically associated with hospital-acquired or catheter-associated infections in specific settings, rather than being the leading overall cause."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q55",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "What is the primary component of most urinary calculi?",
        "options": {
          "A": "Uric acid",
          "B": "Calcium oxalate",
          "C": "Magnesium phosphate",
          "D": "Cystine"
        },
        "correctAnswer": "B",
        "explanation": "Calcium oxalate (B) is correct because this is the most common composition of kidney stones overall, accounting for the majority of cases. Uric acid (A) is incorrect because, while a recognised stone type, it is less common than calcium oxalate stones overall. Magnesium phosphate (C) is incorrect because this is a component more specifically of struvite stones, a less common category linked to infection. Cystine (D) is incorrect because cystine stones are rare, resulting from a specific inherited metabolic disorder, not the primary or most common stone type."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q56",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which of the following conditions predisposes individuals to the development of pyelonephritis?",
        "options": {
          "A": "Hyperthyroidism",
          "B": "Diabetes mellitus",
          "C": "Osteoarthritis",
          "D": "Asthma"
        },
        "correctAnswer": "B",
        "explanation": "Diabetes mellitus (B) is correct because glycosuria promotes bacterial growth in the urine, and diabetes is also associated with impaired immune response and neurogenic bladder dysfunction, all of which raise the risk of ascending infection and pyelonephritis. Hyperthyroidism (A) is incorrect because this endocrine condition is not classically linked to increased urinary tract infection risk. Osteoarthritis (C) is incorrect because this joint condition has no established direct link to predisposing someone to kidney infection. Asthma (D) is incorrect because this respiratory condition similarly has no established direct connection to pyelonephritis risk."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q57",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which of the following is a hallmark feature of nephrotic syndrome?",
        "options": {
          "A": "Hypertension",
          "B": "Proteinuria",
          "C": "Hematuria",
          "D": "Urinary tract infection"
        },
        "correctAnswer": "B",
        "explanation": "Proteinuria (B) is correct because massive protein loss in the urine is the defining hallmark of nephrotic syndrome, driving its other features like hypoalbuminemia and oedema. Hypertension (A) is incorrect because, while it can be present, it is more classically associated with nephritic syndrome rather than being the defining hallmark of nephrotic syndrome. Hematuria (C) is incorrect for the same reason, being more typical of nephritic syndrome's presentation. Urinary tract infection (D) is incorrect because this is a separate infectious condition, not a defining diagnostic feature of nephrotic syndrome."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q58",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which gland is often referred to as the \"master gland\" because of its regulatory role over other endocrine glands?",
        "options": {
          "A": "Thyroid gland",
          "B": "Adrenal gland",
          "C": "Pituitary gland",
          "D": "Hypothalamus"
        },
        "correctAnswer": "C",
        "explanation": "Pituitary gland (C) is correct because it secretes trophic hormones that regulate the activity of most other endocrine glands, earning it the title of \"master gland.\" Thyroid gland (A) is incorrect because it is itself regulated by the pituitary rather than controlling other glands. Adrenal gland (B) is incorrect because it too responds to pituitary regulation (via ACTH) rather than directing other glands. Hypothalamus (D) is incorrect because, although it sits above and directs the pituitary, the traditional \"master gland\" title is given specifically to the pituitary itself."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q59",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "Which test measures average blood glucose levels over the past 2-3 months and is used for long-term monitoring of diabetes mellitus?",
        "options": {
          "A": "Fasting plasma glucose (FPG) test",
          "B": "Oral glucose tolerance test (OGTT)",
          "C": "Random plasma glucose test",
          "D": "Hemoglobin A1c (HbA1c) test"
        },
        "correctAnswer": "D",
        "explanation": "Hemoglobin A1c (HbA1c) test (D) is correct because this test reflects the average blood glucose level over the preceding two to three months, based on glucose binding to haemoglobin over the red cell's lifespan, making it ideal for long-term monitoring. Fasting plasma glucose (FPG) test (A) is incorrect because this reflects only the blood glucose level at a single fasting point in time. Oral glucose tolerance test (OGTT) (B) is incorrect because this test evaluates the body's response to a glucose load over a few hours, not average control over months. Random plasma glucose test (C) is incorrect because this simply captures a glucose level at a random moment, without indicating longer-term control."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q60",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 3,
        "text": "What is the primary function of the thyroid gland?",
        "options": {
          "A": "Regulation of blood glucose levels",
          "B": "Regulation of calcium levels in the blood",
          "C": "Regulation of metabolism",
          "D": "Regulation of blood pressure"
        },
        "correctAnswer": "C",
        "explanation": "Regulation of metabolism (C) is correct because the thyroid hormones, primarily thyroxine, set the body's overall metabolic rate, affecting oxygen consumption and heat production. Regulation of blood glucose levels (A) is incorrect because that is primarily the role of pancreatic hormones, insulin and glucagon. Regulation of calcium levels in the blood (B) is incorrect because that is the primary role of the parathyroid glands (and, more secondarily, thyroid calcitonin), not the thyroid's main overall function. Regulation of blood pressure (D) is incorrect because that role belongs mainly to the renin-angiotensin-aldosterone system and adrenal hormones, not the thyroid's primary function."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q61",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Which gland produces melatonin, a hormone involved in regulating the sleep-wake cycle?",
        "options": {
          "A": "Thymus",
          "B": "Pineal gland",
          "C": "Pituitary",
          "D": "Parathyroid gland"
        },
        "correctAnswer": "B",
        "explanation": "Pineal gland (B) is correct because this small brain structure secretes melatonin in response to darkness, helping regulate the sleep-wake (circadian) cycle. Thymus (A) is incorrect because this gland is primarily involved in the maturation of T lymphocytes for immune function, not melatonin production. Pituitary (C) is incorrect because, while it regulates many hormonal axes, melatonin production is specifically the pineal gland's role. Parathyroid gland (D) is incorrect because this gland's primary role is regulating calcium levels, unrelated to sleep-wake regulation."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q62",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "In hypoparathyroidism, which of the following is a potential complication",
        "options": {
          "A": "Hypertension",
          "B": "Hypercalcemia",
          "C": "Tetany",
          "D": "Hyperglycemia"
        },
        "correctAnswer": "C",
        "explanation": "Tetany (C) is correct because insufficient parathyroid hormone leads to low blood calcium levels (hypocalcemia), which increases neuromuscular excitability and can cause tetany, muscle spasms and cramping. Hypertension (A) is incorrect because this is not a classic, directly linked complication of parathyroid hormone deficiency. Hypercalcemia (B) is incorrect because hypoparathyroidism causes the opposite problem, low calcium (hypocalcemia), not elevated calcium. Hyperglycemia (D) is incorrect because blood glucose regulation is governed by pancreatic hormones, not parathyroid hormone."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q63",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "The pancreas has both endocrine and exocrine functions. Which part of the pancreas is responsible for producing insulin and glucagon?",
        "options": {
          "A": "Islets of Langerhans",
          "B": "Acinar cells",
          "C": "Duct cells",
          "D": "Pancreatic lobules"
        },
        "correctAnswer": "A",
        "explanation": "Islets of Langerhans (A) is correct because these clusters of endocrine cells within the pancreas contain the beta cells that produce insulin and alpha cells that produce glucagon. Acinar cells (B) is incorrect because these cells constitute the exocrine portion of the pancreas, producing digestive enzymes, not hormones. Duct cells (C) is incorrect because these cells simply carry the exocrine digestive secretions to the duodenum, playing no hormone-producing role. Pancreatic lobules (D) is incorrect because this term describes a general structural subdivision of pancreatic tissue rather than the specific hormone-producing cell cluster."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q64",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Which gland produces cortisol, a hormone involved in the body's stress response?",
        "options": {
          "A": "Pituitary gland",
          "B": "Adrenal gland",
          "C": "Pineal gland",
          "D": "Thymus"
        },
        "correctAnswer": "B",
        "explanation": "Adrenal gland (B) is correct because the adrenal cortex specifically produces cortisol as part of the body's stress response and general metabolic regulation. Pituitary gland (A) is incorrect because it produces ACTH, which stimulates the adrenal gland to release cortisol, rather than producing cortisol itself. Pineal gland (C) is incorrect because this gland produces melatonin, unrelated to the cortisol stress response. Thymus (D) is incorrect because this gland's function relates to immune cell maturation, not cortisol production."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q65",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Which condition is caused by the deficiency of antidiuretic hormone (ADH), leading to excessive urination and thirst?",
        "options": {
          "A": "Cushing's syndrome",
          "B": "Diabetes insipidus",
          "C": "Addison's disease",
          "D": "Hyperthyroidism"
        },
        "correctAnswer": "B",
        "explanation": "Diabetes insipidus (B) is correct because this condition results from insufficient ADH (or renal insensitivity to it), leading to the kidneys' failure to concentrate urine, causing excessive dilute urination and compensatory thirst. Cushing's syndrome (A) is incorrect because this results from excess cortisol, not an ADH deficiency. Addison's disease (C) is incorrect because this results from adrenal cortisol/aldosterone insufficiency, a different hormonal axis from ADH. Hyperthyroidism (D) is incorrect because this involves excess thyroid hormone, unrelated to ADH deficiency."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q66",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Hormones are chemical messengers produced by endocrine glands that:",
        "options": {
          "A": "Are released directly into the bloodstream",
          "B": "Act only locally at the site of production",
          "C": "Transmit electrical signals between neurons",
          "D": "Stimulate muscle contraction"
        },
        "correctAnswer": "A",
        "explanation": "Are released directly into the bloodstream (A) is correct because this is the defining characteristic of endocrine hormones, distinguishing them from other signalling molecules by allowing them to travel throughout the body to reach distant target tissues. Act only locally at the site of production (B) is incorrect because this describes paracrine or autocrine signalling, not the classic endocrine hormone mechanism. Transmit electrical signals between neurons (C) is incorrect because that describes neurotransmitter function within the nervous system, not hormone action. Stimulate muscle contraction (D) is incorrect because, while some hormones can influence muscle activity, this is not the general defining feature of what a hormone is."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q67",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Which disorder is characterized by an underactive thyroid gland and is often associated with symptoms such as fatigue, weight gain, and cold intolerance?",
        "options": {
          "A": "Graves' disease",
          "B": "Hashimoto's thyroiditis",
          "C": "Hypopituitarism",
          "D": "Cushing's syndrome"
        },
        "correctAnswer": "B",
        "explanation": "Hashimoto's thyroiditis (B) is correct because this autoimmune condition is the most common cause of hypothyroidism, producing exactly the fatigue, weight gain, and cold intolerance described. Graves' disease (A) is incorrect because this autoimmune condition causes hyperthyroidism (an overactive thyroid), producing largely opposite symptoms such as weight loss and heat intolerance. Hypopituitarism (C) is incorrect because, while it can secondarily cause reduced thyroid function, it is a broader pituitary hormone deficiency syndrome rather than the classic underactive-thyroid disorder being described. Cushing's syndrome (D) is incorrect because this results from excess cortisol and presents with weight gain but is unrelated to thyroid underactivity or cold intolerance."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q68",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Growth hormone (GH) primarily acts on:",
        "options": {
          "A": "Bone and muscle tissue",
          "B": "Kidneys",
          "C": "Liver",
          "D": "Adrenal glands"
        },
        "correctAnswer": "A",
        "explanation": "Bone and muscle tissue (A) is correct because growth hormone's principal targets are the skeletal and muscular systems, promoting linear bone growth and increased muscle mass. Kidneys (B) is incorrect because the kidneys are not the primary target tissue of growth hormone action. Liver (C) is incorrect because, although the liver produces IGF-1 in response to GH stimulation, the liver itself is a mediator rather than the primary tissue GH is described as acting on. Adrenal glands (D) is incorrect because growth hormone does not primarily target adrenal tissue."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q69",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Diabetic ketoacidosis (DKA) is a serious complication primarily associated with which type of diabetes?",
        "options": {
          "A": "Type 1 diabetes mellitus",
          "B": "Type 2 diabetes mellitus",
          "C": "Gestational diabetes mellitus",
          "D": "Latent autoimmune diabetes in adults (LADA)"
        },
        "correctAnswer": "A",
        "explanation": "Type 1 diabetes mellitus (A) is correct because the near-total absence of insulin in type 1 diabetes drives the body to break down fat for fuel, producing the ketone build-up and acidosis characteristic of DKA, making it the classically associated complication. Type 2 diabetes mellitus (B) is incorrect because patients typically retain some insulin production, making DKA far less common (though hyperosmolar hyperglycaemic state is more typical there). Gestational diabetes mellitus (C) is incorrect because DKA is uncommon in this form, which is usually managed with diet or moderate insulin needs during pregnancy. Latent autoimmune diabetes in adults (LADA) (D) is incorrect because, although it shares autoimmune features with type 1 diabetes, it progresses more slowly and is not the type classically and primarily associated with DKA in standard teaching."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q70",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "The intravenous (IV) administered drugs are:",
        "options": {
          "A": "100% bioavailable",
          "B": "Rapidly absorbed",
          "C": "Undergoes the first-pass metabolism",
          "D": "Rapidly excreted by renal"
        },
        "correctAnswer": "A",
        "explanation": "100% bioavailable (A) is correct because intravenous administration delivers the drug directly into the bloodstream, bypassing absorption barriers entirely, so the full dose reaches systemic circulation. Rapidly absorbed (B) is incorrect because \"absorption\" as a pharmacokinetic step does not apply to IV drugs, since there is no barrier to cross; the drug is placed directly into the blood. Undergoes the first-pass metabolism (C) is incorrect because IV drugs bypass the portal circulation and liver on their first pass, avoiding first-pass metabolism, unlike oral drugs. Rapidly excreted by renal (D) is incorrect because excretion rate depends on the specific drug's properties and is not a defining characteristic of the IV route itself."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q71",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Mrs. Johansson's physician has prescribed tetracycline 500 mg PO q6h. While assessing Mrs. Johansson's nursing history for allergies, the nurse notes that Mrs. Johansson is also taking oral contraceptives. What is the most appropriate initial nursing intervention?",
        "options": {
          "A": "Administer the dose of tetracycline",
          "B": "Notify the physician that Mrs. Johansson is taking oral contraceptives",
          "C": "Tell Mrs. Johansson, she should stop taking oral contraceptives since they are inactivated by tetracycline",
          "D": "Tell Mrs. Johansson, to use another form of birth control for at least two months"
        },
        "correctAnswer": "D",
        "explanation": "Tell Mrs. Johansson, to use another form of birth control for at least two months (D) is correct because tetracycline can reduce the effectiveness of oral contraceptives by altering gut flora involved in the enterohepatic recirculation of oestrogen, so the well-established nursing action is to advise a backup contraceptive method for the duration of therapy and shortly after. Administer the dose of tetracycline (A) is incorrect as the complete answer because, while the drug should still be given, doing so without addressing the contraceptive interaction leaves the patient at risk of an unintended pregnancy. Notify the physician that Mrs. Johansson is taking oral contraceptives (B) is incorrect as the most appropriate initial action because this is a well-recognised drug interaction the nurse can and should independently counsel the patient about, rather than needing to wait on the physician for such standard teaching. Tell Mrs. Johansson, she should stop taking oral contraceptives since they are inactivated by tetracycline (C) is incorrect because advising her to stop her contraceptive altogether, rather than adding a backup method, would leave her without reliable contraception during treatment."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q72",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "An asthmatic client is put on montelukast (singulair). During therapy, which of the following laboratories should be monitored?",
        "options": {
          "A": "Complete blood count",
          "B": "Sodium and potassium",
          "C": "Calcium and platelet count",
          "D": "Alanine transaminase (ALT) and aspartate transaminase (AST)"
        },
        "correctAnswer": "D",
        "explanation": "Alanine transaminase (ALT) and aspartate transaminase (AST) (D) is correct because montelukast has been associated with hepatotoxicity, so monitoring liver enzymes is a recognised safety precaution during therapy. Complete blood count (A) is incorrect because montelukast is not primarily associated with bone marrow suppression or blood count abnormalities requiring routine CBC monitoring. Sodium and potassium (B) is incorrect because montelukast does not have a well-established effect on electrolyte balance requiring this specific monitoring. Calcium and platelet count (C) is incorrect because these are not the parameters classically monitored for this particular medication's known adverse effect profile."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q73",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Which of the following drugs works by interfering with bacterial protein synthesis through reversible action at the 50S ribosomal subunit?",
        "options": {
          "A": "Erythromycin",
          "B": "Gentamicin",
          "C": "Doxycycline",
          "D": "Both A and B"
        },
        "correctAnswer": "A",
        "explanation": "Erythromycin (A) is correct because this macrolide antibiotic reversibly binds the 50S ribosomal subunit to block bacterial protein synthesis. Gentamicin (B) is incorrect because this aminoglycoside acts irreversibly at the 30S ribosomal subunit, a different site and mechanism from the one described. Doxycycline (C) is incorrect because this tetracycline also acts at the 30S ribosomal subunit, not the 50S subunit. Both A and B (D) is incorrect because gentamicin does not share erythromycin's 50S mechanism, so only erythromycin correctly fits the description given."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q74",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Pyridoxine deficiency is a side effect of which of these drugs?",
        "options": {
          "A": "Clofazimine",
          "B": "Isoniazid",
          "C": "Dapsone",
          "D": "Streptomycin"
        },
        "correctAnswer": "B",
        "explanation": "Isoniazid (B) is correct because this anti-tuberculosis drug is well known to cause vitamin B6 (pyridoxine) deficiency by interfering with its metabolism, which is why pyridoxine supplementation is routinely co-prescribed with isoniazid therapy. Clofazimine (A) is incorrect because this anti-leprosy drug is more associated with skin discolouration and gastrointestinal effects, not pyridoxine deficiency. Dapsone (C) is incorrect because this drug's notable adverse effects include haemolysis (especially in G6PD deficiency) and methemoglobinemia, not pyridoxine depletion. Streptomycin (D) is incorrect because this aminoglycoside is primarily associated with ototoxicity and nephrotoxicity, not pyridoxine deficiency."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q75",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Nurse Kate is taking care of client taking ibuprofen. Which of the following should be included in her assessment and monitoring?",
        "options": {
          "A": "Blood pressure and bowel sounds",
          "B": "Weight and appetite",
          "C": "Muscle strength and range of motion",
          "D": "Respiratory rate, depth, and rhythm"
        },
        "correctAnswer": "A",
        "explanation": "Blood pressure and bowel sounds (A) is correct because NSAIDs like ibuprofen can cause fluid retention and hypertension as well as gastrointestinal irritation or bleeding, making blood pressure and bowel/GI assessment appropriate monitoring priorities. Weight and appetite (B) is incorrect because these are not the primary parameters linked to ibuprofen's well-known adverse effect profile. Muscle strength and range of motion (C) is incorrect because these are not classic monitoring parameters for NSAID therapy specifically. Respiratory rate, depth, and rhythm (D) is incorrect because ibuprofen's main risks relate to cardiovascular and gastrointestinal systems rather than respiratory function."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q76",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Half-life (t 1/2) is the time required to:",
        "options": {
          "A": "Change the amount of a drug in plasma by half during elimination",
          "B": "Metabolize a half of an introduced drug into the active metabolite",
          "C": "Absorb a half of an introduced drug",
          "D": "Bind a half of an introduced drug to plasma proteins"
        },
        "correctAnswer": "A",
        "explanation": "Change the amount of a drug in plasma by half during elimination (A) is correct because this is the standard pharmacokinetic definition of half-life, describing how long it takes for the plasma concentration of a drug to fall by 50% during the elimination process. Metabolize a half of an introduced drug into the active metabolite (B) is incorrect because half-life relates to overall elimination from plasma, not specifically to conversion into an active metabolite. Absorb a half of an introduced drug (C) is incorrect because half-life concerns the elimination phase of pharmacokinetics, not absorption. Bind a half of an introduced drug to plasma proteins (D) is incorrect because plasma protein binding is a separate pharmacokinetic property unrelated to the definition of half-life."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q77",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Renal damage is a potential adverse effect of aminoglycosides. In what part of the kidney are aminoglycosides retained which causes this effect?",
        "options": {
          "A": "Distal tubule",
          "B": "Proximal tubule",
          "C": "Loop of Henle",
          "D": "Glomerulus"
        },
        "correctAnswer": "B",
        "explanation": "Proximal tubule (B) is correct because aminoglycosides accumulate within the cells of the proximal convoluted tubule, where their concentration builds up and causes direct cellular toxicity leading to nephrotoxicity. Distal tubule (A) is incorrect because this is not the primary site of aminoglycoside accumulation and toxicity. Loop of Henle (C) is incorrect for the same reason, not being the classic retention site for these drugs. Glomerulus (D) is incorrect because, while filtration occurs here, the toxic accumulation and cellular damage specifically occurs in the proximal tubular cells after filtration, not within the glomerulus itself."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q78",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "A client is prescribed with Guaifenesin (mucinex). The nurse determines that the client understands the proper administration of this medication if the client states that he or she will:",
        "options": {
          "A": "Take an additional dose once fever and cough persist",
          "B": "Limit oral fluid intake",
          "C": "Drink extra fluid while taking this medication",
          "D": "Take the medication with meals only"
        },
        "correctAnswer": "C",
        "explanation": "Drink extra fluid while taking this medication (C) is correct because guaifenesin works as an expectorant by thinning respiratory secretions, and adequate hydration enhances this effect, making increased fluid intake standard patient teaching. Take an additional dose once fever and cough persist (A) is incorrect because self-adjusting the dose based on persistent symptoms is not appropriate teaching and could lead to overdose; persistent symptoms should prompt reassessment by a provider instead. Limit oral fluid intake (B) is incorrect because restricting fluids works directly against the medication's intended thinning effect on secretions. Take the medication with meals only (D) is incorrect because guaifenesin's administration is not specifically tied to meal timing in the way this option suggests."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q79",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Which immune stimulants is usually used for treatment of blood-related cancer?",
        "options": {
          "A": "Interferons",
          "B": "Interleukins",
          "C": "Colony-stimulating factors",
          "D": "Steroids"
        },
        "correctAnswer": "C",
        "explanation": "Colony-stimulating factors (C) is correct because these agents, such as G-CSF, are commonly used to stimulate the bone marrow to boost white blood cell production, particularly to counter the neutropenia seen with chemotherapy for haematologic malignancies. Interferons (A) is incorrect because, although used in certain haematologic cancers like chronic myeloid leukaemia historically, they are not the most typical immune stimulant used broadly for blood-related cancers in general practice. Interleukins (B) is incorrect because these are used in more specific, less common cancer immunotherapy contexts rather than being the usual choice for blood cancers overall. Steroids (D) is incorrect because corticosteroids are anti-inflammatory/immunosuppressive agents used as part of chemotherapy regimens, not classified as immune stimulants."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q80",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 4,
        "text": "Peter is experiencing diarrhea after consuming her prescribed antibiotics for a whole week. This is because?",
        "options": {
          "A": "The drugs renders food indigestible",
          "B": "Gastric flora is disturbed",
          "C": "Fluid is added into the intestines",
          "D": "Normal intestinal bacteria are destroyed"
        },
        "correctAnswer": "D",
        "explanation": "Normal intestinal bacteria are destroyed (D) is correct because broad-spectrum antibiotics disrupt the normal protective gut flora, allowing overgrowth of opportunistic organisms and leading to antibiotic-associated diarrhoea. The drugs renders food indigestible (A) is incorrect because antibiotics do not act on digestive enzymes or food breakdown in this way. Gastric flora is disturbed (B) is incorrect because the relevant disruption occurs mainly in the intestinal, not gastric, flora, making option D the more precise and standard explanation. Fluid is added into the intestines (C) is incorrect because this describes a secretory mechanism of diarrhoea rather than the actual underlying cause related to antibiotic use, which is disruption of normal bacteria."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q81",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Humatrope (somatropin) is being given to a client with turner syndrome. Which of the following findings is associated with this medication?",
        "options": {
          "A": "Decreases ALT and AST level",
          "B": "Mild hyperglycemia",
          "C": "Hypotension",
          "D": "Water intoxication"
        },
        "correctAnswer": "B",
        "explanation": "Mild hyperglycemia (B) is correct because growth hormone therapy can induce a degree of insulin resistance, leading to mildly elevated blood glucose levels as a recognised effect of treatment. Decreases ALT and AST level (A) is incorrect because growth hormone is not known to lower liver enzyme levels as a therapeutic or side effect. Hypotension (C) is incorrect because growth hormone therapy is not associated with lowering blood pressure. Water intoxication (D) is incorrect because, although fluid retention can occur with growth hormone, frank water intoxication is not the classic associated finding compared to the well-documented hyperglycaemic effect."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q82",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Which of the following clients is most likely to experience adverse effects from treatment with diuretics?",
        "options": {
          "A": "A 21-year-old student",
          "B": "A 40-year-old unmarried man",
          "C": "A 60-year-old widower",
          "D": "A 75-year-old man"
        },
        "correctAnswer": "D",
        "explanation": "A 75-year-old man (D) is correct because advancing age is associated with reduced renal function, altered fluid and electrolyte reserves, and greater sensitivity to diuretic-induced dehydration and electrolyte imbalance, making elderly patients the most vulnerable group among these options. A 21-year-old student (A) is incorrect because younger patients generally have more robust renal function and physiological reserve, lowering their risk of adverse diuretic effects. A 40-year-old unmarried man (B) is incorrect for similar reasons, being at lower risk than an elderly patient. A 60-year-old widower (C) is incorrect because, while age-related risk begins to increase, the 75-year-old represents the more advanced age with correspondingly higher risk among the choices given."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q83",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Which of the following drugs can cause severe hematologic disorders?",
        "options": {
          "A": "A digoxin",
          "B": "Quinine",
          "C": "Disopryramide",
          "D": "Procainamide"
        },
        "correctAnswer": "B",
        "explanation": "Quinine (B) is correct because this drug is well recognised for causing immune-mediated thrombocytopenia and other blood dyscrasias as a significant adverse effect. A digoxin (A) is incorrect because digoxin's major adverse effects relate to cardiac toxicity and visual disturbances, not haematologic disorders. Disopryramide (C) is incorrect because this antiarrhythmic's notable adverse effects are primarily anticholinergic and cardiac, not haematologic. Procainamide (D) is incorrect because, while it does carry other significant risks such as drug-induced lupus, quinine's hematologic toxicity is the more classically tested association among these options."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q84",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "For an asthmatic client put on cromolyn sodium (intal) inhaler, the nurse as him to immediately report which of the following side effects?",
        "options": {
          "A": "Sore throat",
          "B": "Drowsiness",
          "C": "Wheezing",
          "D": "Hypotension"
        },
        "correctAnswer": "C",
        "explanation": "Wheezing (C) is correct because paradoxical bronchospasm is a known, serious adverse reaction to inhaled cromolyn sodium that requires prompt reporting since it can acutely worsen the very asthma symptoms the drug is meant to prevent. Sore throat (A) is incorrect because, while a possible mild local irritation, it is not the urgent, immediately reportable concern compared to bronchospasm. Drowsiness (B) is incorrect because this is not a typical or dangerous effect associated with cromolyn sodium. Hypotension (D) is incorrect because this is not a recognised adverse effect of this particular inhaled medication."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q85",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A client has just returned to a nursing unit following bronchoscopy. A nurse would implement which of the following nursing interventions for this client?",
        "options": {
          "A": "Encouraging additional fluids for the next 24 hours",
          "B": "Ensuring the return of the gag reflex before offering foods or fluids",
          "C": "Administering atropine intravenously",
          "D": "Administering small doses of midazolam (Versed)"
        },
        "correctAnswer": "B",
        "explanation": "Ensuring the return of the gag reflex before offering foods or fluids (B) is correct because local anaesthesia used to numb the throat during bronchoscopy temporarily suppresses the gag reflex, and offering oral intake before it returns risks aspiration. Encouraging additional fluids for the next 24 hours (A) is incorrect because oral fluids must be withheld until the gag reflex safely returns, not simply encouraged right away. Administering atropine intravenously (C) is incorrect because this is a medication sometimes given before the procedure to reduce secretions, not a standard post-procedure nursing intervention. Administering small doses of midazolam (Versed) (D) is incorrect because this sedative would typically be used during, not after, the procedure, and giving more afterward could further suppress protective reflexes."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q86",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A nurse is assessing a client with chronic airflow limitation and notes that the client has a \"barrel chest.\" The nurse interprets that this client has which of the following forms of chronic airflow limitation?",
        "options": {
          "A": "Chronic obstructive bronchitis",
          "B": "Emphysema",
          "C": "Bronchial asthma",
          "D": "Bronchial asthma and bronchitis"
        },
        "correctAnswer": "B",
        "explanation": "Emphysema (B) is correct because chronic air trapping and lung hyperinflation in emphysema classically produce the increased anteroposterior chest diameter known as a barrel chest. Chronic obstructive bronchitis (A) is incorrect because this condition is more classically associated with a productive cough and cyanosis (\"blue bloater\" presentation) rather than the hyperinflated barrel chest appearance. Bronchial asthma (C) is incorrect because asthma is an episodic, reversible airway condition not classically associated with a permanent barrel chest deformity. Bronchial asthma and bronchitis (D) is incorrect for the same reason, as neither condition is the classic cause of this particular chest wall change."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q87",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A client with allergic rhinitis asks the nurse what he should do to decrease his symptoms. Which of the following instructions would be appropriate for the nurse to give the client?",
        "options": {
          "A": "\"Use your nasal decongestant spray regularly to help clear your nasal passages.\"",
          "B": "\"Ask the doctor for antibiotics. Antibiotics will help decrease the secretion.\"",
          "C": "\"It is important to increase your activity. A daily brisk walk will help promote drainage.\"",
          "D": "\"Keep a diary when your symptoms occur. This can help you identify what precipitates your attacks.\""
        },
        "correctAnswer": "D",
        "explanation": "\"Keep a diary when your symptoms occur. This can help you identify what precipitates your attacks.\" (D) is correct because identifying and then avoiding specific triggers is a core, appropriate strategy for managing allergic rhinitis long-term. \"Use your nasal decongestant spray regularly to help clear your nasal passages.\" (A) is incorrect because regular, prolonged use of decongestant sprays can cause rebound congestion (rhinitis medicamentosa), making this poor advice. \"Ask the doctor for antibiotics. Antibiotics will help decrease the secretion.\" (B) is incorrect because allergic rhinitis is not a bacterial infection, so antibiotics have no role in its management. \"It is important to increase your activity. A daily brisk walk will help promote drainage.\" (C) is incorrect because exercise is not a recognised primary strategy for managing allergic rhinitis symptoms."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q88",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A client with acute asthma is prescribed short-term corticosteroid therapy. What is the rationale for the use of steroids in clients with asthma?",
        "options": {
          "A": "Corticosteroids promote bronchodilation",
          "B": "Corticosteroids act as an expectorant",
          "C": "Corticosteroids have an anti-inflammatory effect",
          "D": "Corticosteroids prevent development of respiratory infections"
        },
        "correctAnswer": "C",
        "explanation": "Corticosteroids have an anti-inflammatory effect (C) is correct because reducing airway inflammation, rather than directly relaxing airway smooth muscle, is the primary reason corticosteroids are used to control asthma exacerbations. Corticosteroids promote bronchodilation (A) is incorrect because direct bronchodilation is the role of beta-agonists, not corticosteroids, even though reduced inflammation indirectly improves airflow. Corticosteroids act as an expectorant (B) is incorrect because corticosteroids do not work by thinning or helping expel mucus. Corticosteroids prevent development of respiratory infections (D) is incorrect because corticosteroids are not antimicrobial agents and do not function to prevent infection; in fact, they can slightly increase infection susceptibility."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q89",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Immediately following a thoracentesis, which clinical manifestations indicate that a complication has occurred and the physician should be notified?",
        "options": {
          "A": "Serosanguineous drainage from the puncture site",
          "B": "Increased temperature and blood pressure",
          "C": "Increased pulse and pallor",
          "D": "Hypotension and hypothermia"
        },
        "correctAnswer": "C",
        "explanation": "Increased pulse and pallor (C) is correct because tachycardia combined with pallor suggests a developing complication such as pneumothorax or bleeding following the procedure, warranting immediate physician notification. Serosanguineous drainage from the puncture site (A) is incorrect because a small amount of blood-tinged drainage at the puncture site is a common, expected finding rather than a sign of a serious complication. Increased temperature and blood pressure (B) is incorrect because this combination is not the classic early warning pattern for a post-thoracentesis complication like pneumothorax. Hypotension and hypothermia (D) is incorrect because, while hypotension could suggest a problem, hypothermia is not a typical or expected accompanying sign in this scenario compared to the tachycardia and pallor pattern."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q90",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A male patient has a sucking stab wound to the chest. Which action should the nurse take first?",
        "options": {
          "A": "Drawing blood for a hematocrit and hemoglobin level",
          "B": "Applying a dressing over the wound and taping it on three sides",
          "C": "Preparing a chest tube insertion tray",
          "D": "Preparing to start an I.V. line"
        },
        "correctAnswer": "B",
        "explanation": "Applying a dressing over the wound and taping it on three sides (B) is correct because this creates a flutter-valve effect that lets trapped air escape during exhalation while preventing more air from entering during inhalation, making it the immediate, life-saving first aid measure for an open (sucking) chest wound. Drawing blood for a hematocrit and hemoglobin level (A) is incorrect because laboratory testing is not the priority when an open chest wound is actively compromising the patient's ventilation. Preparing a chest tube insertion tray (C) is incorrect because, although a chest tube will likely be needed soon after, immediately sealing the wound to stabilise breathing takes priority over preparing equipment for a later definitive procedure. Preparing to start an I.V. line (D) is incorrect because establishing IV access, while important, does not address the immediate life-threatening airway/breathing problem the way sealing the wound does."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q91",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "The nurse is teaching a male client with chronic bronchitis about breathing exercises. Which of the following should the nurse include in the teaching?",
        "options": {
          "A": "Make inhalation longer than exhalation",
          "B": "Exhale through an open mouth",
          "C": "Use diaphragmatic breathing",
          "D": "Use chest breathing"
        },
        "correctAnswer": "C",
        "explanation": "Use diaphragmatic breathing (C) is correct because this technique strengthens the diaphragm and improves ventilation efficiency, which is standard teaching for patients with chronic bronchitis and other obstructive airway diseases. Make inhalation longer than exhalation (A) is incorrect because the correct teaching for obstructive lung disease is actually to prolong exhalation relative to inhalation, helping to fully empty trapped air. Exhale through an open mouth (B) is incorrect because patients are typically taught to exhale through pursed lips, not an open mouth, to help keep airways open longer during expiration. Use chest breathing (D) is incorrect because shallow chest breathing is less efficient and is discouraged in favour of diaphragmatic breathing for these patients."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q92",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "When developing a discharge plan to manage the care of a client with COPD, the nurse should anticipate that the client will do which of the following?",
        "options": {
          "A": "Develop infections easily",
          "B": "Maintain current status",
          "C": "Require less supplemental oxygen",
          "D": "Show permanent improvement"
        },
        "correctAnswer": "A",
        "explanation": "Develop infections easily (A) is correct because impaired mucociliary clearance and compromised lung defences in COPD make patients more susceptible to respiratory infections, an important anticipatory point for discharge planning and teaching about infection prevention. Maintain current status (B) is incorrect because COPD is generally a progressive disease, so simply maintaining status without ongoing management planning is an unrealistic assumption. Require less supplemental oxygen (C) is incorrect because oxygen needs in COPD typically stay the same or increase over time rather than decreasing. Show permanent improvement (D) is incorrect because COPD is a chronic, largely irreversible condition, so permanent improvement is not a realistic expectation."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q93",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Which of the following is the primary reason to teach pursed-lip breathing to clients with emphysema?",
        "options": {
          "A": "To promote oxygen intake",
          "B": "To strengthen the diaphragm",
          "C": "To strengthen the intercostal muscles",
          "D": "To promote carbon dioxide elimination"
        },
        "correctAnswer": "D",
        "explanation": "To promote carbon dioxide elimination (D) is correct because pursed-lip breathing creates back-pressure that keeps airways open longer during exhalation, helping empty trapped air and carbon dioxide more effectively in emphysema. To promote oxygen intake (A) is incorrect because the primary mechanical benefit of this technique concerns improving exhalation and CO2 removal, rather than directly boosting oxygen uptake. To strengthen the diaphragm (B) is incorrect because that is the specific goal of diaphragmatic breathing exercises, a different but complementary technique. To strengthen the intercostal muscles (C) is incorrect because pursed-lip breathing is not specifically targeted at strengthening these particular muscles."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q94",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A 34-year-old woman with a history of asthma is admitted to the emergency department. The nurse notes that the client is dyspneic, with a respiratory rate of 35 breaths/minute, nasal flaring, and use of accessory muscles. Auscultation of the lung fields reveals greatly diminished breath sounds. Based on these findings, what action should the nurse take to initiate care of the client?",
        "options": {
          "A": "Initiate oxygen therapy and reassess the client in 10 minutes",
          "B": "Draw blood for an ABG analysis and send the client for a chest x-ray",
          "C": "Encourage the client to relax and breathe slowly through the mouth",
          "D": "Administer bronchodilators"
        },
        "correctAnswer": "D",
        "explanation": "Administer bronchodilators (D) is correct because the severely diminished breath sounds alongside marked respiratory distress point to a life-threatening degree of bronchospasm requiring immediate pharmacologic intervention to reopen the airways. Initiate oxygen therapy and reassess the client in 10 minutes (A) is incorrect because, while oxygen is appropriate supportive care, delaying definitive bronchodilator treatment for ten minutes in this severe presentation risks further deterioration. Draw blood for an ABG analysis and send the client for a chest x-ray (B) is incorrect because diagnostic testing should not delay the urgent treatment this client needs right now. Encourage the client to relax and breathe slowly through the mouth (C) is incorrect because this passive measure does not address the underlying severe bronchoconstriction causing the diminished breath sounds."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q95",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Auscultation of a client's lungs reveals crackles in the left posterior base. The nursing intervention is to:",
        "options": {
          "A": "Repeat auscultation after asking the client to deep breath and cough",
          "B": "Instruct the client to limit fluid intake to less than 2000 ml/day",
          "C": "Inspect the client's ankles and sacrum for the presence of edema",
          "D": "Place the client on bedrest in a semi-Fowler's position"
        },
        "correctAnswer": "A",
        "explanation": "Repeat auscultation after asking the client to deep breath and cough (A) is correct because crackles that clear with deep breathing and coughing often indicate simple atelectasis or retained secretions, so this reassessment step helps the nurse determine whether the finding resolves with a basic intervention before pursuing further evaluation. Instruct the client to limit fluid intake to less than 2000 ml/day (B) is incorrect because this assumes a fluid-overload cause without first confirming that through reassessment. Inspect the client's ankles and sacrum for the presence of edema (C) is incorrect because, while checking for fluid overload signs elsewhere is reasonable in a broader workup, it is not the immediate next nursing step right after hearing crackles. Place the client on bedrest in a semi-Fowler's position (D) is incorrect because this assumes a specific diagnosis and treatment plan before the initial simple reassessment step has even been performed."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q96",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Which of the following activities reflects what happens in the implementation phase of the nursing process",
        "options": {
          "A": "Obtaining patient's subjective rating of pain one hour after administration of analgesia",
          "B": "Administering analgesia to a client experiencing pain",
          "C": "Modifying the outcome after administration of analgesia",
          "D": "Determining criteria that will reflect successful pain relief"
        },
        "correctAnswer": "B",
        "explanation": "Administering analgesia to a client experiencing pain (B) is correct because implementation is the phase where planned nursing interventions are actually carried out. Obtaining patient's subjective rating of pain one hour after administration of analgesia (A) is incorrect because assessing the outcome of an intervention after the fact belongs to the evaluation phase. Modifying the outcome after administration of analgesia (C) is incorrect because adjusting the plan based on results is also part of evaluation, not implementation. Determining criteria that will reflect successful pain relief (D) is incorrect because setting expected outcome criteria happens during the planning phase, before the intervention is carried out."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q97",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "Which one of the following will help the nurse prioritize patient needs",
        "options": {
          "A": "Assessment and patient education",
          "B": "Maslow's hierarchy of needs",
          "C": "Complete assessment information",
          "D": "Identifying the problem and the defining characteristics"
        },
        "correctAnswer": "B",
        "explanation": "Maslow's hierarchy of needs (B) is correct because this classic framework, which ranks physiological needs above safety, belonging, esteem, and self-actualisation needs, gives nurses a structured way to decide which patient needs take priority. Assessment and patient education (A) is incorrect because these are general nursing activities rather than a specific prioritisation framework. Complete assessment information (C) is incorrect because thorough data collection supports prioritisation but does not itself provide the structure for ranking needs the way Maslow's hierarchy does. Identifying the problem and the defining characteristics (D) is incorrect because this describes the process of formulating a nursing diagnosis, not the framework used to prioritise among multiple identified needs."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q98",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A nurse understands the following statement \"the patient will reduce his risk of falls by correct use of his walker each time he ambulates is an example of?",
        "options": {
          "A": "Nursing diagnosis",
          "B": "Intervention",
          "C": "Goal",
          "D": "Rationale"
        },
        "correctAnswer": "C",
        "explanation": "Goal (C) is correct because this statement describes a specific, measurable expected patient outcome, which is the defining feature of a goal statement in the care plan. Nursing diagnosis (A) is incorrect because a nursing diagnosis identifies the patient's actual or potential health problem, not the desired outcome. Intervention (B) is incorrect because an intervention would describe a specific nursing action taken to help achieve the goal, such as teaching walker use, rather than the outcome statement itself. Rationale (D) is incorrect because a rationale explains the scientific reasoning behind a chosen intervention, not the expected patient outcome."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q99",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "If a client has not completed the care plan but the goal is still relevant, the nurse will",
        "options": {
          "A": "Create a new care plan",
          "B": "Adjust the diagnosis to fit the outcome",
          "C": "Reassess in 24 hours",
          "D": "Initiate new interventions"
        },
        "correctAnswer": "C",
        "explanation": "Reassess in 24 hours (C) is correct because, if the goal remains appropriate and relevant, the nurse continues with the existing plan and simply schedules a further reassessment to monitor progress, rather than discarding a still-valid plan. Create a new care plan (A) is incorrect because starting over is unnecessary when the current goal is still appropriate; only the timeline for achieving it needs reassessment. Adjust the diagnosis to fit the outcome (B) is incorrect because altering the diagnosis simply to match a desired outcome is not sound clinical reasoning and reverses the proper diagnostic process. Initiate new interventions (D) is incorrect because changing interventions is only warranted if the current ones are found to be ineffective, which reassessment (not immediate replacement) would first need to establish."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q100",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 5,
        "text": "A walk-in client enters the clinic with complaints of abdominal pains and diarrhea. Which phase of nursing process is being implemented?",
        "options": {
          "A": "Assessment",
          "B": "Planning",
          "C": "Intervention",
          "D": "Implementation"
        },
        "correctAnswer": "A",
        "explanation": "Assessment (A) is correct because gathering the client's initial complaints and history, right at the point of first contact, is the data-collection step that defines the assessment phase of the nursing process. Planning (B) is incorrect because planning happens later, after a nursing diagnosis has been formed from the assessment data. Intervention (C) is incorrect because carrying out actions comes after data has been gathered and a plan formed, not at the initial complaint stage. Implementation (D) is incorrect for the same reason, describing the phase where planned care is actually delivered, which has not yet occurred at this initial point of contact."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q101",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "When implementing a nursing care plan, the nurse's primary consideration is?",
        "options": {
          "A": "Completing the care plan as quickly as possible",
          "B": "Following the physician's orders",
          "C": "Adhering to evidenced-based practice",
          "D": "Using personal judgment"
        },
        "correctAnswer": "C",
        "explanation": "Adhering to evidenced-based practice (C) is correct because nursing interventions during implementation should be grounded in the best available evidence to ensure safe, effective care. Completing the care plan as quickly as possible (A) is incorrect because speed is not the guiding principle; quality and safety of care take priority over completing tasks quickly. Following the physician's orders (B) is incorrect because, while physician orders are important for medical treatments, nursing implementation is guided more broadly by evidence-based standards of nursing practice, not physician orders alone. Using personal judgment (D) is incorrect because purely personal judgment, untethered from evidence and standards, is not the primary basis for safe nursing implementation."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q102",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The following is a criterion used to evaluate the effectiveness of a nursing intervention",
        "options": {
          "A": "Cost-effectiveness",
          "B": "Ease of implementation",
          "C": "Patient satisfaction",
          "D": "Nurse's comfort level"
        },
        "correctAnswer": "C",
        "explanation": "Patient satisfaction (C) is correct because evaluating whether the patient's needs were met and whether they experienced the expected benefit is central to judging an intervention's effectiveness. Cost-effectiveness (A) is incorrect because, while a relevant administrative consideration, it does not directly measure whether the intervention achieved its intended clinical outcome for the patient. Ease of implementation (B) is incorrect because how simple an intervention is to carry out says nothing about whether it actually helped the patient. Nurse's comfort level (D) is incorrect because the nurse's personal comfort with performing the intervention is unrelated to whether the intervention was clinically effective for the patient."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q103",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The primary purpose of a nursing diagnosis is?",
        "options": {
          "A": "To prescribe medications for the patient",
          "B": "To determine the patient's medical condition",
          "C": "To plan nursing interventions for the patient",
          "D": "To communicate patient's need to other members of the healthcare team"
        },
        "correctAnswer": "C",
        "explanation": "To plan nursing interventions for the patient (C) is correct because a nursing diagnosis identifies the patient's actual or potential problem specifically so that appropriate, targeted nursing interventions can then be planned to address it. To prescribe medications for the patient (A) is incorrect because prescribing medication is outside the scope and purpose of a nursing diagnosis, which is a nursing, not prescribing, function. To determine the patient's medical condition (B) is incorrect because diagnosing the underlying medical condition/disease is the physician's role, whereas a nursing diagnosis addresses the patient's response to that condition. To communicate patient's need to other members of the healthcare team (D) is incorrect as the primary purpose because, while nursing diagnoses do aid communication, their central purpose is guiding the nurse's own plan of care."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q104",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The following is an example of objective data",
        "options": {
          "A": "Nurse's interpretation of the patient's body language",
          "B": "Patient's report of feeling anxious",
          "C": "Description of pain as sharp and stabbing by the client",
          "D": "Observation of patient's elevated heart rate by the nurse"
        },
        "correctAnswer": "D",
        "explanation": "Observation of patient's elevated heart rate by the nurse (D) is correct because this is a measurable, observable finding obtained directly by the nurse, which is the defining feature of objective data. Nurse's interpretation of the patient's body language (A) is incorrect because an interpretation involves subjective judgment on the nurse's part rather than a directly measurable fact. Patient's report of feeling anxious (B) is incorrect because this is the patient's own subjective experience, a classic example of subjective data. Description of pain as sharp and stabbing by the client (C) is incorrect for the same reason, being the patient's personal description of their own sensation, which is subjective by definition."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q105",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The major cause of malnutrition in Crohn's disease is",
        "options": {
          "A": "Intentional withholding of food because of poor appetite",
          "B": "Malabsorption of food nutrients",
          "C": "Intentional withholding of food to avoid postprandial cramping",
          "D": "High metabolic demands in the patient"
        },
        "correctAnswer": "B",
        "explanation": "Malabsorption of food nutrients (B) is correct because the chronic inflammation and damage to the intestinal mucosa in Crohn's disease impairs the gut's ability to absorb nutrients, making malabsorption the major underlying cause of malnutrition. Intentional withholding of food because of poor appetite (A) is incorrect because, while reduced appetite can contribute, it is not the major underlying physiological cause of malnutrition in this disease. Intentional withholding of food to avoid postprandial cramping (C) is incorrect for a similar reason, being a behavioural contributing factor rather than the primary underlying cause. High metabolic demands in the patient (D) is incorrect because, although inflammation can raise metabolic demand somewhat, malabsorption from damaged intestinal mucosa is the more major and direct contributor to malnutrition in Crohn's disease."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q106",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "A patient is experiencing acute gastritis after ingesting an acidic substance. The best management intervention is",
        "options": {
          "A": "Perform gastric lavage",
          "B": "Provide supportive care and antacid therapy",
          "C": "Induce vomiting using ipecac",
          "D": "Administer motility agents to improve gastric emptying"
        },
        "correctAnswer": "B",
        "explanation": "Provide supportive care and antacid therapy (B) is correct because, after a corrosive/acidic ingestion, treatment focuses on neutralising remaining acid, protecting the mucosa, and supporting the patient, since aggressive mechanical interventions can worsen tissue damage. Perform gastric lavage (A) is incorrect because lavage after a corrosive ingestion risks re-exposing the oesophagus to the acidic substance and can cause further injury or perforation. Induce vomiting using ipecac (C) is incorrect for the same reason, since inducing vomiting after a caustic/acidic ingestion is contraindicated due to the risk of further oesophageal and airway damage. Administer motility agents to improve gastric emptying (D) is incorrect because promoting movement of a caustic substance through an already irritated or damaged GI tract is not the priority safe management approach."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q107",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The following procedure is an intervention for gastroesophageal reflux disease",
        "options": {
          "A": "Fundoplication",
          "B": "Manometry",
          "C": "Pneumatic dilation",
          "D": "Esophageogastroduodenoscopy"
        },
        "correctAnswer": "A",
        "explanation": "Fundoplication (A) is correct because this surgical procedure, wrapping the top of the stomach around the lower oesophagus, is a recognised therapeutic intervention for controlling severe or refractory gastroesophageal reflux disease. Manometry (B) is incorrect because this is a diagnostic test measuring oesophageal pressures, not a treatment. Pneumatic dilation (C) is incorrect because this procedure is specifically used to treat achalasia by widening a tightened lower oesophageal sphincter, not to manage reflux. Esophageogastroduodenoscopy (D) is incorrect because this is a diagnostic endoscopic procedure used to visualise the upper GI tract, not a treatment intervention for GERD."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q108",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The following diagnostic test is used to determine tracheal involvement in esophageal cancer",
        "options": {
          "A": "Barium swallow",
          "B": "Oesophageoscopy",
          "C": "Bronchoscopy",
          "D": "Chest x-ray"
        },
        "correctAnswer": "C",
        "explanation": "Bronchoscopy (C) is correct because directly visualising the trachea and bronchial tree with a bronchoscope is the specific way to assess whether an oesophageal tumour has invaded these adjacent airway structures. Barium swallow (A) is incorrect because this test outlines the oesophageal lumen itself rather than directly assessing tracheal invasion. Oesophageoscopy (B) is incorrect because this visualises the oesophagus directly, not the trachea, so it cannot directly confirm tracheal involvement. Chest x-ray (D) is incorrect because this provides only a general overview image and cannot directly assess for tracheal wall invasion by tumour in the way bronchoscopy can."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q109",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The following diagnostic procedure is contraindicated in complete intestinal obstruction",
        "options": {
          "A": "Barium meal",
          "B": "X-ray",
          "C": "Duodenoscopy",
          "D": "Rectosigmoidoscopy"
        },
        "correctAnswer": "A",
        "explanation": "Barium meal (A) is correct because instilling barium contrast in the setting of complete bowel obstruction risks worsening the blockage or causing perforation, since the thick contrast material cannot pass through the obstructed segment, making it contraindicated. X-ray (B) is incorrect because a plain abdominal x-ray is actually a safe, commonly used first-line imaging tool to help identify signs of obstruction without introducing contrast material. Duodenoscopy (C) is incorrect because direct endoscopic visualisation does not carry the same obstruction-worsening risk as instilling contrast material proximal to a complete blockage. Rectosigmoidoscopy (D) is incorrect for a similar reason, being a direct visualisation procedure rather than one that risks worsening a proximal obstruction with retained contrast material."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q110",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "A patient with duodenal ulcers is likely to experience the following",
        "options": {
          "A": "Acute epigastric pain immediately after taking food",
          "B": "Relief of pain by drinking water",
          "C": "Gnawing epigastric pain late in the night",
          "D": "Stabbing pain in the right lower quadrant"
        },
        "correctAnswer": "C",
        "explanation": "Gnawing epigastric pain late in the night (C) is correct because duodenal ulcer pain classically occurs when the stomach is empty, such as several hours after meals and at night, and is a hallmark distinguishing feature from gastric ulcer pain. Acute epigastric pain immediately after taking food (A) is incorrect because pain that worsens immediately after eating is more typical of gastric ulcers, not duodenal ulcers, which are usually relieved rather than worsened by food. Relief of pain by drinking water (B) is incorrect because it is eating food, not specifically drinking water, that classically relieves duodenal ulcer pain. Stabbing pain in the right lower quadrant (D) is incorrect because this location and quality of pain is more suggestive of appendicitis, not a duodenal ulcer, which produces epigastric pain."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q111",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "Prehepatic causes of jaundice include the following",
        "options": {
          "A": "Prematurity, blood transfusion reaction",
          "B": "Tumor lysis syndrome, hemolytic anemia",
          "C": "Cholelithiasis, liver cirrhosis",
          "D": "Transfusion reaction, cholelithiasis"
        },
        "correctAnswer": "B",
        "explanation": "Tumor lysis syndrome, hemolytic anemia (B) is correct because both conditions cause excessive breakdown of cells (tumour cells or red blood cells) before bilirubin ever reaches the liver, overwhelming its conjugating capacity, which is the defining mechanism of prehepatic jaundice. Prematurity, blood transfusion reaction (A) is incorrect because, while transfusion reaction causing haemolysis is prehepatic, physiological jaundice of prematurity relates more to immature hepatic conjugating enzymes, a hepatic rather than purely prehepatic mechanism. Cholelithiasis, liver cirrhosis (C) is incorrect because gallstones cause posthepatic (obstructive) jaundice and cirrhosis causes hepatic jaundice, neither of which is prehepatic. Transfusion reaction, cholelithiasis (D) is incorrect because it mixes one genuinely prehepatic cause (transfusion reaction) with a posthepatic cause (cholelithiasis), making it an inconsistent pairing for this category."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q112",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The most common cause of liver abscess is",
        "options": {
          "A": "Escherichia Coli",
          "B": "Entamoeba Histolytica",
          "C": "Clostridium difficile",
          "D": "Enterococcus"
        },
        "correctAnswer": "B",
        "explanation": "Entamoeba Histolytica (B) is correct because amoebic liver abscess, caused by this parasite, is the most common type of liver abscess seen in many tropical and developing-region settings. Escherichia Coli (A) is incorrect because, while it is a leading cause of pyogenic (bacterial) liver abscess particularly in higher-resource settings, amoebic abscess from E. histolytica is more prevalent overall in the regions and context this exam is drawn from. Clostridium difficile (C) is incorrect because this organism is classically associated with antibiotic-associated colitis, not liver abscess formation. Enterococcus (D) is incorrect because, although it can occasionally be implicated in pyogenic abscesses, it is not the most common overall cause of liver abscess."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q113",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "Select a true statement regarding portal hypertension",
        "options": {
          "A": "It is caused by increased blood supply to the liver secondary to hepatomegaly",
          "B": "The most common complication of portal hypertension is liver dysfunction",
          "C": "Ascites can result from portal hypertension",
          "D": "Resistance to blood flow through the liver is diminished during portal hypertension"
        },
        "correctAnswer": "C",
        "explanation": "Ascites can result from portal hypertension (C) is correct because increased pressure in the portal venous system drives fluid into the peritoneal cavity, making ascites a classic and well-recognised complication. It is caused by increased blood supply to the liver secondary to hepatomegaly (A) is incorrect because portal hypertension results from increased resistance to blood flow through the liver, not from increased inflow due to hepatomegaly. The most common complication of portal hypertension is liver dysfunction (B) is incorrect because liver dysfunction is generally the underlying cause rather than a downstream complication, and the more classically cited complications of portal hypertension itself are varices, ascites, and splenomegaly. Resistance to blood flow through the liver is diminished during portal hypertension (D) is incorrect because portal hypertension is specifically defined by increased, not diminished, resistance to hepatic blood flow."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q114",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "A patient with chronic alcohol abuse is admitted with liver failure. You closely monitor the patient's blood pressure because of which change that is associated with the liver failure?",
        "options": {
          "A": "Hypoalbuminemia",
          "B": "Increased capillary permeability",
          "C": "Abnormal peripheral vasodilation",
          "D": "Excess rennin release from the kidneys"
        },
        "correctAnswer": "C",
        "explanation": "Abnormal peripheral vasodilation (C) is correct because advanced liver failure triggers widespread splanchnic and peripheral vasodilation through vasoactive mediators, producing a hyperdynamic circulation that can cause significant blood pressure instability requiring close monitoring. Hypoalbuminemia (A) is incorrect because, while it contributes to reduced oncotic pressure and oedema, it is not the direct haemodynamic mechanism most responsible for the blood pressure changes seen in liver failure. Increased capillary permeability (B) is incorrect because this contributes more to localized fluid shifts and oedema rather than being the primary driver of the systemic blood pressure changes. Excess rennin release from the kidneys (D) is incorrect because, although the renin-angiotensin system does become activated as a compensatory response to the vasodilation, it is a secondary response rather than the primary change directly associated with liver failure driving the blood pressure concern."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q115",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "Select a true statement regarding acute pancreatitis",
        "options": {
          "A": "The disease can be mild and self-limiting",
          "B": "The clinical manifestations are limited to malfunctioning digestive system only",
          "C": "Acute form of the disease is not characterized by autodigestion of the pancreas",
          "D": "The most common cause of the disease is a bacterial infection"
        },
        "correctAnswer": "A",
        "explanation": "The disease can be mild and self-limiting (A) is correct because acute pancreatitis exists on a spectrum, ranging from mild, self-resolving oedematous pancreatitis to severe, life-threatening necrotising disease. The clinical manifestations are limited to malfunctioning digestive system only (B) is incorrect because severe acute pancreatitis can cause systemic effects and multi-organ involvement well beyond the digestive system. Acute form of the disease is not characterized by autodigestion of the pancreas (C) is incorrect because autodigestion by prematurely activated pancreatic enzymes is actually the central hallmark mechanism of acute pancreatitis. The most common cause of the disease is a bacterial infection (D) is incorrect because gallstones and alcohol use are the most common causes of acute pancreatitis, not bacterial infection."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q116",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "Pain resulting from acute pancreatitis is typically felt in which region of the abdomen",
        "options": {
          "A": "The epigastric region",
          "B": "The right upper quadrant",
          "C": "The left upper quadrant",
          "D": "Diffuse pain in all quadrants"
        },
        "correctAnswer": "A",
        "explanation": "The epigastric region (A) is correct because acute pancreatitis classically produces steady, boring epigastric pain that often radiates through to the back. The right upper quadrant (B) is incorrect because this location is more typical of biliary tract disease, such as cholecystitis. The left upper quadrant (C) is incorrect because, while the pancreatic tail extends toward this area, the classic and most consistently taught pain location is epigastric rather than left upper quadrant specifically. Diffuse pain in all quadrants (D) is incorrect because acute pancreatitis pain is typically localised to the epigastrium rather than being diffusely spread across the entire abdomen."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q117",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "The following statement regarding ulcerative colitis is true",
        "options": {
          "A": "The disease typically affects the proximal colon then spreads towards the rectum",
          "B": "The inflammation is typically transmural",
          "C": "The affected colon is characterized by a cobblestone appearance",
          "D": "It is characterized by abscesses infiltrating the submucosal layers of the colon"
        },
        "correctAnswer": "D",
        "explanation": "It is characterized by abscesses infiltrating the submucosal layers of the colon (D) is correct because crypt abscesses extending into the mucosal and submucosal layers are a recognised hallmark histological finding in ulcerative colitis. The disease typically affects the proximal colon then spreads towards the rectum (A) is incorrect because ulcerative colitis characteristically begins in the rectum and spreads proximally in a continuous fashion, the reverse of what this option states. The inflammation is typically transmural (B) is incorrect because transmural (full-thickness) inflammation is characteristic of Crohn's disease, whereas ulcerative colitis inflammation is limited to the mucosa and submucosa. The affected colon is characterized by a cobblestone appearance (C) is incorrect because the cobblestone appearance, caused by patchy deep ulceration and oedema, is a hallmark of Crohn's disease, not ulcerative colitis."
      },
      {
        "id": "eoy1-comprehensive-medsurg-2023-3_q118",
        "paperId": "eoy1-comprehensive-medsurg-2023-3",
        "setNumber": 6,
        "text": "Select the most appropriate nursing action for suspected appendicitis in the emergency department",
        "options": {
          "A": "Administer a purgative",
          "B": "Administer a strong opioid",
          "C": "Begin an aggressive fluid therapy",
          "D": "Administer a mild analgesic and a broad spectrum antibiotic"
        },
        "correctAnswer": "C",
        "explanation": "Begin an aggressive fluid therapy (C) is correct because supporting hydration status with intravenous fluids while keeping the patient NPO and awaiting surgical evaluation is a safe, appropriate supportive nursing action for suspected appendicitis. Administer a purgative (A) is incorrect because laxatives or purgatives are classically contraindicated in suspected appendicitis, since increased bowel motility can raise the risk of perforation of an inflamed appendix. Administer a strong opioid (B) is incorrect because heavily sedating pain medication given before a definitive diagnosis is established can mask the clinical picture and complicate the diagnostic physical examination. Administer a mild analgesic and a broad spectrum antibiotic (D) is incorrect as the single best initial nursing action because antibiotics are a medical/surgical team decision made once the diagnosis is confirmed, whereas fluid support is the appropriate general nursing action while the patient is being worked up."
      }
    ]
  }
];

/**
 * Finds a past paper by exact ID, title, or fuzzy match. Defaults to the first paper if not found.
 *
 * @param paperId - ID or search token for the paper
 */
export function findPaper(paperId?: string): PastPaper | undefined {
  if (!paperId) return PAST_PAPERS[0];
  return PAST_PAPERS.find(p => p.id === paperId) || PAST_PAPERS.find(p => p.title === paperId) || PAST_PAPERS.find(p => p.id.includes(paperId)) || PAST_PAPERS[0];
}

/**
 * Retrieves the specific 20-question slice corresponding to a revision set ID.
 *
 * @param paperId - ID of the past paper
 * @param setId - Revision set string (e.g. "set1", "set2")
 */
export function getQuestionsForSet(paperId: string, setId: string): Question[] {
  const paper = findPaper(paperId);
  if (!paper) return [];
  const num = parseInt(setId.replace('set', ''), 10) || 1;
  const start = (num - 1) * 20;
  return paper.questions.slice(start, start + 20);
}

/**
 * Calculates and returns the list of set keys (e.g. ['set1', 'set2', ...]) for a given paper.
 *
 * @param paperId - ID of the past paper
 */
export function getRevisionSetsForPaper(paperId: string): string[] {
  const paper = findPaper(paperId);
  if (!paper) return [];
  const count = Math.ceil(paper.questions.length / 20);
  return Array.from({ length: count }, (_, i) => `set${i + 1}`);
}
