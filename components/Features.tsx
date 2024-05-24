import Button from "./Button";
import Container from "./Container";

function Feature({
    title,
    description,
    illustration,
}: {
    title: string;
    description: string;
    illustration: React.ReactNode;
}) {
    return (
        <Container type="feature">
            <div className="flex w-full gap-8">
                <div className="flex flex-col gap-2 w-2/5">
                    <h3 className="text-primary text-3xl font-normal">{title}</h3>
                    <p className="text-2xl font-light">{description}</p>
                </div>
                <div className="w-3/5">
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

export default function Features() {
    return (
        <div className="w-full">
            <Feature
                title="Create campaigns for all your product research requirements"
                description="Keep track of your potential and current users’ requests and ensure no-one goes unheard."
                illustration={Feature1Illustration}
            />
        </div>
    );
}