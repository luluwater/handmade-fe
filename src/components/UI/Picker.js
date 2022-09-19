import * as React from 'react'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { useGetTagsQuery } from '../../services/untilApi'

export default function Tags({ setAddTagName }) {
  const { data } = useGetTagsQuery()

  return (
    <Stack className=" w-100" spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={data?.map((option) => option.tag_name)}
        freeSolo
        renderTags={(value, getTagProps) => {
          console.log(value)
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
          <TextField {...params} label="請輸入標籤" placeholder="Tag" />
        )}
      />
    </Stack>
  )
}

const tags = ['新店報報', '店家介紹', '體驗課程']
