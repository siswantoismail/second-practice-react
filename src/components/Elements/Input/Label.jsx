const Label = (props) => {
  const { children } = props;
  return (
    <label className="block text-sm font-medium text-slate-700 mb-1">
      {children}
    </label>
  );
};

export default Label;
