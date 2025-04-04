import { Heading, FormInput } from "@/components/ui"

export default function LoginForm({ HeadingLevel = 1 }) {
    return (
        <section>
            <Heading level={HeadingLevel}>Iniciar Sesión</Heading>
            <form>
                <FormInput
                    label="usuario:"
                    type="text"
                    placeholder="user123"
                    name="username"
                    autoFocus required />

                <FormInput
                    label="contraseña:"
                    type="password"
                    name="userpwd"
                    required />
            </form>
        </section>
    )
}