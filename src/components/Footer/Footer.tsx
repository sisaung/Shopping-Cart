import Container from "../layout/Container";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="mt-auto">
      <Container className="px-5 lg:p-0">
        <div className="py-3 mb-5 text-center text-white rounded-lg bg-cyan-400">
          <p className="text-lg font-medium">@ {date.getFullYear()} KSMM</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
