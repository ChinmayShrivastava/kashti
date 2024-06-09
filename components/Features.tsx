import Button from "./Button";
import Container from "./Container";

function Feature({
    title,
    description,
    illustration,
    inverted = false,
}: {
    title: string;
    description: string;
    illustration: React.ReactNode;
    inverted?: boolean;
}) {
    return (
        <Container type="feature">
            <div className={"flex flex-col w-full gap-8" + (inverted ? " sm:flex-row-reverse" : " sm:flex-row")}>
                <div className="flex flex-col gap-2 w-full sm:w-2/5 text-center sm:text-left">
                    <h3 className="text-primary text-3xl font-normal">{title}</h3>
                    <p className="text-2xl font-light">{description}</p>
                </div>
                <div className="w-full sm:w-3/5">
                    {illustration}
                </div>
            </div>
        </Container>
    );
}

const Feature1Illustration = (
    <div className="flex flex-col gap-8">
        <div className="w-full pointer-events-none">
            <Button
            href="#"
            className="w-full h-44"
            >
                <div className="size-full py-4 px-6 flex flex-col justify-between items-start">
                    <div className="flex flex-col w-full items-start">
                        <div className="text-sm text-white font-light">
                            USABILITY TESTING
                            <span className="px-3 text-secondary-strong bg-secondary-light rounded-full ml-2">
                                LIVE
                            </span>
                        </div>
                        <div className="text-3xl text-white font-light">What do people want to use Kashti for?</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-white font-light">
                            <span className="font-medium">151</span> responses
                        </div>
                        <div className="text-white font-light">
                            <span className="font-medium">34</span> booked demos
                        </div>
                        <div className="text-white font-light">
                            <span className="font-medium">6</span> alternate use cases discovered
                        </div>
                    </div>
                </div>
            </Button>
        </div>
        <div className="w-full pointer-events-none">
            <Button
            href="#"
            className="w-full h-44"
            >
                <div className="size-full py-4 px-6 flex flex-col justify-between items-start">
                    <div className="flex flex-col w-full items-start">
                        <div className="text-sm text-white font-light">
                            FEATURE REQUESTS
                            <span className="px-3 text-secondary-strong bg-secondary-light rounded-full ml-2">
                                LIVE
                            </span>
                        </div>
                        <div className="text-3xl text-white font-light">What do the current users want?</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-white font-light">
                            <span className="font-medium">25</span> responses
                        </div>
                        <div className="text-white font-light">
                            <span className="font-medium">4</span> highly requested features
                        </div>
                    </div>
                </div>
            </Button>
        </div>
    </div>
);

const ChatMessage = ({
    role,
    message,
}: {
    role: "user" | "bot";
    message: string;
}) => (
    <div className={"flex gap-4 w-full " + (role === "user" ? "flex-row-reverse" : "")}>
        <div className="flex size-12 items-center justify-center bg-secondary-strong rounded-md text-black">
            {role === "user" ? "U" : "K"}
        </div>
        <div className={"flex items-center gap-2"}>
            <div className={"rounded-md py-4 px-6 bg-bgscreen-bg text-black font-light text-left" + (role === "user" ? "" : " text-xl")}>
                {message}
            </div>
        </div>
    </div>
);

const Feature2Illustration = (
    <div className="flex flex-col gap-8">
        <div className="w-full pointer-events-none">
            <Button
            href="#"
            className="w-full h-80"
            type="secondary"
            >
                <div className="size-full py-4 px-6 flex flex-col gap-4 justify-between items-start overflow-hidden">
                    <ChatMessage
                    role="bot"
                    message="What are your day-to-day challenges with interviewing candidates?"
                    />
                    <ChatMessage
                    role="user"
                    message="I find it difficult to follow user questions and leads during an interview questionnaire."
                    />
                    <ChatMessage
                    role="bot"
                    message="Could you give us an example of that happening? This would help us understand better."
                    />
                </div>
            </Button>
        </div>
    </div>
);

const Response = ({
    heading,
    response,
    greenorred = "",
    tagcontent = null,
}: {
    heading: string;
    response: string;
    greenorred?: string;
    tagcontent?: string | null;
}) => (
    <div className="flex flex-col gap w-full">
        <div className="flex items-center gap-2 w-full">
            <div className="font-light text-secondary-strong">
                {heading}
            </div>
            <div className={"font-light text-sm text-black rounded-full px-2 " + greenorred}> 
                {tagcontent}
            </div>
        </div>
        <div className={"font-light text-left text-sm "}>{response}</div>
    </div>
);

const Feature3Illustration = (
    <div className="flex flex-col gap-8">
        <div className="w-full pointer-events-none">
            <Button
            href="#"
            className="w-full h-80"
            >
                <div className="flex flex-col mx-8 w-full h-full overflow-hidden">
                    <div className="py-6 flex justify-start items-end text-3xl font-extralight">
                        Kashti Use Cases <span className="font-medium ml-4 px-2 text-lg">151</span><span className="text-lg">responses</span>
                    </div>
                    <div className="flex flex-col justify-start h-full bg-white rounded-t-md text-black p-2">
                        <p className="flex text-left text-2xl font-extralight items-center">
                            John Doe
                            <span className="text-sm ml-2 p-1 rounded-full bg-secondary-strong">john.doe@kashti.io</span>
                        </p>
                        <div className="flex flex-col gap-2 mt-4">
                            <Response
                            heading="likes..."
                            response="The smart follow-up questions and has previously expanded his product offerings based on these follow ups alone!"
                            greenorred="bg-green-200"
                            tagcontent={null}
                            />
                            <Response
                            heading="dislikes..."
                            response="Sometimes the follow ups keep on coming and wants to have a limit on the follow ups as otherwise the candidate might feel overwhelmed."
                            greenorred="bg-red-200"
                            tagcontent="+3 people feel the same"
                            />
                            <Response
                            heading="alternative usecase..."
                            response="Would use it for general feedback on his website after launch. Also wanted to use it internally to collect and store ideas from team members."
                            greenorred="bg-green-200"
                            tagcontent="+5 people feel the same"
                            />
                        </div>
                    </div>
                </div>
            </Button>
        </div>
    </div>
);

export default function Features() {
    return (
        <div className="w-full">
            <Feature
                title="Create campaigns for all your product research requirements"
                description="Keep track of your potential and current users’ requests and ensure no-one goes unheard."
                illustration={Feature1Illustration}
            />
            <Feature
                title="Get insights on your users’ needs and wants"
                description="Kasti asks follow-up questions to ensure everything is captured well."
                illustration={Feature2Illustration}
                inverted
            />
            <Feature
                title="Smart insights from your qualitative data"
                description="Kashti analyses your data and provides you with insights to help you make better decisions."
                illustration={Feature3Illustration}
            />
        </div>
    );
}