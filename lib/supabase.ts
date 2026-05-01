import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://luqlpwuhhzdupyelaami.supabase.co'
const supabaseKey = 'sb_publishable_zbuHxGQju8Ucc59MGqGRvg_0lS7OJ--'

export const supabase = createClient(supabaseUrl, supabaseKey)