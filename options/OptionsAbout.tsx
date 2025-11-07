import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import CardHeaderIntro from "~components/blocks/CardHeaderIntro"

export default function OptionsAbout() {
    return (
        <div className="grid gap-6 text-lg">
            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"Why Siddhi?"} description={"Siddhi has been created during the X Fair Hackathon."} />
                </CardHeader>
                <CardContent>
                    It all started on 7th November 2025 when I decided to participate in the X Fair Hackathon, bringing AI-powered assistance to everyone's fingertips.
                </CardContent>
            </Card>

            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"Vision"} description={""} />
                </CardHeader>
                <CardContent>
                    AI at Your Fingertips, Anytime, Anywhere.
                </CardContent>
            </Card>

            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"Mission"} description={""} />
                </CardHeader>
                <CardContent>
                    Imagine a world where everyone can access powerful AI models—LLMs, generative image models, and speech recognition—directly in their web browser. Integrating AI into daily browsing will revolutionise online interactions, offering instant, intelligent assistance tailored to individual needs.
                </CardContent>
            </Card>


            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"Problem Statement"} description={""} />
                </CardHeader>
                <CardContent>
                    The rapid pace of AI advancement can be overwhelming, and keeping up with the latest models is a challenge. Why limit our productivity when Artificial Intelligence can enhance our daily tasks effortlessly? Our solution bridges the gap, putting the most powerful AI tools directly within your reach, ensuring you never miss out on the benefits of cutting-edge technology.
                </CardContent>
            </Card>

            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"Why"} description={""} />
                </CardHeader>
                <CardContent>
                    I see Artificial Intelligence as the modern equivalent of electricity—essential, transformative, and, yeah, a bit daunting. It's a powerful force that can truly revolutionise our lives, and I reckon everyone should have the chance to experience and benefit from its advancements. By making AI accessible to all, we can unlock its full potential and drive innovation forward.
                </CardContent>
            </Card>


            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"What Success looks like?"} description={""} />
                </CardHeader>
                <CardContent>
                    By August 4th, 2025, we have empowered 10,000 incredible individuals!
                </CardContent>
            </Card>



            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"Who am I?"} description={""} />
                </CardHeader>
                <CardContent>
                    Visit my{" "}
                    <a
                        className="text-blue-600"
                        href="https://www.linkedin.com/in/skand-chaubey-30b51024b"
                        target="_blank"
                        rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </CardContent>
            </Card>
        </div>
    )
}
