import { Heading } from "@/components/ui"

export default function LoginForm({ HeadingLevel = 1 }) {
    return (
        <section>
            <Heading level={HeadingLevel}>Iniciar Sesión</Heading>
            <form></form>
        </section>
    )
}