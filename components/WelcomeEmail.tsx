
import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

export const WelcomeEmail = () => (
    <Html>
        <Head />
        <Preview>Welcome to Mivory!</Preview>
        <Body >
            <Container >
                <Section >
                    <div className="flex items-center justify-center">
                        <Img
                            src="/micory-icon-no-bg.svg"
                            width="49"
                            height="21"
                            alt="Mivory logo"

                        />
                        <Text>MIVORY</Text>
                    </div>

                    <Hr />
                    <Text >
                        Thank you for signing up for early access to Mivory! We&#39;re thrilled to have you on board as we prepare to launch our app, and we can&#39;t wait to share it with you.
                    </Text>
                    <Text >
                        The app will be available for early access very soon, and you&#39;ll be one of the first to explore it. We&#39;ll notify you as soon as it’s ready to download.                    </Text>
                    <Hr />
                    <Text >
                        Here’s a sneak peek of what’s coming your way:
                    </Text>
                    <Text >
                        <strong>Save Anything:</strong> Articles, videos, or links from anywhere online.
                    </Text>
                    <Text >
                        <strong>Organize Seamlessly:</strong> Create custom collections to keep your content organized your way.
                    </Text>
                    <Text >
                        <strong>Collaborate Effortlessly:</strong> Work with friends and share ideas in real time.
                    </Text>
                    <Text >
                        We can&#39;t wait to share Mivory with you and hear your feedback. Stay tuned for more updates in the coming weeks.
                    </Text>
                    <Text >
                        In the meantime, feel free to reply to this email if you have any questions or just want to say hi. We’d love to hear from you!
                    </Text>
                    <Text >Cheers,</Text>
                    <Text >Maya and Colin</Text>
                    <Hr />
                    <Text>
                        Mivory, Montreal, QC
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default WelcomeEmail;

