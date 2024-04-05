
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spqbtvowawntgyprymid.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.   eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcWJ0dm93YXdudGd5cHJ5bWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MDI3MTMsImV4cCI6MTk5NjM3ODcxM30.2iB91CKDtzBmrbI47J-GKtnfq-ka8RxdxLc-mlqECb8'
export const supabase = createClient(supabaseUrl, supabaseKey)

