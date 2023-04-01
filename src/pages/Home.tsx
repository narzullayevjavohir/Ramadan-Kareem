import { Box, Divider, Image, Text } from "@chakra-ui/react";
import Muslim from "../assets/img/muslim.jpg";
import Namaz from "../assets/img/Namaz.jpg";

const Home = () => {
  return (
    <Box w={"100%"} h={"100%"} p={{ lg: "20px", sm: "10px" }}>
      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"flex-start"}
        flexDirection={{ lg: "row", sm: "column" }}
        justifyContent={"space-between"}
      >
        <Box w={{ lg: "50%", sm: "100%" }} h={"70vh"}>
          <Image
            src={Muslim}
            alt="muslim"
            borderRadius={"30px"}
            boxShadow={"xl"}
          />
        </Box>
        <Box
          w={{ lg: "50%", sm: "100%" }}
          h={"70vh"}
          pl={{ lg: "40px", sm: "5px" }}
          overflowY={"scroll"}
        >
          <Text fontSize={"3xl"}>Arabic: المسلمون, al-Muslimūn</Text>
          <Text fontSize={"md"} mt={"20px"} letterSpacing={"0.7px"}>
            The Quran, also spelled Koran, is the central religious text of
            Islam. Muslims believe it to be the verbatim word of God as revealed
            to the Prophet Muhammad through the angel Gabriel over a period of
            23 years. It is written in Arabic and consists of 114 chapters, or
            surahs, which are arranged roughly in order of length. The Quran
            contains teachings and guidance on a wide range of topics, including
            faith, morality, ethics, spirituality, law, and history. Muslims
            consider it to be the final revelation of God, completing and
            superseding all previous revelations to prophets such as Abraham,
            Moses, and Jesus. The Quran is widely regarded as one of the most
            influential and important books in world literature, and its
            teachings have shaped the beliefs and practices of over a billion
            Muslims worldwide. It is also a source of inspiration for many
            non-Muslims, who admire its poetry, wisdom, and universal values.
            Islam is a monotheistic religion founded in the 7th century by the
            Prophet Muhammad in the Arabian Peninsula. The fundamental belief of
            Islam is the oneness of God (Allah) and the acceptance of Muhammad
            as his last prophet and messenger. Muslims believe in the Five
            Pillars of Islam, which are the basic practices and obligations that
            form the foundation of Islamic faith and practice: Shahada: the
            declaration of faith, which is the testimony that there is no god
            but Allah, and Muhammad is his messenger. Salah: the five daily
            prayers, which are performed facing Mecca and involve reciting
            specific prayers and movements. Zakat: the giving of alms or
            charity, which is typically 2.5% of a Muslim's wealth and is meant
            to help the poor and needy. Sawm: fasting during the holy month of
            Ramadan, which involves abstaining from food, drink, and other
            physical needs from dawn until sunset. Hajj: the pilgrimage to
            Mecca, which is a mandatory obligation for Muslims who are
            physically and financially able to undertake the journey at least
            once in their lifetime. In addition to the Five Pillars, Islam also
            emphasizes the importance of morality, justice, compassion, and
            respect for human dignity. Muslims believe that the Quran is the
            word of God revealed to Muhammad, and that the Hadith, a collection
            of sayings and actions of the Prophet Muhammad, provide guidance for
            living a righteous life. Islam has had a significant impact on the
            world, with over 1.8 billion Muslims worldwide and contributions to
            fields such as science, art, literature, and philosophy.
          </Text>
        </Box>
      </Box>
      <Divider mt={"50px"} />
      <Box width={"100%"} height={"100%"} mt={"50px"} mb={"30px"}>
        <Box
          boxShadow={"xl"}
          background={"white"}
          display={"flex"}
          flexDirection={{ lg: "row", sm: "column" }}
        >
          <Box w={{ lg: "50%", sm: "100%" }} h={"100%"}>
            <Image
              src={Namaz}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              borderRadius={"2px"}
            />
          </Box>
          <Box w={{ lg: "50%", sm: "100%" }} p={{ lg: "25px", sm: "10px" }}>
            <Text fontSize={"4xl"} fontWeight={"normal"} mb={"10px"}>
              Namaz
            </Text>
            <Text letterSpacing={"0.9px"}>
              I apologize for any confusion caused in my previous response. To
              clarify, Namaz or Salah refers to the five daily ritual prayers
              that Muslims perform throughout the day. These prayers are
              obligatory for adult Muslims who are physically and mentally
              capable of doing so. The five daily prayers are: Fajr: the
              pre-dawn prayer, which is performed before sunrise. Dhuhr: the
              midday prayer, which is performed after the sun has passed its
              zenith and begins to decline. Asr: the afternoon prayer, which is
              performed in the late afternoon. Maghrib: the evening prayer,
              which is performed just after sunset. Isha: the night prayer,
              which is performed after the twilight has disappeared. Each of
              these prayers has a specific time and method of performance, and
              they are meant to be performed at the designated times throughout
              the day. The exact timing of these prayers changes depending on
              the location and time of year, as they are based on the position
              of the sun in the sky. Muslims may perform these prayers
              individually or in congregation, and they are a central part of
              Islamic worship and spiritual practice. During prayer, Muslims
              face towards the Kaaba in Mecca, the most sacred site in Islam.
              The prayer consists of a sequence of standing, bowing, and
              prostrating, while reciting specific verses from the Quran and
              supplications in Arabic. The prayer is usually performed
              individually, but it can also be performed in congregation led by
              an Imam. Before performing the prayer, Muslims perform Wudu, which
              is the ritual washing of specific body parts, and wear clean and
              modest clothing. The prayer is meant to be performed with
              humility, sincerity, and full concentration, as it is a way to
              seek inner peace and spiritual connection with Allah. Performing
              the daily prayers on time and with proper intention is considered
              an essential part of a Muslim's faith and practice. The act of
              performing the prayer is meant to remind Muslims of their
              submission to Allah, as well as their connection to the larger
              community of believers around the world.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
