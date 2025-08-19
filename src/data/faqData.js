export const faqData = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What file extension should I use for Lottie animations?",
      answer: "You should use either `.json` or `.lot`. While `.json` has been historically common, the Internet Assigned Numbers Authority (IANA) has officially recognized `.lot` as the standard file extension with the MIME type `video/lottie+json`. Using the `.lot` extension is encouraged to align with this official standard."
    },
    {
      question: "How do I create a Lottie animation?",
      answer: "Lottie animations can be created using a wide range of tools, platforms, or plugins. A popular method is designing animations in Adobe After Effects and exporting them with a specialized plugin. For a detailed list of creation tools and resources, please visit our [Implementations page.](https://lottie.github.io/implementations/)"
    },
    {
      question: "How do I use a Lottie animation in my project?",
      answer: "To play a Lottie animation in your website or application, you need to use a Lottie player library or renderer compatible with your project's platform (e.g., web, iOS, Android, React Native). Many excellent players are available. You can find a comprehensive list of [supported libraries.](https://lottie.github.io/implementations/)"
    },
    {
      question: "What is the difference between Lottie and dotLottie?",
      answer: "Lottie refers to the open-source, JSON-based animation format that is being standardized by the LAC. In contrast, dotLottie (`.lottie`) is a superset format developed by LottieFiles. It is a different format built upon Lottie that acts as a compressed archive, capable of bundling the core Lottie JSON file with other assets like images or fonts into a single, smaller file. More details can be found on the [dotLottie specifications website.](https://dotlottie.io)"
    },
    {
      question: "Why are some Lottie features missing from the LAC specification?",
      answer: "Lottie has been in use for a long time and evolved organically with a rich feature set developed by the community, long before the LAC was established. The LAC's mission is to refine and formalize this powerful format into a stable, official standard. As such, we are progressively integrating existing features into the specification. You can continue to use all Lottie features available in current players. For documentation on features that are not yet part of the formal specification, the [Lottie format documentation from LottieFiles](https://lottiefiles.github.io/lottie-docs/) is an excellent resource."
    },
    {
      question: "How can I or my organization get involved with the LAC?",
      answer: "The LAC is an open and collaborative project, and we welcome contributions from everyone in the community. You can help shape the future of Lottie by contributing to the specification, participating in discussions, or improving tooling. To get started, please visit our [contribution page](https://lottie.github.io/contribute/)"
    }
  ]
}