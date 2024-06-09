import Container from "./Container";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center">
            <div className="w-full py-2 bg-secondary-light"></div>
            <div className="w-full bg-secondary-strong h-96">
                <Container>
                    <div className="flex justify-between items-start w-full mt-4">
                    <p className="text-white text-lg">© 2021 Usability Testing</p>
                    <a className="" href="https://cal.com/chinmayshrivastava/30min">
                        <button className="p-2 px-4 bg-white rounded-full text-primary-strong">
                            Book a Demo
                        </button>
                    </a>
                    </div>
                </Container>
            </div>
        </footer>
    );
}