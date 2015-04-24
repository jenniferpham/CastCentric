/**
 * Created by Jennifer on 4/16/2015.
 */
'use strict';

var Job = require('../api/job/job.model.js');


Job.find({}).remove(function(){
  Job.create({
      production: {
        name: 'Wicked',
        company: 'United Artists Entertainment',
        desc: 'A vivid reimagining of the classic The Wizard of Oz, Wicked spotlights the untold stories of Oz’s most famous (or infamous) characters, namely the Wicked Witch of the West and her unlikely friend, Glinda the Good. The show follows green-skinned star Elphaba from birth to college and through the life-changing events which eventually label her “wicked,” introducing spoiled rich girl Glinda, local prince and heartthrob Fiyero and even the Wizard of Oz himself, a troubled man very unlike the one you may remember. As Elphaba, a passionate political activist if there ever was one, fights injustice and seeks to undo the mistakes of the past, dark secrets and personal tragedies shape the history of Oz, paying homage to the classic Wizard of Oz story while simultaneously changing fans’ understanding of it forever. A cautionary tale about love, friendship and trust, Wicked effortlessly reveals that there are indeed two sides to every story.',
        typee: 'theater',
        date: {
          start: 'June 1, 2016',
          end: 'July 31, 2016'
        },
        loc: 'New York'
      },
      rehearsal: {
        date: {
          start: 'Aug 15, 2015',
          end: 'Nov 15, 2015'
        },
        loc: 'New York'
      },
      roles:[
        {
          charactername: 'Glinda',
          typee: 'Lead',
          gender: 'Female',
          age: 25,
          ethnicity: 'Caucasian',
          description: 'Glinda is an only child characterized by her popularity and "blonde" in every way.  She is Elphaba\'s roommate at school. Although she does not like Elphaba at first, she grows to see the selflessness in her, and they become best friends.  Glinda later on becomes "Glinda the Good Witch" and a spokesperson for Oz.',
          nudity: false,
          compensation:'paid',
          union: 'union',
          notes: 'director wants someone hard working',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'New York'
          }
        },
        {
          charactername: 'Elphaba',
          typee: 'Lead',
          gender: 'Female',
          age: 25,
          ethnicity: 'Caucasian',
          description: 'Elphaba is a green-skinned girl who later becomes known as the Wicked Witch of the West. Her birth is shocking to her parents, Melana Thropp and Frexspar the Godly, as in addition to her green skin she had razor sharp teeth (she bites the finger off of a midwife moments after her birth) so Melena refuses to breast feed her. Her father, a union minister, believes it is his fault and Elphaba’s condition is a punishment from the Unnamed God. She attends Shiz University where she meets Glinda and, although they don’t get on at first, become close friends. She also rescues the cowardly lion as a cub from a science experiment. She eventually runs away to the Emerald City to join a resistance group against the Wizard.',
          nudity: false,
          compensation:'paid',
          union: 'union',
          notes: 'director wants someone hard working',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'New York'
          }
        },
        {
          charactername: 'Nessarose ("Nessa") - Witch\'s invalid sister',
          typee: 'Supporting',
          gender: 'Female',
          age: 20,
          ethnicity: 'Caucasian',
          description: 'Nessarose Thropp is Elphaba\'s sister. According to the novelist, she was born both crippled and armless. On stage she has arms but is in a wheelchair.',
          nudity: false,
          compensation:'paid',
          union: 'union',
          notes: 'director wants someone hard working',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'New York'
          }
        },
        {
          charactername: 'Munchkin',
          typee: 'Background',
          gender: 'Male',
          age: 40,
          ethnicity: ['Caucasian', 'Asian'],
          description: 'Munchkin is an extra that plays a background role in Oz.',
          nudity: false,
          compensation:'paid',
          union: 'union',
          notes: 'may have to dance',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'New York'
          }
        }
      ],
      activepost: {
        start: 'April 15, 2015',
        end: 'May 15, 2015'
      }
    },
    {
      production: {
        name: 'The Avengers',
        company: 'Marvel Studio',
        desc: 'When Thor\'s evil brother, Loki, gains access to the unlimited power of the energy cube called the Tesseract, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury\'s "dream team" are Iron Man, Captain America, the Hulk, Thor, the Black Widow, and Hawkeye.',
        typee: 'film',
        date: {
          start: 'Sept 1, 2016',
          end: 'Dec 31, 2016'
        },
        loc: 'Los Angeles'
      },
      rehearsal: {
        date: {
          start: 'Aug 15, 2015',
          end: 'Nov 15, 2015'
        },
        loc: 'Los Angeles'
      },
      roles:[
        {
          charactername: 'Loki',
          typee: 'Lead',
          gender: 'Male',
          age: 22,
          ethnicity: 'Caucasian',
          description: 'He is the adopted brother of Thor. At the beginning of The Avengers, he comes to Earth to subjugate it and his idea is to rule the human race as their king. Motivated by jealousy and power, he is also kind of deluded in the fact that he thinks unlimited power will give him self-respect',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that looks young and villainous',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'Chicago'
          }
        },
        {
          charactername: 'Tony Stark / Iron Man',
          typee: 'Lead',
          gender: 'Male',
          age: 35,
          ethnicity: 'Caucasian',
          description: 'A self-described genius, billionaire, playboy, and philanthropist with an electromechanical suit of armor of his own invention.',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that looks older and pompous',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'Chicago'
          }
        },
        {
          charactername: 'Captain America / Steve Rogers',
          typee: 'Lead',
          gender: 'Male',
          age: 30,
          ethnicity: 'Caucasian',
          description: 'A World War II veteran who was enhanced to the peak of human physicality by an experimental serum and frozen in suspended animation before waking up in the modern world.',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that looks young and villanous',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'Chicago'
          }
        }
      ],
      activepost: {
        start: 'April 15, 2015',
        end: 'May 15, 2015'
      }
    },

    {
      production: {
        name: 'Fresh Off the Boat',
        company: 'ABC Studios',
        desc: 'Based on the life of Eddie Huang during the mid-to-late 1990s, an Asian-American family decides to move to Orlando, Florida from Washington D.C. in order to embrace the "American Dream" by creating a steak restaurant. However, the family begins overcome many obstacles as they try to assimilate with the new culture that surrounds them.',
        typee: 'TV',
        date: {
          start: 'Sept 1, 2016',
          end: 'Dec 31, 2016'
        },
        loc: 'Los Angeles'
      },
      rehearsal: {
        date: {
          start: 'Aug 15, 2015',
          end: 'Nov 15, 2015'
        },
        loc: 'Los Angeles'
      },
      roles:[
        {
          charactername: 'Jessica Huang',
          typee: 'Lead',
          gender: 'Female',
          age: 27,
          ethnicity: 'Asian',
          description: 'Jessica is married to Louis and is the mother of Eddie, Emery, and Evan.  She is a strong, protective mother who was always hard on Eddie way before all that “tiger mom stuff.” She is a frugal, business-minded woman who doesn’t believe in wasting anything. She adores Stephen King movies and novels, and is especially talented at singing.',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that can speak with an accent as if English was her second language',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'Los Angeles'
          }
        },
        {
          charactername: 'Evan Huang',
          typee: 'Supporting',
          gender: 'Male',
          age: 7,
          ethnicity: 'Asian',
          description: 'The youngest son of Louis and Jessica, Evan is a mama’s boy. He is found to be lactose intolerant shortly after the move when a classmate shares his string cheese. He is a stickler for rules and is a very obedient child. He is often sent by his mother to be a representative at neighborhood meetings to get the inside scoop.',
          nudity: false,
          compensation:'paid',
          union: 'union',
          notes: 'director wants someone that looks young, cute, and bright',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'Los Angeles'
          }
        }
      ],
      activepost: {
        start: 'April 15, 2015',
        end: 'May 15, 2015'
      }
    },

    {
      production: {
        name: 'Trident Gum Commercial: "Pay Me In Gum"',
        company: 'Hello Production Studios',
        desc: 'A commercial takes place in what looks like the 1970s. The breadwinner husband comes home and wants to pay the babysitter in trident gum.  The babysitter wants trident gum as payment and the construction guy sees this and is disappointed that he isn\'t getting paid in gum. This shows how great and valuable trident gum is.',
        typee: 'commercial',
        date: {
          start: 'Sept 1, 2016',
          end: 'Dec 31, 2016'
        },
        loc: 'New York'
      },
      rehearsal: {
        date: {
          start: 'Aug 15, 2015',
          end: 'Nov 15, 2015'
        },
        loc: 'New York'
      },
      roles:[
        {
          charactername: 'Babysitter',
          typee: 'Supporting',
          gender: 'Female',
          age: 16,
          ethnicity: 'Caucasian',
          description: 'She responds enthusiastically that she would like to be paid in trident gum',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants an enthusiastic teen',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'San Francisco'
          }
        },
        {
          charactername: 'Construction Guy',
          typee: 'Supporting',
          gender: 'Male',
          age: 40,
          ethnicity: 'Caucasian',
          description: 'He sounds disappointed because "No one ever pays me in trident gum"',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that can do a disappointed look',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'San Francisco'
          }
        },
        {
          charactername: 'Grandmother',
          typee: 'Background',
          gender: 'Female',
          age: 85,
          ethnicity: 'Caucasian',
          description: 'Grandmother is sitting in a rocking chair knitting while father comes home to his family',
          nudity: false,
          compensation:'unpaid',
          union: 'union',
          notes: 'director wants someone that looks old and friendly',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'San Francisco'
          }
        }
      ],
      activepost: {
        start: 'April 15, 2015',
        end: 'May 15, 2015'
      }
    },

    {
      production: {
        name: 'The Hunger Games',
        company: 'Optic Nerve Studios',
        desc: 'In a dystopian future, the totalitarian nation of Panem is divided into 12 districts and the Capitol. Each year two young representatives from each district are selected by lottery to participate in The Hunger Games. Part entertainment, part brutal retribution for a past rebellion, the televised games are broadcast throughout Panem. The 24 participants are forced to eliminate their competitors while the citizens of Panem are required to watch. When 16-year-old Katniss\' young sister, Prim, is selected as District 12\'s female representative, Katniss volunteers to take her place. She and her male counterpart, Peeta, are pitted against bigger, stronger representatives, some of whom have trained for this their whole lives.',
        typee: 'film',
        date: {
          start: 'Sept 1, 2016',
          end: 'Dec 31, 2016'
        },
        loc: 'Los Angeles'
      },
      rehearsal: {
        date: {
          start: 'Aug 15, 2015',
          end: 'Nov 15, 2015'
        },
        loc: 'Los Angeles'
      },
      roles:[
        {
          charactername: 'Katniss Everdeen',
          typee: 'Lead',
          gender: 'Female',
          age: 18,
          ethnicity: 'Caucasian',
          description: 'Katniss is the protagonist and female tribute of District 12. She is an excellent hunter and archer and tremendously resourceful. When her sister gets called to enter the Hunger Games, she selflessly volunteers to risk her life in her sister\'s place.',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that looks young and villainous',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'San Francisco'
          }
        },
        {
          charactername: 'Peeta Mellark',
          typee: 'Lead',
          gender: 'Male',
          age: 18,
          ethnicity: 'Caucasian',
          description: 'Peeta is the boy tribute of District 12 and the son of a baker. He is kind and loyal, and he becomes Katniss’s love interest and main ally during the Hunger Games.',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that looks kinder',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'San Francisco'
          }
        },
        {
          charactername: 'Haymitch Abernathy',
          typee: 'Supporting',
          gender: 'Male',
          age: 45,
          ethnicity: 'Caucasian',
          description: 'Haymitch is Katniss’s and Peeta’s trainer. He is an alcoholic and one of only two people from District 12 to win the Hunger Games (and the only one still living).',
          nudity: false,
          compensation:'paid',
          union: 'nonunion',
          notes: 'director wants someone that looks casual and messy',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'San Francisco'
          }
        },
        {
          charactername: 'Tribute Boy District #9',
          typee: 'Background',
          gender: 'Male',
          age: 15,
          ethnicity: 'African American',
          description: 'He is in the background when tributes are training and his picture flashes once when the cannon goes off, meaning he has been elimated or killed in the annual Hunger Games',
          nudity: false,
          compensation: 'unpaid',
          union: 'union',
          notes: 'director looking for someone with an angry face and a good scowl',
          audition: {
            typee: 'face-to-face',
            date: {
              start: 'June 1, 2015',
              end: 'Aug 1, 2015'
            },
            loc: 'San Francisco'
          }
        }
      ],
      activepost: {
        start: 'April 15, 2015',
        end: 'May 15, 2015'
      }
    }

  )

});
