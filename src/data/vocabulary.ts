import { Level, Badge } from '../types';

export const LEVELS: Level[] = [
  {
    id: 1,
    titleMl: 'ദിനചര്യയും പ്രാഥമിക പദങ്ങളും',
    titleEn: 'Daily Routine & Essentials',
    descriptionMl: 'ദിവസേന ഉപയോഗിക്കുന്ന ഏറ്റവും ലളിതമായ 10 വാക്കുകൾ',
    iconName: 'Sun',
    words: [
      {
        id: 'w1_1',
        english: 'Always',
        malayalam: 'എപ്പോഴും',
        phoneticMalayalam: 'ഓൾവെയ്സ്',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'I always wake up early.',
        exampleSentenceMl: 'ഞാൻ എപ്പോഴും നേരത്തെ ഉണരാറുണ്ട്.'
      },
      {
        id: 'w1_2',
        english: 'Morning',
        malayalam: 'പ്രഭാതം / രാവിലത്തെ സമയം',
        phoneticMalayalam: 'മോർണിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Morning walk is good for health.',
        exampleSentenceMl: 'രാവിലെയുള്ള നടത്തം ആരോഗ്യത്തിന് നല്ലതാണ്.'
      },
      {
        id: 'w1_3',
        english: 'Water',
        malayalam: 'വെള്ളം',
        phoneticMalayalam: 'വാട്ടർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Drink plenty of water every day.',
        exampleSentenceMl: 'എല്ലാ ദിവസവും ധാരാളം വെള്ളം കുടിക്കുക.'
      },
      {
        id: 'w1_4',
        english: 'Help',
        malayalam: 'സഹായം / സഹായിക്കുക',
        phoneticMalayalam: 'ഹെൽപ്പ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Can you help me with this?',
        exampleSentenceMl: 'ഇതിൽ എന്നെ സഹായിക്കാമോ?'
      },
      {
        id: 'w1_5',
        english: 'Happy',
        malayalam: 'സന്തോഷമുള്ള',
        phoneticMalayalam: 'ഹാപ്പി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'She is very happy today.',
        exampleSentenceMl: 'അവൾ ഇന്ന് വളരെ സന്തോഷവതിയാണ്.'
      },
      {
        id: 'w1_6',
        english: 'Friend',
        malayalam: 'സുഹൃത്ത് / കൂട്ടുകാരൻ',
        phoneticMalayalam: 'ഫ്രെണ്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He is my best friend.',
        exampleSentenceMl: 'അവൻ എൻ്റെ ഉറ്റ സുഹൃത്താണ്.'
      },
      {
        id: 'w1_7',
        english: 'Today',
        malayalam: 'ഇന്ന്',
        phoneticMalayalam: 'ടുഡേ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Today is a wonderful day.',
        exampleSentenceMl: 'ഇന്ന് നല്ലൊരു ദിവസമാണ്.'
      },
      {
        id: 'w1_8',
        english: 'Speak',
        malayalam: 'സംസാരിക്കുക',
        phoneticMalayalam: 'സ്പീക്ക്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Try to speak in English daily.',
        exampleSentenceMl: 'ദിവസവും ഇംഗ്ലീഷിൽ സംസാരിക്കാൻ ശ്രമിക്കുക.'
      },
      {
        id: 'w1_9',
        english: 'Learn',
        malayalam: 'പഠിക്കുക',
        phoneticMalayalam: 'ലെയ്ൻ / ലേൺ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'I want to learn English quickly.',
        exampleSentenceMl: 'എനിക്ക് വേഗത്തിൽ ഇംഗ്ലീഷ് പഠിക്കണം.'
      },
      {
        id: 'w1_10',
        english: 'Ready',
        malayalam: 'തയ്യാറായ / ഒരുങ്ങിയ',
        phoneticMalayalam: 'റെഡി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Are you ready to go?',
        exampleSentenceMl: 'നിങ്ങൾ പോകാൻ തയ്യാറാണോ?'
      }
    ]
  },
  {
    id: 2,
    titleMl: 'കുടുംബവും വ്യക്തിബന്ധങ്ങളും',
    titleEn: 'Family & Relationships',
    descriptionMl: 'കുടുംബാംഗങ്ങളെയും ബന്ധങ്ങളെയും കുറിച്ചുള്ള 10 വാക്കുകൾ',
    iconName: 'Users',
    words: [
      {
        id: 'w2_1',
        english: 'Parents',
        malayalam: 'മാതാപിതാക്കൾ',
        phoneticMalayalam: 'പേരന്റ്സ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Respect your parents.',
        exampleSentenceMl: 'നിങ്ങളുടെ മാതാപിതാക്കളെ ബഹുമാനിക്കുക.'
      },
      {
        id: 'w2_2',
        english: 'Sibling',
        malayalam: 'സഹോദരൻ / സഹോദരി',
        phoneticMalayalam: 'സിബ്ലിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Do you have any siblings?',
        exampleSentenceMl: 'നിങ്ങൾക്ക് സഹോദരങ്ങളുണ്ടോ?'
      },
      {
        id: 'w2_3',
        english: 'Together',
        malayalam: 'ഒരുമിച്ച് / ഒന്നിച്ച്',
        phoneticMalayalam: 'ടുഗെദർ',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'We celebrated dinner together.',
        exampleSentenceMl: 'ഞങ്ങൾ ഒരുമിച്ച് അത്താഴം കഴിച്ചു.'
      },
      {
        id: 'w2_4',
        english: 'Kind',
        malayalam: 'ദയയുള്ള / കൃപയുള്ള',
        phoneticMalayalam: 'കൈൻഡ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Always be kind to others.',
        exampleSentenceMl: 'എപ്പോഴും മറ്റുള്ളവരോട് ദയ കാണിക്കുക.'
      },
      {
        id: 'w2_5',
        english: 'Care',
        malayalam: 'ശ്രദ്ധ / കരുതൽ',
        phoneticMalayalam: 'കെയർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Take care of your health.',
        exampleSentenceMl: 'നിങ്ങളുടെ ആരോഗ്യം ശ്രദ്ധിക്കുക.'
      },
      {
        id: 'w2_6',
        english: 'Relative',
        malayalam: 'ബന്ധു',
        phoneticMalayalam: 'റിലേറ്റീവ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Many relatives came for the wedding.',
        exampleSentenceMl: 'കല്യാണത്തിന് ഒരുപാട് ബന്ധുക്കൾ വന്നു.'
      },
      {
        id: 'w2_7',
        english: 'Love',
        malayalam: 'സ്നേഹം / ഇഷ്ടം',
        phoneticMalayalam: 'ലൗ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Family is bound by love.',
        exampleSentenceMl: 'കുടുംബം സ്നേഹത്താൽ ബന്ധിക്കപ്പെട്ടിരിക്കുന്നു.'
      },
      {
        id: 'w2_8',
        english: 'Neighbor',
        malayalam: 'അയൽവാസി',
        phoneticMalayalam: 'നെയ്ബർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Our neighbors are very helpful.',
        exampleSentenceMl: 'ഞങ്ങളുടെ അയൽവാസികൾ നല്ല സഹായമനസ്കരാണ്.'
      },
      {
        id: 'w2_9',
        english: 'Protect',
        malayalam: 'സംരക്ഷിക്കുക',
        phoneticMalayalam: 'പ്രൊട്ടക്റ്റ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Elders protect the family.',
        exampleSentenceMl: 'മുതിർന്നവർ കുടുംബത്തെ സംരക്ഷിക്കുന്നു.'
      },
      {
        id: 'w2_10',
        english: 'Respect',
        malayalam: 'ബഹുമാനം / ആദരവ്',
        phoneticMalayalam: 'റെസ്പെക്റ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Give respect and take respect.',
        exampleSentenceMl: 'ബഹുമാനം കൊടുക്കുക, ബഹുമാനം വാങ്ങുക.'
      }
    ]
  },
  {
    id: 3,
    titleMl: 'ഭക്ഷണവും രുചികളും',
    titleEn: 'Food & Dining',
    descriptionMl: 'ഭക്ഷണം, രുചികൾ, റസ്റ്റോറൻ്റ് എന്നിവയുമായി ബന്ധപ്പെട്ട 10 വാക്കുകൾ',
    iconName: 'Utensils',
    words: [
      {
        id: 'w3_1',
        english: 'Delicious',
        malayalam: 'രുചികരമായ',
        phoneticMalayalam: 'ഡെലീഷ്യസ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'The Kerala sadya was delicious.',
        exampleSentenceMl: 'കേരള സദ്യ വളരെ രുചികരമായിരുന്നു.'
      },
      {
        id: 'w3_2',
        english: 'Hungry',
        malayalam: 'വിശപ്പുള്ള',
        phoneticMalayalam: 'ഹംഗ്രി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'I feel very hungry now.',
        exampleSentenceMl: 'എനിക്ക് ഇപ്പോൾ നല്ല വിശപ്പുണ്ട്.'
      },
      {
        id: 'w3_3',
        english: 'Thirsty',
        malayalam: 'ദാഹമുള്ള',
        phoneticMalayalam: 'തേഴ്സ്റ്റി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Give me some water, I am thirsty.',
        exampleSentenceMl: 'എനിക്ക് കുറച്ചു വെള്ളം തരൂ, എനിക്ക് ദാഹിക്കുന്നു.'
      },
      {
        id: 'w3_4',
        english: 'Cook',
        malayalam: 'പാചകം ചെയ്യുക',
        phoneticMalayalam: 'കുക്ക്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'My mother cooks traditional food.',
        exampleSentenceMl: 'എൻ്റെ അമ്മ നാടൻ ഭക്ഷണം പാകം ചെയ്യുന്നു.'
      },
      {
        id: 'w3_5',
        english: 'Spicy',
        malayalam: 'എരിവുള്ള',
        phoneticMalayalam: 'സ്പൈസി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Kerala fish curry is spicy and tasty.',
        exampleSentenceMl: 'കേരള മീൻ കറി എരിവും രുചിയുമുള്ളതാണ്.'
      },
      {
        id: 'w3_6',
        english: 'Sweet',
        malayalam: 'മധുരമുള്ള',
        phoneticMalayalam: 'സ്വീറ്റ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Payasam is a sweet dessert.',
        exampleSentenceMl: 'പായസം മധുരമുള്ള ഒരു വിഭവമാണ്.'
      },
      {
        id: 'w3_7',
        english: 'Breakfast',
        malayalam: 'പ്രഭാതഭക്ഷണം',
        phoneticMalayalam: 'ബ്രേക്ക്ഫാസ്റ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Never skip your breakfast.',
        exampleSentenceMl: 'ഒരിക്കലും പ്രഭാതഭക്ഷണം ഒഴിവാക്കരുത്.'
      },
      {
        id: 'w3_8',
        english: 'Bitter',
        malayalam: 'കയ്പ്പുള്ള',
        phoneticMalayalam: 'ബിറ്റർ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Bitter gourd has a bitter taste.',
        exampleSentenceMl: 'പാവയ്ക്കയ്ക്ക് കയ്പ്പ് രുചിയാണുള്ളത്.'
      },
      {
        id: 'w3_9',
        english: 'Fresh',
        malayalam: 'പച്ചയായ / പുതുമയുള്ള',
        phoneticMalayalam: 'ഫ്രെഷ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Buy fresh vegetables from the market.',
        exampleSentenceMl: 'ചന്തയിൽ നിന്ന് പുതുമയുള്ള പച്ചക്കറികൾ വാങ്ങുക.'
      },
      {
        id: 'w3_10',
        english: 'Order',
        malayalam: 'ഓർഡർ ചെയ്യുക / ആവശ്യപ്പെടുക',
        phoneticMalayalam: 'ഓർഡർ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Let us order tea and snacks.',
        exampleSentenceMl: 'നമുക്ക് ചായയും പലഹാരവും ഓർഡർ ചെയ്യാം.'
      }
    ]
  },
  {
    id: 4,
    titleMl: 'യാത്രയും വഴികളും',
    titleEn: 'Travel & Directions',
    descriptionMl: 'യാത്രകൾക്കും വഴികൾ ചോദിക്കുന്നതിനും ആവശ്യമായ 10 വാക്കുകൾ',
    iconName: 'Compass',
    words: [
      {
        id: 'w4_1',
        english: 'Destination',
        malayalam: 'എത്തിച്ചേരേണ്ട സ്ഥലം',
        phoneticMalayalam: 'ഡെസ്റ്റിനേഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We reached our destination safely.',
        exampleSentenceMl: 'ഞങ്ങൾ സുരക്ഷിതമായി എത്തിച്ചേരേണ്ട സ്ഥലത്ത് എത്തി.'
      },
      {
        id: 'w4_2',
        english: 'Ticket',
        malayalam: 'ടിക്കറ്റ് / യാത്രാരേഖ',
        phoneticMalayalam: 'ടിക്കറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Please show your train ticket.',
        exampleSentenceMl: 'ദയവായി നിങ്ങളുടെ ട്രെയിൻ ടിക്കറ്റ് കാണിക്കുക.'
      },
      {
        id: 'w4_3',
        english: 'Nearby',
        malayalam: 'തൊട്ടടുത്ത് / സമീപത്തുള്ള',
        phoneticMalayalam: 'നിയർബൈ',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Is there any hospital nearby?',
        exampleSentenceMl: 'അടുത്തവിടെയെങ്കിലും ആശുപത്രി ഉണ്ടോ?'
      },
      {
        id: 'w4_4',
        english: 'Straight',
        malayalam: 'നേരെ / വളവില്ലാതെ',
        phoneticMalayalam: 'സ്ട്രെയിറ്റ്',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Go straight and turn left.',
        exampleSentenceMl: 'നേരെ പോയി ഇടത്തോട്ട് തിരിയുക.'
      },
      {
        id: 'w4_5',
        english: 'Journey',
        malayalam: 'യാത്ര',
        phoneticMalayalam: 'ജേർണി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Have a safe journey!',
        exampleSentenceMl: 'ശുഭയാത്ര ആശംസിക്കുന്നു!'
      },
      {
        id: 'w4_6',
        english: 'Distance',
        malayalam: 'ദൂരം',
        phoneticMalayalam: 'ഡിസ്റ്റൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'What is the distance to Kochi?',
        exampleSentenceMl: 'കൊച്ചിയിലേക്കുള്ള ദൂരം എത്രയാണ്?'
      },
      {
        id: 'w4_7',
        english: 'Arrive',
        malayalam: 'എത്തിച്ചേരുക',
        phoneticMalayalam: 'അറൈവ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'The bus will arrive at 5 PM.',
        exampleSentenceMl: 'വൈകുന്നേരം 5 മണിക്ക് ബസ് എത്തും.'
      },
      {
        id: 'w4_8',
        english: 'Depart',
        malayalam: 'പുറപ്പെടുക',
        phoneticMalayalam: 'ഡിപ്പാർട്ട്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Flight will depart on time.',
        exampleSentenceMl: 'വിമാനം കൃത്യസമയത്ത് പുറപ്പെടും.'
      },
      {
        id: 'w4_9',
        english: 'Guide',
        malayalam: 'വഴികാട്ടി / മാർഗ്ഗദർശി',
        phoneticMalayalam: 'ഗൈഡ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The guide explained the history.',
        exampleSentenceMl: 'ഗൈഡ് ചരിത്രം വിശദീകരിച്ചു തന്നു.'
      },
      {
        id: 'w4_10',
        english: 'Vehicle',
        malayalam: 'വാഹനം',
        phoneticMalayalam: 'വെഹിക്കിൾ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Park your vehicle outside.',
        exampleSentenceMl: 'നിങ്ങളുടെ വാഹനം പുറത്ത് പാർക്ക് ചെയ്യുക.'
      }
    ]
  },
  {
    id: 5,
    titleMl: 'ഓഫീസും ജോലിയും',
    titleEn: 'Work & Professional Office',
    descriptionMl: 'ഓഫീസ് സംഭാഷണങ്ങളിലും കരിയറിലും സ്ഥിരമായി കേൾക്കുന്ന 10 വാക്കുകൾ',
    iconName: 'Briefcase',
    words: [
      {
        id: 'w5_1',
        english: 'Colleague',
        malayalam: 'സഹപ്രവർത്തകൻ',
        phoneticMalayalam: 'കൊളീഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He is a cooperative colleague.',
        exampleSentenceMl: 'അവൻ നല്ല സഹകരണമുള്ള ഒരു സഹപ്രവർത്തകനാണ്.'
      },
      {
        id: 'w5_2',
        english: 'Deadline',
        malayalam: 'അവസാന തീയതി / സമയം',
        phoneticMalayalam: 'ഡെഡ്‌ലൈൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Submit the report before deadline.',
        exampleSentenceMl: 'അവസാന സമയത്തിന് മുൻപ് റിപ്പോർട്ട് സമർപ്പിക്കുക.'
      },
      {
        id: 'w5_3',
        english: 'Meeting',
        malayalam: 'യോഗം / കൂടിക്കാഴ്ച',
        phoneticMalayalam: 'മീറ്റിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We have an important meeting at 10 AM.',
        exampleSentenceMl: 'രാവിലെ 10 മണിക്ക് ഞങ്ങൾക്ക് ഒരു പ്രധാനപ്പെട്ട യോഗമുണ്ട്.'
      },
      {
        id: 'w5_4',
        english: 'Salary',
        malayalam: 'ശമ്പളം',
        phoneticMalayalam: 'സാലറി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Salary was credited on Friday.',
        exampleSentenceMl: 'വെള്ളിയാഴ്ച ശമ്പളം അക്കൗണ്ടിൽ വന്നു.'
      },
      {
        id: 'w5_5',
        english: 'Task',
        malayalam: 'ചെയ്യേണ്ട ജോലി / ചുമതല',
        phoneticMalayalam: 'ടാസ്ക്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Complete this task today itself.',
        exampleSentenceMl: 'ഈ ചുമതല ഇന്ന് തന്നെ പൂർത്തിയാക്കുക.'
      },
      {
        id: 'w5_6',
        english: 'Permission',
        malayalam: 'അനുവാദം',
        phoneticMalayalam: 'പെർമിഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Ask permission before leaving.',
        exampleSentenceMl: 'പോരുന്നതിന് മുൻപ് അനുവാദം ചോദിക്കുക.'
      },
      {
        id: 'w5_7',
        english: 'Experience',
        malayalam: 'പരിചയം / പ്രവൃത്തിപരിചയം',
        phoneticMalayalam: 'എക്സ്പീരിയൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'She has five years of experience.',
        exampleSentenceMl: 'അവർക്ക് അഞ്ച് വർഷത്തെ പ്രവൃത്തിപരിചയമുണ്ട്.'
      },
      {
        id: 'w5_8',
        english: 'Interview',
        malayalam: 'അഭിമുഖം',
        phoneticMalayalam: 'ഇന്റർവ്യൂ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He cleared the job interview.',
        exampleSentenceMl: 'അവൻ ജോലി അഭിമുഖം പാസായി.'
      },
      {
        id: 'w5_9',
        english: 'Responsibility',
        malayalam: 'ഉത്തരവാദിത്തം',
        phoneticMalayalam: 'റെസ്പോൺസിബിലിറ്റി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Handle your responsibilities sincerely.',
        exampleSentenceMl: 'നിങ്ങളുടെ ഉത്തരവാദിത്തങ്ങൾ ആത്മാർത്ഥമായി നിറവേറ്റുക.'
      },
      {
        id: 'w5_10',
        english: 'Success',
        malayalam: 'വിജയം',
        phoneticMalayalam: 'സക്സസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Hard work brings success.',
        exampleSentenceMl: 'കഠിനാധ്വാനം വിജയം കൊണ്ടുവരുന്നു.'
      }
    ]
  },
  {
    id: 6,
    titleMl: 'വികാരങ്ങളും ഭാവങ്ങളും',
    titleEn: 'Emotions & Feelings',
    descriptionMl: 'മനസ്സിൻ്റെ വികാരങ്ങൾ ഇംഗ്ലീഷിൽ പ്രകടിപ്പിക്കാൻ 10 വാക്കുകൾ',
    iconName: 'Smile',
    words: [
      {
        id: 'w6_1',
        english: 'Surprised',
        malayalam: 'അത്ഭുതപ്പെട്ട',
        phoneticMalayalam: 'സർപ്രൈസ്ഡ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'I was surprised to see him.',
        exampleSentenceMl: 'അവനെ കണ്ടപ്പോൾ ഞാൻ അത്ഭുതപ്പെട്ടു.'
      },
      {
        id: 'w6_2',
        english: 'Angry',
        malayalam: 'ദേഷ്യപ്പെട്ട / കോപമുള്ള',
        phoneticMalayalam: 'ആംഗ്രി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Do not be angry with little things.',
        exampleSentenceMl: 'ചെറിയ കാര്യങ്ങൾക്ക് ദേഷ്യപ്പെടരുത്.'
      },
      {
        id: 'w6_3',
        english: 'Worried',
        malayalam: 'ഉത്കണ്ഠയുള്ള / വിഷമിക്കുന്ന',
        phoneticMalayalam: 'വറീഡ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Do not worry about tomorrow.',
        exampleSentenceMl: 'നാളെയെക്കുറിച്ച് വിഷമിക്കേണ്ടതില്ല.'
      },
      {
        id: 'w6_4',
        english: 'Confident',
        malayalam: 'ആത്മവിശ്വാസമുള്ള',
        phoneticMalayalam: 'കോൺഫിഡന്റ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Speak English with confident tone.',
        exampleSentenceMl: 'ആത്മവിശ്വാസത്തോടെ ഇംഗ്ലീഷ് സംസാരിക്കുക.'
      },
      {
        id: 'w6_5',
        english: 'Brave',
        malayalam: 'ധൈര്യമുള്ള',
        phoneticMalayalam: 'ബ്രേവ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'He made a brave decision.',
        exampleSentenceMl: 'അവൻ ധീരമായ ഒരു തീരുമാനമെടുത്തു.'
      },
      {
        id: 'w6_6',
        english: 'Excited',
        malayalam: 'ആവേശഭരിതമായ',
        phoneticMalayalam: 'എക്സൈറ്റഡ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Children are excited for vacation.',
        exampleSentenceMl: 'അവധിദിനങ്ങൾക്കായി കുട്ടികൾ ആവേശത്തിലാണ്.'
      },
      {
        id: 'w6_7',
        english: 'Patience',
        malayalam: 'ക്ഷമ / സഹനശക്തി',
        phoneticMalayalam: 'പേഷ്യൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Learning needs great patience.',
        exampleSentenceMl: 'പഠനത്തിന് വലിയ ക്ഷമ ആവശ്യമാണ്.'
      },
      {
        id: 'w6_8',
        english: 'Honest',
        malayalam: 'സത്യസന്ധനായ',
        phoneticMalayalam: 'ഓണസ്റ്റ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Honesty is always valued.',
        exampleSentenceMl: 'സത്യസന്ധത എപ്പോഴും വിലമതിക്കപ്പെടുന്നു.'
      },
      {
        id: 'w6_9',
        english: 'Jealous',
        malayalam: 'അസൂയയുള്ള',
        phoneticMalayalam: 'ജെലസ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Never feel jealous of friends.',
        exampleSentenceMl: 'സുഹൃത്തുക്കളോട് ഒരിക്കലും അസൂയ തോന്നരുത്.'
      },
      {
        id: 'w6_10',
        english: 'Proud',
        malayalam: 'അഭിമാനമുള്ള',
        phoneticMalayalam: 'പ്രൗഡ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'I am proud of your achievements.',
        exampleSentenceMl: 'നിങ്ങളുടെ നേട്ടങ്ങളിൽ ഞാൻ അഭിമാനിക്കുന്നു.'
      }
    ]
  },
  {
    id: 7,
    titleMl: 'കാലാവസ്ഥയും പ്രകൃതിയും',
    titleEn: 'Weather & Nature',
    descriptionMl: 'മഴ, കാറ്റ്, പ്രകൃതി എന്നിവയെ സംബന്ധിച്ച 10 വാക്കുകൾ',
    iconName: 'CloudRain',
    words: [
      {
        id: 'w7_1',
        english: 'Rainy',
        malayalam: 'മഴയുള്ള',
        phoneticMalayalam: 'റെയിനി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Monsoon brings heavy rainy days.',
        exampleSentenceMl: 'കാലവർഷം കനത്ത മഴയുള്ള ദിവസങ്ങൾ കൊണ്ടുവരുന്നു.'
      },
      {
        id: 'w7_2',
        english: 'Sunny',
        malayalam: 'വെയിലുള്ള',
        phoneticMalayalam: 'സണ്ണി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'It is a sunny morning today.',
        exampleSentenceMl: 'ഇന്ന് നല്ല വെയിലുള്ള പ്രഭാതമാണ്.'
      },
      {
        id: 'w7_3',
        english: 'Breeze',
        malayalam: 'ഇളംകാറ്റ്',
        phoneticMalayalam: 'ബ്രീസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Cool sea breeze feels very pleasant.',
        exampleSentenceMl: 'കടൽത്തീരത്തെ തണുത്ത ഇളംകാറ്റ് വളരെ സുഖകരമാണ്.'
      },
      {
        id: 'w7_4',
        english: 'Lightning',
        malayalam: 'മിന്നൽ',
        phoneticMalayalam: 'ലൈറ്റ്‌നിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Thunder and lightning started suddenly.',
        exampleSentenceMl: 'പെട്ടെന്ന് ഇടിയും മിന്നലും തുടങ്ങി.'
      },
      {
        id: 'w7_5',
        english: 'Environment',
        malayalam: 'പരിസ്ഥിതി',
        phoneticMalayalam: 'എൻവയൺമെൻ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Keep the environment clean.',
        exampleSentenceMl: 'പരിസ്ഥിതി ശുചിയായി സൂക്ഷിക്കുക.'
      },
      {
        id: 'w7_6',
        english: 'Shadow',
        malayalam: 'നിഴൽ',
        phoneticMalayalam: 'ഷാഡോ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Tree gives us cool shadow.',
        exampleSentenceMl: 'മരം നമുക്ക് തണുപ്പുള്ള തണൽ (നിഴൽ) നൽകുന്നു.'
      },
      {
        id: 'w7_7',
        english: 'Cloud',
        malayalam: 'മേഘം',
        phoneticMalayalam: 'ക്ലൗഡ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Dark clouds gather in the sky.',
        exampleSentenceMl: 'ആകാശത്ത് കറുത്ത മേഘങ്ങൾ കൂടുന്നു.'
      },
      {
        id: 'w7_8',
        english: 'Flood',
        malayalam: 'വെള്ളപ്പൊക്കം',
        phoneticMalayalam: 'ഫ്ലഡ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Villagers were rescued from flood.',
        exampleSentenceMl: 'നാട്ടുകാരെ വെള്ളപ്പൊക്കത്തിൽ നിന്ന് രക്ഷപ്പെടുത്തി.'
      },
      {
        id: 'w7_9',
        english: 'Mountain',
        malayalam: 'പർവ്വതം / മല',
        phoneticMalayalam: 'മൗണ്ടൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Wayanad has scenic mountains.',
        exampleSentenceMl: 'വയനാട്ടിൽ മനോഹരമായ മലകളുണ്ട്.'
      },
      {
        id: 'w7_10',
        english: 'River',
        malayalam: 'നദി / പുഴ',
        phoneticMalayalam: 'റിവർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Periyar is the longest river in Kerala.',
        exampleSentenceMl: 'പെരിയാർ കേരളത്തിലെ ഏറ്റവും നീളം കൂടിയ നദിയാണ്.'
      }
    ]
  },
  {
    id: 8,
    titleMl: 'ഷോപ്പിംഗും പണമിടപാടുകളും',
    titleEn: 'Shopping & Finance',
    descriptionMl: 'കടയിൽ നിന്നും വാങ്ങുമ്പോഴും പണം കൊടുക്കുമ്പോഴും ഉപയോഗിക്കുന്ന 10 വാക്കുകൾ',
    iconName: 'ShoppingBag',
    words: [
      {
        id: 'w8_1',
        english: 'Discount',
        malayalam: 'വിലക്കിഴിവ്',
        phoneticMalayalam: 'ഡിസ്കൗണ്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Festival season offers big discounts.',
        exampleSentenceMl: 'ഉത്സവ സീസണിൽ വലിയ വിലക്കിഴിവുകൾ ലഭിക്കുന്നു.'
      },
      {
        id: 'w8_2',
        english: 'Receipt',
        malayalam: 'രസീത്',
        phoneticMalayalam: 'റിസീറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Always collect your bill receipt.',
        exampleSentenceMl: 'എപ്പോഴും നിങ്ങളുടെ ബിൽ രസീത് കൈപ്പറ്റുക.'
      },
      {
        id: 'w8_3',
        english: 'Expensive',
        malayalam: 'വിലകൂടിയ',
        phoneticMalayalam: 'എക്സ്പെൻസീവ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'This phone is too expensive.',
        exampleSentenceMl: 'ഈ ഫോൺ വളരെ വിലകൂടിയതാണ്.'
      },
      {
        id: 'w8_4',
        english: 'Cheap',
        malayalam: 'വിലകുറഞ്ഞ',
        phoneticMalayalam: 'ചീപ്പ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Good quality clothes at cheap price.',
        exampleSentenceMl: 'നല്ല തുണികൾ കുറഞ്ഞ വിലയിൽ.'
      },
      {
        id: 'w8_5',
        english: 'Refund',
        malayalam: 'പണം തിരികെ നൽകൽ',
        phoneticMalayalam: 'റീഫണ്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'You can claim a full refund.',
        exampleSentenceMl: 'നിങ്ങൾക്ക് മുഴുവൻ തുകയും തിരികെ ആവശ്യപ്പെടാം.'
      },
      {
        id: 'w8_6',
        english: 'Borrow',
        malayalam: 'കടം വാങ്ങുക',
        phoneticMalayalam: 'ബോറോ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Can I borrow your pen for a minute?',
        exampleSentenceMl: 'ഒരു മിനിറ്റത്തേക്ക് നിങ്ങളുടെ പേന കടം തരാമോ?'
      },
      {
        id: 'w8_7',
        english: 'Lend',
        malayalam: 'കടം കൊടുക്കുക',
        phoneticMalayalam: 'ലെൻഡ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Banks lend money for home loans.',
        exampleSentenceMl: 'ഭവനവായ്പകൾക്കായി ബാങ്കുകൾ പണം കടം നൽകുന്നു.'
      },
      {
        id: 'w8_8',
        english: 'Purchase',
        malayalam: 'വാങ്ങുക / ക്രയവിക്രയം',
        phoneticMalayalam: 'പർച്ചേസ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'I want to purchase a new book.',
        exampleSentenceMl: 'എനിക്ക് പുതിയൊരു പുസ്തകം വാങ്ങണം.'
      },
      {
        id: 'w8_9',
        english: 'Balance',
        malayalam: 'ബാക്കി തുക / തുലനാവസ്ഥ',
        phoneticMalayalam: 'ബാലൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Please return the balance change.',
        exampleSentenceMl: 'ദയവായി ബാക്കി പണം തരൂ.'
      },
      {
        id: 'w8_10',
        english: 'Customer',
        malayalam: 'ഉപഭോക്താവ്',
        phoneticMalayalam: 'കസ്റ്റമർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Customer satisfaction is our motto.',
        exampleSentenceMl: 'ഉപഭോക്തൃ സംതൃപ്തിയാണ് ഞങ്ങളുടെ ലക്ഷ്യം.'
      }
    ]
  },
  {
    id: 9,
    titleMl: 'ആരോഗ്യവും ശരീരവും',
    titleEn: 'Health & Wellness',
    descriptionMl: 'ഡോക്ടറോട് സംസാരിക്കാനും ആരോഗ്യം പറയാനുമുള്ള 10 വാക്കുകൾ',
    iconName: 'HeartPulse',
    words: [
      {
        id: 'w9_1',
        english: 'Headache',
        malayalam: 'തലവേദന',
        phoneticMalayalam: 'ഹെഡേക്ക്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'I have a mild headache.',
        exampleSentenceMl: 'എനിക്ക് ചെറിയ തലവേദനയുണ്ട്.'
      },
      {
        id: 'w9_2',
        english: 'Medicine',
        malayalam: 'മരുന്ന്',
        phoneticMalayalam: 'മെഡിസിൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Take medicine after meals.',
        exampleSentenceMl: 'ഭക്ഷണത്തിന് ശേഷം മരുന്ന് കഴിക്കുക.'
      },
      {
        id: 'w9_3',
        english: 'Doctor',
        malayalam: 'വൈദ്യൻ / ഡോക്ടർ',
        phoneticMalayalam: 'ഡോക്ടർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Consult a doctor for checkup.',
        exampleSentenceMl: 'പരിശോധനയ്ക്കായി ഡോക്ടറെ കാണുക.'
      },
      {
        id: 'w9_4',
        english: 'Healthy',
        malayalam: 'ആരോഗ്യമുള്ള',
        phoneticMalayalam: 'ഹെൽത്തി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Eat healthy food every day.',
        exampleSentenceMl: 'എല്ലാ ദിവസവും ആരോഗ്യകരമായ ഭക്ഷണം കഴിക്കുക.'
      },
      {
        id: 'w9_5',
        english: 'Tired',
        malayalam: 'ക്ഷീണിതനായ / തളർന്ന',
        phoneticMalayalam: 'ടയേർഡ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'I am tired after long travel.',
        exampleSentenceMl: 'ദീർഘദൂര യാത്രയ്ക്ക് ശേഷം ഞാൻ ക്ഷീണിതനാണ്.'
      },
      {
        id: 'w9_6',
        english: 'Fever',
        malayalam: 'പനി',
        phoneticMalayalam: 'ഫീവർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He is resting due to fever.',
        exampleSentenceMl: 'പനി കാരണം അവൻ വിശ്രമത്തിലാണ്.'
      },
      {
        id: 'w9_7',
        english: 'Exercise',
        malayalam: 'വ്യായാമം',
        phoneticMalayalam: 'എക്സർസൈസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Daily exercise keeps you fit.',
        exampleSentenceMl: 'ദിവസേനയുള്ള വ്യായാമം നിങ്ങളെ ഉന്മേഷവാനാക്കും.'
      },
      {
        id: 'w9_8',
        english: 'Cough',
        malayalam: 'ചുമ',
        phoneticMalayalam: 'കോഫ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Warm water helps reduce cough.',
        exampleSentenceMl: 'ചൂടുവെള്ളം ചുമ കുറയ്ക്കാൻ സഹായിക്കുന്നു.'
      },
      {
        id: 'w9_9',
        english: 'Rest',
        malayalam: 'വിശ്രമം',
        phoneticMalayalam: 'റെസ്റ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Adequate rest is necessary.',
        exampleSentenceMl: 'മതിയായ വിശ്രമം അത്യാവശ്യമാണ്.'
      },
      {
        id: 'w9_10',
        english: 'Emergency',
        malayalam: 'അടിയന്തരാവസ്ഥ / അത്യാഹിതം',
        phoneticMalayalam: 'എമർജൻസി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Dial ambulance in an emergency.',
        exampleSentenceMl: 'അടിയന്തര ഘട്ടത്തിൽ ആംബുലൻസ് വിളിക്കുക.'
      }
    ]
  },
  {
    id: 10,
    titleMl: 'സംഭാഷണ പ്രയോഗങ്ങൾ',
    titleEn: 'Conversation & Common Idioms',
    descriptionMl: 'ഇംഗ്ലീഷ് സംസാരിക്കുമ്പോൾ സ്വാഭാവികത നൽകുന്ന 10 പ്രയോഗങ്ങൾ',
    iconName: 'MessageSquare',
    words: [
      {
        id: 'w10_1',
        english: 'Perhaps',
        malayalam: 'ഒരുപക്ഷേ',
        phoneticMalayalam: 'പെർഹാപ്സ്',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Perhaps we will meet tomorrow.',
        exampleSentenceMl: 'ഒരുപക്ഷേ ഞങ്ങൾ നാളെ കണ്ടുമുട്ടും.'
      },
      {
        id: 'w10_2',
        english: 'Suddenly',
        malayalam: 'പെട്ടെന്ന്',
        phoneticMalayalam: 'സഡൻലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Suddenly the lights went out.',
        exampleSentenceMl: 'പെട്ടെന്ന് ലൈറ്റുകൾ അണഞ്ഞു.'
      },
      {
        id: 'w10_3',
        english: 'Certainly',
        malayalam: 'തീർച്ചയായും',
        phoneticMalayalam: 'സെർട്ടൻലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Certainly, I will support you.',
        exampleSentenceMl: 'തീർച്ചയായും, ഞാൻ നിങ്ങളെ പിന്തുണയ്ക്കും.'
      },
      {
        id: 'w10_4',
        english: 'Actually',
        malayalam: 'യഥാർത്ഥത്തിൽ / വാസ്തവത്തിൽ',
        phoneticMalayalam: 'ആക്ച്വലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Actually, I knew the answer.',
        exampleSentenceMl: 'വാസ്തവത്തിൽ, എനിക്ക് ഉത്തരം അറിയാമായിരുന്നു.'
      },
      {
        id: 'w10_5',
        english: 'Immediately',
        malayalam: 'ഉടൻ തന്നെ / ആ നിമിഷം',
        phoneticMalayalam: 'ഇമ്മീഡിയറ്റ്‌ലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Please reply immediately.',
        exampleSentenceMl: 'ദയവായി ഉടൻ തന്നെ മറുപടി നൽകുക.'
      },
      {
        id: 'w10_6',
        english: 'Fortunately',
        malayalam: 'ഭാഗ്യവശാൽ',
        phoneticMalayalam: 'ഫോർച്യൂണറ്റ്‌ലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Fortunately, nobody got hurt.',
        exampleSentenceMl: 'ഭാഗ്യവശാൽ, ആർക്കും പരിക്കേറ്റില്ല.'
      },
      {
        id: 'w10_7',
        english: 'Obviously',
        malayalam: 'വ്യക്തമായും / നിസംശയം',
        phoneticMalayalam: 'ഒബ്വിയസ്‌ലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'He is obviously very talented.',
        exampleSentenceMl: 'അവൻ നിസംശയം വളരെ കഴിവുള്ളവനാണ്.'
      },
      {
        id: 'w10_8',
        english: 'Anyway',
        malayalam: 'എന്തായാലും / ഏതായാലും',
        phoneticMalayalam: 'എനിവേ',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Anyway, thank you for coming.',
        exampleSentenceMl: 'എന്തായാലും, വന്നതിന് നന്ദി.'
      },
      {
        id: 'w10_9',
        english: 'Meanwhile',
        malayalam: 'അതേസമയം / ഇതിനിടയിൽ',
        phoneticMalayalam: 'മീൻവൈൽ',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Meanwhile, you can have tea.',
        exampleSentenceMl: 'ഇതിനിടയിൽ, നിങ്ങൾക്ക് ചായ കുടിക്കാം.'
      },
      {
        id: 'w10_10',
        english: 'Finally',
        malayalam: 'ഒടുവിൽ / അവസാനം',
        phoneticMalayalam: 'ഫൈനലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'Finally, we achieved the goal.',
        exampleSentenceMl: 'ഒടുവിൽ, ഞങ്ങൾ ലക്ഷ്യം കൈവരിച്ചു.'
      }
    ]
  },
  {
    id: 11,
    titleMl: 'വിദ്യാലയവും വിദ്യാഭ്യാസവും',
    titleEn: 'School & Education',
    descriptionMl: 'സ്കൂളിലും പഠനത്തിലും ഉപയോഗിക്കുന്ന 10 പ്രധാന വാക്കുകൾ',
    iconName: 'GraduationCap',
    words: [
      {
        id: 'w11_1',
        english: 'Teacher',
        malayalam: 'അധ്യാപകൻ / അധ്യാപിക',
        phoneticMalayalam: 'ടീച്ചർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The teacher explained the lesson clearly.',
        exampleSentenceMl: 'അധ്യാപിക പാഠം വ്യക്തമായി വിശദീകരിച്ചു.'
      },
      {
        id: 'w11_2',
        english: 'Student',
        malayalam: 'വിദ്യാർത്ഥി / വിദ്യാർത്ഥിനി',
        phoneticMalayalam: 'സ്റ്റുഡന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Every student should read books daily.',
        exampleSentenceMl: 'ഓരോ വിദ്യാർത്ഥിയും ദിവസവും പുസ്തകം വായിക്കണം.'
      },
      {
        id: 'w11_3',
        english: 'Homework',
        malayalam: 'വീട്ടുജോലി / ഗൃഹപാഠം',
        phoneticMalayalam: 'ഹോംവർക്ക്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Complete your homework before evening.',
        exampleSentenceMl: 'വൈകുന്നേരത്തിന് മുൻപ് നിങ്ങളുടെ ഗൃഹപാഠം പൂർത്തിയാക്കുക.'
      },
      {
        id: 'w11_4',
        english: 'Classroom',
        malayalam: 'ക്ലാസ്സ് മുറി',
        phoneticMalayalam: 'ക്ലാസ്‌റൂം',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Keep the classroom clean and tidy.',
        exampleSentenceMl: 'ക്ലാസ്സ് മുറി വൃത്തിയായി സൂക്ഷിക്കുക.'
      },
      {
        id: 'w11_5',
        english: 'Library',
        malayalam: 'ഗ്രന്ഥശാല / വായനശാല',
        phoneticMalayalam: 'ലൈബ്രറി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Silence must be maintained in library.',
        exampleSentenceMl: 'വായനശാലയിൽ നിശബ്ദത പാലിക്കണം.'
      },
      {
        id: 'w11_6',
        english: 'Knowledge',
        malayalam: 'അറിവ് / വിജ്ഞാനം',
        phoneticMalayalam: 'നോളജ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Knowledge is power.',
        exampleSentenceMl: 'അറിവാണ് യഥാർത്ഥ ശക്തി.'
      },
      {
        id: 'w11_7',
        english: 'Question',
        malayalam: 'ചോദ്യം',
        phoneticMalayalam: 'ക്വസ്റ്റ്യൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Feel free to ask any question.',
        exampleSentenceMl: 'ഏത് ചോദ്യവും ധൈര്യമായി ചോദിക്കുക.'
      },
      {
        id: 'w11_8',
        english: 'Answer',
        malayalam: 'ഉത്തരം / മറുപടി',
        phoneticMalayalam: 'ആൻസർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Write the correct answer.',
        exampleSentenceMl: 'ശരിയായ ഉത്തരം എഴുതുക.'
      },
      {
        id: 'w11_9',
        english: 'Exam',
        malayalam: 'പരീക്ഷ',
        phoneticMalayalam: 'എക്സാം',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Prepare well for the final exam.',
        exampleSentenceMl: 'വാർഷിക പരീക്ഷയ്ക്കായി നന്നായി തയ്യാറെടുക്കുക.'
      },
      {
        id: 'w11_10',
        english: 'Practice',
        malayalam: 'പരിശീലനം / അഭ്യാസം',
        phoneticMalayalam: 'പ്രാക്ടീസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Practice makes man perfect.',
        exampleSentenceMl: 'നിരന്തരമായ പരിശീലനം പൂർണ്ണത നൽകുന്നു.'
      }
    ]
  },
  {
    id: 12,
    titleMl: 'ആശുപത്രിയും ആരോഗ്യപരിപാലനവും',
    titleEn: 'Hospital & Healthcare',
    descriptionMl: 'ഡോക്ടറോടും ആശുപത്രിയിലും സംസാരിക്കാനുള്ള 10 വാക്കുകൾ',
    iconName: 'Activity',
    words: [
      {
        id: 'w12_1',
        english: 'Patient',
        malayalam: 'രോഗി',
        phoneticMalayalam: 'പേഷ്യന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The doctor examined the patient carefully.',
        exampleSentenceMl: 'ഡോക്ടർ രോഗിയെ സൂക്ഷ്മമായി പരിശോധിച്ചു.'
      },
      {
        id: 'w12_2',
        english: 'Appointment',
        malayalam: 'മുൻകൂട്ടിയുള്ള സമയം',
        phoneticMalayalam: 'അപ്പോയിന്റ്മെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'I booked an appointment for 4 PM.',
        exampleSentenceMl: 'വൈകുന്നേരം 4 മണിക്ക് ഞാൻ സമയം ബുക്ക് ചെയ്തു.'
      },
      {
        id: 'w12_3',
        english: 'Treatment',
        malayalam: 'ചികിത്സ',
        phoneticMalayalam: 'ട്രീറ്റ്മെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Early treatment ensures quick recovery.',
        exampleSentenceMl: 'നേരത്തെയുള്ള ചികിത്സ വേഗത്തിൽ രോഗം മാറ്റും.'
      },
      {
        id: 'w12_4',
        english: 'Recovery',
        malayalam: 'രോഗശാന്തി / സുഖപ്പെടൽ',
        phoneticMalayalam: 'റിക്കവറി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Wishing you a speedy recovery.',
        exampleSentenceMl: 'വേഗത്തിൽ സുഖം പ്രാപിക്കട്ടെ എന്ന് ആശംസിക്കുന്നു.'
      },
      {
        id: 'w12_5',
        english: 'Prescription',
        malayalam: 'മരുന്ന് കുറിപ്പടി',
        phoneticMalayalam: 'പ്രിസ്ക്രിപ്ഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Show the prescription to the pharmacist.',
        exampleSentenceMl: 'മെഡിക്കൽ ഷോപ്പിൽ കുറിപ്പടി കാണിക്കുക.'
      },
      {
        id: 'w12_6',
        english: 'Nurse',
        malayalam: 'നഴ്സ് / ശുശ്രൂഷകൻ',
        phoneticMalayalam: 'നേഴ്സ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The nurse took good care of patients.',
        exampleSentenceMl: 'നഴ്സ് രോഗികളെ നന്നായി പരിചരിച്ചു.'
      },
      {
        id: 'w12_7',
        english: 'Allergy',
        malayalam: 'അലർജി / അസഹിഷ്ണുത',
        phoneticMalayalam: 'അലർജി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Do you have any food allergy?',
        exampleSentenceMl: 'നിങ്ങൾക്ക് എന്തെങ്കിലും ഭക്ഷണ അലർജിയുണ്ടോ?'
      },
      {
        id: 'w12_8',
        english: 'Pain',
        malayalam: 'വേദന / അസ്വസ്ഥത',
        phoneticMalayalam: 'പെയിൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Where is the pain located?',
        exampleSentenceMl: 'എവിടെയാണ് വേദന ഉള്ളത്?'
      },
      {
        id: 'w12_9',
        english: 'Surgery',
        malayalam: 'ശസ്ത്രക്രിയ',
        phoneticMalayalam: 'സർജറി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The heart surgery was successful.',
        exampleSentenceMl: 'ഹൃദയ ശസ്ത്രക്രിയ വിജയകരമായിരുന്നു.'
      },
      {
        id: 'w12_10',
        english: 'Ambulance',
        malayalam: 'ആംബുലൻസ് / രക്ഷാവാഹനം',
        phoneticMalayalam: 'ആംബുലൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The ambulance arrived in five minutes.',
        exampleSentenceMl: 'അഞ്ച് മിനിറ്റിനുള്ളിൽ ആംബുലൻസ് എത്തി.'
      }
    ]
  },
  {
    id: 13,
    titleMl: 'യാത്രയും എയർപോർട്ടും റെയിൽവേയും',
    titleEn: 'Airport & Transit',
    descriptionMl: 'വിമാനത്താവളത്തിലും റെയിൽവേയിലും ഉപയോഗിക്കുന്ന 10 വാക്കുകൾ',
    iconName: 'Plane',
    words: [
      {
        id: 'w13_1',
        english: 'Passport',
        malayalam: 'പാസ്പോർട്ട്',
        phoneticMalayalam: 'പാസ്‌പോർട്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Keep your passport in a safe place.',
        exampleSentenceMl: 'നിങ്ങളുടെ പാസ്പോർട്ട് സുരക്ഷിതമായി സൂക്ഷിക്കുക.'
      },
      {
        id: 'w13_2',
        english: 'Boarding',
        malayalam: 'യാത്രാവാഹനത്തിൽ കയറൽ',
        phoneticMalayalam: 'ബോർഡിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Boarding starts 30 minutes before flight.',
        exampleSentenceMl: 'വിമാനത്തിൽ കയറൽ 30 മിനിറ്റ് മുൻപ് തുടങ്ങും.'
      },
      {
        id: 'w13_3',
        english: 'Platform',
        malayalam: 'പ്ലാറ്റ്‌ഫോം',
        phoneticMalayalam: 'പ്ലാറ്റ്ഫോം',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Train arrives on platform number 2.',
        exampleSentenceMl: 'ട്രെയിൻ പ്ലാറ്റ്‌ഫോം നമ്പർ 2-ൽ വരും.'
      },
      {
        id: 'w13_4',
        english: 'Luggage',
        malayalam: 'യാത്രാ സാധനങ്ങൾ / ഭാണ്ഡം',
        phoneticMalayalam: 'ലഗേജ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Do not leave luggage unattended.',
        exampleSentenceMl: 'യാത്രാ സാധനങ്ങൾ ശ്രദ്ധിക്കാതെ ഇടരുത്.'
      },
      {
        id: 'w13_5',
        english: 'Passenger',
        malayalam: 'യാത്രക്കാരൻ / യാത്രക്കാരി',
        phoneticMalayalam: 'പാസഞ്ചർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Passengers are requested to be seated.',
        exampleSentenceMl: 'യാത്രക്കാർ ഇരിപ്പിടത്തിൽ ഇരിക്കാൻ അഭ്യർത്ഥിക്കുന്നു.'
      },
      {
        id: 'w13_6',
        english: 'Delay',
        malayalam: 'വൈകൽ / താമസം',
        phoneticMalayalam: 'ഡിലേ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We apologize for the flight delay.',
        exampleSentenceMl: 'വിമാനം വൈകിയതിൽ ഖേദിക്കുന്നു.'
      },
      {
        id: 'w13_7',
        english: 'Flight',
        malayalam: 'വിമാനം / വിമാനയാത്ര',
        phoneticMalayalam: 'ഫ്ലൈറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Direct flight to Dubai takes 4 hours.',
        exampleSentenceMl: 'ദുബായിലേക്ക് നേരിട്ടുള്ള വിമാനത്തിന് 4 മണിക്കൂർ വേണം.'
      },
      {
        id: 'w13_8',
        english: 'Announcement',
        malayalam: 'അറിയിപ്പ് / പ്രഖ്യാപനം',
        phoneticMalayalam: 'അനൗൺസ്‌മെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Listen to the airport announcement.',
        exampleSentenceMl: 'വിമാനത്താവളത്തിലെ അറിയിപ്പ് ശ്രദ്ധിക്കുക.'
      },
      {
        id: 'w13_9',
        english: 'Hotel',
        malayalam: 'താമസസ്ഥലം / ഹോട്ടൽ',
        phoneticMalayalam: 'ഹോട്ടൽ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We booked a comfortable hotel room.',
        exampleSentenceMl: 'ഞങ്ങൾ നല്ലൊരു ഹോട്ടൽ മുറി ബുക്ക് ചെയ്തു.'
      },
      {
        id: 'w13_10',
        english: 'Map',
        malayalam: 'ഭൂപടം / വഴിവിവരം',
        phoneticMalayalam: 'മാപ്പ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Check Google Map for best route.',
        exampleSentenceMl: 'നല്ല വഴിയറിയാൻ മാപ്പ് പരിശോധിക്കുക.'
      }
    ]
  },
  {
    id: 14,
    titleMl: 'വിവരസാങ്കേതികവിദ്യയും ഫോണും',
    titleEn: 'Technology & Mobile',
    descriptionMl: 'ഫോണിലും ഇന്റർനെറ്റിലും സ്ഥിരമായി കാണുന്ന 10 വാക്കുകൾ',
    iconName: 'Smartphone',
    words: [
      {
        id: 'w14_1',
        english: 'Password',
        malayalam: 'രഹസ്യവാക്ക്',
        phoneticMalayalam: 'പാസ്‌വേഡ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Create a strong password for security.',
        exampleSentenceMl: 'സുരക്ഷയ്ക്കായി ശക്തമായ രഹസ്യവാക്ക് നൽകുക.'
      },
      {
        id: 'w14_2',
        english: 'Download',
        malayalam: 'ഡൗൺലോഡ് ചെയ്യുക / സംഭരിക്കുക',
        phoneticMalayalam: 'ഡൗൺലോഡ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Download the app from store.',
        exampleSentenceMl: 'സ്റ്റോറിൽ നിന്ന് ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക.'
      },
      {
        id: 'w14_3',
        english: 'Message',
        malayalam: 'സന്ദേശം',
        phoneticMalayalam: 'മെസ്സേജ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Send me a message when you arrive.',
        exampleSentenceMl: 'എത്തുമ്പോൾ എനിക്ക് സന്ദേശം അയക്കുക.'
      },
      {
        id: 'w14_4',
        english: 'Internet',
        malayalam: 'ഇന്റർനെറ്റ് / അന്തർജാലം',
        phoneticMalayalam: 'ഇന്റർനെറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Fast internet connection is available.',
        exampleSentenceMl: 'വേഗതയേറിയ ഇന്റർനെറ്റ് ലഭ്യമാണ്.'
      },
      {
        id: 'w14_5',
        english: 'Battery',
        malayalam: 'ബാറ്ററി / ഊർജ്ജ സംഭരണി',
        phoneticMalayalam: 'ബാറ്ററി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'My phone battery is running low.',
        exampleSentenceMl: 'എന്റെ ഫോണിൽ ബാറ്ററി തീരാറായി.'
      },
      {
        id: 'w14_6',
        english: 'Charger',
        malayalam: 'ചാർജർ',
        phoneticMalayalam: 'ചാർജർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Do you have a phone charger?',
        exampleSentenceMl: 'നിങ്ങളുടെ കൈയിൽ ഫോൺ ചാർജറുണ്ടോ?'
      },
      {
        id: 'w14_7',
        english: 'Screen',
        malayalam: 'സ്ക്രീൻ / തിരശ്ശീല',
        phoneticMalayalam: 'സ്ക്രീൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Avoid too much screen time before sleep.',
        exampleSentenceMl: 'ഉറങ്ങുന്നതിന് മുൻപ് അധികം ഫോൺ സ്ക്രീൻ നോക്കരുത്.'
      },
      {
        id: 'w14_8',
        english: 'Update',
        malayalam: 'പുതുക്കുക / മാറ്റം വരുത്തുക',
        phoneticMalayalam: 'അപ്‌ഡേറ്റ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Update your phone software regularly.',
        exampleSentenceMl: 'ഫോൺ സോഫ്റ്റ്‌വെയർ കൃത്യമായി അപ്‌ഡേറ്റ് ചെയ്യുക.'
      },
      {
        id: 'w14_9',
        english: 'Settings',
        malayalam: 'ക്രമീകരണങ്ങൾ',
        phoneticMalayalam: 'സെറ്റിംഗ്സ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Change language in app settings.',
        exampleSentenceMl: 'ആപ്പ് ക്രമീകരണങ്ങളിൽ ഭാഷ മാറ്റുക.'
      },
      {
        id: 'w14_10',
        english: 'Application',
        malayalam: 'ആപ്പ് / പ്രയോഗം',
        phoneticMalayalam: 'ആപ്ലിക്കേഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'This learning application is very helpful.',
        exampleSentenceMl: 'ഈ പഠന ആപ്പ് വളരെ ഉപകാരപ്രദമാണ്.'
      }
    ]
  },
  {
    id: 15,
    titleMl: 'സ്വഭാവഗുണങ്ങളും വ്യക്തിത്വവും',
    titleEn: 'Personality & Virtues',
    descriptionMl: 'മനുഷ്യരുടെ നല്ല സ്വഭാവങ്ങളും ഗുണങ്ങളും പറയുന്ന 10 വാക്കുകൾ',
    iconName: 'UserCheck',
    words: [
      {
        id: 'w15_1',
        english: 'Polite',
        malayalam: 'മര്യാദയുള്ള / വിനയമുള്ള',
        phoneticMalayalam: 'പൊളൈറ്റ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'He is polite to everyone he meets.',
        exampleSentenceMl: 'അവൻ കാണുന്ന എല്ലാവരോടും മര്യാദയോടെ പെരുമാറുന്നു.'
      },
      {
        id: 'w15_2',
        english: 'Generous',
        malayalam: 'ഔദാര്യമുള്ള / വിശാലമനസ്കനായ',
        phoneticMalayalam: 'ജനറസ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'She is generous towards poor people.',
        exampleSentenceMl: 'അവർ പാവപ്പെട്ടവരോട് ഔദാര്യമുള്ളവരാണ്.'
      },
      {
        id: 'w15_3',
        english: 'Helpful',
        malayalam: 'സഹായമനസ്കനായ',
        phoneticMalayalam: 'ഹെൽപ്ഫുൾ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'He gave helpful advice.',
        exampleSentenceMl: 'അവൻ നല്ല സഹായകരമായ ഉപദേശം നൽകി.'
      },
      {
        id: 'w15_4',
        english: 'Intelligent',
        malayalam: 'ബുദ്ധിമാനായ / വിവേകമുള്ള',
        phoneticMalayalam: 'ഇന്റലിജന്റ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'She solved the puzzle intelligently.',
        exampleSentenceMl: 'അവൾ ബുദ്ധിപൂർവ്വം പ്രഹേളിക പരിഹരിച്ചു.'
      },
      {
        id: 'w15_5',
        english: 'Hardworking',
        malayalam: 'കഠിനാധ്വാനിയായ',
        phoneticMalayalam: 'ഹാർഡ്‌വർക്കിംഗ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Hardworking people achieve their goals.',
        exampleSentenceMl: 'കഠിനാധ്വാനികൾ തങ്ങളുടെ ലക്ഷ്യം നേടുന്നു.'
      },
      {
        id: 'w15_6',
        english: 'Calm',
        malayalam: 'ശാന്തമായ / ധീരമായ',
        phoneticMalayalam: 'കാം',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Stay calm in difficult situations.',
        exampleSentenceMl: 'ബുദ്ധിമുട്ടുള്ള അവസ്ഥകളിൽ ശാന്തത പാലിക്കുക.'
      },
      {
        id: 'w15_7',
        english: 'Creative',
        malayalam: 'സർഗ്ഗാത്മകമായ / പുതിയ ആശയങ്ങളുള്ള',
        phoneticMalayalam: 'ക്രിയേറ്റീവ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Children have creative imagination.',
        exampleSentenceMl: 'കുട്ടികൾക്ക് മികച്ച സർഗ്ഗാത്മക ഭാവനയുണ്ട്.'
      },
      {
        id: 'w15_8',
        english: 'Gentle',
        malayalam: 'സൗമ്യമായ / ശാന്തമായ',
        phoneticMalayalam: 'ജെന്റിൽ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Speak in a gentle voice.',
        exampleSentenceMl: 'സൗമ്യമായ ശബ്ദത്തിൽ സംസാരിക്കുക.'
      },
      {
        id: 'w15_9',
        english: 'Reliable',
        malayalam: 'വിശ്വസിക്കാൻ കൊള്ളുന്ന',
        phoneticMalayalam: 'റിലയബിൾ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'He is a reliable friend.',
        exampleSentenceMl: 'അവൻ വിശ്വസിക്കാൻ കൊള്ളുന്നൊരു സുഹൃത്താണ്.'
      },
      {
        id: 'w15_10',
        english: 'Cheerful',
        malayalam: 'ഉന്മേഷമുള്ള / പ്രസന്നനായ',
        phoneticMalayalam: 'ചിയർഫുൾ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Her cheerful smile brightened the room.',
        exampleSentenceMl: 'അവളുടെ പ്രസന്നമായ പുഞ്ചിരി എല്ലാവരിലും സന്തോഷം നിറച്ചു.'
      }
    ]
  },
  {
    id: 16,
    titleMl: 'കായികവും വിനോദങ്ങളും',
    titleEn: 'Sports & Recreation',
    descriptionMl: 'കളികളും ഒഴിവുസമയ വിനോദങ്ങളും പറയുന്ന 10 വാക്കുകൾ',
    iconName: 'Trophy',
    words: [
      {
        id: 'w16_1',
        english: 'Football',
        malayalam: 'ഫുട്ബോൾ / കാൽപ്പന്ത് കളി',
        phoneticMalayalam: 'ഫുട്ബോൾ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Kerala has great passion for football.',
        exampleSentenceMl: 'കേരളത്തിന് ഫുട്ബോളിനോട് വലിയ ഇഷ്ടമാണ്.'
      },
      {
        id: 'w16_2',
        english: 'Swimming',
        malayalam: 'നീന്തൽ',
        phoneticMalayalam: 'സ്വിമ്മിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Swimming is an excellent body workout.',
        exampleSentenceMl: 'നീന്തൽ ശരീരത്തിന് നല്ലൊരു വ്യായാമമാണ്.'
      },
      {
        id: 'w16_3',
        english: 'Music',
        malayalam: 'സംഗീതം / പാട്ട്',
        phoneticMalayalam: 'മ്യൂസിക്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Soft music relaxes the mind.',
        exampleSentenceMl: 'മനോഹരമായ സംഗീതം മനസ്സിനെ സാന്ത്വനിപ്പിക്കുന്നു.'
      },
      {
        id: 'w16_4',
        english: 'Victory',
        malayalam: 'വിജയം / ജയം',
        phoneticMalayalam: 'വിക്ടറി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The team celebrated their victory.',
        exampleSentenceMl: 'ടീം അവരുടെ വിജയം ആഘോഷിച്ചു.'
      },
      {
        id: 'w16_5',
        english: 'Tournament',
        malayalam: 'മത്സര പരമ്പര / കായിക മാമാങ്കം',
        phoneticMalayalam: 'ടൂർണമെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'School tournament begins next Monday.',
        exampleSentenceMl: 'സ്കൂൾ മത്സരങ്ങൾ അടുത്ത തിങ്കളാഴ്ച തുടങ്ങും.'
      },
      {
        id: 'w16_6',
        english: 'Champion',
        malayalam: 'വിജയി / ചാമ്പ്യൻ',
        phoneticMalayalam: 'ചാമ്പ്യൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He became the world champion.',
        exampleSentenceMl: 'അവൻ ലോക ചാമ്പ്യനായി മാറി.'
      },
      {
        id: 'w16_7',
        english: 'Painting',
        malayalam: 'ചിത്രരചന / ചായംപൂശൽ',
        phoneticMalayalam: 'പെയിന്റിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Painting is my favorite hobby.',
        exampleSentenceMl: 'ചിത്രരചന എന്റെ പ്രിയപ്പെട്ട വിനോദമാണ്.'
      },
      {
        id: 'w16_8',
        english: 'Leisure',
        malayalam: 'ഒഴിവുസമയം',
        phoneticMalayalam: 'ലെഷർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Spend leisure time reading good books.',
        exampleSentenceMl: 'ഒഴിവുസമയം നല്ല പുസ്തകങ്ങൾ വായിക്കാൻ മാറ്റിവെക്കുക.'
      },
      {
        id: 'w16_9',
        english: 'Teamwork',
        malayalam: 'കൂട്ടായ്മ / ഒത്തൊരുമ',
        phoneticMalayalam: 'ടീംവർക്ക്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Teamwork divides effort and multiplies success.',
        exampleSentenceMl: 'ഒത്തൊരുമ ശ്രമം കുറയ്ക്കുകയും വിജയം ഇരട്ടിയാക്കുകയും ചെയ്യുന്നു.'
      },
      {
        id: 'w16_10',
        english: 'Fitness',
        malayalam: 'ശാരീരിക ക്ഷമത / ആരോഗ്യം',
        phoneticMalayalam: 'ഫിറ്റ്നസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Maintaining fitness improves energy.',
        exampleSentenceMl: 'ശാരീരിക ക്ഷമത നിലനിർത്തുന്നത് ഊർജ്ജം വർദ്ധിപ്പിക്കുന്നു.'
      }
    ]
  },
  {
    id: 17,
    titleMl: 'വീട്ടുപകരണങ്ങളും ദൈനംദിന ജീവിതവും',
    titleEn: 'Household & Home Life',
    descriptionMl: 'വീട്ടിലും ദൈനംദിന കാര്യങ്ങളിലും കാണുന്ന 10 വാക്കുകൾ',
    iconName: 'Home',
    words: [
      {
        id: 'w17_1',
        english: 'Kitchen',
        malayalam: 'അടുക്കള',
        phoneticMalayalam: 'കിച്ചൺ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The aroma of coffee filled the kitchen.',
        exampleSentenceMl: 'കാപ്പിയുടെ മണം അടുക്കളയിൽ നിറഞ്ഞു.'
      },
      {
        id: 'w17_2',
        english: 'Blanket',
        malayalam: 'പുതപ്പ്',
        phoneticMalayalam: 'ബ്ലാങ്കറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Take a warm blanket during winter.',
        exampleSentenceMl: 'തണുപ്പുകാലത്ത് നല്ല പുതപ്പ് എടുക്കുക.'
      },
      {
        id: 'w17_3',
        english: 'Mirror',
        malayalam: 'കണ്ണാടി',
        phoneticMalayalam: 'മിറർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'She looked at herself in the mirror.',
        exampleSentenceMl: 'അവൾ കണ്ണാടിയിൽ നോക്കി.'
      },
      {
        id: 'w17_4',
        english: 'Window',
        malayalam: 'ജനൽ / കിളിവാതിൽ',
        phoneticMalayalam: 'വിൻഡോ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Open the window for fresh air.',
        exampleSentenceMl: 'പുതിയ കാറ്റിനായി ജനൽ തുറക്കുക.'
      },
      {
        id: 'w17_5',
        english: 'Furniture',
        malayalam: 'മേശ, കസേര മുതലായ വീട്ടുപകരണങ്ങൾ',
        phoneticMalayalam: 'ഫർണിച്ചർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Wooden furniture lasts for years.',
        exampleSentenceMl: 'തടിയുടെ ഫർണിച്ചർ വർഷങ്ങളോളം ഈടുനിൽക്കും.'
      },
      {
        id: 'w17_6',
        english: 'Wardrobe',
        malayalam: 'അലമാര / വസ്ത്രക്കൂട്',
        phoneticMalayalam: 'വാർഡ്രോബ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Hang your clothes neatly in wardrobe.',
        exampleSentenceMl: 'വസ്ത്രങ്ങൾ വൃത്തിയായി അലമാരയിൽ തൂക്കുക.'
      },
      {
        id: 'w17_7',
        english: 'Roof',
        malayalam: 'മേൽക്കൂര',
        phoneticMalayalam: 'റൂഫ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Raindrops fell gently on the roof.',
        exampleSentenceMl: 'മേൽക്കൂരയിൽ മഴത്തുള്ളികൾ പതിച്ചു.'
      },
      {
        id: 'w17_8',
        english: 'Balcony',
        malayalam: 'ബാൽക്കണി / ഉമ്മറത്തട്ട്',
        phoneticMalayalam: 'ബാൽക്കണി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We enjoy tea sitting in balcony.',
        exampleSentenceMl: 'ഞങ്ങൾ ബാൽക്കണിയിൽ ഇരുന്ന് ചായ കുടിക്കുന്നു.'
      },
      {
        id: 'w17_9',
        english: 'Pillow',
        malayalam: 'തലയിണ',
        phoneticMalayalam: 'പില്ലോ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'A soft pillow gives comfortable sleep.',
        exampleSentenceMl: 'മൃദുവായ തലയിണ സുഖകരമായ ഉറക്കം തരുന്നു.'
      },
      {
        id: 'w17_10',
        english: 'Cleaning',
        malayalam: 'വൃത്തിയാക്കൽ / ശുചീകരണം',
        phoneticMalayalam: 'ക്ലീനിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Sunday is our house cleaning day.',
        exampleSentenceMl: 'ഞായറാഴ്ച ഞങ്ങളുടെ വീട് വൃത്തിയാക്കൽ ദിവസമാണ്.'
      }
    ]
  },
  {
    id: 18,
    titleMl: 'ബാങ്കും ധനകാര്യ ഇടപാടുകളും',
    titleEn: 'Banking & Finance',
    descriptionMl: 'ബാങ്കിലും എടിഎമ്മിലും ഉപയോഗിക്കുന്ന 10 വാക്കുകൾ',
    iconName: 'CreditCard',
    words: [
      {
        id: 'w18_1',
        english: 'Account',
        malayalam: 'ബാങ്ക് അക്കൗണ്ട്',
        phoneticMalayalam: 'അക്കൗണ്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'I opened a savings bank account.',
        exampleSentenceMl: 'ഞാൻ സേവിംഗ്സ് ബാങ്ക് അക്കൗണ്ട് തുടങ്ങി.'
      },
      {
        id: 'w18_2',
        english: 'Deposit',
        malayalam: 'നിക്ഷേപിക്കുക',
        phoneticMalayalam: 'ഡെപ്പോസിറ്റ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Deposit money in the bank safely.',
        exampleSentenceMl: 'പണം സുരക്ഷിതമായി ബാങ്കിൽ നിക്ഷേപിക്കുക.'
      },
      {
        id: 'w18_3',
        english: 'Withdraw',
        malayalam: 'പണം പിൻവലിക്കുക',
        phoneticMalayalam: 'വിത്ത്‌ഡ്രോ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Withdraw cash from the nearby ATM.',
        exampleSentenceMl: 'അടുത്തുള്ള എടിഎമ്മിൽ നിന്ന് പണം പിൻവലിക്കുക.'
      },
      {
        id: 'w18_4',
        english: 'Transfer',
        malayalam: 'പണം കൈമാറുക',
        phoneticMalayalam: 'ട്രാൻസ്ഫർ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Transfer funds using UPI mobile app.',
        exampleSentenceMl: 'യുപിഐ വഴി പണം കൈമാറുക.'
      },
      {
        id: 'w18_5',
        english: 'Interest',
        malayalam: 'പലിശ / താല്പര്യം',
        phoneticMalayalam: 'ഇന്ററസ്റ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Fixed deposits earn good interest rate.',
        exampleSentenceMl: 'സ്ഥിരനിക്ഷേപങ്ങൾക്ക് നല്ല പലിശ ലഭിക്കുന്നു.'
      },
      {
        id: 'w18_6',
        english: 'Investment',
        malayalam: 'നിക്ഷേപം / മുതൽമുടക്ക്',
        phoneticMalayalam: 'ഇൻവെസ്റ്റ്മെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Mutual funds are smart long-term investments.',
        exampleSentenceMl: 'മ്യൂച്വൽ ഫണ്ടുകൾ നല്ലൊരു ദീർഘകാല നിക്ഷേപമാണ്.'
      },
      {
        id: 'w18_7',
        english: 'Currency',
        malayalam: 'നാണയം / കറൻസി',
        phoneticMalayalam: 'കറൻസി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Rupee is the official currency of India.',
        exampleSentenceMl: 'രൂപയാണ് ഇന്ത്യയുടെ ഔദ്യോഗിക നാണയം.'
      },
      {
        id: 'w18_8',
        english: 'Loan',
        malayalam: 'വായ്പ / കടം',
        phoneticMalayalam: 'ലോൺ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He applied for an education loan.',
        exampleSentenceMl: 'അവൻ വിദ്യാഭ്യാസ വായ്പയ്ക്കായി അപേക്ഷിച്ചു.'
      },
      {
        id: 'w18_9',
        english: 'Statement',
        malayalam: 'കണക്ക് പത്രിക / സ്റ്റേറ്റ്മെന്റ്',
        phoneticMalayalam: 'സ്റ്റേറ്റ്മെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Download your monthly bank statement.',
        exampleSentenceMl: 'നിങ്ങളുടെ മാസാവസാന സ്റ്റേറ്റ്മെന്റ് ഡൗൺലോഡ് ചെയ്യുക.'
      },
      {
        id: 'w18_10',
        english: 'Cashier',
        malayalam: 'പണം കൈകാര്യം ചെയ്യുന്നയാൾ / കാഷ്യർ',
        phoneticMalayalam: 'കാഷ്യർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Pay the bill directly to the cashier.',
        exampleSentenceMl: 'കാഷ്യറുടെ പക്കൽ നേരിട്ട് പണം അടയ്ക്കുക.'
      }
    ]
  },
  {
    id: 19,
    titleMl: 'ജോലി അഭിമുഖങ്ങളും കരിയറും',
    titleEn: 'Job & Career Success',
    descriptionMl: 'ഇന്റർവ്യൂവിലും കരിയറിലും ജയിക്കാൻ ആവശ്യമായ 10 വാക്കുകൾ',
    iconName: 'Award',
    words: [
      {
        id: 'w19_1',
        english: 'Resume',
        malayalam: 'ബയോഡാറ്റ / പ്രൊഫൈൽ',
        phoneticMalayalam: 'റെസ്യൂമെ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Update your resume with new skills.',
        exampleSentenceMl: 'പുതിയ കഴിവുകൾ ഉൾപ്പെടുത്തി ബയോഡാറ്റ പുതുക്കുക.'
      },
      {
        id: 'w19_2',
        english: 'Qualification',
        malayalam: 'വിദ്യാഭ്യാസ യോഗ്യത',
        phoneticMalayalam: 'ക്വാളിഫിക്കേഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'What is your highest educational qualification?',
        exampleSentenceMl: 'നിങ്ങളുടെ ഉയർന്ന വിദ്യാഭ്യാസ യോഗ്യത എന്താണ്?'
      },
      {
        id: 'w19_3',
        english: 'Strengths',
        malayalam: 'കഴിവുകൾ / കരുത്തുകൾ',
        phoneticMalayalam: 'സ്ട്രെങ്ത്സ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Describe your key strengths in interview.',
        exampleSentenceMl: 'അഭിമുഖത്തിൽ നിങ്ങളുടെ പ്രധാന കഴിവുകൾ വ്യക്തമാക്കുക.'
      },
      {
        id: 'w19_4',
        english: 'Opportunity',
        malayalam: 'അവസരം',
        phoneticMalayalam: 'ഓപ്പർച്യൂണിറ്റി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Never miss a good opportunity to learn.',
        exampleSentenceMl: 'പഠിക്കാനുള്ള നല്ലൊരു അവസരവും പാഴാക്കരുത്.'
      },
      {
        id: 'w19_5',
        english: 'Promotion',
        malayalam: 'സ്ഥാനക്കയറ്റം / ഉയർച്ച',
        phoneticMalayalam: 'പ്രമോഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'She got a promotion to manager post.',
        exampleSentenceMl: 'അവർക്ക് മാനേജർ തസ്തികയിലേക്ക് സ്ഥാനക്കയറ്റം ലഭിച്ചു.'
      },
      {
        id: 'w19_6',
        english: 'Professional',
        malayalam: 'കാര്യപ്രാപ്തിയുള്ള / പ്രൊഫഷണൽ',
        phoneticMalayalam: 'പ്രൊഫഷണൽ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Always maintain professional behavior.',
        exampleSentenceMl: 'എപ്പോഴും കാര്യപ്രാപ്തിയോടെയും മാന്യമായും പെരുമാറുക.'
      },
      {
        id: 'w19_7',
        english: 'Confidence',
        malayalam: 'ആത്മവിശ്വാസം',
        phoneticMalayalam: 'കോൺഫിഡൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Speak with confidence and clarity.',
        exampleSentenceMl: 'ആത്മവിശ്വാസത്തോടും വ്യക്തതയോടും സംസാരിക്കുക.'
      },
      {
        id: 'w19_8',
        english: 'Ability',
        malayalam: 'പ്രാപ്തി / സാമർത്ഥ്യം',
        phoneticMalayalam: 'എബിലിറ്റി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Believe in your ability to succeed.',
        exampleSentenceMl: 'വിജയിക്കാനുള്ള നിങ്ങളുടെ പ്രാപ്തിയിൽ വിശ്വസിക്കുക.'
      },
      {
        id: 'w19_9',
        english: 'Achievement',
        malayalam: 'നേട്ടം / സുകൃതം',
        phoneticMalayalam: 'അച്ചീവ്മെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Passing the exam was a proud achievement.',
        exampleSentenceMl: 'പരീക്ഷ ജയിച്ചത് അഭിമാനകരമായൊരു നേട്ടമായിരുന്നു.'
      },
      {
        id: 'w19_10',
        english: 'Future',
        malayalam: 'ഭാവി / വരുംകാലം',
        phoneticMalayalam: 'ഫ്യൂച്ചർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'English skills secure your future career.',
        exampleSentenceMl: 'ഇംഗ്ലീഷ് ഭാഷാ വൈദഗ്ദ്ധ്യം നിങ്ങളുടെ ഭാവിയെ സുരക്ഷിതമാക്കുന്നു.'
      }
    ]
  },
  {
    id: 20,
    titleMl: 'സ്മാർട്ട് സംഭാഷണ പ്രയോഗങ്ങൾ',
    titleEn: 'Smart Real-life Expressions',
    descriptionMl: 'ദൈനംദിന ഇംഗ്ലീഷ് സംസാരത്തിൽ ജീവൻ നൽകുന്ന 10 പ്രയോഗങ്ങൾ',
    iconName: 'Sparkles',
    words: [
      {
        id: 'w20_1',
        english: 'Absolutely',
        malayalam: 'തീർച്ചയായും / തികച്ചും ശരിയാണ്',
        phoneticMalayalam: 'അബ്‌സൊല്യൂട്ട്‌ലി',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'You are absolutely right.',
        exampleSentenceMl: 'നിങ്ങൾ പറഞ്ഞത് തികച്ചും ശരിയാണ്.'
      },
      {
        id: 'w20_2',
        english: 'No problem',
        malayalam: 'ഒരു കുഴപ്പവുമില്ല / സാരമില്ല',
        phoneticMalayalam: 'നോ പ്രോബ്ലം',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'No problem, I can do it easily.',
        exampleSentenceMl: 'ഒരു കുഴപ്പവുമില്ല, എനിക്ക് ഇത് എളുപ്പത്തിൽ ചെയ്യാം.'
      },
      {
        id: 'w20_3',
        english: 'Keep in touch',
        malayalam: 'ബന്ധപ്പെടാൻ മറക്കരുത്',
        phoneticMalayalam: 'കീപ്പ് ഇൻ ടച്ച്',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'Goodbye, please keep in touch!',
        exampleSentenceMl: 'വിട, ഇടയ്ക്ക് വിളിക്കാനും സംസാരിക്കാനും മറക്കരുത്!'
      },
      {
        id: 'w20_4',
        english: 'Make sense',
        malayalam: 'അർത്ഥവത്താണ് / യുക്തിസഹമാണ്',
        phoneticMalayalam: 'മേക്ക് സെൻസ്',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'Your explanation makes complete sense.',
        exampleSentenceMl: 'നിങ്ങളുടെ വിശദീകരണം വളരെ യുക്തിസഹമാണ്.'
      },
      {
        id: 'w20_5',
        english: 'Never mind',
        malayalam: 'സാരമില്ല / കാര്യമാക്കേണ്ട',
        phoneticMalayalam: 'നെവർ മൈൻഡ്',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'Never mind, we will try again.',
        exampleSentenceMl: 'സാരമില്ല, നമുക്ക് വീണ്ടും ശ്രമിക്കാം.'
      },
      {
        id: 'w20_6',
        english: 'Take your time',
        malayalam: 'സാവാധാനം മതി / തിടുക്കം വേണ്ട',
        phoneticMalayalam: 'ടേക്ക് യുവർ ടൈം',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'Take your time to decide.',
        exampleSentenceMl: 'തീരുമാനമെടുക്കാൻ സാവകാശം എടുത്തോളൂ.'
      },
      {
        id: 'w20_7',
        english: 'Good luck',
        malayalam: 'വിജയാശംസകൾ',
        phoneticMalayalam: 'ഗുഡ് ലക്ക്',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'Good luck for your new beginning!',
        exampleSentenceMl: 'നിങ്ങളുടെ പുതിയ തുടക്കത്തിന് വിജയാശംസകൾ!'
      },
      {
        id: 'w20_8',
        english: 'By the way',
        malayalam: 'അതിനിടയിൽ പറയുകയാണെങ്കിൽ / അതവിടെ നിൽക്കട്ടെ',
        phoneticMalayalam: 'ബൈ ദ വേ',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'By the way, what is your name?',
        exampleSentenceMl: 'അതിനിടയിൽ ചോദിക്കട്ടെ, എന്താണ് നിങ്ങളുടെ പേര്?'
      },
      {
        id: 'w20_9',
        english: 'Congratulations',
        malayalam: 'ഹൃദ്യമായ അഭിനന്ദനങ്ങൾ',
        phoneticMalayalam: 'കൺഗ്രാജുലേഷൻസ്',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'Congratulations on winning the match!',
        exampleSentenceMl: 'മത്സരം വിജയിച്ചതിന് ഹൃദ്യമായ അഭിനന്ദനങ്ങൾ!'
      },
      {
        id: 'w20_10',
        english: 'See you soon',
        malayalam: 'വേഗം തന്നെ വീണ്ടും കാണാം',
        phoneticMalayalam: 'സീ യു സൂൺ',
        partOfSpeech: 'പ്രയോഗം (Phrase)',
        exampleSentenceEn: 'Take care, see you soon!',
        exampleSentenceMl: 'ശ്രദ്ധിക്കൂ, നമുക്ക് വേഗം തന്നെ വീണ്ടും കാണാം!'
      }
    ]
  },
  {
    id: 21,
    titleMl: 'ഹോട്ടലും ഭക്ഷണശാലകളും',
    titleEn: 'Hotel & Restaurant Dining',
    descriptionMl: 'റെസ്റ്റോറന്റിലും ഹോട്ടലുകളിലും ഭക്ഷണം ഓർഡർ ചെയ്യാനും സംസാരിക്കാനുമുള്ള 10 പദങ്ങൾ',
    iconName: 'UtensilsCrossed',
    words: [
      {
        id: 'w21_1',
        english: 'Menu',
        malayalam: 'വിഭവപ്പട്ടിക / മെനു',
        phoneticMalayalam: 'മെനു',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'May I see the food menu, please?',
        exampleSentenceMl: 'ദയവായി ഭക്ഷണ മെനു ഒന്ന് തരുമോ?'
      },
      {
        id: 'w21_2',
        english: 'Order',
        malayalam: 'ഓർഡർ ചെയ്യുക / ആവശ്യപ്പെടുക',
        phoneticMalayalam: 'ഓർഡർ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Are you ready to order now?',
        exampleSentenceMl: 'നിങ്ങൾ ഇപ്പോൾ ഓർഡർ ചെയ്യാൻ തയ്യാറാണോ?'
      },
      {
        id: 'w21_3',
        english: 'Delicious',
        malayalam: 'വളരെ രുചികരമായ',
        phoneticMalayalam: 'ഡെലീഷ്യസ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'The traditional biryani was delicious.',
        exampleSentenceMl: 'പരമ്പരാഗത ബിരിയാണി വളരെ രുചികരമായിരുന്നു.'
      },
      {
        id: 'w21_4',
        english: 'Bill',
        malayalam: 'ബിൽ / തുക രേഖപ്പെടുത്തിയ പത്രിക',
        phoneticMalayalam: 'ബിൽ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Could we get the bill, please?',
        exampleSentenceMl: 'ഞങ്ങൾക്ക് ബിൽ ഒന്നു നൽകാമോ?'
      },
      {
        id: 'w21_5',
        english: 'Reservation',
        malayalam: 'മുൻകൂട്ടി ബുക്ക് ചെയ്യൽ / റിസർവേഷൻ',
        phoneticMalayalam: 'റിസർവേഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'I have a dinner reservation for two.',
        exampleSentenceMl: 'എനിക്ക് രണ്ടുപേർക്ക് അത്താഴത്തിന് റിസർവേഷനുണ്ട്.'
      },
      {
        id: 'w21_6',
        english: 'Waiter',
        malayalam: 'സൽക്കാരകൻ / പരിചാരകൻ (വെയ്റ്റർ)',
        phoneticMalayalam: 'വെയ്റ്റർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The waiter served our meal with a warm smile.',
        exampleSentenceMl: 'പരിചാരകൻ പുഞ്ചിരിയോടെ ഞങ്ങൾക്ക് ഭക്ഷണം വിളമ്പി.'
      },
      {
        id: 'w21_7',
        english: 'Spicy',
        malayalam: 'എരിവുള്ള',
        phoneticMalayalam: 'സ്പൈസി',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Kerala curries are known to be spicy and rich.',
        exampleSentenceMl: 'കേരള കറികൾ എരിവുള്ളതിനും സ്വാദിഷ്ടമായതിനും പേരുകേട്ടതാണ്.'
      },
      {
        id: 'w21_8',
        english: 'Beverage',
        malayalam: 'പാനീയം',
        phoneticMalayalam: 'ബെവറേജ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Would you like a hot beverage or juice?',
        exampleSentenceMl: 'നിങ്ങൾക്ക് ചൂടുള്ള പാനീയമാണോ അതോ ജ്യൂസ് ആണോ വേണ്ടത്?'
      },
      {
        id: 'w21_9',
        english: 'Dessert',
        malayalam: 'മധുരപലഹാരം (ഭക്ഷണശേഷമുള്ള മധുരം)',
        phoneticMalayalam: 'ഡിസേർട്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We enjoyed chocolate ice cream for dessert.',
        exampleSentenceMl: 'ഞങ്ങൾ ഭക്ഷണശേഷം മധുരത്തിനായി ചോക്ലേറ്റ് ഐസ്ക്രീം ആസ്വദിച്ചു.'
      },
      {
        id: 'w21_10',
        english: 'Recipe',
        malayalam: 'പാചകക്കുറിപ്പ് / നിർമ്മാണരീതി',
        phoneticMalayalam: 'റെസിപ്പി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Can you share this wonderful fish curry recipe?',
        exampleSentenceMl: 'ഈ മനോഹരമായ മീൻകറി പാചകക്കുറിപ്പ് പങ്കുവെക്കാമോ?'
      }
    ]
  },
  {
    id: 22,
    titleMl: 'അടിയന്തര ഘട്ടങ്ങളും സുരക്ഷയും',
    titleEn: 'Emergency & Safety',
    descriptionMl: 'അടിയന്തര ആവശ്യങ്ങളിലും അപകടങ്ങളിലും ഉപയോഗിക്കുന്ന 10 പ്രധാന പദങ്ങൾ',
    iconName: 'ShieldAlert',
    words: [
      {
        id: 'w22_1',
        english: 'Danger',
        malayalam: 'അപകടം / ആപത്ത്',
        phoneticMalayalam: 'ഡേയ്ഞ്ചർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Stay alert when you see a danger sign.',
        exampleSentenceMl: 'അപകട സൂചന കാണുമ്പോൾ ജാഗ്രത പാലിക്കുക.'
      },
      {
        id: 'w22_2',
        english: 'Ambulance',
        malayalam: 'ആംബുലൻസ് (രോഗിവാഹനം)',
        phoneticMalayalam: 'ആംബുലൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Call an ambulance immediately!',
        exampleSentenceMl: 'ഉടൻ തന്നെ ഒരു ആംബുലൻസ് വിളിക്കൂ!'
      },
      {
        id: 'w22_3',
        english: 'Police',
        malayalam: 'പോലീസ് / കാവൽസേന',
        phoneticMalayalam: 'പോലീസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The police arrived quickly to help us.',
        exampleSentenceMl: 'ഞങ്ങളെ സഹായിക്കാൻ പോലീസ് വേഗത്തിൽ എത്തി.'
      },
      {
        id: 'w22_4',
        english: 'Safe',
        malayalam: 'സുരക്ഷിതമായ / ഭയമില്ലാത്ത',
        phoneticMalayalam: 'സേഫ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Wear a helmet to stay safe on roads.',
        exampleSentenceMl: 'റോഡിൽ സുരക്ഷിതമായിരിക്കാൻ ഹെൽമെറ്റ് ധരിക്കുക.'
      },
      {
        id: 'w22_5',
        english: 'Careful',
        malayalam: 'ശ്രദ്ധയോടെയുള്ള / ജാഗ്രതയുള്ള',
        phoneticMalayalam: 'കെയർഫുൾ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Be careful while crossing the highway.',
        exampleSentenceMl: 'ഹൈവേ മുറിച്ചുകടക്കുമ്പോൾ ശ്രദ്ധയോടെയിരിക്കുക.'
      },
      {
        id: 'w22_6',
        english: 'Accident',
        malayalam: 'അപകടം / ആകസ്മിക സംഭവം',
        phoneticMalayalam: 'ആക്സിഡന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Drive slow to prevent any road accident.',
        exampleSentenceMl: 'റോഡപകടങ്ങൾ ഒഴിവാക്കാൻ വേഗത കുറച്ച് വാഹനം ഓടിക്കുക.'
      },
      {
        id: 'w22_7',
        english: 'Protect',
        malayalam: 'സംരക്ഷിക്കുക / കാത്തുസൂക്ഷിക്കുക',
        phoneticMalayalam: 'പ്രൊട്ടക്ട്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'We must protect our environment and children.',
        exampleSentenceMl: 'നാം നമ്മുടെ പരിസ്ഥിതിയെയും കുട്ടികളെയും സംരക്ഷിക്കണം.'
      },
      {
        id: 'w22_8',
        english: 'Alert',
        malayalam: 'ജാഗ്രതയുള്ള / മുന്നറിയിപ്പ്',
        phoneticMalayalam: 'അലർട്ട്',
        partOfSpeech: 'വിശേഷണം / നാമം',
        exampleSentenceEn: 'The weather department issued a storm alert.',
        exampleSentenceMl: 'കാലാവസ്ഥാ നിരീക്ഷണ കേന്ദ്രം കൊടുങ്കാറ്റ് മുന്നറിയിപ്പ് നൽകി.'
      },
      {
        id: 'w22_9',
        english: 'Escape',
        malayalam: 'രക്ഷപ്പെടുക / ഒഴിഞ്ഞുമാറുക',
        phoneticMalayalam: 'എസ്കേപ്പ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Everyone managed to escape safely from the fire.',
        exampleSentenceMl: 'തീപിടുത്തത്തിൽ നിന്ന് എല്ലാവരും സുരക്ഷിതമായി രക്ഷപ്പെട്ടു.'
      },
      {
        id: 'w22_10',
        english: 'Rescue',
        malayalam: 'രക്ഷപ്പെടുത്തുക / രക്ഷാപ്രവർത്തനം',
        phoneticMalayalam: 'റെസ്ക്യൂ',
        partOfSpeech: 'ക്രിയ / നാമം',
        exampleSentenceEn: 'The rescue team saved flood survivors.',
        exampleSentenceMl: 'രക്ഷാപ്രവർത്തക സംഘം വെള്ളപ്പൊക്കത്തിൽ പെട്ടവരെ രക്ഷപ്പെടുത്തി.'
      }
    ]
  },
  {
    id: 23,
    titleMl: 'ബിസിനസും ഔദ്യോഗിക മീറ്റിംഗുകളും',
    titleEn: 'Business & Professional Meetings',
    descriptionMl: 'ഓഫീസ് ചർച്ചകളിലും വ്യവസായ ഇടപാടുകളിലും അറിഞ്ഞിരിക്കേണ്ട 10 പദങ്ങൾ',
    iconName: 'Briefcase',
    words: [
      {
        id: 'w23_1',
        english: 'Meeting',
        malayalam: 'യോഗം / കൂടിക്കാഴ്ച',
        phoneticMalayalam: 'മീറ്റിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Our staff meeting begins at 10 AM.',
        exampleSentenceMl: 'ഞങ്ങളുടെ ജീവനക്കാരുടെ യോഗം രാവിലെ 10 മണിക്ക് ആരംഭിക്കും.'
      },
      {
        id: 'w23_2',
        english: 'Presentation',
        malayalam: 'അവതരണം / പ്രസന്റേഷൻ',
        phoneticMalayalam: 'പ്രസന്റേഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Her business presentation was very impressive.',
        exampleSentenceMl: 'അവളുടെ ബിസിനസ് അവതരണം വളരെ ആകർഷകമായിരുന്നു.'
      },
      {
        id: 'w23_3',
        english: 'Agreement',
        malayalam: 'കരാർ / യോജിപ്പ് / സമ്മതം',
        phoneticMalayalam: 'എഗ്രിമെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Both companies signed the official agreement.',
        exampleSentenceMl: 'ഇരു കമ്പനികളും ഔദ്യോഗിക കരാറിൽ ഒപ്പുവെച്ചു.'
      },
      {
        id: 'w23_4',
        english: 'Client',
        malayalam: 'ഇടപാടുകാരൻ / ഉപഭോക്താവ്',
        phoneticMalayalam: 'ക്ലയന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The client liked our project delivery.',
        exampleSentenceMl: 'ഞങ്ങളുടെ പ്രോജക്റ്റ് നിർവ്വഹണം ക്ലയന്റിന് വളരെയധികം ബോധിച്ചു.'
      },
      {
        id: 'w23_5',
        english: 'Deadline',
        malayalam: 'അവസാന തീയതി / സമയപരിധി',
        phoneticMalayalam: 'ഡെഡ്‌ലൈൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Submit your reports before the Friday deadline.',
        exampleSentenceMl: 'വെള്ളിയാഴ്ചത്തെ സമയപരിധിക്ക് മുൻപ് റിപ്പോർട്ടുകൾ സമർപ്പിക്കുക.'
      },
      {
        id: 'w23_6',
        english: 'Proposal',
        malayalam: 'നിർദ്ദേശം / പ്രൊപ്പോസൽ',
        phoneticMalayalam: 'പ്രൊപ്പോസൽ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The board approved our new project proposal.',
        exampleSentenceMl: 'ഡയറക്ടർ ബോർഡ് ഞങ്ങളുടെ പുതിയ പ്രോജക്റ്റ് നിർദ്ദേശം അംഗീകരിച്ചു.'
      },
      {
        id: 'w23_7',
        english: 'Discuss',
        malayalam: 'ചർച്ച ചെയ്യുക',
        phoneticMalayalam: 'ഡിസ്കസ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Let us discuss the strategy in detail tomorrow.',
        exampleSentenceMl: 'നാളെ നമുക്ക് തന്ത്രങ്ങളെക്കുറിച്ച് വിശദമായി ചർച്ച ചെയ്യാം.'
      },
      {
        id: 'w23_8',
        english: 'Feedback',
        malayalam: 'അഭിപ്രായം / പ്രതികരണം',
        phoneticMalayalam: 'ഫീഡ്‌ബാക്ക്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Constructive feedback helps our work improve.',
        exampleSentenceMl: 'ഗുണപരമായ അഭിപ്രായങ്ങൾ ജോലി മെച്ചപ്പെടുത്താൻ സഹായിക്കും.'
      },
      {
        id: 'w23_9',
        english: 'Strategy',
        malayalam: 'തന്ത്രം / പ്രവർത്തന പദ്ധതി',
        phoneticMalayalam: 'സ്ട്രാറ്റജി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'A good marketing strategy brings higher growth.',
        exampleSentenceMl: 'നല്ലൊരു വിപണന തന്ത്രം കൂടുതൽ വളർച്ച കൈവരിക്കും.'
      },
      {
        id: 'w23_10',
        english: 'Success',
        malayalam: 'വിജയം / നേട്ടം',
        phoneticMalayalam: 'സക്സസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Hard work and persistence lead to success.',
        exampleSentenceMl: 'കഠിനാധ്വാനവും സ്ഥിരതയും വിജയത്തിലേക്ക് നയിക്കുന്നു.'
      }
    ]
  },
  {
    id: 24,
    titleMl: 'മാധ്യമങ്ങളും സോഷ്യൽ മീഡിയയും',
    titleEn: 'Media, News & Internet',
    descriptionMl: 'വാർത്തകൾ, സോഷ്യൽ മീഡിയ, ഇൻറർനെറ്റ് ലോകത്തെ 10 അത്യാവശ്യ വാക്കുകൾ',
    iconName: 'Tv',
    words: [
      {
        id: 'w24_1',
        english: 'News',
        malayalam: 'വാർത്ത / വിവരങ്ങൾ',
        phoneticMalayalam: 'ന്യൂസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'I watch the evening news regularly.',
        exampleSentenceMl: 'ഞാൻ വൈകുന്നേരത്തെ വാർത്തകൾ പതിവായി കാണാറുണ്ട്.'
      },
      {
        id: 'w24_2',
        english: 'Article',
        malayalam: 'ലേഖനം / പത്രക്കുറിപ്പ്',
        phoneticMalayalam: 'ആർട്ടിക്കിൾ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He wrote an interesting article on English learning.',
        exampleSentenceMl: 'ഇംഗ്ലീഷ് പഠനത്തെക്കുറിച്ച് അദ്ദേഹം കൗതുകകരമായ ഒരു ലേഖനം എഴുതി.'
      },
      {
        id: 'w24_3',
        english: 'Camera',
        malayalam: 'ക്യാമറ (ചിത്രഗ്രാഹി)',
        phoneticMalayalam: 'ക്യാമറ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Smile looking at the camera lens.',
        exampleSentenceMl: 'ക്യാമറ ലെൻസിലേക്ക് നോക്കി പുഞ്ചിരിക്കൂ.'
      },
      {
        id: 'w24_4',
        english: 'Message',
        malayalam: 'സന്ദേശം / മെസ്സേജ്',
        phoneticMalayalam: 'മെസ്സേജ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'I sent you a WhatsApp message this morning.',
        exampleSentenceMl: 'ഇന്ന് രാവിലെ ഞാൻ നിങ്ങൾക്ക് ഒരു വാട്സ്ആപ്പ് സന്ദേശം അയച്ചിരുന്നു.'
      },
      {
        id: 'w24_5',
        english: 'Video',
        malayalam: 'ചലച്ചിത്ര ദൃശ്യം / വീഡിയോ',
        phoneticMalayalam: 'വീഡിയോ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'This educational video explains grammar simply.',
        exampleSentenceMl: 'ഈ വിദ്യാഭ്യാസ വീഡിയോ വ്യാകരണം വളരെ ലളിതമായി വിശദീകരിക്കുന്നു.'
      },
      {
        id: 'w24_6',
        english: 'Connect',
        malayalam: 'ബന്ധിപ്പിക്കുക / ബന്ധപ്പെടുക',
        phoneticMalayalam: 'കണക്ട്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Social media helps us connect with distant relatives.',
        exampleSentenceMl: 'വിദൂരത്തുള്ള ബന്ധുക്കളുമായി ബന്ധപ്പെടാൻ സോഷ്യൽ മീഡിയ നമ്മെ സഹായിക്കുന്നു.'
      },
      {
        id: 'w24_7',
        english: 'Follower',
        malayalam: 'പിന്തുടരുന്നയാൾ / ഫോളോവർ',
        phoneticMalayalam: 'ഫോളോവർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'His travel channel reached one million followers.',
        exampleSentenceMl: 'അദ്ദേഹത്തിന്റെ യാത്രാ ചാനൽ പത്ത് ലക്ഷം ഫോളോവർമാരിലെത്തി.'
      },
      {
        id: 'w24_8',
        english: 'Broadcast',
        malayalam: 'പ്രക്ഷേപണം ചെയ്യുക / സംപ്രേഷണം',
        phoneticMalayalam: 'ബ്രോഡ്കാസ്റ്റ്',
        partOfSpeech: 'ക്രിയ / നാമം',
        exampleSentenceEn: 'The radio broadcast begins at 7 o’clock.',
        exampleSentenceMl: 'റേഡിയോ പ്രക്ഷേപണം 7 മണിക്ക് ആരംഭിക്കുന്നു.'
      },
      {
        id: 'w24_9',
        english: 'Information',
        malayalam: 'വിവരം / വിജ്ഞാനം',
        phoneticMalayalam: 'ഇൻഫർമേഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Check the official website for reliable information.',
        exampleSentenceMl: 'വിശ്വസനീയമായ വിവരങ്ങൾക്കായി ഔദ്യോഗിക വെബ്സൈറ്റ് പരിശോധിക്കുക.'
      },
      {
        id: 'w24_10',
        english: 'Publish',
        malayalam: 'പ്രസിദ്ധീകരിക്കുക / പുറത്തിറക്കുക',
        phoneticMalayalam: 'പബ്ലിഷ്',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'She decided to publish her poetry book.',
        exampleSentenceMl: 'അവൾ തന്റെ കവിതാ സമാഹാരം പ്രസിദ്ധീകരിക്കാൻ തീരുമാനിച്ചു.'
      }
    ]
  },
  {
    id: 25,
    titleMl: 'പരിസ്ഥിതിയും പ്രകൃതി സംരക്ഷണവും',
    titleEn: 'Environment & Ecology',
    descriptionMl: 'മരങ്ങൾ, നദികൾ, പ്രകൃതി സംരക്ഷണം എന്നിവയുമായി ബന്ധപ്പെട്ട 10 പദങ്ങൾ',
    iconName: 'Leaf',
    words: [
      {
        id: 'w25_1',
        english: 'Forest',
        malayalam: 'കാട് / വനം',
        phoneticMalayalam: 'ഫോറസ്റ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Wayanad is known for its lush green forests.',
        exampleSentenceMl: 'വയനാട് പച്ചനിറമാർന്ന നിബിഡ വനങ്ങൾക്ക് പേരുകേട്ടതാണ്.'
      },
      {
        id: 'w25_2',
        english: 'River',
        malayalam: 'നദി / പുഴ',
        phoneticMalayalam: 'റിവർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Periyar is the longest river in Kerala.',
        exampleSentenceMl: 'പെരിയാർ കേരളത്തിലെ ഏറ്റവും നീളം കൂടിയ നദിയാണ്.'
      },
      {
        id: 'w25_3',
        english: 'Ocean',
        malayalam: 'മഹാസമുദ്രം / കടൽ',
        phoneticMalayalam: 'ഓഷ്യൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The Arabian Sea ocean breeze cools the coast.',
        exampleSentenceMl: 'അറബിക്കടലിലെ കാറ്റ് തീരപ്രദേശത്തെ തണുപ്പിക്കുന്നു.'
      },
      {
        id: 'w25_4',
        english: 'Pollution',
        malayalam: 'മലിനീകരണം',
        phoneticMalayalam: 'പൊലൂഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Planting trees reduces air pollution significantly.',
        exampleSentenceMl: 'മരങ്ങൾ വെച്ചുപിടിപ്പിക്കുന്നത് വായു മലിനീകരണം വളരെയധികം കുറയ്ക്കുന്നു.'
      },
      {
        id: 'w25_5',
        english: 'Plant',
        malayalam: 'ചെടി / നടുക',
        phoneticMalayalam: 'പ്ലാന്റ്',
        partOfSpeech: 'നാമം / ക്രിയ',
        exampleSentenceEn: 'Water your garden plants every morning.',
        exampleSentenceMl: 'എല്ലാ ദിവസവും രാവിലെ നിങ്ങളുടെ പൂന്തോട്ടത്തിലെ ചെടികൾ നനയ്ക്കുക.'
      },
      {
        id: 'w25_6',
        english: 'Mountain',
        malayalam: 'പർവ്വതം / മല',
        phoneticMalayalam: 'മൗണ്ടൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Anamudi is the highest mountain peak in South India.',
        exampleSentenceMl: 'ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടിയാണ് ആനമുടി.'
      },
      {
        id: 'w25_7',
        english: 'Recycle',
        malayalam: 'പുനരുപയോഗിക്കുക / റീസൈക്കിൾ ചെയ്യുക',
        phoneticMalayalam: 'റീസൈക്കിൾ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'We should recycle plastic waste responsibly.',
        exampleSentenceMl: 'പ്ലാസ്റ്റിക് മാലിന്യങ്ങൾ നാം ഉത്തരവാദിത്തത്തോടെ പുനരുപയോഗിക്കണം.'
      },
      {
        id: 'w25_8',
        english: 'Climate',
        malayalam: 'കാലാവസ്ഥ / പ്രകൃതി വ്യവസ്ഥ',
        phoneticMalayalam: 'ക്ലൈമറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Climate change is a crucial global challenge.',
        exampleSentenceMl: 'കാലാവസ്ഥാ വ്യതിയാനം ഒരു പ്രധാന ആഗോള വെല്ലുവിളിയാണ്.'
      },
      {
        id: 'w25_9',
        english: 'Energy',
        malayalam: 'ഊർജ്ജം / ശക്തി',
        phoneticMalayalam: 'എനർജി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Solar panels harness clean renewable energy.',
        exampleSentenceMl: 'സോളാർ പാനലുകൾ ശുദ്ധമായ പുനരുപയോഗ ഊർജ്ജം പ്രയോജനപ്പെടുത്തുന്നു.'
      },
      {
        id: 'w25_10',
        english: 'Wildlife',
        malayalam: 'വന്യജീവികൾ / കാട്ടുജീവികൾ',
        phoneticMalayalam: 'വൈൽഡ്‌ലൈഫ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Periyar sanctuary protects magnificent wildlife.',
        exampleSentenceMl: 'പെരിയാർ വന്യജീവി സങ്കേതം വിസ്മയകരമായ കാട്ടുജീവികളെ സംരക്ഷിക്കുന്നു.'
      }
    ]
  },
  {
    id: 26,
    titleMl: 'കല, സംഗീതം, സാഹിത്യം',
    titleEn: 'Arts, Music & Literature',
    descriptionMl: 'സംഗീതം, ചിത്രകല, കഥകൾ, സാഹിത്യം എന്നിവയിലെ 10 മനോഹര പദങ്ങൾ',
    iconName: 'Palette',
    words: [
      {
        id: 'w26_1',
        english: 'Song',
        malayalam: 'പാട്ട് / ഗാനം',
        phoneticMalayalam: 'സോംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'She sang a melodious Malayalam song.',
        exampleSentenceMl: 'അവൾ മധുരമായ ഒരു മലയാള ഗാനം പാടി.'
      },
      {
        id: 'w26_2',
        english: 'Dance',
        malayalam: 'നൃത്തം / നൃത്തം ചെയ്യുക',
        phoneticMalayalam: 'ഡാൻസ്',
        partOfSpeech: 'നാമം / ക്രിയ',
        exampleSentenceEn: 'Kathakali is a world-famous classical dance of Kerala.',
        exampleSentenceMl: 'കഥകളി കേരളത്തിന്റെ ലോകപ്രശസ്തമായ ക്ലാസിക്കൽ നൃത്തരൂപമാണ്.'
      },
      {
        id: 'w26_3',
        english: 'Painting',
        malayalam: 'ചിത്രകല / പെയിന്റിംഗ്',
        phoneticMalayalam: 'പെയിന്റിംഗ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Raja Ravi Varma was renowned for oil painting.',
        exampleSentenceMl: 'രാജാ രവിവർമ്മ ഓയിൽ പെയിന്റിംഗിന് പേരുകേട്ടയാളാണ്.'
      },
      {
        id: 'w26_4',
        english: 'Culture',
        malayalam: 'സംസ്കാരം / പാരമ്പര്യം',
        phoneticMalayalam: 'കൾച്ചർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We take pride in our rich culture and heritage.',
        exampleSentenceMl: 'നമ്മുടെ സമ്പന്നമായ സംസ്കാരത്തിലും പൈതൃകത്തിലും നാം അഭിമാനിക്കുന്നു.'
      },
      {
        id: 'w26_5',
        english: 'Instrument',
        malayalam: 'സംഗീതോപകരണം / ഉപകരണം',
        phoneticMalayalam: 'ഇൻസ്ട്രുമെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'He plays the flute and violin instrument skillfully.',
        exampleSentenceMl: 'അവൻ പുല്ലാങ്കുഴലും വയലിനും നൈപുണ്യത്തോടെ വായിക്കുന്നു.'
      },
      {
        id: 'w26_6',
        english: 'Story',
        malayalam: 'കഥ / വിവരണം',
        phoneticMalayalam: 'സ്റ്റോറി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Grandmother told an enchanting bedtime story.',
        exampleSentenceMl: 'മുത്തശ്ശി ഉറങ്ങാൻ നേരം ഒരു മാന്ത്രിക കഥ പറഞ്ഞുതന്നു.'
      },
      {
        id: 'w26_7',
        english: 'Rhythm',
        malayalam: 'താളം / താളലയം',
        phoneticMalayalam: 'റിഥം',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The traditional Chenda drums have an energetic rhythm.',
        exampleSentenceMl: 'പരമ്പരാഗത ചെണ്ടമേളത്തിന് അത്യുഗ്രൻ താളമുണ്ട്.'
      },
      {
        id: 'w26_8',
        english: 'Theater',
        malayalam: 'നാടകവേദി / തിയേറ്റർ',
        phoneticMalayalam: 'തിയേറ്റർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We watched a brilliant drama in the city theater.',
        exampleSentenceMl: 'നഗരത്തിലെ തിയേറ്ററിൽ ഞങ്ങൾ മികച്ചൊരു നാടകം കണ്ടു.'
      },
      {
        id: 'w26_9',
        english: 'Poem',
        malayalam: 'കവിത / പദ്യം',
        phoneticMalayalam: 'പോയം',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The student recited a Malayalam poem gracefully.',
        exampleSentenceMl: 'വിദ്യാർത്ഥി ഒരു മലയാള കവിത മനോഹരമായി ചൊല്ലി.'
      },
      {
        id: 'w26_10',
        english: 'Performance',
        malayalam: 'പ്രകടനം / അരങ്ങേറ്റം',
        phoneticMalayalam: 'പെർഫോമൻസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The musical performance received a standing ovation.',
        exampleSentenceMl: 'സംഗീത പ്രകടനത്തിന് സദസ്യരുടെ എഴുന്നേറ്റുനിന്നുള്ള കയ്യടി ലഭിച്ചു.'
      }
    ]
  },
  {
    id: 27,
    titleMl: 'സമയവും സമയക്രമവും കലണ്ടറും',
    titleEn: 'Time, Punctuality & Scheduling',
    descriptionMl: 'സമയം പറയാനും പദ്ധതികൾ തയ്യാറാക്കാനുമുള്ള 10 സുപ്രധാന വാക്കുകൾ',
    iconName: 'Clock',
    words: [
      {
        id: 'w27_1',
        english: 'Yesterday',
        malayalam: 'ഇന്നലെ',
        phoneticMalayalam: 'യസ്റ്റർഡേ',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'It rained heavily yesterday in Kochi.',
        exampleSentenceMl: 'കൊച്ചിയിൽ ഇന്നലെ കനത്ത മഴ പെയ്തു.'
      },
      {
        id: 'w27_2',
        english: 'Tomorrow',
        malayalam: 'നാളെ',
        phoneticMalayalam: 'ടുമാറോ',
        partOfSpeech: 'ക്രിയാവിശേഷണം (Adverb)',
        exampleSentenceEn: 'I will attend the English class tomorrow.',
        exampleSentenceMl: 'നാളെ ഞാൻ ഇംഗ്ലീഷ് ക്ലാസ്സിൽ പങ്കെടുക്കും.'
      },
      {
        id: 'w27_3',
        english: 'Calendar',
        malayalam: 'കലണ്ടർ / പഞ്ചാംഗം',
        phoneticMalayalam: 'കലണ്ടർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Mark the festival date on your calendar.',
        exampleSentenceMl: 'കലണ്ടറിൽ ഉത്സവ തീയതി അടയാളപ്പെടുത്തുക.'
      },
      {
        id: 'w27_4',
        english: 'Month',
        malayalam: 'മാസം / തിങ്കൾ',
        phoneticMalayalam: 'മന്ത്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Onam usually falls in the month of Chingam.',
        exampleSentenceMl: 'സാധാരണയായി ചിങ്ങ മാസത്തിലാണ് ഓണം വരുന്നത്.'
      },
      {
        id: 'w27_5',
        english: 'Schedule',
        malayalam: 'സമയപ്പട്ടിക / നിശ്ചിത ക്രമം',
        phoneticMalayalam: 'ഷെഡ്യൂൾ',
        partOfSpeech: 'നാമം / ക്രിയ',
        exampleSentenceEn: 'Follow a strict study schedule every evening.',
        exampleSentenceMl: 'എല്ലാ വൈകുന്നേരവും കൃത്യമായ പഠന സമയപ്പട്ടിക പിന്തുടരുക.'
      },
      {
        id: 'w27_6',
        english: 'Delay',
        malayalam: 'താമസം / വൈകൽ',
        phoneticMalayalam: 'ഡിലേ',
        partOfSpeech: 'നാമം / ക്രിയ',
        exampleSentenceEn: 'The train was delayed by thirty minutes.',
        exampleSentenceMl: 'ട്രെയിൻ മുപ്പത് മിനിറ്റ് വൈകി.'
      },
      {
        id: 'w27_7',
        english: 'Midnight',
        malayalam: 'അർദ്ധരാത്രി / പാതിരാവ്',
        phoneticMalayalam: 'മിഡ്‌നൈറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Avoid staying awake past midnight.',
        exampleSentenceMl: 'അർദ്ധരാത്രി കഴിഞ്ഞും ഉറങ്ങാതിരിക്കുന്നത് ഒഴിവാക്കുക.'
      },
      {
        id: 'w27_8',
        english: 'Noon',
        malayalam: 'ഉച്ചസമയം / മധ്യഹ്നം',
        phoneticMalayalam: 'നൂൺ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'We will meet for lunch at twelve noon.',
        exampleSentenceMl: 'ഉച്ചയ്ക്ക് പന്ത്രണ്ട് മണിക്ക് നമ്മൾ ഉച്ചഭക്ഷണത്തിനായി കാണും.'
      },
      {
        id: 'w27_9',
        english: 'Urgent',
        malayalam: 'അടിയന്തിരമായ / ഉടൻ ചെയ്യേണ്ട',
        phoneticMalayalam: 'അർജന്റ്',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'I have an urgent phone call to make.',
        exampleSentenceMl: 'എനിക്ക് അടിയന്തിരമായി ഒരു ഫോൺ കോൾ ചെയ്യാനുണ്ട്.'
      },
      {
        id: 'w27_10',
        english: 'Punctual',
        malayalam: 'കൃത്യനിഷ്ഠയുള്ള / സമയം പാലിക്കുന്ന',
        phoneticMalayalam: 'പങ്ച്വൽ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Being punctual builds great trust and respect.',
        exampleSentenceMl: 'കൃത്യനിഷ്ഠ പാലിക്കുന്നത് വലിയ വിശ്വാസ്യതയും ആദരവും ഉണ്ടാക്കുന്നു.'
      }
    ]
  },
  {
    id: 28,
    titleMl: 'നിയമം, നീതി, ഭരണഘടന',
    titleEn: 'Law, Justice & Rights',
    descriptionMl: 'നിയമം, പൗരധർമ്മം, നീതി എന്നിവയുമായി ബന്ധപ്പെട്ട 10 പ്രധാന വാക്കുകൾ',
    iconName: 'Scale',
    words: [
      {
        id: 'w28_1',
        english: 'Law',
        malayalam: 'നിയമം / വ്യവസ്ഥ',
        phoneticMalayalam: 'ലോ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Everyone must obey the traffic law.',
        exampleSentenceMl: 'ട്രാഫിക് നിയമങ്ങൾ എല്ലാവരും അനുസരിക്കണം.'
      },
      {
        id: 'w28_2',
        english: 'Court',
        malayalam: 'കോടതി / ന്യായാസനം',
        phoneticMalayalam: 'കോർട്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The case was presented in the High Court.',
        exampleSentenceMl: 'കേസ് ഹൈക്കോടതിയിൽ സമർപ്പിച്ചു.'
      },
      {
        id: 'w28_3',
        english: 'Justice',
        malayalam: 'നീതി / ന്യായവിധി',
        phoneticMalayalam: 'ജസ്റ്റിസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Equal justice must be ensured for all citizens.',
        exampleSentenceMl: 'എല്ലാ പൗരന്മാർക്കും തുല്യനീതി ഉറപ്പാക്കണം.'
      },
      {
        id: 'w28_4',
        english: 'Citizen',
        malayalam: 'പൗരൻ / പൗര',
        phoneticMalayalam: 'സിറ്റിസൺ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Every citizen has rights and responsibilities.',
        exampleSentenceMl: 'ഓരോ പൗരനും അവകാശങ്ങളും ഉത്തരവാദിത്തങ്ങളുമുണ്ട്.'
      },
      {
        id: 'w28_5',
        english: 'Vote',
        malayalam: 'വോട്ട് ചെയ്യുക / സമ്മതിദാനം',
        phoneticMalayalam: 'വോട്ട്',
        partOfSpeech: 'ക്രിയ / നാമം',
        exampleSentenceEn: 'Exercise your right to vote in democracy.',
        exampleSentenceMl: 'ജനാധിപത്യത്തിൽ നിങ്ങളുടെ വോട്ടവകാശം വിനിയോഗിക്കുക.'
      },
      {
        id: 'w28_6',
        english: 'Rule',
        malayalam: 'ചട്ടം / നിയമവ്യവസ്ഥ',
        phoneticMalayalam: 'റൂൾ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Follow the safety rules in the laboratory.',
        exampleSentenceMl: 'ലബോറട്ടറിയിലെ സുരക്ഷാ ചട്ടങ്ങൾ പാലിക്കുക.'
      },
      {
        id: 'w28_7',
        english: 'Right',
        malayalam: 'അവകാശം / ശരി',
        phoneticMalayalam: 'റൈറ്റ്',
        partOfSpeech: 'നാമം / വിശേഷണം',
        exampleSentenceEn: 'Education is a fundamental human right.',
        exampleSentenceMl: 'വിദ്യാഭ്യാസം ഒരു മൗലിക മനുഷ്യാവകാശമാണ്.'
      },
      {
        id: 'w28_8',
        english: 'Truth',
        malayalam: 'സത്യം / യാഥാർത്ഥ്യം',
        phoneticMalayalam: 'ട്രൂത്ത്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Always speak the honest truth.',
        exampleSentenceMl: 'എപ്പോഴും സത്യം മാത്രം പറയുക.'
      },
      {
        id: 'w28_9',
        english: 'Duty',
        malayalam: 'കടമ / ധർമ്മം / ജോലി',
        phoneticMalayalam: 'ഡ്യൂട്ടി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'It is our duty to protect public property.',
        exampleSentenceMl: 'പൊതുമുതൽ സംരക്ഷിക്കേണ്ടത് നമ്മുടെ കടമയാണ്.'
      },
      {
        id: 'w28_10',
        english: 'Peace',
        malayalam: 'സമാധാനം / ശാന്തി',
        phoneticMalayalam: 'പീസ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Let us live together in unity and peace.',
        exampleSentenceMl: 'ഐക്യത്തോടും സമാധാനത്തോടും കൂടി നമുക്ക് ഒരുമിച്ച് ജീവിക്കാം.'
      }
    ]
  },
  {
    id: 29,
    titleMl: 'ശാസ്ത്രവും ബഹിരാകാശവും കണ്ടുപിടുത്തങ്ങളും',
    titleEn: 'Science, Space & Inventions',
    descriptionMl: 'ഗ്രഹങ്ങൾ, ശാസ്ത്രം, ബഹിരാകാശം എന്നിവയിലെ 10 വിജ്ഞാനപ്രദമായ പദങ്ങൾ',
    iconName: 'Rocket',
    words: [
      {
        id: 'w29_1',
        english: 'Planet',
        malayalam: 'ഗ്രഹം',
        phoneticMalayalam: 'പ്ലാനറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Earth is the third planet from the sun.',
        exampleSentenceMl: 'സൂര്യനിൽ നിന്നുള്ള മൂന്നാമത്തെ ഗ്രഹമാണ് ഭൂമി.'
      },
      {
        id: 'w29_2',
        english: 'Satellite',
        malayalam: 'ഉപഗ്രഹം / കൃത്രിമോപഗ്രഹം',
        phoneticMalayalam: 'സാറ്റലൈറ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'India launched a weather communication satellite.',
        exampleSentenceMl: 'ഇന്ത്യ ഒരു കാലാവസ്ഥാ വിനിമയ ഉപഗ്രഹം വിക്ഷേപിച്ചു.'
      },
      {
        id: 'w29_3',
        english: 'Experiment',
        malayalam: 'പരീക്ഷണം / പരീക്ഷണ നിരീക്ഷണം',
        phoneticMalayalam: 'എക്സ്പെരിമെന്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The chemistry experiment was successful.',
        exampleSentenceMl: 'രസതന്ത്ര പരീക്ഷണം വിജയകരമായിരുന്നു.'
      },
      {
        id: 'w29_4',
        english: 'Gravity',
        malayalam: 'ഗുരുത്വാകർഷണം',
        phoneticMalayalam: 'ഗ്രാവിറ്റി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Gravity pulls falling objects toward the ground.',
        exampleSentenceMl: 'ഗുരുത്വാകർഷണം വീഴുന്ന വസ്തുക്കളെ താഴേക്ക് വലിക്കുന്നു.'
      },
      {
        id: 'w29_5',
        english: 'Discover',
        malayalam: 'കണ്ടെത്തുക / കണ്ടുപിടിക്കുക',
        phoneticMalayalam: 'ഡിസ്കവർ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Scientists discover new stars in the deep galaxy.',
        exampleSentenceMl: 'ശാസ്ത്രജ്ഞർ ആഴമേറിയ ഗാലക്സിയിൽ പുതിയ നക്ഷത്രങ്ങൾ കണ്ടെത്തുന്നു.'
      },
      {
        id: 'w29_6',
        english: 'Research',
        malayalam: 'ഗവേഷണം / അന്വേഷണം',
        phoneticMalayalam: 'റീസേർച്ച്',
        partOfSpeech: 'നാമം / ക്രിയ',
        exampleSentenceEn: 'She is doing cancer research at university.',
        exampleSentenceMl: 'അവൾ സർവകലാശാലയിൽ കാൻസർ ഗവേഷണം നടത്തുന്നു.'
      },
      {
        id: 'w29_7',
        english: 'Telescope',
        malayalam: 'ദൂരദർശിനി / ടെലിസ്കോപ്പ്',
        phoneticMalayalam: 'ടെലിസ്കോപ്പ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Look at the moon craters through the telescope.',
        exampleSentenceMl: 'ടെലിസ്കോപ്പിലൂടെ ചന്ദ്രനിലെ ഗർത്തങ്ങൾ കാണുക.'
      },
      {
        id: 'w29_8',
        english: 'Invention',
        malayalam: 'കണ്ടുപിടുത്തം / പുതിയ സൃഷ്ടി',
        phoneticMalayalam: 'ഇൻവെൻഷൻ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The wheel was a revolutionary human invention.',
        exampleSentenceMl: 'ചക്രം മനുഷ്യന്റെ വിപ്ലവകരമായ ഒരു കണ്ടുപിടുത്തമായിരുന്നു.'
      },
      {
        id: 'w29_9',
        english: 'Star',
        malayalam: 'നക്ഷത്രം / താരം',
        phoneticMalayalam: 'സ്റ്റാർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Millions of stars twinkle in the night sky.',
        exampleSentenceMl: 'രാത്രിയിലെ ആകാശത്ത് ലക്ഷക്കണക്കിന് നക്ഷത്രങ്ങൾ മിന്നുന്നു.'
      },
      {
        id: 'w29_10',
        english: 'Universe',
        malayalam: 'പ്രപഞ്ചം / ലോകം',
        phoneticMalayalam: 'യൂണിവേഴ്സ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The universe is vast, mysterious and infinite.',
        exampleSentenceMl: 'പ്രപഞ്ചം വിശാലവും നിഗൂഢവും അതിരുകളില്ലാത്തതുമാണ്.'
      }
    ]
  },
  {
    id: 30,
    titleMl: 'ആഗോള യാത്രകളും ഫ്ലുവെൻസി പ്രയോഗങ്ങളും',
    titleEn: 'Global Travel & Fluency Idioms',
    descriptionMl: 'വിദേശ യാത്രകളിലും മികച്ച ഇംഗ്ലീഷ് സംഭാഷണങ്ങളിലും തിളങ്ങാൻ 10 പദങ്ങൾ',
    iconName: 'Compass',
    words: [
      {
        id: 'w30_1',
        english: 'Passport',
        malayalam: 'പാസ്‌പോർട്ട് (യാത്രാരേഖ)',
        phoneticMalayalam: 'പാസ്‌പോർട്ട്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Keep your passport and tickets safe.',
        exampleSentenceMl: 'നിങ്ങളുടെ പാസ്‌പോർട്ടും ടിക്കറ്റുകളും സുരക്ഷിതമായി സൂക്ഷിക്കുക.'
      },
      {
        id: 'w30_2',
        english: 'Visa',
        malayalam: 'വിസ (പ്രവേശനാനുമതി)',
        phoneticMalayalam: 'വിസ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'My tourist visa was approved yesterday.',
        exampleSentenceMl: 'എന്റെ ടൂറിസ്റ്റ് വിസ ഇന്നലെ അനുവദിച്ചു കിട്ടി.'
      },
      {
        id: 'w30_3',
        english: 'Foreign',
        malayalam: 'വിദേശത്തുള്ള / അന്യരാജ്യത്തെ',
        phoneticMalayalam: 'ഫോറിൻ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'Learning English opens doors to foreign countries.',
        exampleSentenceMl: 'ഇംഗ്ലീഷ് പഠിക്കുന്നത് വിദേശ രാജ്യങ്ങളിലേക്കുള്ള വാതിലുകൾ തുറക്കുന്നു.'
      },
      {
        id: 'w30_4',
        english: 'Tourist',
        malayalam: 'സഞ്ചാരി / വിനോദസഞ്ചാരി',
        phoneticMalayalam: 'ടൂറിസ്റ്റ്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Many tourists visit Kovalam beach every year.',
        exampleSentenceMl: 'എല്ലാ വർഷവും നിരവധി സഞ്ചാരികൾ കോവളം ബീച്ച് സന്ദർശിക്കുന്നു.'
      },
      {
        id: 'w30_5',
        english: 'Adventure',
        malayalam: 'സാഹസികത / ധീരകൃത്യം',
        phoneticMalayalam: 'അഡ്വഞ്ചർ',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Trekking in the Himalayas is a thrilling adventure.',
        exampleSentenceMl: 'ഹിമാലയത്തിലെ ട്രെക്കിംഗ് ആവേശം നിറഞ്ഞൊരു സാഹസികതയാണ്.'
      },
      {
        id: 'w30_6',
        english: 'Welcome',
        malayalam: 'സ്വാഗതം / സ്വാഗതം ചെയ്യുക',
        phoneticMalayalam: 'വെൽക്കം',
        partOfSpeech: 'ക്രിയ / ആശംസ',
        exampleSentenceEn: 'Welcome to Kerala, God’s own country!',
        exampleSentenceMl: 'ദൈവത്തിന്റെ സ്വന്തം നാടായ കേരളത്തിലേക്ക് സ്വാഗതം!'
      },
      {
        id: 'w30_7',
        english: 'Explore',
        malayalam: 'കണ്ടറിയുക / പര്യവേക്ഷണം ചെയ്യുക',
        phoneticMalayalam: 'എക്സ്പ്ലോർ',
        partOfSpeech: 'ക്രിയ (Verb)',
        exampleSentenceEn: 'Explore new places and learn new languages.',
        exampleSentenceMl: 'പുതിയ സ്ഥലങ്ങൾ കണ്ടറിയുകയും പുതിയ ഭാഷകൾ പഠിക്കുകയും ചെയ്യുക.'
      },
      {
        id: 'w30_8',
        english: 'Journey',
        malayalam: 'യാത്ര / പ്രയാണം',
        phoneticMalayalam: 'ജേർണി',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'Life is a beautiful learning journey.',
        exampleSentenceMl: 'ജീവിതം മനോഹരമായ ഒരു പഠന യാത്രയാണ്.'
      },
      {
        id: 'w30_9',
        english: 'Landmark',
        malayalam: 'പ്രസിദ്ധമായ അടയാളം / സ്മാരകം',
        phoneticMalayalam: 'ലാൻഡ്‌മാർക്ക്',
        partOfSpeech: 'നാമം (Noun)',
        exampleSentenceEn: 'The Taj Mahal is an iconic Indian landmark.',
        exampleSentenceMl: 'താജ്മഹൽ ഇന്ത്യയുടെ വിഖ്യാതമായ ഒരു സ്മാരകമാണ്.'
      },
      {
        id: 'w30_10',
        english: 'Wonderful',
        malayalam: 'അത്ഭുതകരമായ / അതിമനോഹരമായ',
        phoneticMalayalam: 'വണ്ടർഫുൾ',
        partOfSpeech: 'വിശേഷണം (Adjective)',
        exampleSentenceEn: 'You have done a wonderful job learning English!',
        exampleSentenceMl: 'ഇംഗ്ലീഷ് പഠിക്കുന്നതിൽ നിങ്ങൾ അതിമനോഹരമായ നേട്ടമാണ് കൈവരിച്ചത്!'
      }
    ]
  }
];

