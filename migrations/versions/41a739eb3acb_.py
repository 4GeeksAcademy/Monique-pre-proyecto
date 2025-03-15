"""empty message

Revision ID: 41a739eb3acb
Revises: b60b1e0b9830
Create Date: 2025-03-15 11:20:25.297546

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '41a739eb3acb'
down_revision = 'b60b1e0b9830'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('housekeeper', schema=None) as batch_op:
        batch_op.drop_constraint('housekeeper_id_branche_fkey', type_='foreignkey')
        batch_op.drop_column('id_branche')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('housekeeper', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id_branche', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.create_foreign_key('housekeeper_id_branche_fkey', 'branches', ['id_branche'], ['id'])

    # ### end Alembic commands ###
