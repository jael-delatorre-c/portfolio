export type Project = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional second image shown only on the project detail page */
  detailImageSrc?: string;
  detailImageAlt?: string;
  description: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "fire-alarm-style-circuit",
    title: "Fire Alarm Style Circuit",
    imageSrc: "/IMG_1149.webp",
    imageAlt: "Fire alarm style circuit with LED and buzzer",
    description: [
      {
        heading: "Introduction",
        paragraphs: [
          'For this project, I built a simple "fire alarm style" circuit that activates a flashing warning light and a pulsing buzzer when it gets triggered. The goal was to recreate that recognizable alarm pattern where the light and sound don\'t match perfectly, because in real alarms the visual and audio signals often run at different rates to grab attention better. To do that, I designed the circuit using two 555 timers so I could control the LED timing separately from the buzzer timing. I kept the whole system on a 5V supply so it would be safe, easy to test on a breadboard, and compatible with basic lab power sources.',
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "I started by planning the circuit as two independent timer sections that share the same trigger and power, but oscillate at different frequencies. Each 555 timer was set up in astable mode so it would continuously cycle on and off once the circuit was activated. One timer was dedicated to the LED flash rate, and the other controlled the pulsing rate for the sound. Before connecting the buzzer, I tested both outputs using LEDs so I could clearly see what the timing was doing and confirm that both timers were behaving correctly. That step helped a lot because it made debugging easier and let me adjust the timing without the buzzer adding confusion.",
          "Once both timing patterns looked right, I replaced one of the test LEDs with the buzzer. Since the LED needed protection, I added a 1k resistor in series so the current stayed safe and consistent. I also paid attention to stability, because small wiring issues or loose connections can change the timing and make the pattern feel random. By keeping the power at 5V and making sure the components were placed cleanly, I was able to get a steady flash and pulse that stayed consistent through repeated tests. After that, I ran multiple trigger tests to make sure the circuit responded the same way each time and didn't drift or glitch.",
        ],
      },
      {
        heading: "Real World Impact / Conclusion",
        paragraphs: [
          "This kind of circuit connects directly to real alarm and warning systems, where the main purpose is to get someone's attention fast and clearly. Having both a visual signal (flashing LED) and an audio signal (pulsing buzzer) makes the system more effective, especially in environments where one signal might be missed. Using two different frequencies is also realistic because it creates a stronger \"alarm feel\" and helps prevent the pattern from blending into the background.",
          "Overall, this project helped me understand how timing circuits work in a practical way, especially how the 555 timer can be used to create reliable output patterns. It also showed me the importance of testing in steps, like using LEDs first before switching to a buzzer, and how small design choices like resistor protection and stable wiring make the circuit work consistently.",
        ],
      },
    ],
  },
  {
    slug: "analog-input-led-control",
    title: "Analog Input to LED Control",
    imageSrc: "/joystick-led-main.png",
    imageAlt: "Arduino Uno and joystick module with four LEDs on breadboard",
    detailImageSrc: "/joystick-led-detail.png",
    detailImageAlt: "Joystick controlling LEDs with three LEDs illuminated",
    description: [
      {
        heading: "Introduction",
        paragraphs: [
          "For this project, I worked on reading an analog input and then using that information to control real outputs, which is one of the most important ideas in embedded systems. I used an Arduino Uno and a joystick module that has two built in potentiometers, one for the X direction and one for the Y direction. The Arduino reads each axis as an analog value from 0 to 1023, and the goal was to turn those readings into something physical and easy to understand. To do that, I wired four LEDs as outputs so the joystick position would light up different LEDs depending on which direction it was pushed. I also used the joystick's pushbutton switch so that when it is pressed, all LEDs turn on at the same time.",
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "I started by wiring the joystick to the Arduino. The joystick needed 5V and GND for power, then the VRx and VRy pins were connected to analog inputs A0 and A1 so the Arduino could read the two axis values. The switch pin was connected to a digital input so the Arduino could detect when the joystick was pressed. After that, I wired four LEDs to digital output pins, each with a 1k resistor to limit current and protect the LEDs.",
          "In code, I continuously read the joystick values using analogRead() for A0 and A1, which gave me numbers from 0 to 1023. Then I converted those readings into \"zones\" so the LEDs would respond in a clear way instead of flickering constantly. Around the neutral position, the joystick reads close to the middle value (around 512), so I created a dead zone in the center where all LEDs stay off. If the X value moved past a set threshold to the right, I turned on the \"right\" LED, and if it moved left past the threshold, I turned on the \"left\" LED. I did the same thing for the Y axis, so pushing up turned on the \"up\" LED and pushing down turned on the \"down\" LED. Finally, I added the switch behavior so that if the button was pressed, it overrides everything and turns all four LEDs on at once. I tested it by watching the serial monitor and adjusting thresholds until the joystick felt stable and the LEDs changed cleanly when crossing into different regions.",
        ],
      },
      {
        heading: "Real World Impact / Conclusion",
        paragraphs: [
          "This project is a real example of how controllers and sensors interact with embedded systems in everyday technology. A joystick is basically a sensor that outputs analog voltage changes, and the Arduino converts that into digital information that can control something else. The same idea is used in game controllers, robots, drones, and machines where you need human input to translate into motion or actions. The dead zone concept is also realistic, because in real systems you need to filter noise so outputs do not rapidly switch when the input is near the center.",
          "Overall, this project helped me understand how analog signals work, how the Arduino reads them, and how to turn raw values into logical decisions. It also showed me how important it is to design the thresholds and switch logic carefully so the outputs feel consistent, predictable, and easy to control.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
