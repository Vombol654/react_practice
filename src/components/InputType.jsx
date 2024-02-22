export default function InputType({ name, onChange, ...props }) {
  return (
    <p>
      <label htmlFor={name}>{name}</label>
      <input
        {...props}
        id={name}
        onChange={(event) => onChange(name, event.target.value)}
        // onChange={() => onChange("vole", "baba")}
      />
    </p>
  );
}
