import Container from "../layout/Container";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="mt-auto">
      <Container className="px-5 lg:0">
        <div className="mb-5 bg-cyan-400 text-white rounded-lg text-center py-3">
          <p className="font-medium text-lg">@ {date.getFullYear()} KSMM</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
