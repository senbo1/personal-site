import { Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section className="text-center">
      <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://twitter.com/senbodev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://linkedin.com/in/harshbhadu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="mailto:harshbhadu.dev@gmail.com" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
