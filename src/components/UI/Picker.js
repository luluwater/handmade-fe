import * as React from 'react'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function Tags({ setAddTagName }) {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={tags.map((option) => option)}
        // defaultValue="選擇標籤"
        freeSolo
        renderTags={(value, getTagProps) => {
          setAddTagName(value)
          return value.map((option, index) => (
            <Chip
              className="bg-secondary"
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="請輸入標籤"
            placeholder="Tag"
            className="bg-skin-brighter"
          />
        )}
      />
    </Stack>
  )
}

const tags = ['新店報報', '店家介紹', '體驗課程']
