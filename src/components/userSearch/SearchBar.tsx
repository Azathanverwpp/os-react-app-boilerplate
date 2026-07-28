import { WppActionButton, WppInput } from '@wppopen/components-library-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
}

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  return (
    <>
      <WppInput value={value} placeholder="Enter Name or Email" onInput={(e: any) => onChange(e.target.value)} />

      <br />
      <br />

      <WppActionButton onClick={onSearch}>Search</WppActionButton>

      <br />
      <br />
    </>
  )
}

export default SearchBar
