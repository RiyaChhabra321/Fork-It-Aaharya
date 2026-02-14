export const MoodCravingSelector = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <select
        value={value.mood}
        onChange={(e) => onChange("mood", e.target.value)}
      >
        <option value="">Select mood</option>
        <option value="tired">Tired</option>
        <option value="happy">Happy</option>
        <option value="low">Low</option>
      </select>

      <select
        value={value.craving}
        onChange={(e) => onChange("craving", e.target.value)}
      >
        <option value="">Select craving</option>
        <option value="sweet">Sweet</option>
        <option value="spicy">Spicy</option>
        <option value="salty">Salty</option>
      </select>
    </div>
  );
};