export const BADGES_LIST: Badge[] = [
  {
    id: 'first_match',
    titleMl: 'ആദ്യ പടി (First Matcher)',
    titleEn: 'First Matcher',
    descMl: 'മാച്ച് ഫോളോയിംഗിൽ നിങ്ങളുടെ ആദ്യ ജോടി ശരിയാക്കി!',
    icon: 'Sparkles',
    unlocked: false,
    requiredMetric: '1 ജോടി ശരിയാക്കുക'
  },
  {
    id: 'perfect_ten',
    titleMl: 'പെർഫെക്റ്റ് 10 (Perfect 10)',
    titleEn: 'Flawless Level',
    descMl: 'ഒരു പിഴവുമില്ലാതെ 10 വാക്കുകളും തുടർച്ചയായി മാച്ച് ചെയ്തു!',
    icon: 'Target',
    unlocked: false,
    requiredMetric: '10/10 തെറ്റില്ലാതെ പൂർത്തിയാക്കുക'
  },
  {
    id: 'speed_demon',
    titleMl: 'മിന്നൽ വേഗം (Speed Master)',
    titleEn: 'Fast Learner',
    descMl: '45 സെക്കൻഡിൽ താഴെ സമയത്തിൽ ലെവൽ പൂർത്തിയാക്കി!',
    icon: 'Zap',
    unlocked: false,
    requiredMetric: '45 സെക്കൻഡിൽ ലെവൽ തീർക്കുക'
  },
  {
    id: 'streak_3',
    titleMl: 'തുടർച്ചയായ 3 ദിവസം (3-Day Streak)',
    titleEn: 'Consistency Star',
    descMl: 'തുടർച്ചയായ ദിവസങ്ങളിൽ ഇംഗ്ലീഷ് പഠനം തുടർന്നു!',
    icon: 'Flame',
    unlocked: false,
    requiredMetric: '3 ദിവസത്തെ സ്ട്രീക്ക് നിലനിർത്തുക'
  },
  {
    id: 'level_5_master',
    titleMl: 'ഹാഫ് സെഞ്ചുറി (5 Levels Complete)',
    titleEn: 'Halfway Hero',
    descMl: '50 ഇംഗ്ലീഷ് വാക്കുകൾ പഠിച്ച് 5 ലെവലുകൾ പൂർത്തിയാക്കി!',
    icon: 'Award',
    unlocked: false,
    requiredMetric: '5 ലെവലുകൾ വിജയിക്കുക'
  },
  {
    id: 'vocabulary_king',
    titleMl: 'സെഞ്ചുറി മാസ്റ്റർ (10 Levels - 100 Words)',
    titleEn: 'Century Hero',
    descMl: '10 ലെവലുകൾ പൂർത്തിയാക്കി 100 വാക്കുകളിൽ പ്രാവീണ്യം നേടി!',
    icon: 'Crown',
    unlocked: false,
    requiredMetric: '10 ലെവലുകൾ പൂർത്തിയാക്കുക'
  },
  {
    id: 'grand_scholar',
    titleMl: 'ഇംഗ്ലീഷ് സ്കോളർ (20 Levels - 200 Words)',
    titleEn: 'Grand English Scholar',
    descMl: '20 ലെവലുകൾ പൂർത്തിയാക്കി 200 വാക്കുകളിൽ വിജയം നേടി!',
    icon: 'Trophy',
    unlocked: false,
    requiredMetric: '20 ലെവലുകൾ പൂർത്തിയാക്കുക'
  },
  {
    id: 'master_30_levels',
    titleMl: 'സമ്പൂർണ്ണ വിജയി (All 30 Levels - 300 Words)',
    titleEn: 'Master of 300 Words',
    descMl: 'മുഴുവൻ 30 ലെവലുകളും പൂർത്തിയാക്കി 300 വാക്കുകളിൽ സമ്പൂർണ്ണ ആധിപത്യം നേടി!',
    icon: 'Crown',
    unlocked: false,
    requiredMetric: 'എല്ലാ 30 ലെവലുകളും പൂർത്തിയാക്കുക'
  },
  {
    id: 'spelling_champion',
    titleMl: 'സ്പെല്ലിംഗ് മാസ്റ്റർ (Spelling Master)',
    titleEn: 'Spelling Champion',
    descMl: 'അക്ഷരക്കൂട്ട് ഗെയിമിൽ കൃത്യമായി ഇംഗ്ലീഷ് സ്പെല്ലിംഗ് പൂർത്തിയാക്കി!',
    icon: 'Sparkles',
    unlocked: false,
    requiredMetric: 'സ്പെല്ലിംഗ് ഗെയിമിൽ 5 വാക്കുകൾ ശരിയാക്കുക'
  },
  {
    id: 'memory_master',
    titleMl: 'മെമ്മറി ജീനിയസ് (Memory Genius)',
    titleEn: 'Memory Genius',
    descMl: 'മെമ്മറി കാർഡ് ഫ്ലിപ്പ് ഗെയിമിൽ കാർഡുകൾ കൃത്യമായി ജോടി ചേർത്തു!',
    icon: 'Layers',
    unlocked: false,
    requiredMetric: 'മെമ്മറി ഗെയിം പൂർത്തിയാക്കുക'
  },
  {
    id: 'sentence_builder_pro',
    titleMl: 'വാക്യ ശിൽപ്പി (Sentence Builder Pro)',
    titleEn: 'Sentence Builder Pro',
    descMl: 'സെന്റൻസ് ബിൽഡർ ഗെയിമിൽ ഇംഗ്ലീഷ് വാക്യങ്ങൾ വിജയകരമായി നിർമ്മിച്ചു!',
    icon: 'Sparkles',
    unlocked: false,
    requiredMetric: 'സെന്റൻസ് ഗെയിം പൂർത്തിയാക്കുക'
  }
];

