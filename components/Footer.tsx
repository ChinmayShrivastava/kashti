import Container from "./Container";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center">
            <div className="w-full py-2 bg-secondary-light"></div>
            <div className="w-full bg-secondary-strong h-96">
                <Container>
                    <p className="text-white text-lg">© 2021 Usability Testing</p>
                </Container>
            </div>
        </footer>
    );
}