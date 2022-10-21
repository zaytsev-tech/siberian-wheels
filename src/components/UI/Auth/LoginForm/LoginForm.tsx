import { Field, Form } from "react-final-form";
import "../../../../styles/components/ui/login_form.scss";
import "../../../../styles/general/ui/input.scss";

export const LoginForm = () => {
  const required = (value: string) => (value ? undefined : "Required");
  return (
    <div className="login_form">
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username" validate={required}>
              {({ input, meta }) => (
                <div className="login_field">
                  <label>Login</label>
                  <input {...input} type="text" placeholder="Enter the login" />
                </div>
              )}
            </Field>
            <Field name="password" validate={required}>
              {({ input, meta }) => (
                <div className="login_field">
                  <label>Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Enter the password"
                  />
                </div>
              )}
            </Field>
          </form>
        )}
      />
    </div>
  );
};
