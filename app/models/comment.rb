# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  question_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :question_id, :author_id, presence: true

    belongs_to :author,
    class_name: :User

    belongs_to :question,
    class_name: :Question
end
